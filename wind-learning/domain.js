import {FACTS,SEED_BANK} from './data.js';
export const copy=x=>JSON.parse(JSON.stringify(x));
export const day=()=>new Date().toLocaleDateString('sv-SE',{timeZone:'Asia/Taipei'});
export function assert(ok,msg){if(!ok)throw Object.assign(new Error(msg),{status:400})}
const text=(v,max)=>typeof v==='string'&&v.length>0&&v.length<=max&&!/[<>\u0000-\u0008]/.test(v);
export function validate(data,publish=false){
 assert(data&&text(data.className,40),'班級顯示名稱限1–40字。');
 assert(Number.isInteger(data.maxSeat)&&data.maxSeat>=1&&data.maxSeat<=99,'座號上限需為1–99。');
 assert(data.bank&&typeof data.bank==='object'&&Object.keys(data.bank).length<=200,'字庫格式不正確。');
 for(const[key,c]of Object.entries(data.bank)){
  assert(FACTS[key]&&c.char===key,'字庫外的生字尚未完成事實查核。');
  assert(c.source===`https://stroke-order.learningweb.moe.edu.tw/dictView.jsp?ID=${key.codePointAt(0)}`&&['海邊','雪山','原野'].includes(c.scene),'來源或情境欄位不正確。');
  assert(['sound','radical','strokes'].every(k=>c[k]===FACTS[key][k]),`${key}的權威欄位不可覆寫。`);
  assert(text(c.definition,120)&&text(c.hint,120),'字義與提醒需填寫且不超過120字。');
  assert(Number.isInteger(c.revision)&&c.revision>=1&&c.revision<=9999,'教材版本不正確。');
  assert(typeof c.reviewed==='boolean','請標記內容是否已審核。');
  assert(Array.isArray(c.words)&&c.words.length>=1&&c.words.length<=4,'每字需1–4個詞語。');
  for(const w of c.words)assert(text(w.word,12)&&w.word.includes(key)&&text(w.meaning,120)&&text(w.example,100)&&w.example.includes(w.word),`${key}的造詞或例句不完整，例句需包含完整詞語。`);
  if(c.idiom)assert(text(c.idiom.word,12)&&c.idiom.word.includes(key)&&text(c.idiom.meaning,160)&&text(c.idiom.example,120)&&c.idiom.example.includes(c.idiom.word)&&/^https:\/\/dict\.(concised|idioms|revised)\.moe\.edu\.tw\//.test(c.idiom.source),`${key}的成語需有教育部來源與完整例句。`);
 }
 assert(Array.isArray(data.lessons)&&data.lessons.length<=60,'課次最多60課。');const ids=new Set();
 for(const l of data.lessons){assert(/^[a-zA-Z0-9-]{1,64}$/.test(l.id)&&!ids.has(l.id),'課次代碼重複或不正確。');ids.add(l.id);assert(text(l.title,60)&&(!l.author||text(l.author,40))&&typeof l.published==='boolean','課名或課次狀態不正確。');assert(Array.isArray(l.items)&&l.items.length<=30&&new Set(l.items).size===l.items.length,'每課最多30字，不得重複。');assert(l.items.every(c=>data.bank[c]),'有生字尚未收錄。');if(publish&&l.published){assert(l.items.length>0,'公開課次至少需要一字。');assert(l.items.every(c=>data.bank[c].reviewed),'請先核准所有公開課次的生字內容。')}}return true;
}
export function questionSet(c,bank){
 const unique=x=>[...new Set(x)],others=Object.values({...SEED_BANK,...bank}).filter(x=>x.char!==c.char);
 const opts=(answer,values)=>unique([answer,...values.filter(v=>v!==answer)]).slice(0,3),w=c.words[0];
 return[
 {id:'sound',ability:'recognize',prompt:`「${c.char}」在本課讀什麼？`,answer:c.sound,options:opts(c.sound,others.map(x=>x.sound)),hint:`回想字卡上的注音：${c.sound}。`},
 {id:'radical',ability:'recognize',prompt:`「${c.char}」的部首是什麼？`,answer:c.radical,options:opts(c.radical,others.map(x=>x.radical)),hint:`部首是「${c.radical}」。部首和字的一部分不一定相同。`},
 {id:'strokes',ability:'recognize',prompt:`「${c.char}」總共有幾畫？`,answer:String(c.strokes),options:opts(String(c.strokes),[String(c.strokes-1),String(c.strokes+1)]),hint:`對照全筆順圖，總共是${c.strokes}畫。`},
 {id:'word',ability:'use',prompt:w.example.replaceAll(w.word,'＿＿'),answer:w.word,options:opts(w.word,others.map(x=>x.words[0].word)),hint:`想一想「${w.word}」的意思：${w.meaning}`},
 {id:'meaning',ability:'use',prompt:`「${w.word}」是什麼意思？`,answer:w.meaning,options:opts(w.meaning,others.map(x=>x.words[0].meaning)),hint:`例句：${w.example}`}
 ];
}
export function blankProgress(){return{done:[],attempts:0,errors:0,writing:false,lastDate:null,lastReview:null}}
export const progressKey=(lesson,char,revision)=>`${lesson}/${char}/${revision}`;
export function applyEvent(p,event,today=day()){p=copy(p||blankProgress());p.lastDate=today;if(event.type==='answer'){p.attempts++;if(!event.correct)p.errors++;else if(!p.done.includes(event.questionId))p.done.push(event.questionId)}if(event.type==='writing')p.writing=true;if(event.type==='review')p.lastReview=today;return p}
export function ability(p,c,bank){const qs=questionSet(c,bank);return{recognize:qs.filter(x=>x.ability==='recognize').every(q=>p?.done.includes(q.id)),use:qs.filter(x=>x.ability==='use').every(q=>p?.done.includes(q.id)),write:!!p?.writing}}
export function complete(p,c,bank){return Object.values(ability(p,c,bank)).every(Boolean)}
export function due(p,c,bank,today=day()){return complete(p,c,bank)&&p.lastDate<today&&p.lastReview!==today}
export function summarize(records,data){return data.lessons.map(l=>({id:l.id,title:l.title,total:l.items.length,completed:l.items.filter(ch=>complete(records?.[progressKey(l.id,ch,data.bank[ch].revision)],data.bank[ch],data.bank)).length,recognize:l.items.filter(ch=>ability(records?.[progressKey(l.id,ch,data.bank[ch].revision)],data.bank[ch],data.bank).recognize).length,write:l.items.filter(ch=>ability(records?.[progressKey(l.id,ch,data.bank[ch].revision)],data.bank[ch],data.bank).write).length,use:l.items.filter(ch=>ability(records?.[progressKey(l.id,ch,data.bank[ch].revision)],data.bank[ch],data.bank).use).length}))}
export function studentData(data){const d=copy(data);d.lessons=d.lessons.filter(l=>l.published);const used=new Set(d.lessons.flatMap(l=>l.items));d.bank=Object.fromEntries(Object.entries(d.bank).filter(([c])=>used.has(c)));return d}
