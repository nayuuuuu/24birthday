let map;
let currentIndex = 0;
let currentImages = [];

const spots = [
   { name: "船橋", lat: 35.70113, lng: 139.98537, text: "船橋で一番嬉しかったことは、ホワイトデー貰ったこと！もっと写真撮ればよかったなって心残りなの。。洗顔も使えなくて、チョコの箱も捨てられなくて今でも残ってる笑", images: ["images/funabashi1.jpeg","images/funabashi2.jpeg","images/funabashi6.jpeg","images/funabashi5.jpeg","images/funabashi9.jpeg","images/funabashi15.jpeg"] },
  { name: "テラスモール松戸", lat: 35.81795, lng: 139.93407, text: "F1一緒に見れた思い出の場所！バ先にゆくんが来て新鮮だったの", images: ["images/terrace2.jpeg","images/terrace3.jpeg","images/terrace1.jpeg"] },
  { name: "虎ノ門ヒルズ", lat: 35.66743, lng: 139.74726, text: "ここのおそばまた一緒に食べる！他のご飯屋さんも行こうね！", images: ["images/toranomon1.jpeg","images/toranomon2.jpeg"] },
  { name: "国際フォーラム", lat: 35.67676, lng: 139.76375, text: "シェイクシャックこれからも沢山食べようね！", images: ["images/shake3.jpeg","images/shake2.jpeg","images/shake6.jpeg","images/shake7.jpeg","images/shake8.jpeg"] },
  { name: "びっくりドンキー", lat: 35.71986, lng: 140.06845, text: "ここのビクドンでおなかいっぱいになったの懐かしい！その後のゲーセンでなゆの運動能力見せつけてしまったぜ", images: ["images/bigguri2.jpeg","images/bigguri3.jpeg"] },
   { name: "仙石原", lat: 35.26035, lng: 139.00310, text: "超暑かったけど、自然が綺麗で一緒に行けてよかった！ペットボトルとか荷物沢山ポケットにしまってくれてありがとう！", images: ["images/sengokubara2.jpeg","images/sengokubara1.jpeg"] },
  { name: "彫刻の森美術館", lat: 35.24556, lng: 139.05077, text: "暑かったけどどの写真も楽しそうで思い出の場所", images: ["images/tyokoku1.jpeg","images/tyokoku2.jpeg"] },
  { name: "一ヶ月記念日", lat: 35.44600, lng: 139.64536, text: "一ヶ月記念で泊まったね！すっぴん恥ずかしかったけど、可愛いって言ってくれたから、今の何でもさらけ出すなゆがいるんだ！", images: ["images/hyatt1.jpeg","images/hyatt2.jpeg"] },
  { name: "i2 cafe", lat: 35.66651, lng: 139.71519, text: "ゆくんとおしゃれなカフェ行ったのに、鼻くそ付けてきたの今でも忘れないよ", images: ["images/i21.jpeg","images/i24.jpeg"] },
  { name: "なゆくん爆誕！！", lat: 35.78230, lng: 139.89882, text: "一番の思い出の場所だね！ここで勇気出してくれてありがとう！今日までずっと幸せだよ", images: ["images/matsudo1.jpeg","images/matsudo.jpeg"] },
  { name: "ディズニーシー", lat: 35.62690, lng: 139.88513, text: "お誕生日ディズニーで連れて行ってくれた！彼氏とディズニー夢だったの！ゆくんと叶えられた！", images: ["images/sea2.jpeg","images/sea1.jpeg","images/sea3.jpeg"] },
  { name: "南船橋", lat: 35.68234, lng: 139.99562, text: "散歩していろいろ迷ったのにずっと楽しかったの！お買い物もいつも楽しい！", images: ["images/minamihunabashi1.jpeg","images/minamihunabashi2.jpeg","images/minafuna1.jpeg",] },
  { name: "鳥居", lat: 35.20298, lng: 139.02576, text: "ゆくん相当眠かっただろうに写真並んでくれてありがとう！良い写真撮れた☆", images: ["images/tori1.jpeg"] },
  { name: "竹虎", lat: 35.66267, lng: 139.73417, text: "個室でゆくんお気に入りな竹虎。なゆも大好き！", images: ["images/taketora1.jpeg","images/taketora2.jpeg"] },
  { name: "神宮外苑", lat: 35.67338, lng: 139.72040, text: "写真無理矢理付き合わせちゃった。。でもこの時に、マフラーのお揃い写真撮れて幸せ！", images: ["images/gaien1.jpeg","images/gaien2.jpeg","images/gaien4.jpeg"] },
  { name: "コナズ珈琲", lat: 35.77238, lng: 139.99896, text: "コナズ珈琲デビューの場所！この時のドライブでゆくんが歌ってた強烈な尾崎豊は、今でも忘れられないの", images: ["images/konas1.jpeg"] },
  { name: "恵比寿", lat: 35.64685, lng: 139.71008, text: "ゆくんの美容院後を高確率で見られる大好きな駅！またおそば屋さん行こうね！", images: ["images/ebisu1.jpeg","images/ebisu2.jpeg]"] },
  { name: "東京駅", lat: 35.68115, lng: 139.76701, text: "いつも京葉線から帰ってくれてありがとう！ご飯もっと開拓したい！", images: ["images/tokyo1.jpeg","images/tokyo2.jpeg","images/tokyo3.jpeg","images/tokyo4.jpeg"] },
  { name: "宇都宮", lat: 36.55923, lng: 139.89847, text: "餃子また食べたいな。。もう餃子食べた後はキスしないしチャミスルも飲まない！", images: ["images/utsunomiya1.jpeg","images/utsunomiya2.jpeg","images/utsunomiya3.jpeg"] },
  { name: "大谷資料館", lat: 36.60020, lng: 139.82471, text: "ゆくんの服が岩と一体化してて感動だったな。とんでもない化け物撮れちゃった場所でもあるけど。。", images: ["images/oya1.jpeg","images/oya2.jpeg","images/oya4.jpeg","images/oya5.jpeg"] },
  { name: "麻布台ヒルズ", lat: 35.66167, lng: 139.74080, text: "お散歩もしたし、誕生日ランチも連れて行ってくれた思い出の場所", images: ["images/azabudai3.jpeg","images/azabudai1.jpeg","images/azabudai2.jpeg"] },
  { name: "酒々井アウトレット", lat: 35.71382, lng: 140.29410, text: "運転してくれてありがとう！花火一緒に見れてうれしかったな", images: ["images/sisui1.jpeg","images/sisui2.jpeg"] },
  { name: "山下公園", lat: 35.44604, lng: 139.64976, text: "ゆくんと付き合って良かったなって改めて思った場所だった。ギリギリまでなゆの意見を尊重して寄り添ってくれてありがとう！ゆくんかっこよかった！", images: ["images/yamashitapark1.jpeg","images/yamashitapark2.jpeg","images/yamashitapark3.jpeg","images/yamashitapark5.jpeg","images/yamashitapark8.jpeg"] },
  { name: "なゆの誕生日ホテル", lat: 35.62658, lng: 139.77065, text: "まさか憧れのホテルに泊まれるとは思ってなかった！ゆくん大好き！スニーカーずっとお気に入り！", images: ["images/hilton1.jpeg","images/hilton3.jpeg","images/hilton4.jpeg"] },
  { name: "お台場海浜公園", lat: 35.63020, lng: 139.77570, text: "何回か行った、靴擦れでローソンから始まったデート、雨風強くて歩くのが大変だったこと、一緒に景色見ながらおいしいディナーご馳走してくれたことが思い出深いの！", images: ["images/odaiba1.jpeg","images/odaiba2.jpeg","images/odaiba3.jpeg"] },
  { name: "六本木ヒルズ", lat: 35.65945, lng: 139.72987, text: "会社帰りにイルミネーション行ったの懐かしい！階段じゃんけんとっても楽しくて青春だった！", images: ["images/roppongi2.jpeg","images/roppongi1.jpeg"] },
  { name: "月島", lat: 35.66401, lng: 139.78404, text: "この日もんじゃもそうだけど、ギャルソンのニット買えてうれしかったな！ゆくん幸せそうで好き！", images: ["images/tskishima2.jpeg","images/tskishima1.jpeg"] },
  { name: "越中島", lat: 35.66812, lng: 139.79263, text: "バ先の話とか、思い出話をしてくれてお散歩すごく楽しかった！散歩途中はヤマトが沢山出てきて恐怖だったの今でも忘れないの", images: ["images/ettyujima1.jpeg"] },
  { name: "クリスマスマーケット神宮外苑", lat: 35.67719, lng: 139.71875, text: "11月に行ったけど本当に大正解だった！また一緒に行ってマグカップお揃いにしよ！", images: ["images/zingu2.jpeg","images/zingu1.jpeg"] },
  { name: "日比谷ミッドタウン", lat: 35.67396, lng: 139.75919, text: "ゆくんはお仕事で行くことになる場所だけど、しんどい場所になったらなゆとの思い出で塗り替えようね！映画館で同期に会ってヒヤヒヤしてたの可愛かったな。", images: ["images/hibiya3.jpeg","images/hibiya2.jpeg","images/hibiya1.jpeg","images/hibiya4.jpeg"] },
  { name: "年末ホテル", lat: 35.31926, lng: 139.55227, text: "年末泊まれてよかった！ゆくんと泊まるといつも楽しいの！", images: ["images/metro1.jpeg","images/metro2.jpeg"] },
  { name: "鶴岡八幡宮", lat: 35.32609, lng: 139.55629, text: "お寺も巡って鎌倉観光満喫できた！これからも思い出沢山作ろうね", images: ["images/kamakura1.jpeg"] },
  { name: "鎌倉かつ亭あら珠", lat: 35.31906, lng: 139.55178, text: "大好きなとんかつ屋さん行けてよかった！ゆくん眠そうな写真ばっかで可愛い笑", images: ["images/arazu1.jpeg","images/tonkatsu1.jpeg","images/tonkatsu2.jpeg"] },
  { name: "七里ヶ浜", lat: 35.30468, lng: 139.51355, text: "見事に二日酔いだったけど、この時のゆくん本当にかっこよかった！またリベンジしたい！", images: ["images/pacific2.jpeg","images/pacific1.jpeg","images/pacific3.jpeg","images/pacific5.jpeg","images/pacific7.jpeg"] },
  { name: "江ノ島", lat: 35.29976, lng: 139.4820, text: "リス見たくてわくわくしてて可愛かったな。今度はキャンドルナイトの時も行きたい！競馬も一緒に賭けたの良い思い出なの！", images: ["images/enoshima2.jpeg","images/enoshima3.jpeg","images/enoshima4.jpeg","images/enoshima6.jpeg","images/enoshima7.jpeg"] },
  { name: "ゆくんのおうち", lat: 35.64140, lng: 140.09682, text: "ゆくんがいつも送ってくれるワッツアップ結構好きなの。あと酔っ払ってると電話高頻度でかかってくるから嬉しいの!たまに変な音聞こえるけど笑", images: ["images/inage1.jpeg","images/inage2.jpeg","images/inage4.jpeg","images/inage7.jpeg","images/inage8.jpeg","images/inage10.jpeg"] },
  { name: "ピザパ", lat: 35.64582, lng: 140.04004, text: "ゆくんがピザ受け取るところ上から見れたの新鮮だったの。ピザすぐなくなっちゃって食いしん坊な2人だったな", images: ["images/makuhari3.jpeg","images/makuhari2.jpeg","images/makuhari4.jpeg"] },
  { name: "幕張の浜", lat: 35.63964, lng: 140.03492, text: "二日連続で行ってくれてありがとう！風強すぎて砂まみれでアウトレット行ったの良い思い出なの", images: ["images/makuhari5.jpeg","images/hama1.jpeg","images/hama2.jpeg","images/hama3.jpeg"] },
  { name: "PIE&COFFEEmamenakano", lat: 35.64438, lng: 140.05155, text: "まさかの知り合いのお父さんのカフェだったなんて！一緒にシェアして食べれてうれしかったの！UFOキャッチャーも沢山とれて幸せだった！", images: ["images/pie1.jpeg","images/pie2.jpeg"] },
  { name: "武蔵野美術大学", lat: 35.73029, lng: 139.44730, text: "ゆくんの知らない一面を見た新鮮な一日だったな。やっぱりゆくんと過ごした日が長いの羨ましくてしょうがないや", images: ["images/geidai1.jpeg","images/geidai2.jpeg"] },
  { name: "原宿", lat: 35.67231, lng: 139.70348, text: "この時のかっこいい髪の毛忘れられないの。横顔大好き", images: ["images/mac1.jpeg","images/mac2.jpeg"] },
  { name: "有楽町", lat: 35.67514, lng: 139.76298, text: "東京と銀座行くとき大体寄ってる気がする！いろんなお店開拓したいな", images: ["images/yurakuchyo1.jpeg","images/yurakuchyo8.jpeg"] },
  { name: "ディズニーランド", lat: 35.63308, lng: 139.88036, text: "丸一日いたのに、人生で一番楽しかったディズニーだった！ずっと楽しくずっと写真見返してたの", images: ["images/land2.jpeg","images/land3.jpeg","images/land5.jpeg","images/land4.jpeg","images/land6.jpeg","images/land8.jpeg","images/land10.jpeg","images/land12.jpeg","images/land11.jpeg"] },
  { name: "湯畑", lat: 36.62319, lng: 138.59665, text: "ゆくんが元気なときにまた行きたいね！ゆもみ体験は恥ずかしかったけど、なんだかんだ良い思い出なの", images: ["images/yubatake3.jpeg","images/yubatake1.jpeg","images/yubatake2.jpeg","images/yubatake5.jpeg","images/yubatake4.jpeg","images/yubatake7.jpeg","images/yubatake9.jpeg","images/yubatake10.jpeg","images/yubatake11.jpeg","images/yubatake12.jpeg","images/yubatake13.jpeg","images/yubatake15.jpeg"] },
  { name: "和える宿高松", lat: 36.62284, lng: 138.60067, text: "貸し切り風呂一緒に入れて嬉しかったな！実は旅行で一番楽しみだったの！人生ゲーム楽しかったな", images: ["images/takamatsu9.jpeg","images/takamatsu6.jpeg","images/takamatsu5.jpeg","images/takamatsu7.jpeg"] },
  { name: "西の河原公園", lat: 36.62447, lng: 138.58837, text: "本当に行って良かった！岩の上に乗ったりちょっとやんちゃなゆくんみれて可愛かったな", images: ["images/saino3.jpeg","images/saino1.jpeg","images/saino2.jpeg","images/saino4.jpeg"] },
  { name: "飯田橋", lat: 35.69928, lng: 139.74336, text: "バレンタインのご飯！たまにこういうご飯屋さん行くのも良いなって思った！", images: ["images/iida1.jpeg","images/iida2.jpeg"] },
  { name: "皇居", lat: 35.68081, lng: 139.75724, text: "思い出はベンチ！バレンタイン渡せて良かったの。ちょっとドキドキだったんだ。来年何か食べたいのあったらこっそりなゆたんに聞いてね☆", images: ["images/kokyo1.jpeg","images/kokyo2.jpeg"] },
  { name: "成田空港ひこうきの丘", lat: 35.73853, lng: 140.39153, text: "正直飛行機ゆくん楽しいか心配だったけど、楽しそうで嬉しかったな。風が強くて大変だったけど良い思い出だったな。次は羽田行きたいな！", images: ["images/air2.jpeg","images/air1.jpeg","images/air3.jpeg"] },
  { name: "新宿", lat: 35.68984, lng: 139.70052, text: "ゆくんがにしむらゆうじのポップアップをサプライズで連れて行ってくれてすごく嬉しかったの！うどんもまたたべたいな", images: ["images/shinjuku1.jpeg","images/shinjuku2.jpeg","images/shinjuku3.jpeg"] },
  { name: "日本科学未来館", lat: 35.61948, lng: 139.77638, text: "すごく眠そうだったけど結果的に科学館楽しんでて嬉しかったな。こういう場所も一緒に開拓したい！", images: ["images/mirai1.jpeg","images/mirai2.jpeg","images/mirai3.jpeg","images/mirai4.jpeg"] },
  { name: "ハンマーヘッド", lat: 35.45628, lng: 139.64236, text: "夜のお散歩で立ち寄った場所！雨上がりでのんびり出来て良かったな", images: ["images/hammer1.jpeg","images/hammer2.jpeg","images/hammer3.jpeg","images/hammer4.jpeg","images/hammer5.jpeg"] },
  { name: "西船橋", lat: 35.70761, lng: 139.95900, text: "なゆたちの♡♡の聖地！！！これからも沢山お世話になります！！", images: ["images/nishifunabashi1.jpeg"] },
  { name: "柏", lat: 35.86240, lng: 139.97086, text: "この時の写真を同期？友達に見せてたって聞いてすごく嬉しかった!この頃写真撮る時ゆくんがちょっとチャラくて大好き", images: ["images/kashiwa1.jpeg","images/kashiwa2.jpeg"] },
  { name: "高円寺", lat: 35.70459, lng: 139.65045, text: "お祭りと被って人が多かったけど、おしゃれなカフェで食べれて嬉しかった！", images: ["images/koenji1.jpeg"] },
  { name: "丸の内", lat: 35.67862, lng: 139.76334, text: "どの時期も街が綺麗で大好きなんだ！イルミネーションも一緒に見れて嬉しかったな。ここら辺のご飯開拓したい！", images: ["images/marunouchi1.jpeg","images/marunouchi3.jpeg"] },
  { name: "新木場", lat: 35.64591, lng: 139.82659, text: "調べてくれたカフェすごく美味しくてお気に入り！なゆが先に電車待ってるときに、イヤフォン越しでも足音すごくて、誰かなと思ったらゆくんだったのすごく印象の残ってる笑 今はそんなことない！！", images: ["images/shinkiba1.jpeg","images/shinkiba2.jpeg","images/shinkiba3.jpeg"] },
  { name: "UNI COFFEE", lat: 35.44758, lng: 139.64083, text: "フラッペ美味しかったね！うにぃうにぃ珈琲って言ってたの懐かしい", images: ["images/uni1.jpeg"] },
  { name: "八柱", lat: 35.79175, lng: 139.93799, text: "帰り送ってくれてすごく嬉しかった！途中でお腹いたくなるまでがセットな気がする", images: ["images/yabashira.jpeg","images/yabashira3.jpeg"] }

];

const karuizawaSpots = [
  {
    name: "軽井沢駅",
    lat: 36.34277,
    lng: 138.63533,
    text: "新幹線の到着・出発！",
    type: "station",
    arrival: "10:33 東京発 → 11:36 軽井沢着",
    departure: "18:09 軽井沢発 → 19:12 東京着",
    images: ["images/eki.jpg"]
  },
  {
  name: "ルグラン軽井沢ホテル",
  lat: 36.29505,
  lng: 138.60733,
  text: `今回の宿泊先<br>
         <a href="https://www.legrand-karuizawaresort.jp/" target="_blank">
         👉 公式サイトを見る
         </a>`,
  link: "itinerary.html",
  images: ["images/todayhotel.jpg"]
},
{
  name: "旧軽井沢銀座",
  lat: 36.35798,
  lng: 138.63461,
  text: `1日目のお昼！食べ歩きスポット<br>
         <a href="https://rurubu.jp/andmore/article/24422" target="_blank">
         👉 食べ歩き情報
         </a>`,
  link: "itinerary.html",
  images: ["images/ginza.jpg"]
},
{
  name: "白糸の滝",
  lat: 36.41486,
  lng: 138.59186,
  text: `2日目の観光スポット<br>
         <a href="https://karuizawa-kankokyokai.jp/spot/23206/" target="_blank">
         👉 詳細を見る
         </a>`,
  link: "itinerary.html",
  images: ["images/shiraito.jpg"]
},
{
  name: "軽井沢ショッピングプラザ",
  lat: 36.34118,
  lng: 138.63313,
  text: `ここで2日目お昼？ショッピング<br>
         <a href="https://www.karuizawa-psp.jp/" target="_blank">
         👉 公式サイト
         </a>`,
  link: "itinerary.html",
  images: ["images/outlet.jpg"]
}
];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.6812, lng: 139.7649 },
    zoom: 14,
  });

  // ⭐通常ピン（ピンク）
  spots.forEach((spot) => {
    createMarker(spot, "pink");
  });

  // ⭐軽井沢ピン（青）
  karuizawaSpots.forEach((spot) => {
    createMarker(spot, "blue");
  });
}

// ⭐これ必須（今なかった）
function createMarker(spot, color) {
  const marker = new google.maps.Marker({
    position: { lat: spot.lat, lng: spot.lng },
    map,
    title: spot.name,
    optimized: false,
    icon: {
      url: `https://maps.google.com/mapfiles/ms/icons/${color}-dot.png`,
      scaledSize: new google.maps.Size(85, 85),
      anchor: new google.maps.Point(42, 42)
    }
  });

  marker.addListener("click", () => openSpot(spot));
}

function openSpot(spot) {
  document.getElementById("spotTitle").textContent = spot.name;

  const textArea = document.getElementById("spotText");
  const actionBtn = document.getElementById("actionBtn");

  // 軽井沢駅だけ特別表示
  if (spot.type === "station") {
    textArea.innerHTML = `
      🚄 ${spot.arrival}<br>
      🚄 ${spot.departure}
    `;
    actionBtn.style.display = "none";
  } else {
    textArea.innerHTML = spot.text;

    // しおりボタン表示
    if (spot.link) {
      actionBtn.style.display = "block";
      actionBtn.onclick = () => location.href = spot.link;
    } else {
      actionBtn.style.display = "none";
    }
  }

  currentImages = spot.images || [];
  currentIndex = 0;

  renderSlide();
  document.getElementById("dialog").classList.add("show");
}

// スライド描画
function renderSlide() {
  const slider = document.getElementById("slider");
  const dotsContainer = document.querySelector(".slider-dots");

  slider.innerHTML = "";
  dotsContainer.innerHTML = "";

  // 画像
  const img = document.createElement("img");
  img.src = currentImages[currentIndex];
  slider.appendChild(img);

  // 丸ぽち
  currentImages.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = (i === currentIndex) ? "active" : "";
    dotsContainer.appendChild(dot);
  });

  // クリックで次の画像
  img.onclick = () => nextSlide();

  // タッチイベント（スマホ）
  let startX = 0;
  img.ontouchstart = (e) => { startX = e.touches[0].clientX; };
  img.ontouchend = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 30) nextSlide();
    else if (endX - startX > 30) prevSlide();
  };
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  renderSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  renderSlide();
}

function closeDialog() {
  document.getElementById("dialog").classList.remove("show");
}

window.initMap = initMap;