// 第十二課14字：字形事實依教育部資料查核，教學文字自編，不收錄課文全文。
const rows=[
  {
    "char": "團",
    "sound": "ㄊㄨㄢˊ",
    "radical": "囗",
    "strokes": 14,
    "definition": "聚集在一起；也指圓滿相聚。",
    "words": [
      {
        "word": "團圓",
        "meaning": "家人相聚在一起。",
        "example": "雖然住在不同地方，大家仍會想辦法一起團圓，共度溫暖時光。"
      },
      {
        "word": "團體",
        "meaning": "為共同目標聚集的一群人。",
        "example": "我們參加班級團體活動時，會互相合作，也會傾聽每個人的想法。"
      }
    ],
    "hint": "外面是囗部，裡面有「專」；家人相聚時可以說團圓。"
  },
  {
    "char": "剩",
    "sound": "ㄕㄥˋ",
    "radical": "刀",
    "strokes": 12,
    "definition": "用完或用過以後還留下。",
    "words": [
      {
        "word": "剩下",
        "meaning": "用完以後還留下。",
        "example": "晚餐後還剩下幾顆水果，我們洗乾淨後分給明天要吃的人。"
      },
      {
        "word": "剩餘",
        "meaning": "還沒有用完或用掉的部分。",
        "example": "做美勞活動時，老師把剩餘的紙張整理好，留給下一次使用。"
      }
    ],
    "hint": "右邊是刀部；剩下的物品可以妥善收好，避免浪費。"
  },
  {
    "char": "默",
    "sound": "ㄇㄛˋ",
    "radical": "黑",
    "strokes": 16,
    "definition": "不出聲、沉靜無聲。",
    "words": [
      {
        "word": "默默",
        "meaning": "安靜、不出聲地做事。",
        "example": "姐姐默默地把客廳整理乾淨，讓全家回家時都覺得舒服。"
      },
      {
        "word": "默讀",
        "meaning": "不出聲地閱讀。",
        "example": "考試前我們先默讀題目，再把每一個問題看清楚後回答。"
      }
    ],
    "hint": "左邊是黑部；默讀時不出聲，眼睛跟著文字慢慢看。"
  },
  {
    "char": "樓",
    "sound": "ㄌㄡˊ",
    "radical": "木",
    "strokes": 15,
    "definition": "兩層或兩層以上的房屋；也指房屋的一層。",
    "words": [
      {
        "word": "樓上",
        "meaning": "建築物比較高的一層。",
        "example": "奶奶住在大樓的樓上，我們每個週末都會搭電梯去探望她。"
      },
      {
        "word": "樓梯",
        "meaning": "連接不同樓層、可以上下走的階梯。",
        "example": "上下樓梯時要扶好扶手，一步一步慢慢走，才不容易跌倒。"
      }
    ],
    "hint": "左邊是木部；樓梯連接不同樓層，行走時要注意安全。"
  },
  {
    "char": "視",
    "sound": "ㄕˋ",
    "radical": "見",
    "strokes": 12,
    "definition": "看、觀看；也指看待或察看。",
    "words": [
      {
        "word": "視訊",
        "meaning": "利用網路傳送聲音和影像來談話。",
        "example": "放假時我和住在外地的阿姨視訊，分享學校發生的趣事。"
      },
      {
        "word": "視線",
        "meaning": "眼睛注視的方向。",
        "example": "過馬路前先停下腳步，看看左右兩邊，再把視線移向前方。"
      }
    ],
    "hint": "右邊是見部；視訊時可以看見遠方親友的影像。"
  },
  {
    "char": "訊",
    "sound": "ㄒㄩㄣˋ",
    "radical": "言",
    "strokes": 10,
    "definition": "消息、通知或傳遞的內容。",
    "words": [
      {
        "word": "訊息",
        "meaning": "傳遞給別人的內容或通知。",
        "example": "收到老師傳來的訊息後，我先讀清楚，再告訴爸爸集合時間。"
      },
      {
        "word": "通訊",
        "meaning": "人們互相傳遞消息或交談的方式。",
        "example": "現在大家能用通訊軟體聯絡遠方親友，也能分享生活照片。"
      }
    ],
    "hint": "左邊是言部，和說話、傳遞消息有關。"
  },
  {
    "char": "叔",
    "sound": "ㄕㄨˊ",
    "radical": "又",
    "strokes": 8,
    "definition": "對父親弟弟或年紀相近男性親友的稱呼。",
    "words": [
      {
        "word": "叔叔",
        "meaning": "對父親弟弟或男性親友的稱呼。",
        "example": "叔叔每次來家裡，都會陪我玩桌遊，也教我整理玩具。"
      },
      {
        "word": "叔父",
        "meaning": "父親的弟弟。",
        "example": "我的叔父住在南部，過年時我們會搭火車去和他們團聚。"
      }
    ],
    "hint": "右下是又部；叔叔是家人之間常用的親切稱呼。"
  },
  {
    "char": "鏡",
    "sound": "ㄐㄧㄥˋ",
    "radical": "金",
    "strokes": 19,
    "definition": "可以照出影像的器具，也指相機拍攝影像的部分。",
    "words": [
      {
        "word": "鏡子",
        "meaning": "可以照出人或物影像的玻璃。",
        "example": "出門以前，我在鏡子前整理頭髮，確認衣服都穿好了。"
      },
      {
        "word": "鏡頭",
        "meaning": "相機或攝影機上拍攝影像的部分。",
        "example": "拍照時大家看向鏡頭，留下全家人開心的合照。"
      }
    ],
    "hint": "左邊是金部；鏡子和鏡頭都能讓我們看見影像。"
  },
  {
    "char": "逗",
    "sound": "ㄉㄡˋ",
    "radical": "辵",
    "strokes": 11,
    "definition": "用有趣的話或動作讓人發笑；也指停留。",
    "words": [
      {
        "word": "逗笑",
        "meaning": "用有趣的話或動作讓人發笑。",
        "example": "哥哥講了一個有趣的笑話，逗笑坐在旁邊的妹妹。"
      },
      {
        "word": "逗留",
        "meaning": "在某個地方停留一段時間。",
        "example": "我們在圖書館逗留了一會兒，讀完故事才一起回家。"
      }
    ],
    "hint": "外面的辵部和行走有關；逗笑是讓別人開心地笑。"
  },
  {
    "char": "娃",
    "sound": "ㄨㄚˊ",
    "radical": "女",
    "strokes": 9,
    "definition": "小孩，也可指玩偶。",
    "words": [
      {
        "word": "娃娃",
        "meaning": "小孩子，也可指玩偶。",
        "example": "妹妹把最喜歡的娃娃放在床邊，晚上抱著它安心入睡。"
      },
      {
        "word": "女娃",
        "meaning": "女孩、女孩子。",
        "example": "奶奶送給小女娃一件柔軟的小外套，讓她冬天出門不會著涼。"
      }
    ],
    "hint": "左邊是女部；娃娃有時指小孩子，有時也指玩偶。"
  },
  {
    "char": "壓",
    "sound": "ㄧㄚ",
    "radical": "土",
    "strokes": 17,
    "definition": "用力量使物體緊貼或降低；也指心裡的負擔。",
    "words": [
      {
        "word": "壓歲錢",
        "meaning": "農曆新年時長輩送給晚輩的錢。",
        "example": "收到壓歲錢後，我會先謝謝長輩，再和家人討論如何保管。"
      },
      {
        "word": "壓力",
        "meaning": "心裡覺得緊張或有負擔。",
        "example": "遇到不會的題目先深呼吸，請教老師或家人，別讓壓力一直增加。"
      }
    ],
    "hint": "本課在「壓歲錢」中讀ㄧㄚ；底部是土部。"
  },
  {
    "char": "錢",
    "sound": "ㄑㄧㄢˊ",
    "radical": "金",
    "strokes": 16,
    "definition": "用來買東西或交換物品的貨幣。",
    "words": [
      {
        "word": "錢包",
        "meaning": "放錢或卡片的小袋子。",
        "example": "外出前我把零用錢放進錢包，回家後也會收好不亂放。"
      },
      {
        "word": "付錢",
        "meaning": "把錢交給店家來購買東西。",
        "example": "到商店買文具時，我先確認價格再付錢，並把收據收好帶回家。"
      }
    ],
    "hint": "左邊是金部；錢可以用來購買物品，也要好好保管。"
  },
  {
    "char": "透",
    "sound": "ㄊㄡˋ",
    "radical": "辵",
    "strokes": 11,
    "definition": "穿過、顯露出來；也指達到飽滿的程度。",
    "words": [
      {
        "word": "透過",
        "meaning": "經由某種方式或方法。",
        "example": "透過視訊和外地親人聊天，讓我們在過年時也能分享笑聲。"
      },
      {
        "word": "透明",
        "meaning": "可以看穿、不遮住光線的。",
        "example": "把清水裝進透明的杯子裡，就能看見杯底的圖案。"
      }
    ],
    "hint": "外面的辵部和行走有關；透過網路也能和遠方親友交談。"
  },
  {
    "char": "握",
    "sound": "ㄨㄛˋ",
    "radical": "手",
    "strokes": 12,
    "definition": "用手抓住或拿牢。",
    "words": [
      {
        "word": "握手",
        "meaning": "彼此伸手相握，表示友好或打招呼。",
        "example": "見到久未見面的表哥，我們開心地握手，互相問候近況。"
      },
      {
        "word": "握住",
        "meaning": "用手抓牢某個東西。",
        "example": "搭乘公車時要握住扶手，等車子停穩以後再走到門口。"
      }
    ],
    "hint": "左邊是手部；握住扶手可以幫助我們站得更穩。"
  }
];
const idioms={
  "默": {
    "word": "默默無聞",
    "meaning": "平凡、不出名；也可形容安靜地做好事情。",
    "example": "社區裡的志工默默無聞地整理環境，讓大家每天都能安心活動。",
    "source": "https://dict.idioms.moe.edu.tw/idiomView.jsp?ID=11557&la=0&webMd=2",
    "sound": "ㄇㄛˋ ㄇㄛˋ ㄨˊ ㄨㄣˊ"
  },
  "樓": {
    "word": "近水樓臺",
    "meaning": "比喻靠近某處的人或事，容易先得到方便或機會。",
    "example": "圖書館就在我們家附近，放學後常去借書，真是近水樓臺。",
    "source": "https://dict.idioms.moe.edu.tw/idiomView.jsp?ID=1422&la=0&webMd=1",
    "sound": "ㄐㄧㄣˋ ㄕㄨㄟˇ ㄌㄡˊ ㄊㄞˊ"
  },
  "視": {
    "word": "視而不見",
    "meaning": "明明看見了，卻像沒看見一樣；形容不關心。",
    "example": "同學跌倒時，我們不要視而不見，應該告訴老師並陪在旁邊。",
    "source": "https://dict.idioms.moe.edu.tw/idiomView.jsp?ID=8661&la=0",
    "sound": "ㄕˋ ㄦˊ ㄅㄨˋ ㄐㄧㄢˋ"
  },
  "握": {
    "word": "握手言歡",
    "meaning": "握著手愉快交談，形容彼此友好、親近。",
    "example": "分開一段時間的表兄妹見面後開心地握手言歡，聊起最近的生活。",
    "source": "https://dict.idioms.moe.edu.tw/idiomView.jsp?ID=7452&la=0&webMd=1",
    "sound": "ㄨㄛˋ ㄕㄡˇ ㄧㄢˊ ㄏㄨㄢ"
  }
};
export const LESSON12_CHARS=rows.map(r=>r.char);
export const LESSON12_BANK=Object.fromEntries(rows.map(r=>{const i=idioms[r.char];return[r.char,{char:r.char,sound:r.sound,radical:r.radical,strokes:r.strokes,definition:r.definition,words:r.words,hint:r.hint,scene:"團圓",revision:1,reviewed:true,idiom:i||null,source:"https://stroke-order.learningweb.moe.edu.tw/dictView.jsp?ID="+r.char.codePointAt(0),checkedAt:"2026-11-02"}]}));
