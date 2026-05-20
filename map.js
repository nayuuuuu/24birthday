let map;
let currentIndex = 0;
let currentImages = [];

const spots = [
   { name: "船橋", lat: 35.70113, lng: 139.98537, text: "船橋で一番嬉しかったことは、ホワイトデー貰ったこと！もっと写真撮ればよかったなって心残りなの。。<br>洗顔も使えなくて、チョコの箱も捨てられなくて今でも残ってる笑", images: ["images/funabashi1.jpeg","images/funabashi2.jpeg","images/funabashi6.jpeg","images/funabashi5.jpeg","images/funabashi9.jpeg","images/funabashi15.jpeg"] },
  { name: "テラスモール松戸", lat: 35.81795, lng: 139.93407, text: "F1一緒に見れた思い出の場所！<br>電車だと行きにくい場所なのに八柱まで来て一緒にバス乗ってくれたの嬉しかったな", images: ["images/terrace2.jpeg","images/terrace3.jpeg","images/terrace1.jpeg"] },
  { name: "虎ノ門ヒルズ", lat: 35.66743, lng: 139.74726, text: "ここのお蕎麦また一緒に食べる！<br>お蕎麦以外も美味しいお店沢山だからいろんなお店も行きたいな！", images: ["images/toranomon1.jpeg","images/toranomon2.jpeg"] },
  { name: "国際フォーラム", lat: 35.67676, lng: 139.76375, text: "シェイクシャックこれからも沢山食べようね！写真見返してたら結構な回数食べてた笑", images: ["images/shake3.jpeg","images/shake2.jpeg","images/shake6.jpeg","images/shake7.jpeg","images/shake8.jpeg"] },
  { name: "びっくりドンキー", lat: 35.71986, lng: 140.06845, text: "ここのビクドンでおなかいっぱいになったの懐かしい！<br>その後のゲーセンでなゆの運動能力見せつけてしまったぜ☆", images: ["images/bigguri2.jpeg","images/bigguri3.jpeg"] },
   { name: "仙石原", lat: 35.26035, lng: 139.00310, text: "超暑かったけど、緑が綺麗で一緒に行けてよかった！<br>ペットボトルとか荷物を沢山ポケットにしまってくれてありがとう！", images: ["images/sengokubara2.jpeg","images/sengokubara1.jpeg"] },
  { name: "彫刻の森美術館", lat: 35.24556, lng: 139.05077, text: "暑すぎてアートどころじゃなかったけど、行くことに意味がある！！<br>ゆくんと箱根の思い出GETだぜ☆", images: ["images/tyokoku1.jpeg","images/tyokoku2.jpeg"] },
  { name: "一ヶ月記念日", lat: 35.44600, lng: 139.64536, text: "一ヶ月記念で泊まったね！すっぴん恥ずかしかったけど、可愛いって言ってくれたから、今の何でもさらけ出すなゆがいるんだ！<br>いつもありがとう！大好き！", images: ["images/hyatt1.jpeg","images/hyatt2.jpeg","images/hyatt5.jpeg"] },
  { name: "i2 cafe", lat: 35.66651, lng: 139.71519, text: "ゆくんとおしゃれなカフェ行ったのに、鼻くそ付けてきたの今でも忘れないよ。<br>ゆくん結構な確率で自分が頼んだメニュー後悔してることあってニヤニヤしちゃう", images: ["images/i21.jpeg","images/i24.jpeg"] },
  { name: "なゆくん爆誕！！", lat: 35.78230, lng: 139.89882, text: "一番の思い出の場所だね！ここで勇気出してくれてありがとう！<br>今日までずっと、なゆのこと雑に扱わない所が本当に嬉しい！<br>ちょっと考え方が甘くて価値観違う時もあるけど、それ含んでゆくんかわいがる", images: ["images/matsudo1.jpeg","images/matsudo.jpeg","images/matsudo5.jpeg"] },
  { name: "ディズニーシー", lat: 35.62690, lng: 139.88513, text: "お誕生日ディズニーで連れて行ってくれた！彼氏とディズニー夢だったの！ゆくんと叶えられて幸せ！", images: ["images/sea2.jpeg","images/sea1.jpeg","images/sea3.jpeg"] },
  { name: "南船橋", lat: 35.68234, lng: 139.99562, text: "散歩していろいろ迷ったのにずっと楽しかったの！また海岸沿い歩きたいな", images: ["images/minamihunabashi1.jpeg","images/minamihunabashi2.jpeg","images/minafuna1.jpeg",] },
  { name: "鳥居", lat: 35.20298, lng: 139.02576, text: "ゆくん相当眠かっただろうに写真並んでくれてありがとう！良い写真撮れた☆", images: ["images/tori1.jpeg"] },
  { name: "竹虎", lat: 35.66267, lng: 139.73417, text: "ゆくんお気に入りな竹虎。なゆも大好き！<br>またどでかい個室に案内されないかな", images: ["images/taketora1.jpeg","images/taketora2.jpeg"] },
  { name: "いちょう並木", lat: 35.67338, lng: 139.72040, text: "写真無理矢理付き合わせちゃった。。でもこの時にマフラーのお揃い写真撮れて幸せ！<br>朝からありがとう！", images: ["images/gaien1.jpeg","images/gaien2.jpeg","images/gaien4.jpeg","images/gaien7.jpeg","images/gaien8.jpeg","images/gaien9.jpeg"] },
  { name: "コナズ珈琲", lat: 35.77238, lng: 139.99896, text: "コナズ珈琲デビューの場所！<br>この時のドライブでゆくんが歌ってた強烈な尾崎豊は、今でも忘れられないの", images: ["images/konas1.jpeg"] },
  { name: "恵比寿", lat: 35.64685, lng: 139.71008, text: "ゆくんの美容院後を高確率で見られる大好きな駅！またおそば屋さんとラーメン屋さん行く！", images: ["images/ebisu1.jpeg","images/ebisu2.jpeg"] },
  { name: "東京駅", lat: 35.68115, lng: 139.76701, text: "いつも京葉線から帰ってくれてありがとう！<br>よだれ垂らしてたの本当に可愛くて、次はぜったいになゆがふき取る<br>ちなみにゴボウの天ぷらは釜たけじゃなくて新宿御苑のうどん屋さんで食べた！", images: ["images/tokyo1.jpeg","images/tokyo2.jpeg","images/tokyo3.jpeg","images/tokyo4.jpeg","images/tokyo8.jpeg","images/tokyo5.jpeg","images/tokyo6.jpeg","images/tokyo7.jpeg","images/tokyo10.jpeg"] },
  { name: "宇都宮", lat: 36.55923, lng: 139.89847, text: "餃子また食べたいな。。<br>もう餃子食べた後はキスしないしチャミスルも飲まない！", images: ["images/utsunomiya1.jpeg","images/utsunomiya2.jpeg","images/utsunomiya3.jpeg","images/utsunomiya5.jpeg"] },
  { name: "大谷資料館", lat: 36.60020, lng: 139.82471, text: "ゆくんの服が岩と一体化してて感動だったな。<br>とんでもない化け物撮れちゃった場所でもあるけど。。", images: ["images/oya1.jpeg","images/oya2.jpeg","images/oya4.jpeg","images/oya5.jpeg"] },
  { name: "麻布台ヒルズ", lat: 35.66167, lng: 139.74080, text: "お散歩もしたし、誕生日ランチも連れて行ってくれた思い出の場所なの！<br>ここのファミマ！！で買ったヒートテック、ちょっと薄くなっちゃった。。", images: ["images/azabudai3.jpeg","images/azabudai1.jpeg","images/azabudai2.jpeg"] },
  { name: "酒々井アウトレット", lat: 35.71382, lng: 140.29410, text: "運転してくれてありがとう！<br>たまたま花火一緒に見れてうれしかったな", images: ["images/sisui1.jpeg","images/sisui2.jpeg"] },
  { name: "山下公園", lat: 35.44604, lng: 139.64976, text: "ゆくんと付き合って良かったなって改めて思った場所No.1なの。<br>ギリギリまでなゆの意見を尊重して寄り添ってくれてありがとう！<br>ゆくんかっこよかった！", images: ["images/yamashitapark1.jpeg","images/yamashitapark2.jpeg","images/yamashitapark3.jpeg","images/yamashitapark5.jpeg","images/yamashitapark8.jpeg","images/yamashitapark7.jpeg"] },
  { name: "なゆの誕生日ホテル", lat: 35.62658, lng: 139.77065, text: "まさか憧れのホテルに泊まれるとは思ってなかった！<br>ゆくん大好き！スニーカーずっとお気に入りで宝物！", images: ["images/hilton1.jpeg","images/hilton3.jpeg","images/hilton4.jpeg","images/hilton5.jpeg","images/hilton6.jpeg","images/hilton8.jpeg","images/hilton7.jpeg"] },
  { name: "お台場海浜公園", lat: 35.63020, lng: 139.77570, text: "何回か行った中で、靴擦れでローソンから始まったデート、雨風強くて歩くのが大変だったこと、一緒に景色見ながらおいしいディナーご馳走してくれたことが思い出深いの！", images: ["images/odaiba1.jpeg","images/odaiba2.jpeg","images/odaiba3.jpeg","images/odaiba5.jpeg","images/odaiba8.jpeg","images/odaiba9.jpeg","images/odaiba10.jpeg","images/odaiba12.jpeg","images/odaiba13.jpeg","images/odaiba14.jpeg"] },
  { name: "六本木ヒルズ", lat: 35.65945, lng: 139.72987, text: "会社帰りにイルミネーション行ったの懐かしい！<br>階段じゃんけんに付き合ってくれるゆくん大好き！", images: ["images/roppongi2.jpeg","images/roppongi1.jpeg"] },
  { name: "月島", lat: 35.66401, lng: 139.78404, text: "この日はもんじゃもそうだけど、ギャルソンのニット買えてうれしかったな！<br>このときのゆくん、いい笑顔！", images: ["images/tskishima2.jpeg","images/tskishima1.jpeg"] },
  { name: "越中島", lat: 35.66812, lng: 139.79263, text: "バ先の話とか、思い出話をしてくれてお散歩すごく楽しかった！<br>散歩途中はヤマトが沢山出てきて恐怖だったの今でも忘れないの", images: ["images/ettyujima1.jpeg"] },
  { name: "クリスマスマーケット神宮外苑", lat: 35.67719, lng: 139.71875, text: "11月に行ったけど本当に大正解だった！また一緒に行ってマグカップお揃いにしたいな！", images: ["images/zingu2.jpeg","images/zingu1.jpeg","images/gaien10.jpeg","images/gaien11.jpeg"] },
  { name: "日比谷ミッドタウン", lat: 35.67396, lng: 139.75919, text: "ゆくんはお仕事で行くことになる場所だけど、しんどい場所になったらなゆとの思い出で塗り替えようね！<br>映画館で同期に会ってヒヤヒヤしてたの可愛かったな。", images: ["images/hibiya3.jpeg","images/hibiya2.jpeg","images/hibiya1.jpeg","images/hibiya4.jpeg"] },
  { name: "年末ホテル", lat: 35.31926, lng: 139.55227, text: "年末泊まれてよかった！<br>夢遊病っぽい感じのことを前話してくれたけど、なゆと寝るときは何もなくてちゃんと寝れてるんだって思えて嬉しいんだ", images: ["images/metro1.jpeg","images/metro2.jpeg","images/metro4.jpeg"] },
  { name: "鶴岡八幡宮", lat: 35.32609, lng: 139.55629, text: "お寺も巡って鎌倉観光満喫できた！<br>これからも思い出沢山作ろうね", images: ["images/kamakura1.jpeg"] },
  { name: "鎌倉かつ亭あら珠", lat: 35.31906, lng: 139.55178, text: "大好きなとんかつ屋さん行けてよかった！<br>当時はなゆもちょっと眠たくて気にしてなかったけど、写真見返すとどれもゆくん眠そうで可愛い笑", images: ["images/arazu1.jpeg","images/tonkatsu1.jpeg","images/tonkatsu2.jpeg"] },
  { name: "七里ヶ浜", lat: 35.30468, lng: 139.51355, text: "見事に二日酔いだったけど、この時のゆくんの服装エロくて本当にかっこよかった！<br>ちょくちょく食べれないときあるけど、いつも優しくしてくれてありがとう！", images: ["images/pacific2.jpeg","images/pacific1.jpeg","images/pacific3.jpeg","images/pacific5.jpeg","images/pacific7.jpeg","images/pacific9.jpeg"] },
  { name: "江ノ島", lat: 35.29976, lng: 139.4820, text: "リス見たくてわくわくしてて可愛かったな。<br>今度はキャンドルナイトの時も行きたい！<br>競馬も一緒に賭けたの良い思い出なの！", images: ["images/enoshima2.jpeg","images/enoshima3.jpeg","images/enoshima4.jpeg","images/enoshima6.jpeg","images/enoshima7.jpeg"] },
  { name: "ゆくんのおうち", lat: 35.64140, lng: 140.09682, text: "ゆくんがいつも送ってくれるワッツアップ結構好きなの。あと酔っ払ってると電話高頻度でかかってくるから嬉しいの!たまに変な音聞こえるけど笑", images: ["images/inage1.jpeg","images/inage2.jpeg","images/inage4.jpeg","images/inage7.jpeg","images/inage8.jpeg","images/inage10.jpeg"] },
  { name: "ピザパ", lat: 35.64582, lng: 140.04004, text: "ゆくんがピザ受け取るところを上から見れたの新鮮だったの。<br>ピザすぐなくなっちゃって食いしん坊な2人だったな", images: ["images/makuhari3.jpeg","images/makuhari2.jpeg","images/makuhari4.jpeg","images/hotel5.jpeg"] },
  { name: "幕張の浜", lat: 35.63964, lng: 140.03492, text: "二日連続で行ってくれてありがとう！<br>風強すぎて砂まみれでアウトレット行ったの良い思い出なの <br>ちょっとじゃりじゃりした", images: ["images/makuhari5.jpeg","images/hama1.jpeg","images/hama2.jpeg","images/hama3.jpeg"] },
  { name: "PIE&COFFEEmamenakano", lat: 35.64438, lng: 140.05155, text: "まさかの知り合いのお父さんのカフェだったなんて！一緒にシェアして食べれてうれしかったの！<br>UFOキャッチャーも沢山とれて幸せだった！", images: ["images/pie1.jpeg","images/pie2.jpeg"] },
  { name: "武蔵野美術大学", lat: 35.73029, lng: 139.44730, text: "ゆくんの知らない一面を見た新鮮な一日だったな。やっぱりゆくんと過ごした日が長いの羨ましくてしょうがないや <br>デレデレなゆくんはなゆだけの前でお願いね", images: ["images/geidai1.jpeg","images/geidai2.jpeg"] },
  { name: "原宿", lat: 35.67231, lng: 139.70348, text: "この時のかっこいい髪の毛忘れられないの。<br>横顔大好きで実は結構見返してる写真なんだ", images: ["images/mac1.jpeg","images/mac2.jpeg"] },
  { name: "有楽町", lat: 35.67514, lng: 139.76298, text: "東京と銀座行くとき大体寄ってる気がする！ゆくんごはん開拓しよ！", images: ["images/yurakuchyo1.jpeg","images/yurakuchyo8.jpeg","images/yurakuchyo3.jpeg"] },
  { name: "ディズニーランド", lat: 35.63308, lng: 139.88036, text: "丸一日いたのに、人生で一番楽しかったディズニーだった！<br>しばらく写真見返してたの<br>また絶対に連れて行って！", images: ["images/land2.jpeg","images/land3.jpeg","images/land5.jpeg","images/land4.jpeg","images/land6.jpeg","images/land8.jpeg","images/land10.jpeg","images/land12.jpeg","images/land11.jpeg"] },
  { name: "湯畑", lat: 36.62319, lng: 138.59665, text: "ゆくんが元気なときにまた行きたいね！<br>ゆもみ体験は恥ずかしかったけど、なんだかんだ良い思い出なの<br>なゆはいつも全力です", images: ["images/yubatake3.jpeg","images/yubatake1.jpeg","images/yubatake2.jpeg","images/yubatake5.jpeg","images/yubatake4.jpeg","images/yubatake7.jpeg","images/yubatake9.jpeg","images/yubatake10.jpeg","images/yubatake11.jpeg","images/yubatake12.jpeg","images/yubatake13.jpeg","images/yubatake15.jpeg"] },
  { name: "和える宿高松", lat: 36.62284, lng: 138.60067, text: "貸し切り風呂一緒に入れて嬉しかったな！<br>実は旅行で一番楽しみだったの！人生ゲーム楽しかったな<br>ベッド二つあるのに一緒に寝たの本当に嬉しかった！", images: ["images/takamatsu9.jpeg","images/takamatsu6.jpeg","images/takamatsu5.jpeg","images/takamatsu7.jpeg"] },
  { name: "西の河原公園", lat: 36.62447, lng: 138.58837, text: "本当に行って良かった！<br>岩の上に乗ったりちょっとやんちゃなゆくんみれて可愛かったな", images: ["images/saino3.jpeg","images/saino1.jpeg","images/saino2.jpeg","images/saino4.jpeg"] },
  { name: "飯田橋", lat: 35.69928, lng: 139.74336, text: "バレンタインの時のお昼ご飯！<br>お腹いっぱいで苦しかったけど、大満足！", images: ["images/iida1.jpeg","images/iida2.jpeg"] },
  { name: "皇居", lat: 35.68081, lng: 139.75724, text: "思い出はベンチ！バレンタイン渡すのちょっとドキドキだったんだ。<br>でも家ですぐ食べてくれて嬉しかったの！<br>来年何か食べたいのあったらこっそりなゆたんに聞いてね☆", images: ["images/kokyo1.jpeg","images/kokyo2.jpeg"] },
  { name: "成田空港ひこうきの丘", lat: 35.73853, lng: 140.39153, text: "正直飛行機ゆくん楽しいか心配だったけど、楽しそうで嬉しかったな。<br>強風で大変だったけど良い思い出だったな。<br>次は羽田行きたいな！", images: ["images/air2.jpeg","images/air1.jpeg","images/air3.jpeg"] },
  { name: "新宿", lat: 35.68984, lng: 139.70052, text: "ゆくんがにしむらゆうじのポップアップを、サプライズで連れて行ってくれてすごく嬉しかったの！<br>コースターは同棲した時に使うんだ！", images: ["images/shinjuku1.jpeg","images/shinjuku2.jpeg","images/shinjuku3.jpeg","images/shinjuku4.jpeg","images/shinjuku5.jpeg"] },
  { name: "日本科学未来館", lat: 35.61948, lng: 139.77638, text: "すごく眠そうで興味もなさそうだったけど、結果的に科学館楽しんでて嬉しかったな。<br>💩沢山行ってたの笑える", images: ["images/mirai1.jpeg","images/mirai2.jpeg","images/mirai3.jpeg","images/mirai4.jpeg"] },
  { name: "ハンマーヘッド", lat: 35.45628, lng: 139.64236, text: "夜のお散歩で立ち寄った場所！雨上がりでのんびり出来て良かったな<br>今思うと結構な距離のお散歩に付き合ってくれてたんだね。いつもわがまま聞いてくれてありがとう！", images: ["images/hammer1.jpeg","images/hammer2.jpeg","images/hammer3.jpeg","images/hammer4.jpeg","images/hammer5.jpeg"] },
  { name: "西船橋", lat: 35.70761, lng: 139.95900, text: "なゆたちの♡♡の聖地！！！これからも沢山お世話になります！！", images: ["images/nishifunabashi1.jpeg"] },
  { name: "柏", lat: 35.86240, lng: 139.97086, text: "この時の写真を同期？友達に見せてたって聞いてすごく嬉しかった！<br>この頃のゆくん、写真撮る時ちょっとチャラくてなゆの大好物", images: ["images/kashiwa1.jpeg","images/kashiwa2.jpeg"] },
  { name: "高円寺", lat: 35.70459, lng: 139.65045, text: "お祭りと被って人が多かったけど、おしゃれなカフェで食べれて嬉しかった！", images: ["images/koenji1.jpeg"] },
  { name: "丸の内", lat: 35.67862, lng: 139.76334, text: "どの時期も街が綺麗で大好きなんだ！<br>イルミネーションも一緒に見れて嬉しかったな。ここら辺のご飯開拓したい！", images: ["images/marunouchi1.jpeg","images/marunouchi3.jpeg","images/marunouchi4.jpeg"] },
  { name: "新木場", lat: 35.64591, lng: 139.82659, text: "調べてくれたカフェすごく美味しくてお気に入り！<br>ブーツ履きなれていない時、なゆがホームで待ってたら、足音の爆音がノイキャンイヤホンでも聞こえてきて、なゆの真後ろで止まったの恐怖だった笑", images: ["images/shinkiba1.jpeg","images/shinkiba2.jpeg","images/shinkiba3.jpeg"] },
  { name: "UNI COFFEE", lat: 35.44758, lng: 139.64083, text: "フラッペ美味しかったね！うにぃうにぃ珈琲って言ってたの懐かしい<br>男がフラッペ買うのは漢だよ！！！", images: ["images/uni1.jpeg","images/uni2.jpeg"] },
  { name: "八柱", lat: 35.79175, lng: 139.93799, text: "帰り送ってくれてすごく嬉しかった！<br>途中でお腹いたくなるまでがセットな気がする<br>車でも電車でもなゆの元に来てくれるゆくんが本当に大好き！", images: ["images/yabashira.jpeg","images/yabashira3.jpeg"] },
  { name: "渋谷", lat: 35.65823, lng: 139.70163, text: "実はパルコ行ったことなかったんだ。素敵なお店沢山だね！<br>靴擦れして歩きにくかった時にサポートしてくれて凄くうれしかったな", images: ["images/Shibuya1.jpeg","images/Shibuya2.jpeg","images/Shibuya3.jpeg"] },
  { name: "大桟橋", lat: 35.45134, lng: 139.64736, text: "ここの夜景一緒に見れて嬉しい！ここのエレベーター不思議でちょっと興奮してて可愛かったな", images: ["images/osanbashi1.jpeg","images/osanbashi2.jpeg","images/osanbashi3.jpeg"] },
  { name: "シンシン", lat: 35.69937, lng: 139.98687, text: "初めて会った場所だったね！野球帰りだったの覚えてる！ちょっとチャラくてなゆの好きなおしゃれ眼鏡ボーイが来てちょっと気になっちゃった。<br>この時のなゆ、見る目あったな", images: ["images/sinsin1.jpeg"] },
  { name: "津田沼", lat: 35.69165, lng: 140.02040, text: "初めて津田沼行ったけど、イオン綺麗で全部ご飯屋さん美味しそうだったな。。<br>次は赤門！<br>またあのズボン履いてきて、ファブリーズかけてもらってほしい", images: ["images/tsuda1.jpeg"] },
  { name: "新松戸", lat: 35.82586, lng: 139.92085, text: "ここも聖地だね！！！夏にお祭り少し行けて嬉しかったの懐かしい！今後ともお世話になります！", images: ["images/shima1.jpeg"] },
  { name: "表参道", lat: 35.66536, lng: 139.71209, text: "今までブランド店入るの怖かったけどゆくんのお陰で抵抗なくなった！大人の階段上れたの！<br>またお洋服探しに行こうね！", images: ["images/omote1.jpeg","images/omote2.jpeg"] },
  { name: "千葉", lat: 35.61342, lng: 140.11327, text: "思った以上に栄えててびっくりした！野球朝から見れて幸せだったな！今度は公園行きたい！", images: ["images/chiba1.jpeg"] },
  { name: "お蕎麦屋さん", lat: 35.26778, lng: 139.01234, text:"この時はお蕎麦も美味しかったけど、この写真の筋肉がムキムキいい太さで大好きなの。筋肉に埋もれたい", images: ["images/99.jpeg"] },
  { name: "赤レンガ倉庫", lat: 35.45271, lng: 139.64294, text:"ちょっとだけ立ち寄ったね！実はここにUNIコーヒーあるんだよ！<br>次はクリスマスマーケット行きたいな。。！", images: ["images/akarenga1.jpeg"] },
  { name: "祐天寺", lat: 35.63725, lng: 139.69282, text:"初上陸！ピザ調べてくれてありがとう！美味しし買ったし、お散歩もずっと楽しくて1.4キロが秒だった！<br>ほぼ2週間ぶりのゆくんで会えただけで嬉しかった！", images: ["images/yutenji1.jpeg","images/yutenji2.jpeg"] },
  { name: "中目黒", lat: 35.65006, lng: 139.69248, text:"スタバまさか整理券で4Fまであるとは思わなかったの！<br>ゆくんティラミスで喜んでて可愛かったけど、珈琲お気に召さなかったみたいだ。いつもなゆのが美味しそうにみえちゃうの可愛いな！！", images: ["images/nakame1.jpeg","images/nakame2.jpeg","images/nakame3.jpeg","images/nakame4.jpeg","images/nakame5.jpeg"] },
  { name: "ラーメン博物館", lat: 35.51008, lng: 139.61472, text:"念願の龍上海食べれて幸せ！ゆくんお腹いっぱいでひいひいしてて可愛かったな<br>夜は大泣きしたけど良い思い出", images: ["images/sinyoko1.jpeg","images/sinyoko2.jpeg","images/sinyoko3.jpeg","images/sinyoko4.jpeg","images/sinyoko5.jpeg","images/sinyoko6.jpeg"] },
  { name: "養老渓谷", lat: 35.25516, lng: 140.16164, text:"思った以上に自然とライトが良い感じで綺麗だった！<br>運転してくれてありがとう！一緒に行けて良かったしずっと楽しかった！", images: ["images/yoro1.jpeg","images/yoro2.jpeg","images/yoro3.jpeg","images/yoro4.jpeg","images/yoro5.jpeg","images/yoro6.jpeg","images/yoro7.jpeg","images/yoro8.jpeg"] },
  { name: "ニッケコルトンプラザ", lat: 35.71665, lng: 139.93448, text:"会った瞬間2人とも目腫れてて可愛かったな<br>映画も面白くて、せっかくなら1作目も一緒に見よう！<br>ポップコーンは思った通り中盤にはもうほぼなくなってた笑", images: ["images/nikke1.jpeg"] },
  { name: "カフェ", lat: 35.81208, lng: 139.94570, text:"ずっと気になっていたカフェ、連れて行ってくれてありがとう！<br>絵本読んだり、ゆくんみたいな置物沢山あって可愛かったな<br>行けて大満足！", images: ["images/old1.jpeg","images/old2.jpeg"] }


]

const karuizawaSpots = [
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
    text: `2日目のお昼！食べ歩きできる！<br>
      <a href="https://rurubu.jp/andmore/article/24422" target="_blank">
      👉 食べ歩き情報
      </a>`,
    link: "itinerary.html",
    images: ["images/ginza.jpg"]
  },
  {
    name: "白糸の滝",
    lat: 36.41048,
    lng: 138.59263,
    text: `2日目の観光スポット<br>
      <a href="https://karuizawa-kankokyokai.jp/spot/23206/" target="_blank">
      👉 詳細を見る
      </a>`,
    link: "itinerary.html",
    images: ["images/shiraito.jpg"]
  },
  {
    name: "ハルニレテラス",
    lat: 36.35947,
    lng: 138.59021,
    text: `ここで1日目のご飯！協会とかもさらっと見れそう！<br>
      <a href="https://www.hoshino-area.jp/harunireterrace/" target="_blank">
      👉 公式サイト
      </a>`,
    link: "itinerary.html",
    images: ["images/harunire.jpg"]
  },
  {
    name: "軽井沢千住博美術館",
    lat: 36.33556,
    lng: 138.59729,
    text: `1日目の観光スポット候補！建築が綺麗そうだ<br>
      <a href="https://www.senju-museum.jp/" target="_blank">
      👉 公式サイト
      </a>`,
    link: "itinerary.html",
    images: ["images/senju.jpg"]
  },
  {
    name: "軽井沢タリアセン",
    lat: 36.32883,
    lng: 138.59604,
    text: `1日目の観光スポット候補！ちょっとしたゴルフとか、ゴーカートも楽しめる！軽井沢の定番スポット<br>
      <a href="https://www.karuizawataliesin.com/" target="_blank">
      👉 公式サイト
      </a>`,
    link: "itinerary.html",
    images: ["images/taliesin.jpg"]
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
      scaledSize: new google.maps.Size(95, 95),
      anchor: new google.maps.Point(47, 60)
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