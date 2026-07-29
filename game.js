(() => {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const startOverlay = document.getElementById('startOverlay');
  const startButton = document.getElementById('startButton');
  const resetButton = document.getElementById('resetButton');
  const brand = document.querySelector('.brand');
  const phaseKicker = document.getElementById('phaseKicker');
  const missionTitle = document.getElementById('missionTitle');
  const missionCopy = document.getElementById('missionCopy');
  const characterLine = document.getElementById('characterLine');
  const canvasLabel = document.getElementById('canvasLabel');
  const canvasHint = document.getElementById('canvasHint');
  const liveStatus = document.getElementById('liveStatus');
  const objectiveFind = document.getElementById('objectiveFind');
  const objectiveReturn = document.getElementById('objectiveReturn');
  const objectiveCarry = document.getElementById('objectiveCarry');
  const languageSelect = document.getElementById('languageSelect');
  const nextLevelButton = document.getElementById('nextLevelButton');
  const levelIndicator = document.getElementById('levelIndicator');
  const levelMenuButton = document.getElementById('levelMenuButton');
  const levelOverlay = document.getElementById('levelOverlay');
  const closeLevelMenu = document.getElementById('closeLevelMenu');
  const levelGrid = document.getElementById('levelGrid');
  const jumpButton = document.getElementById('jumpButton');
  const bridgeButton = document.getElementById('bridgeButton');
  const biteButton = document.getElementById('biteButton');
  const backToMenuButton = document.getElementById('backToMenuButton');
  const crumbBank = document.getElementById('crumbBank');
  const wardrobeButton = document.getElementById('wardrobeButton');
  const wardrobeOverlay = document.getElementById('wardrobeOverlay');
  const closeWardrobe = document.getElementById('closeWardrobe');
  const wardrobeGrid = document.getElementById('wardrobeGrid');
  const wardrobeTitle = document.getElementById('wardrobeTitle');
  const wardrobeEyebrow = document.getElementById('wardrobeEyebrow');
  const wardrobeBalance = document.getElementById('wardrobeBalance');

  const translations = {
    'zh-Hant': {
      brandTitle:'火腿腸報告', chapter:'Chapter 01 · 野餐墊失物案', restart:'重新開始', back:'← 上一關', levelMenu:'關卡目錄', levelMenuEyebrow:'任務目錄', levelMenuTitle:'選擇要偵查的關卡',
      objectiveFind:'發現食物', objectiveReturn:'留下氣味回巢', objectiveCarry:'合力搬回家',
      introEyebrow:'017 的第一個任務', introTitle:'火腿腸，消失前快報告。', introCopy:'找到食物、回巢留下氣味，再帶同伴避開障礙把它搬回家。', start:'開始任務',
      controls:'手機：點一下目的地　·　電腦：拖曳、WASD、方向鍵、空白鍵跳躍、E 咬斷', next:'下一關 →', jump:'跳！', bridge:'架橋！', bridgeLeaves:'先找齊三片葉子，才能架橋。', bridgeNear:'靠近大水窪後按「架橋！」', bridgeBuilt:'螞蟻們把葉子排成了一座活橋！', bite:'咬斷', split:'分碎', bigWater:'超大水窪', jumpHint:'靠近水邊時按「跳！」或空白鍵', cutHint:'竹籤還卡著！按「咬斷」或 E。', splitHint:'食物太大了！按「分碎」或 E。', doneTag:'已完成', aria:'017 火腿腸報告遊戲。點擊或拖曳主角螞蟻移動。',
      scoutKicker:'偵查任務', scoutTitle:'找到那根火腿腸', scoutCopy:'017 聞到一股可疑的肉香。手機點一下目的地；電腦可拖曳或用 WASD，靠近粉紅色火腿腸。', scoutLine:'「這次我真的聞到了。」', scoutLabel:'偵查階段', scoutHint:'點一下目的地，017 會自己走過去', scoutStatus:'沿著肉香前進。',
      returnKicker:'回巢報信', returnTitle:'快把消息帶回家', returnCopy:'017 要一邊跑回蟻巢、一邊留下氣味。這樣同伴才能跟著路線找到食物。', returnLine:'「大家，真的有火腿腸！」', returnLabel:'報信階段', returnHint:'帶著 017 回到蟻巢', returnStatus:'粉紅氣味線正在留下。',
      recruitKicker:'巢口招募', recruitTitle:'讓同伴聞見消息', recruitCopy:'017 正在用觸角與氣味召集同伴。等一下，蟻群就會沿路出發。', recruitLine:'「跟著我的氣味走！」', recruitLabel:'招募中', recruitHint:'螞蟻正在出巢', recruitStatus:'一、二、三……更多腳步聲！',
      carryKicker:'搬運任務', carryTitle:'一起把它搬回家', carryCopy:'拖曳火腿腸前進。繞開石頭與水窪，讓隊伍把大餐帶回蟻巢。', carryLine:'「左邊兩隻拉，後面一起推！」', carryLabel:'集體搬運', carryHint:'按住火腿腸並拖曳指揮', carryStatus:'避開石頭和水窪。',
      doneKicker:'任務完成', doneTitle:'017 證明了自己', doneCopy:'火腿腸安全入庫。這次所有螞蟻都相信 017 的報告了。', doneLine:'「我就說過吧！」', doneLabel:'火腿腸已入巢', doneHint:'按重新開始再玩一次', doneStatus:'野餐墊失物案：結案。',
      found:'找到食物！', decoy:'糟糕，這是石頭！真正的食物在別處。', rush:'食物快被搬走了！直接帶隊救援。', recruiting:'017 正在招募同伴', depart:'蟻群跟著氣味線出發！', rock:'石頭太近了！繞過去。', puddle:'水窪會沖散隊伍！', rival:'那是隔壁紅螞蟻的巢穴，不能靠近！', sceneBlock:'這個東西太重，繞過去！', sticky:'果汁黏住腳了，走慢一點！', straggler:'等等！有一隻螞蟻掉隊了！', rejoined:'「回來了！」隊伍又整齊了。', delivering:'大家抓緊，一起搬進巢穴！', nest:'蟻巢', stone:'石頭', water:'水窪', rivalNest:'紅螞蟻巢穴', patrol:'巡邏中', foodSausage:'火腿腸', foodCrescent:'彎彎火腿', foodMeatball:'肉丸', foodSquare:'午餐肉', foodBaguette:'麵包棒', foodDonut:'甜甜圈', foodCheese:'起司角', foodHeart:'愛心火腿', success:'食物安全入巢！', successSub:'017 的報告是真的。', ready:'準備出巢。', leaving:'017 出巢了。'
    },
    en: {
      brandTitle:'Sausage Report', chapter:'Chapter 01 · Picnic Blanket Case', restart:'Restart', back:'← Previous', levelMenu:'Level select', levelMenuEyebrow:'MISSION DIRECTORY', levelMenuTitle:'Choose a scouting level',
      objectiveFind:'Find the food', objectiveReturn:'Scent a trail home', objectiveCarry:'Carry it home',
      introEyebrow:'017’s first mission', introTitle:'Report the sausage before it disappears.', introCopy:'Find it, leave a scent trail home, then lead the colony around obstacles.', start:'Start mission',
      controls:'Mobile: tap a destination · Desktop: drag, WASD, arrows, Space to jump, E to bite', next:'Next level →', jump:'JUMP!', bridge:'BRIDGE!', bridgeLeaves:'Find all three leaves before building the bridge.', bridgeNear:'At the giant puddle, press BRIDGE!', bridgeBuilt:'The colony arranges the leaves into a living bridge!', bite:'BITE', split:'SPLIT', bigWater:'GIANT PUDDLE', jumpHint:'At the edge, press JUMP or Space', cutHint:'The bamboo skewer is stuck. Press BITE or E.', splitHint:'This food is too large. Press SPLIT or E.', doneTag:'Complete', aria:'017 Sausage Report game. Tap or drag to move the scout ant.',
      scoutKicker:'SCOUT MISSION', scoutTitle:'Find the sausage', scoutCopy:'017 catches a suspicious meaty scent. On mobile, tap a destination; on desktop, drag or use WASD to approach the pink sausage.', scoutLine:'“I really smelled it this time.”', scoutLabel:'SCOUTING', scoutHint:'Tap a destination — 017 walks there', scoutStatus:'Follow the scent.',
      returnKicker:'REPORT HOME', returnTitle:'Take the news home', returnCopy:'017 runs back while leaving a scent trail, so the colony can find the food.', returnLine:'“Everyone, there really is a sausage!”', returnLabel:'REPORTING', returnHint:'Bring 017 back to the nest', returnStatus:'A pink scent trail is forming.',
      recruitKicker:'NEST RECRUITMENT', recruitTitle:'Let the colony smell the news', recruitCopy:'017 is calling with antennae and scent. The colony will follow the trail soon.', recruitLine:'“Follow my trail!”', recruitLabel:'RECRUITING', recruitHint:'The colony is leaving the nest', recruitStatus:'One, two, three… more footsteps!',
      carryKicker:'CARRY MISSION', carryTitle:'Bring it home together', carryCopy:'Drag the sausage. Avoid the stone and puddle, and bring the feast into the nest.', carryLine:'“Two pull left, everyone else push!”', carryLabel:'TEAM CARRY', carryHint:'Hold the sausage and drag to guide', carryStatus:'Avoid the stone and puddle.',
      doneKicker:'MISSION COMPLETE', doneTitle:'017 proved it', doneCopy:'The sausage is safe in storage. Everyone believes 017 now.', doneLine:'“Told you so!”', doneLabel:'SAUSAGE STORED', doneHint:'Press Restart to play again', doneStatus:'Picnic Blanket Case: closed.',
      found:'Food found!', decoy:'Oh no, it is a stone! The real food is elsewhere.', rush:'The food is about to disappear! Lead a rescue team now.', recruiting:'017 is recruiting the colony', depart:'The ants follow the scent trail!', rock:'The stone is too close. Go around!', puddle:'The puddle will scatter the team!', rival:'That is the red ants’ nest. Keep away!', sceneBlock:'Too heavy to move. Go around!', sticky:'Juice is sticking to your feet — slow down!', straggler:'Wait! One ant fell behind!', rejoined:'“I’m back!” The line is whole again.', delivering:'Hold tight — carry it into the nest!', nest:'NEST', stone:'STONE', water:'PUDDLE', rivalNest:'RED ANT NEST', patrol:'PATROLLING', foodSausage:'SAUSAGE', foodCrescent:'CURLY HAM', foodMeatball:'MEATBALL', foodSquare:'LUNCHEON MEAT', foodDonut:'DONUT', foodCheese:'CHEESE WEDGE', foodHeart:'HEART HAM', success:'Food safely stored!', successSub:'017’s report was true.', ready:'Ready to leave the nest.', leaving:'017 leaves the nest.'
    },
    ja: {
      brandTitle:'ソーセージ報告', chapter:'Chapter 01 · ピクニックシート事件', restart:'最初から', back:'← 前のステージ', levelMenu:'ステージ選択', levelMenuEyebrow:'任務一覧', levelMenuTitle:'偵察ステージを選ぶ',
      objectiveFind:'食べ物を見つける', objectiveReturn:'においを残して巣へ', objectiveCarry:'みんなで巣へ運ぶ',
      introEyebrow:'017、最初の任務', introTitle:'ソーセージが消える前に報告！', introCopy:'食べ物を見つけ、においの道を巣まで残して、仲間と障害物を避けて運ぼう。', start:'任務を始める',
      controls:'スマホ：目的地をタップ　·　PC：ドラッグ、WASD、矢印キー、Spaceでジャンプ、Eでかみ切る', next:'次のステージ →', jump:'ジャンプ！', bridge:'橋を作る！', bridgeLeaves:'葉っぱを3枚集めてから橋を作ろう。', bridgeNear:'大きな水たまりで「橋を作る！」を押そう。', bridgeBuilt:'仲間が葉っぱを並べて、生きた橋になった！', bite:'かみ切る', split:'分ける', bigWater:'大きな水たまり', jumpHint:'水ぎわでジャンプかSpaceを押す', cutHint:'竹串が刺さっている！かみ切るか E を押す。', splitHint:'食べ物が大きすぎる！分けるか E を押す。', doneTag:'クリア', aria:'017 ソーセージ報告ゲーム。タップまたはドラッグで偵察アリを動かします。',
      scoutKicker:'偵察任務', scoutTitle:'ソーセージを探そう', scoutCopy:'017 はあやしい肉のにおいを感じた。スマホなら目的地をタップ、PCならドラッグか WASD でピンクのソーセージへ近づこう。', scoutLine:'「今度こそ、本当ににおった。」', scoutLabel:'偵察中', scoutHint:'目的地をタップすると017が歩く', scoutStatus:'においをたどろう。',
      returnKicker:'巣へ報告', returnTitle:'知らせを巣へ持ち帰ろう', returnCopy:'017 はにおいの道を残しながら巣へ走る。仲間はその道をたどれる。', returnLine:'「みんな、本当にソーセージだよ！」', returnLabel:'報告中', returnHint:'017 を巣へ連れて帰る', returnStatus:'ピンクのにおいの道が残っている。',
      recruitKicker:'仲間を集める', recruitTitle:'仲間に知らせよう', recruitCopy:'017 は触角とにおいで仲間を呼んでいる。すぐにアリたちが道をたどる。', recruitLine:'「このにおいについてきて！」', recruitLabel:'集合中', recruitHint:'アリたちが巣から出発中', recruitStatus:'一匹、二匹、三匹……足音が増える！',
      carryKicker:'運搬任務', carryTitle:'みんなで巣へ運ぼう', carryCopy:'ソーセージをドラッグしよう。石と水たまりを避け、巣まで運ぼう。', carryLine:'「左の二匹は引いて、後ろは押して！」', carryLabel:'協力運搬', carryHint:'ソーセージを押してドラッグ', carryStatus:'石と水たまりに注意。',
      doneKicker:'任務完了', doneTitle:'017 が証明した', doneCopy:'ソーセージは無事に保管された。みんなが017を信じてくれた。', doneLine:'「だから言ったでしょ！」', doneLabel:'ソーセージを保管', doneHint:'最初から を押してもう一度', doneStatus:'ピクニックシート事件：解決。',
      found:'食べ物を発見！', decoy:'しまった、石だった！本物の食べ物は別の場所にある。', rush:'食べ物がなくなる！すぐに救援隊を動かそう。', recruiting:'017 が仲間を集めている', depart:'アリたちがにおいの道をたどる！', rock:'石が近すぎる。回り込もう！', puddle:'水たまりで隊列がばらばらに！', rival:'ここは赤アリの巣。近づかないで！', sceneBlock:'重すぎて動かせない。回り込もう！', sticky:'ジュースで足がべたべた。ゆっくり進もう！', straggler:'待って！一匹が遅れている！', rejoined:'「戻ったよ！」列がそろった。', delivering:'みんな、つかまって！巣へ運ぼう！', nest:'アリの巣', stone:'石', water:'水たまり', rivalNest:'赤アリの巣', patrol:'巡回中', foodSausage:'ソーセージ', foodCrescent:'曲がったハム', foodMeatball:'ミートボール', foodSquare:'ランチョンミート', foodBaguette:'パン棒', foodDonut:'ドーナツ', foodCheese:'チーズ', foodHeart:'ハートハム', success:'食べ物を無事に保管！', successSub:'017 の報告は本当だった。', ready:'巣を出る準備完了。', leaving:'017 が巣を出た。'
    }
  };
  let locale = 'zh-Hant';
  function t(key) { return translations[locale][key] || translations['zh-Hant'][key] || key; }
  const wardrobeCopy = {
    'zh-Hant': { button:'017 衣櫥', eyebrow:'017 的衣櫥', title:'用過關得到的餅乾屑換裝', balance:'目前有 {n} 枚餅乾屑', crumbs:'枚餅乾屑', equip:'換上', equipped:'正在穿', redeem:'兌換', need:'還差 {n}', reward:'過關獲得 +12 枚餅乾屑！', outfits:[['探險小帽','017 原本的任務帽','◆'],['葉子斗篷','草叢中最好用的偽裝','🍃'],['藍格圍巾','野餐墊專用的風格','🧣'],['快遞員背包','把報告送回巢的背包','✦'],['雛菊花冠','花圃邊撿到的小花','🌼'],['紅鈕扣盾','襯衫掉下來的勇氣護盾','🔴'],['瓶蓋頭盔','汽水瓶蓋改造的安全帽','🧢'],['迴紋針背架','桌角找到的彈簧背架','🖇️'],['麵包屑王冠','最香的一小塊酥皮','🍞'],['幸運草披肩','四片葉子的草叢信物','☘️'],['花瓣雨衣','花瓣做的下雨天斗篷','🌸'],['瓢蟲斑點包','借來的紅點點小背包','🐞']] },
    en: { button:'017 Wardrobe', eyebrow:'017’S WARDROBE', title:'Trade mission crumbs for outfits', balance:'You have {n} crumbs', crumbs:'crumbs', equip:'Wear', equipped:'Wearing', redeem:'Redeem', need:'Need {n} more', reward:'Mission reward: +12 crumbs!', outfits:[['Explorer Cap','017’s original mission cap','◆'],['Leaf Cape','Camouflage for the grass','🍃'],['Blue Check Scarf','Picnic blanket style','🧣'],['Courier Pack','For reports back to the nest','✦'],['Daisy Crown','A tiny flower from the garden','🌼'],['Red Button Shield','A brave fallen shirt button','🔴'],['Bottle-cap Helmet','A fizzy-drink safety helmet','🧢'],['Paperclip Frame','A springy desk-corner pack','🖇️'],['Breadcrumb Crown','The crispiest tiny crust','🍞'],['Clover Shawl','A four-leaf grass token','☘️'],['Petal Raincoat','A petal cloak for rainy days','🌸'],['Ladybug Satchel','A borrowed red spotted bag','🐞']] },
    ja: { button:'017 のクローゼット', eyebrow:'017 のクローゼット', title:'任務でもらえるクズで着替えよう', balance:'いま {n} 個のクズがあります', crumbs:'個のクズ', equip:'着る', equipped:'着用中', redeem:'交換', need:'あと {n}', reward:'任務報酬：クズ +12！', outfits:[['探検キャップ','017 のいつもの任務帽','◆'],['葉っぱケープ','草むら用のカモフラージュ','🍃'],['青いチェックマフラー','ピクニックシートのスタイル','🧣'],['配達リュック','巣へ報告を運ぶリュック','✦'],['デイジーの花冠','庭で見つけた小さな花','🌼'],['赤いボタンの盾','シャツから落ちた勇気の盾','🔴'],['ボトルキャップヘルメット','炭酸のふたを改造','🧢'],['クリップ背架','机のすみのばね背架','🖇️'],['パンくず王冠','いちばん香ばしいかけら','🍞'],['クローバーの肩かけ','四つ葉の草むらの印','☘️'],['花びらレインコート','雨の日の花びらケープ','🌸'],['てんとう虫バッグ','赤い水玉の小さなバッグ','🐞']] }
  };
  function wc() { return wardrobeCopy[locale] || wardrobeCopy['zh-Hant']; }
  function setLanguage(next) {
    locale = translations[next] ? next : 'zh-Hant';
    document.documentElement.lang = locale;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    nextLevelButton.textContent = t('next');
    backToMenuButton.textContent = t('back');
    jumpButton.textContent = t('jump');
    biteButton.textContent = state?.phase === 'split' ? t('split') : t('bite');
    wardrobeButton.textContent = wc().button;
    closeLevelMenu.setAttribute('aria-label', locale === 'en' ? 'Close' : locale === 'ja' ? '閉じる' : '關閉');
    closeWardrobe.setAttribute('aria-label', locale === 'en' ? 'Close' : locale === 'ja' ? '閉じる' : '關閉');
    renderLevelMenu();
    renderWardrobe();
    canvas.setAttribute('aria-label', t('aria'));
    try { localStorage.setItem('ant-game-language', locale); } catch (_) {}
    setUi();
  }

  const levelMenuCopy = {
    'zh-Hant': [
      ['野餐墊入門','火腿腸 · 石頭與水窪'], ['紅螞蟻鄰居','彎彎火腿 · 禁止領域'],
      ['小巢的肉丸','肉丸 · 小入口'], ['對角線午餐','午餐肉 · 逆向搬運'],
      ['大巢的大餐','麵包棒 · 大入口'], ['甜甜圈繞路','甜甜圈 · 紅螞蟻領域'],
      ['起司角任務','起司角 · 雙重障礙'], ['最後的愛心火腿','愛心火腿 · 全部挑戰'],
      ['中場肉丸','肉丸 · 超大水窪跳躍'], ['麵包棒橫越','麵包棒 · 側邊巢穴'],
      ['小巢午餐肉','午餐肉 · 窄入口'], ['彎彎火腿快跑','彎彎火腿 · 中央領域'],
      ['甜甜圈遠征','甜甜圈 · 超大水窪跳躍'], ['起司角夾縫','起司角 · 小巢與領域'],
      ['直線火腿腸','火腿腸 · 中央封鎖'], ['愛心火腿最終線','愛心火腿 · 大水窪與最難領域'],
      ['草地肉丸','肉丸 · 三面阻擋'], ['串燒救援','火腿腸 · 竹籤與小巢'],
      ['彎月繞道','彎彎火腿 · 大水窪'], ['午餐肉分隊','午餐肉 · 分碎後進巢'],
      ['甜甜圈包圍','甜甜圈 · 雙重地盤'], ['起司夜班','起司角 · 夜間偵查'],
      ['麵包棒長征','麵包棒 · 遠距離搬運'], ['017 的大餐','愛心火腿 · 全部規則'],
      ['窗邊香腸','火腿腸 · 狹窄路線'], ['葉下肉丸','肉丸 · 草地地盤'],
      ['圓環午餐','甜甜圈 · 小巢口'], ['愛心快遞','愛心火腿 · 直接帶隊'],
      ['起司小徑','起司角 · 假目標'], ['串燒大隊','彎彎火腿 · 咬斷竹籤'],
      ['桌角午餐肉','午餐肉 · 遠處巢穴'], ['水窪邊的麵包','麵包棒 · 跳躍'],
      ['深夜肉丸','肉丸 · 夜間與領域'], ['雙重甜甜圈','甜甜圈 · 分碎食物'],
      ['小巢愛心','愛心火腿 · 竹籤與分碎'], ['巢穴運動會','午餐肉 · 全面挑戰']
    ],
    en: [
      ['Picnic Basics','Sausage · stone & puddle'], ['Red Ant Neighbours','Curly ham · forbidden zone'],
      ['Meatball, Small Nest','Meatball · small entrance'], ['Diagonal Lunch','Luncheon meat · reverse route'],
      ['Big Feast, Big Nest','Breadstick · wide entrance'], ['Donut Detour','Donut · red ant territory'],
      ['Cheese Wedge Run','Cheese · double obstacle'], ['Final Heart Ham','Heart ham · every challenge'],
      ['Midfield Meatball','Meatball · giant puddle jump'], ['Breadstick Crossing','Breadstick · side nest'],
      ['Small Nest Lunch','Luncheon meat · narrow entrance'], ['Curly Ham Dash','Curly ham · central territory'],
      ['Donut Expedition','Donut · giant puddle jump'], ['Cheese Wedge Gap','Cheese · small nest & territory'],
      ['Straight Sausage','Sausage · central blockade'], ['Final Heart Line','Heart ham · giant puddle & hardest territory'],
      ['Garden Meatball','Meatball · blocked on three sides'], ['Skewer Rescue','Sausage · skewer & small nest'],
      ['Crescent Detour','Curly ham · giant puddle'], ['Lunch Meat Squad','Luncheon meat · split before entry'],
      ['Donut Encirclement','Donut · double territory'], ['Cheese Night Shift','Cheese wedge · night scouting'],
      ['Breadstick Trek','Breadstick · long carry'], ['017’s Big Feast','Heart ham · every rule'],
      ['Window Sausage','Sausage · narrow route'], ['Meatball Under Leaves','Meatball · garden territory'],
      ['Ring Lunch','Donut · small nest'], ['Heart Express','Heart ham · lead the team'],
      ['Cheese Footpath','Cheese wedge · decoy'], ['Skewer Squad','Curly ham · bite the skewer'],
      ['Desk-Corner Lunch','Luncheon meat · distant nest'], ['Bread by the Puddle','Breadstick · jump'],
      ['Midnight Meatball','Meatball · night & territory'], ['Double Donut','Donut · split the food'],
      ['Tiny Nest Heart','Heart ham · skewer & split'], ['Nest Games','Luncheon meat · full challenge']
    ],
    ja: [
      ['ピクニック入門','ソーセージ · 石と水たまり'], ['赤アリのとなり','曲がったハム · 立入禁止'],
      ['小さな巣と肉だんご','肉だんご · 小さい入口'], ['対角線ランチ','ランチョンミート · 逆ルート'], ['大きな巣、大きなごちそう','パン棒 · 大きい入口'], ['ドーナツの回り道','ドーナツ · 赤アリ領域'],
      ['チーズの任務','チーズ · 二つの障害'], ['最後のハートハム','ハートハム · 全チャレンジ'],
      ['中盤の肉だんご','肉だんご · 大きな水たまりジャンプ'], ['パン棒横断','パン棒 · 横の巣'],
      ['小さな巣のランチ','ランチョンミート · 狭い入口'], ['曲がったハムの疾走','曲がったハム · 中央領域'],
      ['ドーナツ遠征','ドーナツ · 大きな水たまりジャンプ'], ['チーズのすき間','チーズ · 小さい巣と領域'],
      ['まっすぐソーセージ','ソーセージ · 中央封鎖'], ['最後のハートライン','ハートハム · 大きな水たまりと最難関領域'],
      ['庭の肉だんご','肉だんご · 三方向の障害'], ['串刺し救出','ソーセージ · 竹串と小さな巣'],
      ['三日月の回り道','曲がったハム · 大きな水たまり'], ['ランチ肉分隊','ランチョンミート · 分けてから巣へ'],
      ['ドーナツ包囲','ドーナツ · 二つの縄張り'], ['チーズの夜勤','チーズ · 夜の偵察'],
      ['パン棒の遠征','パン棒 · 長い運搬'], ['017 の大ごちそう','ハートハム · 全ルール'],
      ['窓辺のソーセージ','ソーセージ · せまい道'], ['葉の下の肉だんご','肉だんご · 庭の縄張り'],
      ['リングランチ','ドーナツ · 小さな巣'], ['ハート急便','ハートハム · すぐに出発'],
      ['チーズの小道','チーズ · おとり'], ['串焼き隊','曲がったハム · 竹串をかみ切る'],
      ['机のすみのランチ','ランチョンミート · 遠い巣'], ['水たまりのパン','パン棒 · ジャンプ'],
      ['真夜中の肉だんご','肉だんご · 夜と縄張り'], ['ダブルドーナツ','ドーナツ · 食べ物を分ける'],
      ['小さな巣のハート','ハートハム · 竹串と分ける'], ['巣の運動会','ランチョンミート · 全チャレンジ']
    ]
  };
  function renderLevelMenu() {
    const copy = levelMenuCopy[locale] || levelMenuCopy['zh-Hant'];
    levelGrid.replaceChildren(...copy.map(([name, detail], index) => {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'level-choice';
      const completed = profile.completed.includes(index);
      button.classList.toggle('is-complete', completed);
      button.setAttribute('aria-label', `${index + 1}. ${name}${completed ? ` — ${t('doneTag')}` : ''}`);
      button.innerHTML = `<span class="level-number">${completed ? '✓' : index + 1}</span><span><strong>${name}</strong><small>${completed ? `${t('doneTag')} · ` : ''}${detail}</small></span>`;
      button.addEventListener('click', () => chooseLevel(index));
      return button;
    }));
  }

  const W = 960, H = 540;
  const nightLayer = document.createElement('canvas');
  nightLayer.width = W; nightLayer.height = H;
  const nightCtx = nightLayer.getContext('2d');
  const levels = [
    { nest:{ x:116, y:435, r:52 }, food:{ x:752, y:146, shape:'sausage', key:'foodSausage', radius:52 }, rock:{ x:505, y:260, r:63 }, puddle:{ x:326, y:374, rx:101, ry:50 }, rival:null },
    { mode:'rush', nest:{ x:112, y:132, r:68 }, food:{ x:790, y:430, shape:'crescent', key:'foodCrescent', radius:58 }, rock:{ x:386, y:302, r:63 }, puddle:{ x:690, y:180, rx:94, ry:48 }, rival:{ x:520, y:178, r:78 } },
    { nest:{ x:112, y:435, r:43 }, food:{ x:814, y:136, shape:'meatball', key:'foodMeatball', radius:42 }, rock:{ x:706, y:330, r:66 }, puddle:{ x:316, y:244, rx:108, ry:52 }, rival:{ x:498, y:390, r:76 } },
    { mode:'decoy', decoy:{x:310,y:126}, nest:{ x:838, y:420, r:48 }, food:{ x:142, y:124, shape:'square', key:'foodSquare', radius:46, skewer:true }, rock:{ x:475, y:232, r:70 }, puddle:{ x:262, y:406, rx:92, ry:48 }, rival:{ x:708, y:188, r:72 } },
    { nest:{ x:126, y:150, r:76 }, food:{ x:802, y:412, shape:'baguette', key:'foodBaguette', radius:68, fragment:true }, rock:{ x:616, y:278, r:65 }, puddle:{ x:360, y:320, rx:105, ry:50 }, rival:null },
    { nest:{ x:840, y:130, r:61 }, food:{ x:132, y:418, shape:'donut', key:'foodDonut', radius:55, skewer:true }, rock:{ x:462, y:404, r:67 }, puddle:{ x:631, y:234, rx:102, ry:48 }, rival:{ x:386, y:160, r:75 } },
    { mode:'night', nest:{ x:118, y:434, r:54 }, food:{ x:808, y:142, shape:'cheese', key:'foodCheese', radius:48 }, rock:{ x:544, y:145, r:62 }, puddle:{ x:287, y:315, rx:100, ry:50 }, rival:{ x:566, y:402, r:80 } },
    { nest:{ x:840, y:430, r:70 }, food:{ x:126, y:130, shape:'heart', key:'foodHeart', radius:62 }, rock:{ x:428, y:290, r:68 }, puddle:{ x:715, y:240, rx:96, ry:48 }, rival:{ x:650, y:408, r:76 } },
    { nest:{ x:480, y:458, r:48 }, food:{ x:130, y:115, shape:'meatball', key:'foodMeatball', radius:42 }, rock:{ x:275, y:285, r:64 }, puddle:{ x:674, y:360, rx:164, ry:78, huge:true, bridge:true }, bridgeLeaves:[{x:214,y:166,a:-.7},{x:410,y:120,a:.5},{x:615,y:268,a:-.2}], rival:{ x:730, y:136, r:72 } },
    { mode:'rush', nest:{ x:850, y:280, r:66 }, food:{ x:105, y:284, shape:'baguette', key:'foodBaguette', radius:68 }, rock:{ x:480, y:146, r:62 }, puddle:{ x:455, y:430, rx:104, ry:48 }, rival:{ x:626, y:270, r:74 } },
    { nest:{ x:116, y:126, r:45 }, food:{ x:840, y:427, shape:'square', key:'foodSquare', radius:46, skewer:true }, rock:{ x:344, y:200, r:64 }, puddle:{ x:685, y:310, rx:104, ry:49 }, rival:{ x:520, y:426, r:77 } },
    { mode:'decoy', decoy:{x:390,y:425}, nest:{ x:852, y:126, r:55 }, food:{ x:112, y:426, shape:'crescent', key:'foodCrescent', radius:58 }, rock:{ x:688, y:440, r:61 }, puddle:{ x:332, y:236, rx:96, ry:47 }, rival:{ x:500, y:310, r:78 } },
    { nest:{ x:114, y:428, r:74 }, food:{ x:834, y:132, shape:'donut', key:'foodDonut', radius:55 }, rock:{ x:685, y:205, r:65 }, puddle:{ x:350, y:397, rx:176, ry:80, huge:true, bridge:true }, bridgeLeaves:[{x:210,y:210,a:.2},{x:600,y:80,a:-.5},{x:610,y:360,a:.7}], rival:{ x:460, y:170, r:74 } },
    { nest:{ x:848, y:435, r:42 }, food:{ x:120, y:122, shape:'cheese', key:'foodCheese', radius:48 }, rock:{ x:380, y:382, r:67 }, puddle:{ x:640, y:155, rx:101, ry:47 }, rival:{ x:524, y:290, r:81 } },
    { nest:{ x:485, y:112, r:63 }, food:{ x:480, y:440, shape:'sausage', key:'foodSausage', radius:52 }, rock:{ x:265, y:278, r:63 }, puddle:{ x:715, y:295, rx:105, ry:49 }, rival:{ x:492, y:300, r:75 } },
    { mode:'night', nest:{ x:480, y:430, r:71 }, food:{ x:480, y:112, shape:'heart', key:'foodHeart', radius:62, skewer:true, fragment:true }, rock:{ x:282, y:168, r:66 }, puddle:{ x:690, y:400, rx:180, ry:82, huge:true, bridge:true }, bridgeLeaves:[{x:150,y:310,a:-.4},{x:670,y:160,a:.5},{x:835,y:290,a:-.7}], rival:{ x:478, y:275, r:82 } },
    { nest:{ x:108, y:270, r:48 }, food:{ x:836, y:270, shape:'meatball', key:'foodMeatball', radius:42 }, rock:{ x:454, y:154, r:68 }, puddle:{ x:455, y:382, rx:128, ry:58 }, rival:{ x:690, y:170, r:76 } },
    { patrol:true, nest:{ x:850, y:430, r:41 }, food:{ x:128, y:112, shape:'sausage', key:'foodSausage', radius:52, skewer:true }, rock:{ x:370, y:286, r:66 }, puddle:{ x:674, y:215, rx:108, ry:50 }, rival:{ x:548, y:420, r:78 } },
    { mode:'rush', nest:{ x:112, y:430, r:58 }, food:{ x:842, y:120, shape:'crescent', key:'foodCrescent', radius:58 }, rock:{ x:482, y:285, r:70 }, puddle:{ x:655, y:420, rx:170, ry:76, huge:true }, rival:{ x:290, y:150, r:72 } },
    { nest:{ x:848, y:122, r:44 }, food:{ x:112, y:430, shape:'square', key:'foodSquare', radius:46, fragment:true }, rock:{ x:460, y:205, r:64 }, puddle:{ x:675, y:340, rx:111, ry:52 }, rival:{ x:326, y:426, r:76 } },
    { mode:'decoy', patrol:true, decoy:{x:560,y:112}, nest:{ x:108, y:430, r:54 }, food:{ x:848, y:410, shape:'donut', key:'foodDonut', radius:55 }, rock:{ x:460, y:406, r:67 }, puddle:{ x:312, y:196, rx:104, ry:48 }, rival:{ x:665, y:210, r:78 } },
    { mode:'night', nest:{ x:842, y:430, r:50 }, food:{ x:130, y:112, shape:'cheese', key:'foodCheese', radius:48 }, rock:{ x:500, y:148, r:65 }, puddle:{ x:325, y:360, rx:110, ry:52 }, rival:{ x:590, y:390, r:80 } },
    { nest:{ x:120, y:122, r:72 }, food:{ x:840, y:422, shape:'baguette', key:'foodBaguette', radius:68, fragment:true }, rock:{ x:605, y:255, r:68 }, puddle:{ x:318, y:330, rx:120, ry:55 }, rival:{ x:430, y:430, r:76 } },
    { mode:'rush', nest:{ x:480, y:448, r:62 }, food:{ x:480, y:102, shape:'heart', key:'foodHeart', radius:62, skewer:true, fragment:true }, rock:{ x:278, y:248, r:68 }, puddle:{ x:694, y:370, rx:176, ry:78, huge:true }, rival:{ x:610, y:205, r:82 } },
    { nest:{ x:110, y:116, r:47 }, food:{ x:842, y:426, shape:'sausage', key:'foodSausage', radius:52 }, rock:{ x:526, y:272, r:72 }, puddle:{ x:290, y:366, rx:98, ry:46 }, rival:{ x:694, y:158, r:76 } },
    { nest:{ x:842, y:418, r:56 }, food:{ x:122, y:130, shape:'meatball', key:'foodMeatball', radius:42 }, rock:{ x:366, y:314, r:66 }, puddle:{ x:668, y:196, rx:108, ry:50 }, rival:{ x:516, y:414, r:79 } },
    { mode:'decoy', decoy:{x:205,y:405}, nest:{ x:486, y:112, r:41 }, food:{ x:818, y:424, shape:'donut', key:'foodDonut', radius:55 }, rock:{ x:614, y:286, r:65 }, puddle:{ x:262, y:210, rx:105, ry:49 }, rival:{ x:444, y:438, r:74 } },
    { mode:'rush', nest:{ x:124, y:426, r:65 }, food:{ x:812, y:116, shape:'heart', key:'foodHeart', radius:62 }, rock:{ x:354, y:188, r:64 }, puddle:{ x:620, y:362, rx:112, ry:52 }, rival:{ x:486, y:294, r:78 } },
    { mode:'decoy', decoy:{x:785,y:112}, nest:{ x:116, y:428, r:53 }, food:{ x:832, y:396, shape:'cheese', key:'foodCheese', radius:48 }, rock:{ x:446, y:384, r:66 }, puddle:{ x:328, y:184, rx:105, ry:49 }, rival:{ x:662, y:222, r:76 } },
    { nest:{ x:846, y:116, r:58 }, food:{ x:118, y:420, shape:'crescent', key:'foodCrescent', radius:58, skewer:true }, rock:{ x:430, y:264, r:69 }, puddle:{ x:646, y:376, rx:112, ry:52 }, rival:{ x:292, y:154, r:75 } },
    { nest:{ x:108, y:424, r:72 }, food:{ x:840, y:120, shape:'square', key:'foodSquare', radius:46 }, rock:{ x:516, y:154, r:65 }, puddle:{ x:362, y:337, rx:110, ry:51 }, rival:{ x:700, y:396, r:79 } },
    { mode:'rush', nest:{ x:850, y:420, r:68 }, food:{ x:112, y:120, shape:'baguette', key:'foodBaguette', radius:68 }, rock:{ x:408, y:358, r:68 }, puddle:{ x:666, y:202, rx:170, ry:78, huge:true }, rival:{ x:480, y:168, r:75 } },
    { mode:'night', patrol:true, nest:{ x:118, y:118, r:54 }, food:{ x:840, y:426, shape:'meatball', key:'foodMeatball', radius:42 }, rock:{ x:505, y:280, r:70 }, puddle:{ x:273, y:366, rx:106, ry:49 }, rival:{ x:676, y:176, r:80 } },
    { nest:{ x:840, y:126, r:49 }, food:{ x:116, y:420, shape:'donut', key:'foodDonut', radius:55, fragment:true }, rock:{ x:375, y:210, r:65 }, puddle:{ x:664, y:334, rx:110, ry:52 }, rival:{ x:525, y:426, r:77 } },
    { nest:{ x:112, y:428, r:40 }, food:{ x:842, y:120, shape:'heart', key:'foodHeart', radius:62, skewer:true, fragment:true }, rock:{ x:506, y:215, r:66 }, puddle:{ x:678, y:394, rx:108, ry:50 }, rival:{ x:325, y:396, r:79 } },
    { mode:'night', patrol:true, nest:{ x:486, y:432, r:52 }, food:{ x:480, y:104, shape:'square', key:'foodSquare', radius:46, skewer:true, fragment:true }, rock:{ x:274, y:225, r:68 }, puddle:{ x:690, y:384, rx:174, ry:80, huge:true }, rival:{ x:490, y:278, r:82 } }
  ];
  let levelIndex = 0;
  let nest, sausageStart, rock, puddle, rivalNest, foodConfig, missionMode, decoyPoint, mapTheme, bridgeLeaves, sceneProps;
  function buildSceneProps(theme, index) {
    const shift = (index % 3) * 22;
    if (theme === 'blanket') return [{ type:'jam', x:650-shift, y:390, r:46 }, { type:'cookie', x:202+shift, y:164, r:30 }, { type:'fork', x:752, y:106, r:0 }];
    if (theme === 'tile') return [{ type:'cap', x:270+shift, y:378, r:34 }, { type:'spoon', x:726, y:132, r:0 }, { type:'splash', x:536, y:454, r:28 }];
    if (theme === 'garden') return [{ type:'twig', x:700-shift, y:380, r:42 }, { type:'aphids', x:224, y:164, r:0 }, { type:'leaf', x:838, y:268, r:0 }];
    return [{ type:'pencil', x:286+shift, y:174, r:42 }, { type:'eraser', x:706, y:388, r:34 }, { type:'clip', x:150, y:340, r:0 }];
  }
  function loadLevel(index) {
    const level = levels[index];
    nest = { ...level.nest }; sausageStart = { x:level.food.x, y:level.food.y }; foodConfig = { ...level.food }; rock = { ...level.rock }; puddle = { ...level.puddle }; rivalNest = level.rival ? { ...level.rival, patrol:!!level.patrol, homeX:level.rival.x, homeY:level.rival.y } : null; missionMode = level.mode || 'standard'; decoyPoint = level.decoy ? { ...level.decoy } : null; bridgeLeaves = (level.bridgeLeaves || []).map(leaf => ({ ...leaf, collected:false })); mapTheme = ['blanket','tile','garden','desk'][index % 4]; sceneProps = buildSceneProps(mapTheme, index);
  }
  function currentFoodRadius() { return state?.fragmented ? foodConfig.radius * .62 : foodConfig.radius; }
  const ui = { ink: '#342b25', paper: '#fffaf2', coral: '#d97872', coralDark: '#b95251', moss: '#7e936c', gold: '#d8a34e', blue: '#9cc9d2', muted: '#7c6b61' };
  let pointer = null;
  let held = false;
  let started = false;
  let last = performance.now();
  let state;
  const heldKeys = new Set();
  const outfitCosts = [0, 24, 48, 80, 18, 30, 42, 56, 68, 84, 104, 128];
  // 暫時開放全部造型，方便測試衣櫥；正式版改成 false 即可恢復餅乾屑兌換。
  const wardrobeTestMode = true;
  let profile = { crumbs:0, owned:[0], equipped:0, completed:[] };
  try {
    const saved = JSON.parse(localStorage.getItem('ant-017-profile'));
    if (saved && Number.isFinite(saved.crumbs) && Array.isArray(saved.owned)) profile = { crumbs:saved.crumbs, owned:[0, ...saved.owned.filter(n => Number.isInteger(n) && n > 0 && n < outfitCosts.length)], equipped:Number.isInteger(saved.equipped) && saved.equipped >= 0 && saved.equipped < outfitCosts.length ? saved.equipped : 0, completed:Array.isArray(saved.completed) ? [...new Set(saved.completed.filter(n => Number.isInteger(n) && n >= 0 && n < levels.length))] : [] };
  } catch (_) {}
  function saveProfile() { try { localStorage.setItem('ant-017-profile', JSON.stringify(profile)); } catch (_) {} }
  function updateCrumbBank() { crumbBank.hidden = wardrobeTestMode; const amount = crumbBank.querySelector('b'); if (amount) amount.textContent = profile.crumbs; }
  function renderWardrobe() {
    const copy = wc();
    wardrobeButton.textContent = copy.button;
    wardrobeEyebrow.textContent = copy.eyebrow;
    wardrobeTitle.textContent = copy.title;
    wardrobeBalance.textContent = wardrobeTestMode
      ? (locale === 'en' ? 'Try-on mode — every outfit is unlocked.' : locale === 'ja' ? '試着モード：すべての服が使えます。' : '試穿模式：全部服裝已開放。')
      : copy.balance.replace('{n}', profile.crumbs);
    updateCrumbBank();
    wardrobeGrid.replaceChildren(...copy.outfits.map(([name, detail, icon], index) => {
      const owned = wardrobeTestMode || profile.owned.includes(index);
      const equipped = profile.equipped === index;
      const card = document.createElement('article');
      card.className = `outfit-card${equipped ? ' is-equipped' : ''}`;
      const button = document.createElement('button');
      if (equipped) button.textContent = copy.equipped;
      else if (owned) button.textContent = copy.equip;
      else if (profile.crumbs >= outfitCosts[index]) button.textContent = `${copy.redeem} · ${outfitCosts[index]} ${copy.crumbs}`;
      else { button.textContent = `${copy.need.replace('{n}', outfitCosts[index] - profile.crumbs)} ${copy.crumbs}`; button.disabled = true; }
      button.addEventListener('click', () => selectOutfit(index));
      card.innerHTML = `<span class="outfit-icon">${icon}</span><span><strong>${name}</strong><small>${detail}</small></span>`;
      card.append(button);
      return card;
    }));
  }
  function selectOutfit(index) {
    if (wardrobeTestMode) { profile.equipped = index; saveProfile(); renderWardrobe(); return; }
    if (!profile.owned.includes(index)) {
      if (profile.crumbs < outfitCosts[index]) return;
      profile.crumbs -= outfitCosts[index]; profile.owned.push(index);
    }
    profile.equipped = index; saveProfile(); renderWardrobe();
  }

  function reset() {
    loadLevel(levelIndex);
    const rush = missionMode === 'rush';
    state = {
      phase: rush ? 'carry' : 'scout', scout: { x: nest.x + 8, y: nest.y + 2, a: -0.6, found: false },
      sausage: { x: decoyPoint?.x ?? sausageStart.x, y: decoyPoint?.y ?? sausageStart.y, a: -0.12, scale: 1 },
      trail: [], team: [], recruitAt: 0, followStart: 0, complete: false, nextAt:0, burst: [], notice: null, jump: null, jumpUsed: false, bridgeBuilt:false, bites: 0, skewerRemoved: !foodConfig.skewer, fragmented: false, patrolStart: performance.now(), straggler:null, stragglerSeen:false, stragglerAt:performance.now() + 4400, stragglerEligible:levelIndex % 4 === 2
    };
    if (rush) { state.team = Array.from({ length: 16 }, (_, i) => ({ offset: i * Math.PI * 2 / 16, bob: Math.random() * Math.PI * 2 })); state.notice = { text:t('rush'), until:performance.now() + 1600 }; }
    pointer = null; held = false; last = performance.now();
    nextLevelButton.hidden = false;
    setUi();
  }

  function setObjective(el, kind) { el.className = `objective${kind ? ` is-${kind}` : ''}`; }
  function setUi() {
    const stageWord = locale === 'en' ? 'LEVEL' : locale === 'ja' ? 'ステージ' : '關卡';
    levelIndicator.textContent = `${stageWord} ${levelIndex + 1} / ${levels.length}`;
    jumpButton.hidden = !(puddle && puddle.huge && !puddle.bridge && state && state.phase === 'carry' && !state.jumpUsed);
    bridgeButton.hidden = !(puddle?.bridge && state && state.phase === 'carry' && !state.bridgeBuilt);
    bridgeButton.textContent = t('bridge');
    biteButton.hidden = !(state && ['cut','split'].includes(state.phase));
    biteButton.textContent = state?.phase === 'split' ? t('split') : t('bite');
    if (state.complete) {
      phaseKicker.textContent = t('doneKicker'); missionTitle.textContent = t('doneTitle');
      missionCopy.textContent = t('doneCopy'); characterLine.textContent = t('doneLine'); canvasLabel.textContent = t('doneLabel');
      canvasHint.textContent = t('doneHint'); liveStatus.textContent = t('doneStatus');
      setObjective(objectiveFind, 'done'); setObjective(objectiveReturn, 'done'); setObjective(objectiveCarry, 'done'); return;
    }
    if (state.phase === 'scout' && !state.scout.found) {
      phaseKicker.textContent = t('scoutKicker'); missionTitle.textContent = t('scoutTitle'); missionCopy.textContent = t('scoutCopy');
      characterLine.textContent = t('scoutLine'); canvasLabel.textContent = t('scoutLabel'); canvasHint.textContent = t('scoutHint'); liveStatus.textContent = t('scoutStatus');
      setObjective(objectiveFind, 'active'); setObjective(objectiveReturn, ''); setObjective(objectiveCarry, ''); return;
    }
    if (state.phase === 'scout') {
      phaseKicker.textContent = t('returnKicker'); missionTitle.textContent = t('returnTitle'); missionCopy.textContent = t('returnCopy');
      characterLine.textContent = t('returnLine'); canvasLabel.textContent = t('returnLabel'); canvasHint.textContent = t('returnHint'); liveStatus.textContent = t('returnStatus');
      setObjective(objectiveFind, 'done'); setObjective(objectiveReturn, 'active'); setObjective(objectiveCarry, ''); return;
    }
    if (state.phase === 'recruit') {
      phaseKicker.textContent = t('recruitKicker'); missionTitle.textContent = t('recruitTitle'); missionCopy.textContent = t('recruitCopy');
      characterLine.textContent = t('recruitLine'); canvasLabel.textContent = t('recruitLabel'); canvasHint.textContent = t('recruitHint'); liveStatus.textContent = t('recruitStatus');
      setObjective(objectiveFind, 'done'); setObjective(objectiveReturn, 'done'); setObjective(objectiveCarry, 'active'); return;
    }
    if (state.phase === 'follow') {
      phaseKicker.textContent = locale === 'en' ? 'PHEROMONE TRAIL' : locale === 'ja' ? 'においの道' : '費洛蒙路徑';
      missionTitle.textContent = locale === 'en' ? 'The colony follows 017’s scent' : locale === 'ja' ? '仲間が017のにおいをたどる' : '蟻群正在跟著 017 的氣味走';
      missionCopy.textContent = locale === 'en' ? 'Your return route is now the colony’s map.' : locale === 'ja' ? '帰り道が、仲間の地図になった。' : '你回巢時走出的路線，現在就是蟻群的地圖。';
      characterLine.textContent = locale === 'en' ? '“Stay on the pink trail!”' : locale === 'ja' ? '「ピンクの道から離れないで！」' : '「不要離開粉紅色的路！」';
      canvasLabel.textContent = locale === 'en' ? 'FOLLOWING TRAIL' : locale === 'ja' ? 'においを追跡中' : '跟隨費洛蒙'; canvasHint.textContent = locale === 'en' ? 'Watch the colony travel' : locale === 'ja' ? '仲間を見守ろう' : '看蟻群沿著路線前進'; liveStatus.textContent = locale === 'en' ? 'Pheromone trail active.' : locale === 'ja' ? 'においの道が働いている。' : '費洛蒙路徑正在發揮作用。';
      setObjective(objectiveFind, 'done'); setObjective(objectiveReturn, 'done'); setObjective(objectiveCarry, 'active'); return;
    }
    if (state.phase === 'cut') {
      phaseKicker.textContent = locale === 'en' ? 'PREPARE FOOD' : locale === 'ja' ? '食べ物の準備' : '處理食物';
      missionTitle.textContent = locale === 'en' ? 'Bite through the skewer' : locale === 'ja' ? '竹串をかみ切ろう' : '先咬斷竹籤';
      missionCopy.textContent = t('cutHint'); characterLine.textContent = locale === 'en' ? '“Bite together!”' : locale === 'ja' ? '「みんなでかみ切ろう！」' : '「大家一起咬！」';
      canvasLabel.textContent = locale === 'en' ? 'CUTTING' : locale === 'ja' ? 'かみ切り中' : '咬斷竹籤'; canvasHint.textContent = `${t('bite')} ${state.bites} / 3`; liveStatus.textContent = t('cutHint');
      setObjective(objectiveFind, 'done'); setObjective(objectiveReturn, 'done'); setObjective(objectiveCarry, 'active'); return;
    }
    if (state.phase === 'split') {
      phaseKicker.textContent = locale === 'en' ? 'PREPARE FOOD' : locale === 'ja' ? '食べ物の準備' : '處理食物';
      missionTitle.textContent = locale === 'en' ? 'Break it into pieces' : locale === 'ja' ? '小さく分けよう' : '把食物分碎';
      missionCopy.textContent = t('splitHint'); characterLine.textContent = locale === 'en' ? '“Small pieces fit better.”' : locale === 'ja' ? '「小さければ運びやすい。」' : '「變小才搬得進去。」';
      canvasLabel.textContent = locale === 'en' ? 'SPLITTING' : locale === 'ja' ? '分けている' : '分碎食物'; canvasHint.textContent = `${t('split')} ${state.bites} / 2`; liveStatus.textContent = t('splitHint');
      setObjective(objectiveFind, 'done'); setObjective(objectiveReturn, 'done'); setObjective(objectiveCarry, 'active'); return;
    }
    phaseKicker.textContent = t('carryKicker'); missionTitle.textContent = t('carryTitle'); missionCopy.textContent = t('carryCopy');
    characterLine.textContent = t('carryLine'); canvasLabel.textContent = t('carryLabel'); canvasHint.textContent = t('carryHint'); liveStatus.textContent = t('carryStatus');
    setObjective(objectiveFind, 'done'); setObjective(objectiveReturn, 'done'); setObjective(objectiveCarry, 'active');
  }

  function p(e) { const r = canvas.getBoundingClientRect(); return { x: (e.clientX - r.left) * W / r.width, y: (e.clientY - r.top) * H / r.height }; }
  function distance(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
  function ellipseContains(x, y) { return ((x - puddle.x) ** 2) / puddle.rx ** 2 + ((y - puddle.y) ** 2) / puddle.ry ** 2 < 1; }
  function moveToward(o, target, speed, dt) {
    const dx = target.x - o.x, dy = target.y - o.y, d = Math.hypot(dx, dy);
    if (d < .5) return;
    const step = Math.min(d, speed * dt / 1000);
    o.x += dx / d * step; o.y += dy / d * step; o.a = Math.atan2(dy, dx);
  }
  function sceneBlocked(point, padding = 0) { return sceneProps.some(prop => ['cap','twig','pencil','eraser'].includes(prop.type) && distance(point, prop) < prop.r + padding); }
  function inSticky(point) { const jam = sceneProps.find(prop => prop.type === 'jam'); return !!jam && distance(point, jam) < jam.r; }

  function update(dt, now) {
    if (!started || state.paused) return;
    if (state.complete) {
      if (state.nextAt && now >= state.nextAt && levelIndex < levels.length - 1) chooseLevel(levelIndex + 1);
      return;
    }
    if (rivalNest?.patrol) {
      const orbit = (now - state.patrolStart) / 1300;
      rivalNest.x = rivalNest.homeX + Math.cos(orbit) * 48;
      rivalNest.y = rivalNest.homeY + Math.sin(orbit * 1.25) * 28;
    }
    if (state.jump) {
      const progress = Math.min(1, (now - state.jump.startedAt) / 620);
      const eased = progress < .5 ? 2 * progress * progress : 1 - ((-2 * progress + 2) ** 2) / 2;
      state.sausage.x = state.jump.start.x + (state.jump.end.x - state.jump.start.x) * eased;
      state.sausage.y = state.jump.start.y + (state.jump.end.y - state.jump.start.y) * eased;
      state.sausage.lift = Math.sin(progress * Math.PI) * 28;
      if (progress >= 1) { state.sausage.lift = 0; state.jump = null; }
      return;
    }
    const keyboardDirection = {
      x: (heldKeys.has('KeyD') || heldKeys.has('ArrowRight') ? 1 : 0) - (heldKeys.has('KeyA') || heldKeys.has('ArrowLeft') ? 1 : 0),
      y: (heldKeys.has('KeyS') || heldKeys.has('ArrowDown') ? 1 : 0) - (heldKeys.has('KeyW') || heldKeys.has('ArrowUp') ? 1 : 0)
    };
    const hasKeys = keyboardDirection.x !== 0 || keyboardDirection.y !== 0;
    const scoutTarget = pointer || (hasKeys ? { x: state.scout.x + keyboardDirection.x * 160, y: state.scout.y + keyboardDirection.y * 160 } : null);
    if (state.phase === 'scout' && scoutTarget) {
      const previousScout = { x: state.scout.x, y: state.scout.y };
      moveToward(state.scout, scoutTarget, inSticky(state.scout) ? 112 : 210, dt);
      if (rivalNest && distance(state.scout, rivalNest) < rivalNest.r + 24) {
        state.scout.x = previousScout.x; state.scout.y = previousScout.y;
        state.notice = { text: t('rival'), until: now + 900 };
      }
      if (sceneBlocked(state.scout, 18)) {
        state.scout.x = previousScout.x; state.scout.y = previousScout.y;
        state.notice = { text: t('sceneBlock'), until: now + 900 };
      } else if (inSticky(state.scout)) state.notice = { text: t('sticky'), until: now + 700 };
      if (state.scout.found) {
        state.trail.push({ x: state.scout.x, y: state.scout.y });
        if (state.trail.length > 520) state.trail.shift();
      }
      bridgeLeaves.forEach(leaf => {
        if (!leaf.collected && distance(state.scout, leaf) < 28) {
          leaf.collected = true;
          const remaining = bridgeLeaves.filter(item => !item.collected).length;
          state.notice = { text: remaining ? `${t('bridgeLeaves')} (${3 - remaining}/3)` : t('bridgeNear'), until:now + 1500 };
        }
      });
      if (!state.scout.found && distance(state.scout, state.sausage) < currentFoodRadius() + 18) {
        if (missionMode === 'decoy' && decoyPoint) {
          decoyPoint = null;
          state.sausage.x = sausageStart.x; state.sausage.y = sausageStart.y;
          state.notice = { text:t('decoy'), until:now + 1800 };
          return;
        }
        state.scout.found = true;
        state.notice = { text: t('found'), until: now + 1500 };
        setUi();
      }
      if (state.scout.found && distance(state.scout, nest) < nest.r - 4) {
        state.phase = 'recruit'; state.recruitAt = now; pointer = null;
        state.notice = { text: t('recruiting'), until: now + 2000 }; setUi();
      }
    }
    if (state.phase === 'recruit' && now - state.recruitAt > 1800) {
      state.phase = 'follow'; state.followStart = now;
      state.team = Array.from({ length: 16 }, (_, i) => ({ offset: i * Math.PI * 2 / 16, bob: Math.random() * Math.PI * 2 }));
      state.notice = { text: locale === 'en' ? 'The colony follows the pheromone trail!' : locale === 'ja' ? '仲間がにおいの道をたどる！' : '蟻群跟著費洛蒙路徑出發！', until: now + 1600 }; setUi();
    }
    if (state.phase === 'follow' && now - state.followStart > 2100) {
      state.phase = !state.skewerRemoved ? 'cut' : foodConfig.fragment && !state.fragmented ? 'split' : 'carry';
      if (state.phase === 'carry') state.stragglerAt = now + 3800;
      state.notice = { text: state.phase === 'cut' ? t('cutHint') : state.phase === 'split' ? t('splitHint') : t('depart'), until: now + 1400 }; setUi();
    }
    const carryTarget = pointer || (hasKeys ? { x: state.sausage.x + keyboardDirection.x * 160, y: state.sausage.y + keyboardDirection.y * 160 } : null);
    if (state.phase === 'delivery') {
      const elapsed = Math.min(1, (now - state.delivery.startedAt) / 1150);
      const eased = 1 - (1 - elapsed) ** 3;
      state.sausage.x = state.delivery.x + (nest.x - state.delivery.x) * eased;
      state.sausage.y = state.delivery.y + (nest.y - state.delivery.y) * eased;
      state.sausage.scale = 1 - eased * .82;
      if (elapsed >= 1) {
        state.complete = true;
        state.nextAt = levelIndex < levels.length - 1 ? now + 2300 : 0;
        if (!profile.completed.includes(levelIndex)) { profile.completed.push(levelIndex); saveProfile(); }
        if (!wardrobeTestMode) { profile.crumbs += 12; saveProfile(); updateCrumbBank(); state.notice = { text: wc().reward, until: now + 2600 }; }
        for (let i = 0; i < 34; i++) state.burst.push({ a: Math.random() * Math.PI * 2, r: 0, v: 45 + Math.random() * 80, hue: i % 2 ? ui.gold : ui.coral });
        setUi();
        nextLevelButton.hidden = false;
        window.PokiBridge?.gameplayStop();
      }
    }
    if (state.phase === 'carry' && carryTarget) {
      const s = state.sausage;
      const dx = carryTarget.x - s.x, dy = carryTarget.y - s.y, d = Math.hypot(dx, dy);
      if (d > 9) {
        const step = Math.min(d, (inSticky(s) ? 58 : 120) * dt / 1000);
        const next = { x: s.x + dx / d * step, y: s.y + dy / d * step };
        const rivalTooNear = rivalNest && distance(next, rivalNest) < rivalNest.r + currentFoodRadius();
        const propTooNear = sceneBlocked(next, currentFoodRadius());
        if (distance(next, rock) > rock.r + currentFoodRadius() && (!ellipseContains(next.x, next.y) || state.bridgeBuilt) && !rivalTooNear && !propTooNear) {
          s.x = next.x; s.y = next.y; s.a = Math.atan2(dy, dx);
        } else if (!state.notice || now > state.notice.until - 500) {
          state.notice = { text: distance(next, rock) <= rock.r + currentFoodRadius() ? t('rock') : rivalTooNear ? t('rival') : propTooNear ? t('sceneBlock') : puddle.bridge ? t('bridgeNear') : t('puddle'), until: now + 1050 };
        }
      }
      if (distance(s, nest) < nest.r - 2) {
        state.phase = 'delivery'; pointer = null;
        jumpButton.hidden = true;
        state.delivery = { x:s.x, y:s.y, startedAt:now };
        state.notice = { text: t('delivering'), until: now + 1100 };
      }
    }
    if (state.phase === 'carry' && state.stragglerEligible && !state.stragglerSeen && !state.straggler && now > state.stragglerAt) {
      state.straggler = { startedAt:now, until:now + 2500, grip:3 };
      state.notice = { text:t('straggler'), until:now + 1700 };
    }
    if (state.straggler && now >= state.straggler.until) {
      state.straggler = null; state.stragglerSeen = true;
      state.notice = { text:t('rejoined'), until:now + 1500 };
    }
    state.burst.forEach(b => b.r += b.v * dt / 1000);
    state.burst = state.burst.filter(b => b.r < 135);
  }

  function rr(x, y, w, h, r, fill, stroke) { ctx.beginPath(); ctx.roundRect(x, y, w, h, r); if (fill) { ctx.fillStyle = fill; ctx.fill(); } if (stroke) { ctx.strokeStyle = stroke; ctx.stroke(); } }
  function label(text, x, y, size, color, align = 'center') { ctx.fillStyle = color; ctx.font = `600 ${size}px ui-rounded, system-ui, sans-serif`; ctx.textAlign = align; ctx.textBaseline = 'middle'; ctx.fillText(text, x, y); }
  function path(points, stroke, width, alpha = 1) { if (points.length < 2) return; ctx.save(); ctx.globalAlpha = alpha; ctx.strokeStyle = stroke; ctx.lineWidth = width; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(points[0].x, points[0].y); points.forEach(q => ctx.lineTo(q.x, q.y)); ctx.stroke(); ctx.restore(); }

  function drawMap() {
    if (mapTheme === 'tile') {
      ctx.fillStyle = '#e5ebeb'; ctx.fillRect(0,0,W,H); ctx.strokeStyle = 'rgba(103,130,132,.3)'; ctx.lineWidth=3;
      for(let x=0;x<W;x+=96){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();} for(let y=0;y<H;y+=96){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
      return;
    }
    if (mapTheme === 'garden') {
      ctx.fillStyle = '#8e7158'; ctx.fillRect(0,0,W,H); ctx.fillStyle='rgba(65,47,35,.24)'; for(let i=0;i<95;i++){const x=(i*89)%W,y=(i*53)%H;ctx.beginPath();ctx.arc(x,y,(i%4)+1,0,Math.PI*2);ctx.fill();}
      ctx.fillStyle='#758d61'; [[58,80],[890,72],[65,472],[880,465],[350,36]].forEach(([x,y])=>{ctx.beginPath();ctx.ellipse(x,y,30,11,.5,0,Math.PI*2);ctx.fill();});
      return;
    }
    if (mapTheme === 'desk') {
      ctx.fillStyle = '#cda77d'; ctx.fillRect(0,0,W,H); ctx.strokeStyle='rgba(112,74,45,.24)'; ctx.lineWidth=4;
      for(let y=24;y<H;y+=52){ctx.beginPath();ctx.moveTo(0,y);ctx.bezierCurveTo(W*.25,y-8,W*.7,y+8,W,y-2);ctx.stroke();}
      return;
    }
    ctx.fillStyle = '#f7eadb'; ctx.fillRect(0, 0, W, H);
    const size = 72;
    for (let x = -size; x < W + size; x += size) for (let y = -size; y < H + size; y += size) {
      ctx.fillStyle = ((x / size + y / size) % 2 === 0) ? 'rgba(211,117,111,.13)' : 'rgba(255,255,255,.34)';
      ctx.fillRect(x, y, size, size);
    }
    ctx.strokeStyle = 'rgba(194,111,103,.17)'; ctx.lineWidth = 2;
    for (let x = 0; x <= W; x += size) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y <= H; y += size) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
    ctx.fillStyle = 'rgba(255,250,242,.28)';
    for (let i = 0; i < 70; i++) { const x = (i * 127) % W, y = (i * 73) % H; ctx.fillRect(x, y, 1, 1); }
  }
  function drawGrass() {
    const clusters = [[38,45],[916,61],[42,492],[913,486],[178,40],[830,498]];
    ctx.strokeStyle = '#73905f'; ctx.lineCap = 'round'; ctx.lineWidth = 4;
    clusters.forEach(([x,y]) => { for (let i = -3; i <= 3; i++) { ctx.beginPath(); ctx.moveTo(x + i * 9, y + 16); ctx.quadraticCurveTo(x + i * 7, y - 2, x + i * 14, y - 10); ctx.stroke(); } });
  }
  function drawSceneProps() {
    sceneProps.forEach(prop => {
      ctx.save(); ctx.translate(prop.x, prop.y);
      if (prop.type === 'jam') {
        ctx.fillStyle='rgba(205,96,75,.58)'; ctx.beginPath(); ctx.ellipse(0,0,prop.r,prop.r*.56,-.18,0,Math.PI*2); ctx.fill();
        ctx.strokeStyle='rgba(255,230,207,.82)'; ctx.lineWidth=3; ctx.beginPath(); ctx.ellipse(-7,-4,prop.r*.47,prop.r*.21,-.2,.15,2.8); ctx.stroke();
        label('果汁',0,prop.r*.78,11,'#a45148');
      } else if (prop.type === 'cookie') {
        ctx.fillStyle='#d79a4c'; ctx.beginPath(); ctx.arc(0,0,prop.r,0,Math.PI*2); ctx.fill(); ctx.fillStyle='#8a542b'; [[-9,-7],[8,-5],[-4,10],[13,9]].forEach(([x,y])=>{ctx.beginPath();ctx.arc(x,y,3,0,Math.PI*2);ctx.fill();});
      } else if (prop.type === 'fork') {
        ctx.strokeStyle='#b5bec0'; ctx.lineWidth=8; ctx.lineCap='round'; ctx.beginPath();ctx.moveTo(-42,26);ctx.lineTo(27,-19);ctx.stroke(); ctx.lineWidth=4; for(let i=-9;i<=9;i+=6){ctx.beginPath();ctx.moveTo(25+i,-22-i*.12);ctx.lineTo(38+i,-31-i*.12);ctx.stroke();}
      } else if (prop.type === 'cap') {
        ctx.fillStyle='#77a8bd';ctx.beginPath();ctx.arc(0,0,prop.r,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#d7edf0';ctx.lineWidth=3;ctx.beginPath();ctx.arc(0,0,prop.r*.66,0,Math.PI*2);ctx.stroke(); for(let a=0;a<Math.PI*2;a+=Math.PI/6){ctx.beginPath();ctx.moveTo(Math.cos(a)*25,Math.sin(a)*25);ctx.lineTo(Math.cos(a)*33,Math.sin(a)*33);ctx.stroke();}
      } else if (prop.type === 'spoon') {
        ctx.rotate(-.42);ctx.fillStyle='#b9c5c7';ctx.beginPath();ctx.ellipse(-20,-13,17,25,-.15,0,Math.PI*2);ctx.fill();ctx.fillRect(-5,-18,76,12);ctx.fillStyle='rgba(255,255,255,.55)';ctx.beginPath();ctx.ellipse(-24,-20,7,12,-.15,0,Math.PI*2);ctx.fill();
      } else if (prop.type === 'splash') {
        ctx.fillStyle='rgba(133,194,210,.48)';ctx.beginPath();ctx.ellipse(0,0,36,18,.15,0,Math.PI*2);ctx.fill();ctx.fillStyle='rgba(255,255,255,.7)';ctx.beginPath();ctx.ellipse(-8,-4,16,5,.15,0,Math.PI*2);ctx.fill();
      } else if (prop.type === 'twig') {
        ctx.rotate(-.38);ctx.strokeStyle='#69483a';ctx.lineWidth=13;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-47,0);ctx.lineTo(47,0);ctx.stroke();ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(8,0);ctx.lineTo(27,-25);ctx.stroke();ctx.beginPath();ctx.moveTo(-18,0);ctx.lineTo(-31,19);ctx.stroke();
      } else if (prop.type === 'aphids') {
        ctx.strokeStyle='#5d7c4c';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(-28,19);ctx.quadraticCurveTo(0,-20,28,19);ctx.stroke();ctx.fillStyle='#91ad68';[[-15,5],[0,-4],[15,5]].forEach(([x,y])=>{ctx.beginPath();ctx.ellipse(x,y,8,5,.3,0,Math.PI*2);ctx.fill();});
      } else if (prop.type === 'leaf') {
        ctx.rotate(-.55);ctx.fillStyle='#718e58';ctx.beginPath();ctx.ellipse(0,0,30,14,0,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#d5e2b9';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(-25,0);ctx.lineTo(27,0);ctx.stroke();
      } else if (prop.type === 'pencil') {
        ctx.rotate(-.52);rr(-58,-8,103,16,4,'#e3b84d','#805c38');ctx.fillStyle='#f3dfb3';ctx.beginPath();ctx.moveTo(45,-8);ctx.lineTo(64,0);ctx.lineTo(45,8);ctx.fill();ctx.fillStyle='#3f342d';ctx.beginPath();ctx.moveTo(59,-3);ctx.lineTo(67,0);ctx.lineTo(59,3);ctx.fill();
      } else if (prop.type === 'eraser') {
        ctx.rotate(-.16);rr(-34,-19,68,38,8,'#e98f9c','#ae5e6b');ctx.fillStyle='rgba(255,255,255,.34)';ctx.fillRect(-24,-11,42,6);
      } else if (prop.type === 'clip') {
        ctx.strokeStyle='#9ba7ab';ctx.lineWidth=6;ctx.beginPath();ctx.ellipse(0,0,15,28,.55,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.ellipse(0,0,8,20,.55,0,Math.PI*2);ctx.stroke();
      }
      ctx.restore();
    });
  }
  function drawNest() {
    ctx.save(); ctx.translate(nest.x, nest.y);
    ctx.fillStyle = '#b77c57'; ctx.beginPath(); ctx.arc(0, 0, nest.r, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#8b5a43'; ctx.beginPath(); ctx.arc(0, 0, nest.r * .56, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#53362c'; ctx.beginPath(); ctx.arc(0, 0, nest.r * .35, 0, Math.PI * 2); ctx.fill();
    ctx.restore(); label(t('nest'), nest.x, nest.y + 68, 15, ui.ink);
  }
  function drawRock() {
    ctx.save(); ctx.translate(rock.x, rock.y); ctx.rotate(-.18);
    ctx.fillStyle = '#9b928b'; ctx.beginPath(); ctx.moveTo(-51,22); ctx.lineTo(-42,-30); ctx.lineTo(-7,-51); ctx.lineTo(43,-28); ctx.lineTo(55,23); ctx.lineTo(22,47); ctx.lineTo(-32,42); ctx.closePath(); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,.23)'; ctx.beginPath(); ctx.moveTo(-36,-21); ctx.lineTo(-7,-40); ctx.lineTo(23,-23); ctx.lineTo(-4,-13); ctx.closePath(); ctx.fill(); ctx.restore(); label(t('stone'), rock.x, rock.y + 79, 14, ui.muted);
  }
  function drawRivalNest(now) {
    if (!rivalNest) return;
    const r = rivalNest;
    ctx.save(); ctx.globalAlpha = .12; ctx.fillStyle = '#c85f52'; ctx.beginPath(); ctx.arc(r.x, r.y, r.r + 25, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    ctx.save(); ctx.translate(r.x, r.y); ctx.fillStyle = '#c86a56'; ctx.beginPath(); ctx.arc(0, 0, r.r, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#703b31'; ctx.beginPath(); ctx.arc(0, 0, r.r * .48, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    for (let i = 0; i < 5; i++) { const a = now / 700 + i * Math.PI * 2 / 5; drawAnt(r.x + Math.cos(a) * (r.r + 13), r.y + Math.sin(a) * (r.r + 13), a + Math.PI / 2, .37); }
    label(t('rivalNest'), r.x, r.y + r.r + 27, 13, '#8e4238');
    if (r.patrol) label(t('patrol'), r.x, r.y + r.r + 43, 11, '#b95251');
  }
  function drawPuddle() {
    ctx.save(); ctx.translate(puddle.x, puddle.y); ctx.fillStyle = puddle.huge ? 'rgba(102,177,195,.7)' : 'rgba(137,197,210,.55)'; ctx.beginPath(); ctx.ellipse(0,0,puddle.rx,puddle.ry, -.12, 0, Math.PI*2); ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,.75)'; ctx.lineWidth = puddle.huge ? 5 : 3; ctx.beginPath(); ctx.ellipse(-9,-5,puddle.rx*.55,puddle.ry*.42,-.15,.2,2.8); ctx.stroke(); ctx.restore(); label(puddle.huge ? t('bigWater') : t('water'), puddle.x, puddle.y + puddle.ry + 18, 14, ui.muted);
  }
  function drawBridgeLeaves() {
    bridgeLeaves.forEach(leaf => {
      if (leaf.collected) return;
      ctx.save(); ctx.translate(leaf.x, leaf.y); ctx.rotate(leaf.a || -.4);
      ctx.fillStyle = '#7a9e62'; ctx.beginPath(); ctx.ellipse(0,0,18,8,0,0,Math.PI*2); ctx.fill();
      ctx.strokeStyle = '#dbe9bf'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(-13,0); ctx.lineTo(14,0); ctx.stroke(); ctx.restore();
      label('葉', leaf.x, leaf.y + 20, 11, '#557042');
    });
  }
  function drawBridge() {
    if (!state.bridgeBuilt) return;
    ctx.save(); ctx.translate(puddle.x, puddle.y); ctx.rotate(-.12);
    for (let x = -puddle.rx + 12; x < puddle.rx; x += 26) { rr(x,-12,23,24,5,'#87a86d','#5d7b4d'); }
    ctx.restore();
  }
  function drawFood() {
    const s = state.sausage; const scale = (s.scale || 1) * (state.fragmented ? .62 : 1); const lift = s.lift || 0; ctx.save(); ctx.translate(s.x,s.y-lift); ctx.rotate(s.a); ctx.scale(scale,scale);
    ctx.fillStyle = 'rgba(73,42,36,.12)'; ctx.beginPath(); ctx.ellipse(7,30,foodConfig.radius + 20,18,0,0,Math.PI*2); ctx.fill();
    if (missionMode === 'decoy' && decoyPoint) {
      ctx.fillStyle = '#9b928b'; ctx.beginPath(); ctx.moveTo(-42,18); ctx.lineTo(-31,-28); ctx.lineTo(7,-42); ctx.lineTo(43,-12); ctx.lineTo(36,29); ctx.lineTo(-12,40); ctx.closePath(); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.2)'; ctx.beginPath(); ctx.ellipse(-12,-18,19,9,-.4,0,Math.PI*2); ctx.fill(); ctx.restore(); label('?',s.x,s.y-lift,22,'#574c45'); return;
    }
    if (foodConfig.shape === 'sausage') {
      rr(-80,-25,160,62,30,'#a9504c');
      const meat = ctx.createLinearGradient(0,-31,0,31); meat.addColorStop(0,'#f3a299');meat.addColorStop(.42,'#db7770');meat.addColorStop(1,'#bd5c59'); rr(-80,-31,160,57,29,meat);
      ctx.fillStyle='rgba(255,230,216,.54)';ctx.beginPath();ctx.ellipse(-19,-14,49,11,-.08,0,Math.PI*2);ctx.fill();
      ctx.strokeStyle='rgba(125,54,48,.52)';ctx.lineWidth=4;[-42,-4,35].forEach(x=>{ctx.beginPath();ctx.moveTo(x,-17);ctx.quadraticCurveTo(x+8,0,x,17);ctx.stroke();});
      ctx.fillStyle='rgba(255,245,230,.32)';[-58,5,56].forEach((x,i)=>{ctx.beginPath();ctx.arc(x,-5+i*4,3,0,Math.PI*2);ctx.fill();});
    } else if (foodConfig.shape === 'crescent') {
      ctx.strokeStyle = '#a9504c'; ctx.lineWidth = 49; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(0,8,53,.2,Math.PI-.2); ctx.stroke();
      ctx.strokeStyle = '#df7f77'; ctx.lineWidth = 43; ctx.beginPath(); ctx.arc(0,3,53,.2,Math.PI-.2); ctx.stroke();
      ctx.strokeStyle = 'rgba(255,220,204,.56)'; ctx.lineWidth = 10; ctx.beginPath(); ctx.arc(0,-3,51,.38,Math.PI-.38); ctx.stroke();
      ctx.strokeStyle='rgba(124,52,47,.42)';ctx.lineWidth=3;[.65,1.22,1.8,2.4].forEach(a=>{const x=Math.cos(a)*53,y=3+Math.sin(a)*53;ctx.beginPath();ctx.moveTo(x-5,y-7);ctx.lineTo(x+4,y+7);ctx.stroke();});
    } else if (foodConfig.shape === 'meatball') {
      const ball=ctx.createRadialGradient(-14,-17,4,0,4,51);ball.addColorStop(0,'#ed9e78');ball.addColorStop(.5,'#c8644c');ball.addColorStop(1,'#853f36');ctx.fillStyle=ball;ctx.beginPath();ctx.arc(0,0,45,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,213,178,.52)';ctx.beginPath();ctx.ellipse(-14,-16,17,9,-.55,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#8b4538';[[-20,12,5],[13,17,4],[21,-8,4],[-3,27,3]].forEach(([x,y,r])=>{ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();});
      ctx.strokeStyle='rgba(255,205,152,.32)';ctx.lineWidth=2;ctx.beginPath();ctx.arc(0,0,35,.2,1.4);ctx.stroke();
    } else if (foodConfig.shape === 'square') {
      rr(-44,-37,88,88,12,'#9f4c49'); const luncheon=ctx.createLinearGradient(0,-44,0,44);luncheon.addColorStop(0,'#ed9a91');luncheon.addColorStop(.52,'#d66f68');luncheon.addColorStop(1,'#b75351');rr(-44,-44,88,81,13,luncheon);
      ctx.fillStyle='rgba(255,226,210,.48)';ctx.beginPath();ctx.roundRect(-27,-30,52,15,7);ctx.fill();ctx.fillStyle='rgba(122,54,51,.35)';[-18,4,23].forEach(x=>{ctx.beginPath();ctx.arc(x,12,3,0,Math.PI*2);ctx.fill();});
      ctx.strokeStyle='rgba(255,235,216,.28)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(-34,22);ctx.lineTo(32,22);ctx.stroke();
    } else if (foodConfig.shape === 'baguette') {
      rr(-96,-20,192,54,27,'#a66c37');const bread=ctx.createLinearGradient(0,-27,0,27);bread.addColorStop(0,'#f2cb75');bread.addColorStop(.55,'#d99b48');bread.addColorStop(1,'#b97839');rr(-96,-27,192,51,26,bread);
      ctx.fillStyle='rgba(255,232,157,.48)';ctx.beginPath();ctx.ellipse(-18,-12,72,9,-.04,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#955829';ctx.lineWidth=6;[-48,-8,33].forEach(x=>{ctx.beginPath();ctx.moveTo(x,-17);ctx.lineTo(x+18,14);ctx.stroke();ctx.strokeStyle='rgba(255,224,136,.55)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(x+3,-16);ctx.lineTo(x+20,11);ctx.stroke();ctx.strokeStyle='#955829';ctx.lineWidth=6;});
    } else if (foodConfig.shape === 'donut') {
      ctx.fillStyle='#a75e47';ctx.beginPath();ctx.arc(0,6,56,0,Math.PI*2);ctx.fill();const glaze=ctx.createRadialGradient(-14,-19,6,0,0,62);glaze.addColorStop(0,'#f1a38e');glaze.addColorStop(.65,'#d97669');glaze.addColorStop(1,'#a94f47');ctx.fillStyle=glaze;ctx.beginPath();ctx.arc(0,0,56,0,Math.PI*2);ctx.fill();ctx.fillStyle='#8e5041';ctx.beginPath();ctx.arc(0,0,24,0,Math.PI*2);ctx.fill();ctx.fillStyle='#f4d9b5';ctx.beginPath();ctx.arc(0,-2,18,0,Math.PI*2);ctx.fill();
      [['#f0c55a',0],['#f6eee1',.7],['#85a77d',1.5],['#b96f9a',2.3],['#f0c55a',3.1],['#f6eee1',3.8],['#85a77d',4.6],['#b96f9a',5.4]].forEach(([c,a])=>{ctx.fillStyle=c;ctx.beginPath();ctx.roundRect(Math.cos(a)*39-4,Math.sin(a)*39-2,8,4,2);ctx.fill();});
    } else if (foodConfig.shape === 'cheese') {
      ctx.fillStyle='#b78128';ctx.beginPath();ctx.moveTo(-55,42);ctx.lineTo(63,28);ctx.lineTo(56,43);ctx.lineTo(-49,56);ctx.closePath();ctx.fill();ctx.fillStyle='#f0ca52';ctx.beginPath();ctx.moveTo(-55,42);ctx.lineTo(-42,-42);ctx.lineTo(63,28);ctx.closePath();ctx.fill();ctx.fillStyle='rgba(255,241,155,.56)';ctx.beginPath();ctx.moveTo(-38,-34);ctx.lineTo(44,23);ctx.lineTo(-38,31);ctx.closePath();ctx.fill();ctx.fillStyle='#b9822b';[[-18,-8,6],[15,19,7],[-19,25,5]].forEach(([x,y,r])=>{ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();ctx.fillStyle='rgba(116,75,24,.25)';ctx.beginPath();ctx.arc(x+2,y+3,r*.72,0,Math.PI*2);ctx.fill();ctx.fillStyle='#b9822b';});
    } else {
      ctx.fillStyle='#a85251';ctx.beginPath();ctx.moveTo(0,55);ctx.bezierCurveTo(-86,0,-39,-58,0,-20);ctx.bezierCurveTo(39,-58,86,0,0,55);ctx.fill();const heart=ctx.createLinearGradient(0,-48,0,49);heart.addColorStop(0,'#f19a93');heart.addColorStop(.55,'#d97070');heart.addColorStop(1,'#b65355');ctx.fillStyle=heart;ctx.beginPath();ctx.moveTo(0,49);ctx.bezierCurveTo(-86,-6,-39,-58,0,-25);ctx.bezierCurveTo(39,-58,86,-6,0,49);ctx.fill();ctx.fillStyle='rgba(255,224,211,.5)';ctx.beginPath();ctx.ellipse(-17,-20,18,8,-.45,0,Math.PI*2);ctx.fill();ctx.strokeStyle='rgba(127,55,54,.35)';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(-28,14);ctx.quadraticCurveTo(0,33,28,14);ctx.stroke();
    }
    if (!state.skewerRemoved) {
      ctx.strokeStyle = '#ba8646'; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-foodConfig.radius - 34, 0); ctx.lineTo(foodConfig.radius + 45, 0); ctx.stroke();
      ctx.fillStyle = '#855c32'; ctx.beginPath(); ctx.moveTo(foodConfig.radius + 45, 0); ctx.lineTo(foodConfig.radius + 29, -8); ctx.lineTo(foodConfig.radius + 29, 8); ctx.closePath(); ctx.fill();
    }
    ctx.restore();
    if (state.fragmented && !state.complete) {
      ctx.fillStyle = '#dc827a'; [-1,1].forEach(side => { ctx.beginPath(); ctx.arc(s.x + Math.cos(s.a + side * 1.6) * 40, s.y - lift + Math.sin(s.a + side * 1.6) * 32, 11, 0, Math.PI * 2); ctx.fill(); });
    }
    if(!state.complete) label(t(foodConfig.key), s.x, s.y-lift, 15 * scale, '#7e3737');
  }
  function drawAnt(x,y,a,scale,hero=false) {
    ctx.save(); ctx.translate(x,y); ctx.rotate(a); const c = hero ? '#49362d' : '#332b27';
    ctx.strokeStyle=c; ctx.lineWidth=Math.max(1.5,scale*2); ctx.lineCap='round';
    [-1,1].forEach(side => { [-8,0,8].forEach(o => { ctx.beginPath();ctx.moveTo(o*scale,side*3*scale);ctx.lineTo((o-6)*scale,side*12*scale);ctx.stroke(); }); ctx.beginPath();ctx.moveTo(15*scale,side*3*scale);ctx.lineTo(25*scale,side*12*scale);ctx.stroke(); });
    ctx.fillStyle=c; [[-10,6,6],[0,8,7],[13,6,6]].forEach(([xx,rx,ry])=>{ctx.beginPath();ctx.ellipse(xx*scale,0,rx*scale,ry*scale,0,0,Math.PI*2);ctx.fill();});
    if(hero) drawHeroOutfit(scale);
    ctx.restore();
  }
  function drawHeroOutfit(scale) {
    if (profile.equipped === 1) {
      ctx.fillStyle = '#73965f'; ctx.beginPath(); ctx.ellipse(-2*scale, -9*scale, 10*scale, 5*scale, -.4, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#9fba6f'; ctx.beginPath(); ctx.ellipse(5*scale, -12*scale, 6*scale, 3*scale, .5, 0, Math.PI * 2); ctx.fill();
    } else if (profile.equipped === 2) {
      ctx.strokeStyle = '#679ab6'; ctx.lineWidth = 4*scale; ctx.beginPath(); ctx.arc(5*scale, 2*scale, 8*scale, .2, Math.PI*1.75); ctx.stroke();
      ctx.fillStyle = '#679ab6'; ctx.beginPath(); ctx.moveTo(-2*scale, 8*scale); ctx.lineTo(-10*scale, 17*scale); ctx.lineTo(2*scale, 13*scale); ctx.closePath(); ctx.fill();
    } else if (profile.equipped === 3) {
      rr(-10*scale, -8*scale, 17*scale, 16*scale, 3*scale, '#c96b5e');
      ctx.strokeStyle = '#f5c879'; ctx.lineWidth = 2*scale; ctx.beginPath(); ctx.moveTo(4*scale,-8*scale);ctx.lineTo(4*scale,8*scale);ctx.stroke();
    } else if (profile.equipped === 4) {
      [-1,0,1,2,3].forEach(i=>{const a=i*Math.PI*2/5;ctx.fillStyle='#fff8ee';ctx.beginPath();ctx.ellipse((1+Math.cos(a)*7)*scale,(-10+Math.sin(a)*7)*scale,4*scale,2.6*scale,a,0,Math.PI*2);ctx.fill();});ctx.fillStyle='#efbd42';ctx.beginPath();ctx.arc(1*scale,-10*scale,3.6*scale,0,Math.PI*2);ctx.fill();
    } else if (profile.equipped === 5) {
      ctx.fillStyle='#d9534f';ctx.beginPath();ctx.arc(1*scale,-9*scale,9*scale,0,Math.PI*2);ctx.fill();ctx.fillStyle='#f7eadb';[[-2,-12],[4,-6]].forEach(([x,y])=>{ctx.beginPath();ctx.arc(x*scale,y*scale,1.7*scale,0,Math.PI*2);ctx.fill();});
    } else if (profile.equipped === 6) {
      ctx.fillStyle='#77a8ba';ctx.beginPath();ctx.arc(1*scale,-7*scale,10*scale,Math.PI,0);ctx.lineTo(11*scale,-4*scale);ctx.lineTo(-9*scale,-4*scale);ctx.closePath();ctx.fill();ctx.fillStyle='#567a8d';ctx.fillRect(-11*scale,-4*scale,24*scale,3*scale);ctx.fillStyle='#e9e2d3';ctx.beginPath();ctx.arc(1*scale,-6*scale,2*scale,0,Math.PI*2);ctx.fill();
    } else if (profile.equipped === 7) {
      ctx.strokeStyle='#8c98a2';ctx.lineWidth=3*scale;ctx.beginPath();ctx.roundRect(-11*scale,-10*scale,18*scale,19*scale,7*scale);ctx.stroke();ctx.beginPath();ctx.roundRect(-6*scale,-5*scale,10*scale,10*scale,4*scale);ctx.stroke();
    } else if (profile.equipped === 8) {
      ctx.fillStyle='#d79a4c';[-7,0,7].forEach(x=>{ctx.beginPath();ctx.arc(x*scale,-10*scale,4*scale,0,Math.PI*2);ctx.fill();});ctx.strokeStyle='#9c642d';ctx.lineWidth=2*scale;ctx.beginPath();ctx.moveTo(-10*scale,-5*scale);ctx.lineTo(10*scale,-5*scale);ctx.stroke();
    } else if (profile.equipped === 9) {
      ctx.fillStyle='#70a269';[[0,-13],[6,-9],[0,-5],[-6,-9]].forEach(([x,y])=>{ctx.beginPath();ctx.ellipse(x*scale,y*scale,4*scale,6*scale,0,0,Math.PI*2);ctx.fill();});ctx.strokeStyle='#578b54';ctx.lineWidth=2*scale;ctx.beginPath();ctx.moveTo(0,-7*scale);ctx.quadraticCurveTo(5*scale,0,10*scale,3*scale);ctx.stroke();
    } else if (profile.equipped === 10) {
      ctx.fillStyle='#e89aac';ctx.beginPath();ctx.ellipse(-4*scale,-8*scale,8*scale,12*scale,-.4,0,Math.PI*2);ctx.fill();ctx.fillStyle='#f3bbc5';ctx.beginPath();ctx.ellipse(5*scale,-7*scale,7*scale,11*scale,.45,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#c87991';ctx.lineWidth=2*scale;ctx.beginPath();ctx.moveTo(-8*scale,-2*scale);ctx.lineTo(12*scale,-2*scale);ctx.stroke();
    } else if (profile.equipped === 11) {
      ctx.fillStyle='#d95b52';ctx.beginPath();ctx.arc(-6*scale,0,9*scale,0,Math.PI*2);ctx.fill();ctx.fillStyle='#302c29';[[-9,-3],[-3,3],[-7,6]].forEach(([x,y])=>{ctx.beginPath();ctx.arc(x*scale,y*scale,1.8*scale,0,Math.PI*2);ctx.fill();});ctx.strokeStyle='#302c29';ctx.lineWidth=2*scale;ctx.beginPath();ctx.arc(-6*scale,0,9*scale,-1.5,1.5);ctx.stroke();
    } else {
      ctx.fillStyle='#f5c879';ctx.beginPath();ctx.moveTo(-1*scale,-10*scale);ctx.lineTo(8*scale,-5*scale);ctx.lineTo(3*scale,3*scale);ctx.lineTo(-5*scale,-4*scale);ctx.closePath();ctx.fill();
    }
  }
  function drawScout() { const s=state.scout; drawAnt(s.x,s.y,s.a,.95,true); label('017',s.x,s.y+28,13,ui.ink); if(!s.found){ const d=distance(s,state.sausage); if(d<250){ctx.save();ctx.globalAlpha=Math.max(.1,1-d/250);ctx.strokeStyle=ui.coral;ctx.lineWidth=3;ctx.beginPath();ctx.arc(s.x,s.y,23,-1.2,1.2);ctx.stroke();ctx.restore();} } }
  function drawTeam(now) {
    if(!['cut','split','carry','delivery'].includes(state.phase)||!state.team.length) return;
    const s=state.sausage;
    const foodScale = s.scale || 1;
    const roundFood = ['meatball','donut'].includes(foodConfig.shape);
    const grips = roundFood
      ? Array.from({length:14}, (_, i) => { const a = i * Math.PI * 2 / 14; const r = foodConfig.shape === 'donut' ? 66 : 55; return [Math.cos(a) * r, Math.sin(a) * r, a + Math.PI]; })
      : [
          [-55,-33, Math.PI/2],[-20,-34, Math.PI/2],[20,-34, Math.PI/2],[55,-32, Math.PI/2],
          [-55,33,-Math.PI/2],[-20,34,-Math.PI/2],[20,34,-Math.PI/2],[55,32,-Math.PI/2],
          [-86,-12,0],[-87,13,0],[86,-12,Math.PI],[87,13,Math.PI]
        ];
    grips.forEach(([gx,gy,dir],i)=>{
      if (state.straggler && i === state.straggler.grip) return;
      const bob = Math.sin(now / 130 + i * 1.7) * 2.4;
      const x=s.x+Math.cos(s.a)*(gx*foodScale)-Math.sin(s.a)*((gy+bob)*foodScale);
      const y=s.y-(s.lift||0)+Math.sin(s.a)*(gx*foodScale)+Math.cos(s.a)*((gy+bob)*foodScale);
      drawAnt(x,y,s.a+dir,.48*Math.max(.55,foodScale));
    });
    if (state.straggler) {
      const lost = state.straggler;
      const progress = Math.min(1, (now - lost.startedAt) / (lost.until - lost.startedAt));
      const lag = 178 - progress * 88;
      const x = s.x - Math.cos(s.a) * lag + Math.sin(s.a) * 34;
      const y = s.y - (s.lift || 0) - Math.sin(s.a) * lag - Math.cos(s.a) * 34;
      drawAnt(x, y, s.a + .25, .48 * Math.max(.55,foodScale));
      rr(x - 37, y - 43, 74, 24, 12, 'rgba(255,250,242,.93)');
      label(locale === 'en' ? 'Wait for me!' : locale === 'ja' ? '待って！' : '等等我！', x, y - 31, 11, ui.ink);
      const callerX = s.x - Math.cos(s.a) * 72 - Math.sin(s.a) * 50;
      const callerY = s.y - Math.sin(s.a) * 72 + Math.cos(s.a) * 50;
      rr(callerX - 34, callerY - 39, 68, 22, 11, 'rgba(255,250,242,.93)');
      label(locale === 'en' ? 'Hey!' : locale === 'ja' ? 'こっち！' : '快跟上！', callerX, callerY - 28, 10, ui.ink);
    }
    const leaderX=s.x-110*foodScale*Math.cos(s.a), leaderY=s.y-(s.lift||0)-110*foodScale*Math.sin(s.a);
    drawAnt(leaderX,leaderY,s.a,.7*Math.max(.55,foodScale),true);
    label('017',leaderX,leaderY+24,12,ui.ink);
  }
  function drawRecruit(now) { if(state.phase!=='recruit') return; for(let i=0;i<11;i++){ const a=i*Math.PI*2/11+now/900; drawAnt(nest.x+Math.cos(a)*42,nest.y+Math.sin(a)*31,a+.7,.42); } }
  function drawFollowTrail(now) {
    if (state.phase !== 'follow' || state.trail.length < 2) return;
    const elapsed = Math.min(1, (now - state.followStart) / 2100);
    const points = state.trail;
    for (let i = 0; i < 16; i++) {
      const progress = Math.max(0, elapsed - i * .045);
      const index = Math.max(0, Math.min(points.length - 1, Math.floor((1 - progress) * (points.length - 1))));
      const q = points[index]; const next = points[Math.max(0, index - 2)];
      const angle = Math.atan2(next.y - q.y, next.x - q.x);
      const wobble = Math.sin(now / 120 + i * 1.9) * 3;
      drawAnt(q.x + Math.cos(angle + Math.PI / 2) * wobble, q.y + Math.sin(angle + Math.PI / 2) * wobble, angle, i === 0 ? .7 : .43, i === 0);
    }
  }
  function drawOverlay(now) {
    if(state.notice && now<state.notice.until){ const alpha=Math.min(1,(state.notice.until-now)/200); ctx.save();ctx.globalAlpha=Math.min(1,alpha);rr(W/2-118,28,236,38,19,'rgba(255,250,242,.92)');label(state.notice.text,W/2,47,14,ui.ink);ctx.restore(); }
    if(state.complete){
      ctx.save();ctx.fillStyle='rgba(255,250,242,.84)';ctx.fillRect(0,0,W,H);ctx.restore();
      label(t('success'),W/2,H/2-34,34,ui.ink); label(t('successSub'),W/2,H/2+4,18,ui.muted);
      if (!wardrobeTestMode) {
        [-28,0,28].forEach((offset,i)=>drawCanvasCrumb(W/2+offset,H/2+40,i));
        label(`${wc().reward}  →  ${wc().button}`,W/2,H/2+76,16,'#8c672b');
      } else label(locale === 'en' ? 'All outfits are open in try-on mode.' : locale === 'ja' ? '試着モード：すべての服が使えます。' : '試穿模式：全部服裝都能直接換上。',W/2,H/2+48,16,'#8c672b');
    }
    state.burst.forEach(b=>{ctx.fillStyle=b.hue;ctx.beginPath();ctx.arc(nest.x+Math.cos(b.a)*b.r,nest.y+Math.sin(b.a)*b.r,4,0,Math.PI*2);ctx.fill();});
  }
  function drawCanvasCrumb(x,y,variant) {
    ctx.save();ctx.translate(x,y);ctx.rotate(variant*.55);ctx.fillStyle='#d79a4c';ctx.beginPath();ctx.arc(0,0,11,0,Math.PI*2);ctx.fill();ctx.fillStyle='#8a542b';[[-3,-3],[4,1],[-1,5]].forEach(([dx,dy])=>{ctx.beginPath();ctx.arc(dx,dy,1.7,0,Math.PI*2);ctx.fill();});ctx.fillStyle='rgba(255,250,242,.84)';ctx.beginPath();ctx.arc(8,-7,4,0,Math.PI*2);ctx.fill();ctx.restore();
  }
  function drawNight() {
    if (missionMode !== 'night' || state.phase !== 'scout') return;
    nightCtx.clearRect(0,0,W,H);
    nightCtx.fillStyle = 'rgba(29, 37, 54, .56)'; nightCtx.fillRect(0,0,W,H);
    nightCtx.globalCompositeOperation = 'destination-out';
    const s = state.scout;
    const glow = nightCtx.createRadialGradient(s.x,s.y,55,s.x,s.y,225);
    glow.addColorStop(0,'rgba(0,0,0,.98)'); glow.addColorStop(.55,'rgba(0,0,0,.76)'); glow.addColorStop(1,'rgba(0,0,0,0)');
    nightCtx.fillStyle = glow; nightCtx.beginPath(); nightCtx.arc(s.x,s.y,225,0,Math.PI*2); nightCtx.fill();
    nightCtx.globalCompositeOperation = 'source-over';
    ctx.drawImage(nightLayer,0,0);
  }
  function draw(now) { drawMap(); if(mapTheme === 'garden') drawGrass(); drawSceneProps(); drawPuddle(); drawBridge(); drawBridgeLeaves(); drawRock(); drawRivalNest(now); drawNest(); if(state.trail.length>1) path(state.trail,ui.gold,6,.65); drawFood(); if(['cut','split','carry','delivery'].includes(state.phase)) drawTeam(now); else if(state.phase === 'follow') drawFollowTrail(now); else drawScout(); drawRecruit(now); drawNight(); drawOverlay(now); }
  function frame(now){const dt=Math.min(32,now-last);last=now;update(dt,now);draw(now);requestAnimationFrame(frame);}
  function tryJump() {
    if (!started || state.phase !== 'carry' || !puddle.huge || state.jumpUsed) return;
    const s = state.sausage;
    const nearPuddle = ((s.x - puddle.x) ** 2) / ((puddle.rx + 105) ** 2) + ((s.y - puddle.y) ** 2) / ((puddle.ry + 105) ** 2) < 1;
    if (!nearPuddle) { state.notice = { text:t('jumpHint'), until:performance.now() + 1000 }; return; }
    const leap = Math.max(puddle.rx, puddle.ry) * 2 + currentFoodRadius() + 55;
    const end = { x:Math.max(40, Math.min(W - 40, s.x + Math.cos(s.a) * leap)), y:Math.max(40, Math.min(H - 40, s.y + Math.sin(s.a) * leap)) };
    state.jump = { start:{x:s.x,y:s.y}, end, startedAt:performance.now() };
    state.jumpUsed = true; pointer = null; jumpButton.hidden = true;
  }
  function tryBuildBridge() {
    if (!started || state.phase !== 'carry' || !puddle.bridge || state.bridgeBuilt) return;
    if (bridgeLeaves.some(leaf => !leaf.collected)) { state.notice = { text:t('bridgeLeaves'), until:performance.now() + 1200 }; return; }
    const s = state.sausage;
    const nearPuddle = ((s.x - puddle.x) ** 2) / ((puddle.rx + 105) ** 2) + ((s.y - puddle.y) ** 2) / ((puddle.ry + 105) ** 2) < 1;
    if (!nearPuddle) { state.notice = { text:t('bridgeNear'), until:performance.now() + 1200 }; return; }
    state.bridgeBuilt = true; bridgeButton.hidden = true;
    state.notice = { text:t('bridgeBuilt'), until:performance.now() + 1800 };
  }
  function prepareFood() {
    if (!started || !['cut','split'].includes(state.phase)) return;
    state.bites += 1;
    if (state.phase === 'cut') {
      if (state.bites >= 3) {
        state.skewerRemoved = true; state.bites = 0;
        state.phase = foodConfig.fragment && !state.fragmented ? 'split' : 'carry';
        if (state.phase === 'carry') state.stragglerAt = performance.now() + 3800;
        state.notice = { text: state.phase === 'split' ? t('splitHint') : t('depart'), until: performance.now() + 1200 };
      } else state.notice = { text: `${t('bite')} ${state.bites} / 3`, until: performance.now() + 700 };
    } else if (state.bites >= 2) {
      state.fragmented = true; state.bites = 0; state.phase = 'carry'; state.stragglerAt = performance.now() + 3800;
      state.notice = { text: t('depart'), until: performance.now() + 1200 };
    } else state.notice = { text: `${t('split')} ${state.bites} / 2`, until: performance.now() + 700 };
    setUi();
  }
  function down(e){ if(!started||state.complete||state.paused)return; canvas.setPointerCapture(e.pointerId); held=true;pointer=p(e); }
  function move(e){if(held)pointer=p(e);}
  function up(e){if(canvas.hasPointerCapture(e.pointerId))canvas.releasePointerCapture(e.pointerId);held=false;if(e.pointerType !== 'touch')pointer=null;}
  canvas.addEventListener('pointerdown',down);canvas.addEventListener('pointermove',move);canvas.addEventListener('pointerup',up);canvas.addEventListener('pointercancel',up);
  canvas.addEventListener('keydown',e=>{
    const key=e.code;
    if(key === 'Escape' && started) { e.preventDefault(); openLevelMenu(); return; }
    if(key === 'Space' && started) { e.preventDefault(); tryJump(); return; }
    if(key === 'KeyE' && started) { e.preventDefault(); prepareFood(); return; }
    if(!['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(key)||!started)return;
    e.preventDefault(); heldKeys.add(key);
  });
  canvas.addEventListener('keyup',e=>heldKeys.delete(e.code));
  canvas.addEventListener('blur',()=>heldKeys.clear());
  window.addEventListener('keydown', e => { if (started && ['Space','ArrowUp','ArrowDown'].includes(e.code)) e.preventDefault(); if (started && e.code === 'Escape') { e.preventDefault(); openLevelMenu(); } });
  function begin(){started=true;startOverlay.classList.remove('is-visible');liveStatus.textContent=t('leaving');window.PokiBridge?.gameplayStart();canvas.focus();}
  function chooseLevel(index) {
    levelIndex = index; reset(); started = true; state.paused = false;
    startOverlay.classList.remove('is-visible'); levelOverlay.hidden = true;
    liveStatus.textContent = t('leaving'); window.PokiBridge?.gameplayStart(); canvas.focus();
  }
  function openLevelMenu() {
    if (state) state.paused = true;
    renderLevelMenu();
    levelOverlay.hidden = false;
    levelOverlay.style.display = 'grid';
  }
  function hideLevelMenu() {
    if (state) state.paused = false;
    levelOverlay.hidden = true;
    levelOverlay.style.display = '';
  }
  function openWardrobe() { if (state) state.paused = true; renderWardrobe(); wardrobeOverlay.hidden = false; }
  function hideWardrobe() { if (state) state.paused = false; wardrobeOverlay.hidden = true; }
  startButton.addEventListener('click',begin); resetButton.addEventListener('click',()=>{reset();started=true;startOverlay.classList.remove('is-visible');}); brand.addEventListener('click',e=>{e.preventDefault();reset();started=false;startOverlay.classList.add('is-visible');});
  levelMenuButton.addEventListener('click', openLevelMenu);
  levelMenuButton.onclick = openLevelMenu;
  closeLevelMenu.addEventListener('click', hideLevelMenu);
  closeLevelMenu.onclick = hideLevelMenu;
  wardrobeButton.addEventListener('click', openWardrobe);
  closeWardrobe.addEventListener('click', hideWardrobe);
  backToMenuButton.addEventListener('click', () => chooseLevel((levelIndex - 1 + levels.length) % levels.length));
  jumpButton.addEventListener('click', tryJump);
  bridgeButton.addEventListener('click', tryBuildBridge);
  biteButton.addEventListener('click', prepareFood);
  try { locale = translations[localStorage.getItem('ant-game-language')] ? localStorage.getItem('ant-game-language') : 'zh-Hant'; } catch (_) {}
  languageSelect.value = locale;
  languageSelect.addEventListener('change', () => setLanguage(languageSelect.value));
  nextLevelButton.addEventListener('click', () => chooseLevel((levelIndex + 1) % levels.length));
  reset(); setLanguage(locale); window.PokiBridge?.loadingFinished(); requestAnimationFrame(frame);
})();
