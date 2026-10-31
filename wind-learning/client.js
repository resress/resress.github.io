import {API_BASE} from './config.js';
import {SEED} from './data.js';
import {copy,validate,studentData,progressKey,applyEvent} from './domain.js';
export const cloud=!!API_BASE;
export const storage={get(k,fallback){try{const v=localStorage.getItem(k);return v?JSON.parse(v):fallback}catch{return fallback}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch{throw Error('平板無法保存資料，請關閉無痕模式或釋放儲存空間後再試。')}}};
let classKey=new URLSearchParams(location.hash.slice(1)).get('class')||storage.get('wind-class-key','');
if(classKey)storage.set('wind-class-key',classKey);
export const scope=cloud?`${API_BASE}/${classKey}`:'demo';
const digest=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(scope));
const prefix='wind-v1-'+Array.from(new Uint8Array(digest)).slice(0,12).map(x=>x.toString(16).padStart(2,'0')).join('');
const key=s=>prefix+':'+s;
export function getToken(){return sessionStorage.getItem('wind-teacher-session')||''}
export function setToken(t){if(t)sessionStorage.setItem('wind-teacher-session',t);else sessionStorage.removeItem('wind-teacher-session')}
export async function api(path,{method='GET',data,admin=false}={}){
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),12000);
 try{const r=await fetch(API_BASE.replace(/\/$/,'')+'/api/'+path,{method,headers:{'Content-Type':'application/json',...(admin?{Authorization:'Bearer '+getToken()}:{'X-Class-Key':classKey})},...(data!==undefined?{body:JSON.stringify(data)}:{}),signal:controller.signal,cache:'no-store'});let v;try{v=await r.json()}catch{throw Error('服務回應不正確，請檢查後端網址。')}if(!r.ok){if(r.status===401&&admin)setToken('');throw Object.assign(Error(v.error||'連線失敗。'),{status:r.status})}return v}
 catch(e){if(e.name==='AbortError')throw Error('連線逾時，紀錄仍保存在這台平板。');throw e}finally{clearTimeout(timer)}
}
function localState(){return storage.get('wind-v1-demo-state',{revision:1,draft:copy(SEED),published:copy(SEED),version:'initial-1',history:[{id:'initial-1',created:new Date().toISOString().slice(0,10),data:copy(SEED)}]})}
function saveLocal(s){storage.set('wind-v1-demo-state',s)}
export async function loadCurriculum(){
 if(!cloud){const s=localState();return{data:studentData(s.published),version:s.version}}
 if(!classKey)throw Error('請掃描老師提供的班級QR Code，或開啟班級專用連結。');
 try{const c=await api('student/curriculum');storage.set(key('curriculum'),c);return c}catch(e){if(e.status)throw e;const cached=storage.get(key('curriculum'),null);if(cached)return{...cached,offline:true};throw e}
}
export const records=seat=>storage.get(key('seat-'+seat),{});
export const queue=()=>storage.get(key('queue'),[]);
export const epoch=seat=>storage.get(key('epoch-'+seat),0);
export function notifySync(message){window.dispatchEvent(new CustomEvent('wind-sync',{detail:message}))}
export async function startSeat(seat){if(!cloud)return;try{const r=await api('student/start',{method:'POST',data:{seat}});if(epoch(seat)!==r.epoch){storage.set(key('seat-'+seat),{});storage.set(key('queue'),queue().filter(e=>e.seat!==seat));storage.set(key('epoch-'+seat),r.epoch);notifySync('老師已重設這個座號的紀錄。')}await sync()}catch(e){if(e.status)throw e;notifySync('離線練習中，連線後會自動補傳。')}}
export function record(seat,lesson,char,version,c,event){
 const e={id:crypto.randomUUID(),seat,epoch:epoch(seat),lessonId:lesson.id,char,cardRevision:c.revision,version,...event},p=records(seat),k=progressKey(lesson.id,char,c.revision);p[k]=applyEvent(p[k],e);
 const before=queue();if(cloud)storage.set(key('queue'),[...before,e]);try{storage.set(key('seat-'+seat),p)}catch(err){if(cloud)storage.set(key('queue'),before);throw err}
 if(cloud)sync();return p[k];
}
let syncing=false;
export async function sync(){if(!cloud||syncing)return;syncing=true;try{while(queue().length){const pending=queue(),seat=pending[0].seat,batch=pending.filter(e=>e.seat===seat).slice(0,80),r=await api('student/events',{method:'POST',data:{seat,events:batch}}),ids=new Set([...r.accepted,...r.stale]);if(!ids.size)break;storage.set(key('queue'),queue().filter(e=>!ids.has(e.id)));if(r.stale.length){storage.set(key('seat-'+seat),{});await api('student/start',{method:'POST',data:{seat}}).then(x=>storage.set(key('epoch-'+seat),x.epoch));notifySync('老師已重設進度，請重新進入課次。')}}notifySync('已同步給老師')}catch(e){notifySync(e.status?'同步暫停：'+e.message:`待同步${queue().length}筆；已保存在這台平板。`)}finally{syncing=false}}
export const syncLabel=()=>cloud?(queue().length?`待同步${queue().length}筆`:'已保存在平板'):'本機體驗・紀錄不會回傳';
window.addEventListener('online',sync);
setInterval(()=>{if(queue().length)sync()},30000);
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&queue().length)sync()});
export async function teacherState(){if(cloud)return api('admin/state',{admin:true});const s=localState();return{...s,classKey:'',studentUrl:new URL('index.html',location.href).href}}
export async function saveDraft(data,revision){validate(data);if(cloud)return api('admin/draft',{method:'PUT',data:{data,revision},admin:true});const s=localState();if(s.revision!==revision)throw Error('另一頁已更新資料，請重新載入。');s.draft=copy(data);s.revision++;saveLocal(s);return{revision:s.revision}}
export async function publish(revision){if(cloud)return api('admin/publish',{method:'POST',data:{revision},admin:true});const s=localState();if(revision!==s.revision)throw Error('教材已更新，請重新載入。');validate(s.draft,true);s.published=copy(s.draft);s.version=crypto.randomUUID();s.revision++;s.history.unshift({id:s.version,created:new Date().toISOString().slice(0,10),data:copy(s.published)});saveLocal(s);return{version:s.version,revision:s.revision}}
export async function history(){return cloud?api('admin/history',{admin:true}):{versions:localState().history}}
export async function restore(version,revision){if(cloud)return api('admin/restore',{method:'POST',data:{version,revision},admin:true});const s=localState();if(revision!==s.revision)throw Error('教材已更新，請重新載入。');s.draft=copy(s.history.find(v=>v.id===version).data);s.revision++;saveLocal(s);return{revision:s.revision}}
export async function report(){if(cloud)return api('admin/report',{admin:true});const seats={};for(let i=1;i<=99;i++){const p=records(i);if(Object.keys(p).length)seats[i]=p}return{seats}}
export async function resetSeat(seat){if(cloud)return api('admin/reset',{method:'POST',data:{seat},admin:true});storage.set(key('seat-'+seat),{});return{ok:true}}
if('serviceWorker'in navigator&&location.protocol!=='file:')navigator.serviceWorker.register('./sw.js').catch(()=>notifySync('離線快取無法啟用，請保持網路連線。'));
