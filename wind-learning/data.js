import {LESSON12_BANK} from './lesson12.js?v=20261112-1';
import {LESSON11_BANK} from './lesson11.js?v=20261112-1';
import {LESSON10_BANK} from './lesson10.js?v=20261112-1';
import {LESSON9_BANK} from './lesson9.js?v=20261112-1';
import {LESSON8_BANK} from './lesson8.js?v=20261112-1';
import {IDIOM_ADDITIONS} from './idiom-supplements.js?v=20261112-1';
// 字形事實來自教育部，教學文字自編。沒有課文全文。
const rows = [
 ['鹹','ㄒㄧㄢˊ','鹵',20,'帶有鹽的味道。','鹹味|帶有鹽的味道。|媽媽煮的蔬菜湯鹹味剛剛好，大家都喝得很開心。','鹹水|含有鹽分的水。|我們在自然課認識鹹水，也知道海水不能直接飲用。','鹹淡|食物中鹽味的輕重。|爸爸煮湯時先試一試鹹淡，再決定要不要加鹽巴。','右邊是「咸」，左邊是「鹵」。','海邊'],
 ['蔚','ㄨㄟˋ','艸',15,'本課在「蔚藍」一詞中形容深藍的顏色。','蔚藍|深藍色。|星期天的早晨，蔚藍的天空中飄著幾朵柔軟的白雲。','蔚然|盛大或逐漸興盛的樣子。|大家每天分享喜歡的故事，讓班上的閱讀風氣蔚然成風。',null,'上面是艸部；本課讀ㄨㄟˋ。','海邊'],
 ['航','ㄏㄤˊ','舟',10,'船在水上行駛，或飛機在空中飛行。','回航|船或飛機返回出發地。|傍晚時分，出海捕魚的小船慢慢回航，準備停靠港口。','航行|船或飛機前進。|一艘白色輪船正在海上航行，乘客開心地欣賞風景。','航海|駕船在海上航行。|叔叔喜歡閱讀航海故事，還會和我分享有趣的內容。','左邊的「舟」和船有關。','海邊'],
 ['乘','ㄔㄥˊ','丿',10,'搭坐交通工具。','乘坐|搭乘交通工具。|星期六的早上，我們乘坐公車到圖書館借喜歡的書。','乘客|搭乘交通工具的人。|公車停穩以後，等候的乘客依照順序慢慢走上車。','搭乘|乘坐交通工具。|暑假的第一天，我們搭乘火車到海邊欣賞美麗風景。','本課「乘著」讀ㄔㄥˊ；部首是丿。','雪山'],
 ['橇','ㄑㄧㄠ','木',16,'可以在雪地等地方滑行的工具。','雪橇|用平滑板塊在雪地滑行的交通工具。|我們坐上雪橇，沿著安全的路線慢慢滑過白色雪地。','冰橇|在冰雪上滑行的工具。|冬季比賽開始了，選手使用冰橇在冰面上向前滑行。',null,'左邊是「木」，不是手部的「撬」。','雪山'],
 ['坡','ㄆㄛ','土',8,'地面傾斜的地方。','山坡|山上傾斜的地方。|春天到了，山坡上長滿綠色小草，還開著可愛的小花。','斜坡|傾斜的地面。|下雨以後斜坡有些濕滑，我們走路時要放慢腳步。','上坡|往較高的地方走。|上坡的時候，我和妹妹一步一步慢慢走，互相加油。','「土」部提醒我們和地形有關。','雪山'],
 ['野','ㄧㄝˇ','里',11,'城鎮以外的地方，也可形容未經馴養的。','原野|寬廣的平野。|春天的原野上開著許多小花，蝴蝶在花朵旁飛來飛去。','野外|離開市區的戶外地方。|我們到野外觀察昆蟲時，要跟緊老師，也要注意安全。','野生|自然生長，沒有經過人飼養或種植。|到森林裡遊玩時，不要餵食野生動物，也不要追趕牠們。','左邊是「里」，它也是這個字的部首。','原野'],
 ['閉','ㄅㄧˋ','門',11,'合起來或關起來。','閉上|把開著的部分合起來。|午休的時候，我輕輕閉上眼睛，安靜地聽著柔和音樂。','關閉|把開著的東西關起來。|離開教室以前，請記得關閉電燈，養成節約用電的習慣。','閉幕|活動結束。|運動會在下午閉幕，大家帶著美好的回憶一起回教室。','門裡面是「才」，不要寫成「木」。','原野'],
 ['深','ㄕㄣ','水',11,'距離表面很遠；也可形容程度大。','深呼吸|慢慢吸入較多空氣，再慢慢呼出。|上臺說故事以前，我先做一次深呼吸，讓自己慢慢放鬆。','深淺|深或淺的程度。|到溪邊玩水以前，要先知道水的深淺，並且有大人陪伴。','深夜|夜晚很晚的時候。|深夜裡，街道變得十分安靜，窗外只剩幾盞明亮的路燈。','左邊是水部，右下有「木」。','原野'],
 ['吸','ㄒㄧ','口',7,'把氣體或液體引進來。','吸氣|把空氣吸入身體。|做伸展運動時，我慢慢吸氣，再慢慢吐氣，感覺很舒服。','吸收|把外面的東西接收進來。|植物用根吸收土壤裡的水分，才能慢慢長出新的葉子。','吸引|讓人注意或靠近。|這本故事書的內容很吸引我，讓我每天都想繼續閱讀。','總共7畫；右邊的「及」有4畫。','原野'],
 ['欣','ㄒㄧㄣ','欠',8,'快樂、喜悅的樣子。','欣賞|觀看美好事物，或喜愛別人的優點。|美術課的時候，我們安靜地欣賞同學用心完成的畫作。','欣喜|高興、喜悅。|收到好朋友親手做的生日卡片，我的心裡感到十分欣喜。','欣然|高興地。|同學邀請我一起閱讀故事，我欣然答應，和他分享想法。','左邊是「斤」，右邊的「欠」是部首。','原野'],
 ['賞','ㄕㄤˇ','貝',15,'欣賞，或給予獎勵。','欣賞|觀看美好事物，或喜愛別人的優點。|放學回家的路上，我喜歡欣賞窗外隨著季節改變的風景。','觀賞|觀看值得欣賞的事物。|星期天的早晨，我們到公園觀賞花朵，還看見美麗蝴蝶。','獎賞|給予表現好的人獎勵。|我努力完成閱讀報告，老師用一句溫暖的話獎賞我的用心。','下面是「貝」，不是「見」。','原野'],
 ['瞞','ㄇㄢˊ','目',16,'把事情藏起來，不讓別人知道。','隱瞞|把事情藏起來，不讓人知道。|做錯事情時，應該誠實說明原因，不要隱瞞事情的經過。','欺瞞|用不實的話或做法欺騙別人。|和朋友相處時，我們要誠實說話，不用謊言欺瞞信任的人。',null,'左邊是「目」，不是「日」。','原野']
];
const idioms={
 '乘':['乘風破浪','遇到困難，仍然勇敢向前努力。','練習遇到困難時，我們一起乘風破浪，繼續努力。','32411','ㄔㄥˊ ㄈㄥ ㄆㄛˋ ㄌㄤˋ'],
 '野':['漫山遍野','數量很多，在山野各處都看得到。','春天到了，漫山遍野的小花都開了，景色十分美麗。','4193','ㄇㄢˋ ㄕㄢ ㄅㄧㄢˋ ㄧㄝˇ'],
 '欣':['欣欣向榮','草木長得旺盛；也形容事情蓬勃發展。','春雨過後，花園裡的草木欣欣向榮。','27719','ㄒㄧㄣ ㄒㄧㄣ ㄒㄧㄤˋ ㄖㄨㄥˊ'],
 '賞':['賞心悅目','看到美好的事物，覺得心情舒暢。','花園裡色彩繽紛的花朵，令人賞心悅目。','34864','ㄕㄤˇ ㄒㄧㄣ ㄩㄝˋ ㄇㄨˋ'],
 '瞞':['瞞天過海','用巧妙的手法欺騙、隱瞞別人。這是認識詞義，不是鼓勵欺騙。','他想瞞天過海藏起打破的花盆，最後還是誠實說明。','4130','ㄇㄢˊ ㄊㄧㄢ ㄍㄨㄛˋ ㄏㄞˇ']
};
export const WORD_SOURCES=Object.freeze({
  "一般": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=39966&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "一陣": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=40163&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "下坡": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=26585&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "山坡": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=34395&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "工廠": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=17589&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "干擾": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=16302&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "互助": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=19985&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "互相": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=19984&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "分類": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=5728&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "代表": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=7489&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "代替": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=7499&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "外殼": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=43216&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "打擾": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=6903&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "交通": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=22302&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "交換": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=22314&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "休息": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=27163&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "休閒": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=27164&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "托兒所": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=11582&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "托腮": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=11581&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "收藏": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=34136&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "米酒": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=4452&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "伴郎": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=996&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "位置": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=43551&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "吸引": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=26249&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "吸收": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=26246&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "吸管": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=26241&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "序幕": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=28423&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "忘記": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=44098&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "投票": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=10293&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "投遞": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=10296&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "貝殼": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=550&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "叔父": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=35364&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "叔叔": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=35367&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "垃圾": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=13230&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "垃圾桶": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=13234&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "垃圾袋": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=45316&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "居住": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=23877&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "幸好": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=28330&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "幸運": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=28334&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "幸福": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=28328&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "店家": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=8857&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "杯子": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=468&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "欣喜": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=27716&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "欣然": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=27722&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "欣賞": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=27721&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "河岸": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=46056&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "沿海": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=41687&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "沿途": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=41683&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "花瓶": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=20037&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "返航": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=5645&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "附加": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=6539&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "附近": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=6542&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "保護": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=678&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "娃娃": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=43115&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "客棧": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=18074&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "指導": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=29165&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "挑戰": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=11032&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "挑選": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=10959&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "查看": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=31564&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "查詢": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=31572&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "洋娃娃": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=42270&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "珍惜": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=29939&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "重疊": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=33076&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "音響": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=41976&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "風俗": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=6169&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "首飾": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=34284&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "乘坐": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=32421&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "乘客": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=32413&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "修理": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=27184&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "原野": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=44798&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "座位": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=37495&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "氣息": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=24701&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "海岸": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=19305&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "消息": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=26898&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "祝福": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=30737&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "航行": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=19793&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "航海": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=19789&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "茶杯": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=31582&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "訊息": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=28773&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "酒杯": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=45512&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "陣雨": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=30099&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "除夕": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=32611&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "除去": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=32608&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "乾淨": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=16364&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "參加": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=38109&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "參與": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=38120&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "商店": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=34801&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "堆疊": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=9478&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "婚禮": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=20868&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "寄居": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=21659&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "寄信": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=21662&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "接續": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=22004&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "斜坡": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=26741&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "深呼吸": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=34641&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "深夜": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=34669&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "深淺": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=34648&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "淺灘": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=25271&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "瓶子": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=45943&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "視訊": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=33559&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "視線": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=33558&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "習俗": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=26383&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "透明": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=10397&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "透過": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=10403&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "逗留": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=7826&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "逗笑": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=7829&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "這般": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=29545&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "通訊": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=11913&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "連忙": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=14623&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "連續": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=14650&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "野外": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=40915&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "野生": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=40909&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "閉上": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=1355&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "閉幕": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=1348&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "雪橇": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=28543&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "剩下": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=35188&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "剩餘": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=35189&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "尊敬": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=37637&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "握手": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=43167&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "握拳": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=43166&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "棧道": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=29870&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "欺瞞": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=24403&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "發電廠": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=5131&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "結婚": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=22082&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "開幕": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=18123&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "愛惜": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=39562&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "愛護": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=39559&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "搭乘": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=6724&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "敬禮": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=23813&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "新郎": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=27737&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "煙火": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=41618&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "煙霧": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=41625&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "裝飾": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=31078&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "跟隨": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=16494&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "零件": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=15095&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "零食": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=15100&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "團圓": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=11832&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "團體": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=11821&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "種類": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=31269&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "精神": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=23596&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "精彩": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=23603&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "維修": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=43419&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "鳳凰": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=6277&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "鳳梨": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=6275&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "導遊": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=7657&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "樓上": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=13670&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "樓梯": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=13664&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "潔淨": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=22178&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "獎賞": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=23479&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "蔚然": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=43603&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "蔚藍": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=43601&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "踩踏": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=38022&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "遮蓋": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=29486&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "鄰居": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=14858&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "戰勝": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=29917&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "錢包": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=25263&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "錢幣": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=25264&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "隨時": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=39186&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "默默": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=3765&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "默讀": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=3769&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "壓力": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=40794&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "壓歲錢": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=40807&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "應當": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=42409&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "應該": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=42410&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "檢查": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=22926&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "檢視": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=22930&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "鍋蓋": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=16928&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "隱瞞": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=42161&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "嬸嬸": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=34769&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "擺放": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=395&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "擺動": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=399&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "藏身": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=38229&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "鏡子": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=23804&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "鏡頭": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=23801&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "關心": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=17377&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "關門": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=17360&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "關閉": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=17359&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "難忘": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=12489&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "繼承": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=21718&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "繼續": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=21716&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "響亮": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=28039&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "鹹蛋": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=27355&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "鹹魚": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=27358&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "鹹菜": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=27357&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "觀賞": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=17401&q=1",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-11"
  },
  "志工": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=29300&la=0",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-12"
  },
  "志願": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=29308&la=0",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-12"
  },
  "拖地": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=11594&la=0",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-12"
  },
  "拖車": {
    "source": "https://dict.concised.moe.edu.tw/dictView.jsp?ID=11607&la=0",
    "type": "moe-concise",
    "name": "教育部《國語辭典簡編本》",
    "checkedAt": "2026-11-12"
  }
});
const WORD_REVISIONS=Object.freeze({
  "鹹": {
    "鹹味": {
      "word": "鹹蛋",
      "meaning": "用鹽醃製過的蛋。",
      "example": "媽媽把鹹蛋切好，放進便當盒裡，搭配香噴噴的白飯。"
    },
    "鹹水": {
      "word": "鹹菜",
      "meaning": "用鹽醃製的蔬菜。",
      "example": "阿嬤把鹹菜放進鍋裡煮湯，廚房飄出熟悉的香味。"
    },
    "鹹淡": {
      "word": "鹹魚",
      "meaning": "用鹽醃製的魚。",
      "example": "爸爸把鹹魚放入蒸鍋，提醒我吃飯時要小心魚刺。"
    }
  },
  "航": {
    "回航": {
      "word": "返航",
      "meaning": "船隻或飛機駛回出發的地方。",
      "example": "巡查完海岸後，船隻準備返航，大家也把救生衣整理好。"
    }
  },
  "橇": {
    "冰橇": null
  },
  "坡": {
    "上坡": {
      "word": "下坡",
      "meaning": "由較高處往較低處走或行駛。",
      "example": "騎腳踏車下坡時要放慢速度，注意前方的行人和路況。"
    }
  },
  "吸": {
    "吸氣": {
      "word": "吸管",
      "meaning": "喝飲料時用來吸飲的細管。",
      "example": "我把吸管放進杯子裡，慢慢喝完今天帶來的豆漿。"
    }
  },
  "幕": {
    "幕布": {
      "word": "序幕",
      "meaning": "戲劇或重大事情的開端。",
      "example": "校慶活動的序幕由合唱團揭開，全校同學都專心聆聽。"
    }
  },
  "杯": {
    "水杯": {
      "word": "茶杯",
      "meaning": "喝茶用的杯子。",
      "example": "奶奶將熱茶倒進茶杯，請客人坐下來一起聊天休息。"
    }
  },
  "蓋": {
    "瓶蓋": {
      "word": "遮蓋",
      "meaning": "把東西遮住或蓋住。",
      "example": "整理書桌時，我拿乾淨的布遮蓋模型，不讓灰塵落上去。"
    }
  },
  "挑": {
    "挑起": {
      "word": "挑選",
      "meaning": "從一些人或事物中選出合適的。",
      "example": "到圖書館挑選故事書時，我先看看封面和簡介，再決定借哪一本。"
    }
  },
  "交": {
    "交給": {
      "word": "交換",
      "meaning": "互相調換或更換。",
      "example": "下課時，我和同學交換圖書，回家後一起閱讀不同的故事。"
    }
  },
  "投": {
    "林投": {
      "word": "投票",
      "meaning": "選舉或表決時投下選票，以表示意見。",
      "example": "班會討論校外教學地點後，大家一起投票選出最想去的地方。"
    },
    "投球": {
      "word": "投遞",
      "meaning": "把信件或文件送交給收件人。",
      "example": "郵差每天早上投遞信件，讓遠方的消息順利送到家裡。"
    }
  },
  "淺": {
    "淺色": {
      "word": "淺灘",
      "meaning": "水很淺的地方。",
      "example": "我們在安全的淺灘邊觀察小魚，沒有跑到較深的水域玩耍。"
    }
  },
  "踩": {
    "踩水": {
      "word": "踩踏",
      "meaning": "用腳踩或踏。",
      "example": "雨後走過花圃時，我們沿著石板路前進，不要踩踏剛長出的小草。"
    }
  },
  "飾": {
    "飾品": {
      "word": "首飾",
      "meaning": "戴在身上的裝飾品。",
      "example": "表姊把首飾收進盒子裡，準備參加晚上的婚禮活動。"
    }
  },
  "敬": {
    "敬酒": {
      "word": "敬禮",
      "meaning": "表示敬意所行的禮節。",
      "example": "升旗典禮開始時，全校同學面向旗桿立正敬禮，向國旗表示敬意。"
    }
  },
  "藏": {
    "藏起來": {
      "word": "藏身",
      "meaning": "躲藏身體，使別人不容易發現。",
      "example": "突然下起大雨，小朋友先到涼亭裡藏身，等雨停了再回家。"
    }
  },
  "嬸": {
    "大嬸": {
      "word": "嬸嬸",
      "meaning": "對叔叔妻子的稱呼。",
      "example": "我們打電話向嬸嬸問好，也邀請她週末來家裡一起吃飯。"
    }
  },
  "附": {
    "附上": {
      "word": "附加",
      "meaning": "另外加上。",
      "example": "報名表需要附加家長簽名，才能交給老師完成活動登記。"
    }
  },
  "休": {
    "午休": {
      "word": "休閒",
      "meaning": "休息、娛樂或消遣。",
      "example": "寫完功課後，我在休閒時間讀故事，也和家人到公園散步。"
    }
  },
  "廠": {
    "修車廠": {
      "word": "發電廠",
      "meaning": "利用設備產生電力的工廠。",
      "example": "我們參觀發電廠，認識電力如何送到家裡，也學習節約用電。"
    }
  },
  "檢": {
    "檢查表": {
      "word": "檢視",
      "meaning": "仔細查看。",
      "example": "交出作業以前，我會重新檢視內容，看看有沒有漏寫的題目。"
    }
  },
  "查": {
    "查字典": {
      "word": "查看",
      "meaning": "察看、檢查。",
      "example": "我走到公告欄前查看名單，確認自己參加了哪一組活動。"
    }
  },
  "托": {
    "托盤": {
      "word": "托兒所",
      "meaning": "照顧幼兒的機構。",
      "example": "妹妹還小，白天由托兒所老師照顧，傍晚再由媽媽接回家。"
    },
    "托付": {
      "word": "托腮",
      "meaning": "用手掌或手指支撐臉頰。",
      "example": "小明托腮望著窗外，想著下課後要和朋友一起踢球。"
    }
  },
  "擺": {
    "擺滿": {
      "word": "擺動",
      "meaning": "搖動、晃動。",
      "example": "微風吹來，門口的風鈴輕輕擺動，發出清脆的聲音。"
    }
  },
  "娃": {
    "女娃": {
      "word": "洋娃娃",
      "meaning": "外形像人的玩偶。",
      "example": "妹妹把洋娃娃放在床邊，晚上睡覺時也要抱著它。"
    }
  },
  "錢": {
    "付錢": {
      "word": "錢幣",
      "meaning": "金屬製成的貨幣。",
      "example": "我把零錢放進小豬撲滿，存下每一枚錢幣買文具。"
    }
  },
  "握": {
    "握住": {
      "word": "握拳",
      "meaning": "手指彎曲收緊成拳頭。",
      "example": "準備比腕力以前，他先握拳，再聽裁判說開始。"
    }
  }
});
const LESSON_BANK={...LESSON8_BANK,...LESSON9_BANK,...LESSON10_BANK,...LESSON11_BANK,...LESSON12_BANK};
export const FACTS=Object.fromEntries([...rows.map(r=>[r[0],{sound:r[1],radical:r[2],strokes:r[3]}]),...Object.entries(LESSON_BANK).map(([char,c])=>[char,{sound:c.sound,radical:c.radical,strokes:c.strokes}])]);
export const SEED_BANK=Object.fromEntries(rows.map(r=>{const i=idioms[r[0]];return[r[0],{char:r[0],sound:r[1],radical:r[2],strokes:r[3],definition:r[4],words:r.slice(5,8).filter(Boolean).map(s=>{const[word,meaning,example]=s.split('|');return{word,meaning,example}}),hint:r[8],scene:r[9],revision:1,reviewed:true,idiom:i?{word:i[0],meaning:i[1],example:i[2],source:`https://dict.concised.moe.edu.tw/dictView.jsp?ID=${i[3]}&la=0`,sound:i[4]}:null,source:`https://stroke-order.learningweb.moe.edu.tw/dictView.jsp?ID=${r[0].codePointAt(0)}`,checkedAt:'2026-10-31'}]}));
Object.assign(SEED_BANK,LESSON_BANK);export function applyWordSources(data){
 const results={replaced:0,removed:0,coreChanged:0,annotated:0};
 for(const[char,card]of Object.entries(data.bank||{})){
  const before=card.words?.[0]?JSON.stringify([card.words[0].word,card.words[0].meaning,card.words[0].example]):"null";
  card.words=(card.words||[]).flatMap(word=>{
   const edit=WORD_REVISIONS[char]?.[word.word];
   if(edit===null){results.removed++;return[]}
   if(edit){results.replaced++;return[{...word,...edit}]}
   return[word]
  });
  for(const word of card.words){
   const approved=WORD_SOURCES[word.word];
   if(!approved)throw new Error("造詞「"+word.word+"」尚未納入教育部《國語辭典簡編本》查核清單。");
   Object.assign(word,{source:approved.source,sourceType:approved.type,sourceName:approved.name,sourceReason:approved.reason||""});
   results.annotated++;
  }
  const after=card.words[0]?JSON.stringify([card.words[0].word,card.words[0].meaning,card.words[0].example]):"null";
  if(before!==after){card.revision=Math.min(9999,Number(card.revision||1)+1);results.coreChanged++}
 }
 return results;
}
applyWordSources({bank:SEED_BANK});
for(const{char,idiom}of IDIOM_ADDITIONS){const card=SEED_BANK[char];if(!card)throw Error(`成語目標字未收錄：${char}`);card.idioms??=[];if(card.idiom?.word===idiom.word||card.idioms.some(x=>x.word===idiom.word))throw Error(`成語重複：${idiom.word}`);card.idioms.push(idiom)}
export const SEED={className:'三年級生字小旅行',maxSeat:30,bank:SEED_BANK,lessons:[{id:'lesson-7',cover:'wind',title:'第七課・風的味道',author:'賴伊麗',items:rows.map(r=>r[0]),published:true}],notice:'請搭配課本閱讀。網站不存放課文全文。'};
