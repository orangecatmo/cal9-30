$(document).ready(setInterval(function() {
    var myDate = new Date;
    var year = myDate.getFullYear(); //获取当前年
    var mon = myDate.getMonth() + 1; //获取当前月
    var date = myDate.getDate(); //获取当前日
    var h = myDate.getHours(); //获取当前小时数(0-23)
    var m = myDate.getMinutes(); //获取当前分钟数(0-59)
    var s = myDate.getSeconds(); //获取当前秒
    var week = myDate.getDay();
    var weeks = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];
    console.log(year, mon, date, weeks[week])
        // $("#demo").html("Thu Apr" + " " + date + " " + year);
    $("#demo").html("Thu Apr" + " " + date + " " + year);

    if (h >= 12) {
        $("#dd").html('PM' + ' ' + h + ":" + addZero(m) + ":" + addZero(s));
    } else {
        $("#dd").html('AM' + ' ' + h + ":" + addZero(m) + ":" + addZero(s));
    }
    $("#dd2").html(weeks[week]);

}, 1000))

function addZero(m) {
    return m < 10 ? ('0' + m) : m;
}
$(function() {

    var arr = ['あなたはこの世界で一番無二です', '好きなことができるたけていい', '絶望している暇あったら、うまいもの食べて寝るかな', '落胆するな'];
    var item = arr[Math.floor(Math.random() * arr.length)];
    $('.list_p').html(item);



    var arr = [{
        auspicious: "小吉",
        sign: "あなたはこの世界で一番無二です"
    }, {
        auspicious: "大吉",
        sign: "好きなことができるたけでいい"
    }, {
        auspicious: "中吉",
        sign: "絶望している暇あったら、うまいもの食べて寝るかな"
    }, {
        auspicious: "小吉",
        sign: "明るく生きていこうって、そう決めてた人のような気がするんだ"
    }, {
        auspicious: "大吉",
        sign: "そのまんまでいいんです。"
    }, {
        auspicious: "末吉",
        sign: "先のこと考えてたら、何もできないですよ。"
    }, {
        auspicious: "大吉",
        sign: "人が頑張ったのって、頑張って生きたのって、目に見えないかもしれないけど、心に残るんだと思います。"
    }, {
        auspicious: "中吉",
        sign: "人生には、三つ坂があるんですって、上り坂、下り坂、まさか。"
    }, {
        auspicious: "小吉",
        sign: "何をするかじゃなくて、誰とするかだと思うけどな。"
    }, {
        auspicious: "大吉",
        sign: "どんなに幸せそうに見えても、見えないところでみんな悩んでる。"
    }, {
        auspicious: "小吉",
        sign: "持ち物 あなたの笑顔。"
    }, {
        auspicious: "末吉",
        sign: "考えるという行為は、人間に与えられた最大の楽しみだ。"
    }, {
        auspicious: "大吉",
        sign: "人生短いだからね、好きなことしなさい。"
    }, {
        auspicious: "中吉",
        sign: "頑張りましょう、次から次に、手に入れたいものが増えてくるんですから。"
    }, {
        auspicious: "大吉",
        sign: "数学はいいわよ、迷いながらも、答えはひとつしかない。"
    }, {
        auspicious: "小吉",
        sign: "ずっと それ信じてやってきたわけじゃん。"
    }, {
        auspicious: "中吉",
        sign: "大事なものが後から遅れてくることもあるのよ愛情、だって生活だって。"
    }, {
        auspicious: "末吉",
        sign: "落胆するな。"
    }, {
        auspicious: "小吉",
        sign: "夢だけど、夢じゃなかった！"
    }, {
        auspicious: "中吉",
        sign: "多角的な視点から物事をとらえる癖をつけなければならない。"
    }, {
        auspicious: "大吉",
        sign: "道はどこからでもいつからでも変えられる。"
    }, {
        auspicious: "末吉",
        sign: "自分の中にはいろんな顔の自分がいる"
    }, {
        auspicious: "小吉",
        sign: "いちばん騙しやすい人間は、すなわち自分自身である。"
    }, {
        auspicious: "中吉",
        sign: "悩むことは若さの特権、大いに悩んでほしい。"
    }, {
        auspicious: "大吉",
        sign: "本当の大切なものは、いつも君のそばにある。"
    }, {
        auspicious: "末吉",
        sign: "今日がんばったご褒美に、明日やって来る。"
    }, {
        auspicious: "小吉",
        sign: "誰の人生にも雨は降る、暗く悲しい日がある。"
    }, {
        auspicious: "中吉",
        sign: "期待に応えよう、約束を守る。"
    }, {
        auspicious: "大吉",
        sign: "昨日の自分は決して今日の自分を裏切らない"
    }, {
        auspicious: "末吉",
        sign: "あなたのために、もっといい人になりたいです。"
    }, {
        auspicious: "小吉",
        sign: "もう一頑張り。"
    }, {
        auspicious: "中吉",
        sign: "持てる力を一点に集中させれば、必ず穴があく。"
    }, {
        auspicious: "大吉",
        sign: "人を信じよ、しかしその百倍も自らを信じよ。"
    }, {
        auspicious: "末吉",
        sign: "私の手を離してはいけませんよ"
    }, {
        auspicious: "小吉",
        sign: "何が起こったか、忘れていないが、当分の間、それを覚えていないことができます。"
    }, {
        auspicious: "中吉",
        sign: "たとえどんなきっかけで生まれようと生命は同じです。"
    }, {
        auspicious: "大吉",
        sign: "逢うは别れの始め。"
    }, {
        auspicious: "末吉",
        sign: "一年の計は元旦にあり。"
    }, {
        auspicious: "小吉",
        sign: "青は藍より出でて藍より青し。"
    }, {
        auspicious: "中吉",
        sign: "百聞は一見に如かず。"
    }, {
        auspicious: "大吉",
        sign: "かわいい銃であなたの心を狙撃。"
    }, {
        auspicious: "末吉",
        sign: "今でもあなたは私の光"

    }, {
        auspicious: "小吉",
        sign: "時間は優しい羽で、過去のほこりをそっとはじきます。"
    }, {
        auspicious: "中吉",
        sign: "あなたが暗いのが怖いと知っている人がいます。しっかりとあなたを抱きしめます。"
    }, {
        auspicious: "大吉",
        sign: "すべての不必要な依存とガラスの心をやめます。"
    }, {
        auspicious: "末吉",
        sign: "私の身分は桃パイの甘い蜜のココアです。"
    }, {
        auspicious: "小吉",
        sign: "目には太陽の光があり，笑いの中は全く広々としている。ど"
    }, {
        auspicious: "小吉",
        sign: "よく生きて、ゆっくりと出会います。"
    }, {
        auspicious: "中吉",
        sign: "夢まだ熟していませんが、途中です。"
    }, {
        auspicious: "大吉",
        sign: "満足かつ向上心があり、優しくしっかりしています。"
    }, {
        auspicious: "末吉",
        sign: "あなたを愛しています。"
    }, {
        auspicious: "小吉",
        sign: "あなたが暗いところでたたかれたのは、まさにあなたが明るいということです。"
    }, {
        auspicious: "中吉",
        sign: "行くところは、まだ見ぬ故郷です。"
    }, {
        auspicious: "大吉",
        sign: "人生はいつも美味しいものに出会います。"
    }, {
        auspicious: "末吉",
        sign: "何事にも全力で取り組むこと、楽しみも含めて。"
    }, {
        auspicious: "小吉",
        sign: "あなたが帰ってきたらあなたを抱きしめたいです。"
    }, {
        auspicious: "中吉",
        sign: "隠れている星も頑張って輝いていますね。"
    }, {
        auspicious: "大吉",
        sign: "自分の生活に忠実である"
    }, {
        auspicious: "莫吉",
        sign: "誰もしない第2選択。"
    }, {
        auspicious: "小吉",
        sign: "あなたの入れない反派役。"
    }, {
        auspicious: "中吉",
        sign: "あなたもきっと、誰かの奇跡。"
    }, {
        auspicious: "大吉",
        sign: "もう一度，光を信じて。"
    }, {
        auspicious: "末吉",
        sign: "夢だけど"
    }, {
        auspicious: "小吉",
        sign: "夢だけど"
    }, {
        auspicious: "小吉",
        sign: "夢だけど"
    }, {
        auspicious: "小吉",
        sign: "夢だけど"
    }, {
        auspicious: "小吉",
        sign: "夢だけど"
    }, {
        auspicious: "小吉",
        sign: "夢だけど"
    }, {
        auspicious: "小吉",
        sign: "夢だけど"
    }, {
        auspicious: "小吉",
        sign: "夢だけど"
    }, {
        auspicious: "小吉",
        sign: "夢だけど"
    }, {
        auspicious: "小吉",
        sign: "夢"


    }];



    let omikuji = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"];


    //动画
    $('.mian_back').click(function() {
        var item = arr[Math.floor(Math.random() * arr.length)];
        $(this).animate({ opacity: 0 }, 1000, function() {
            $('.mian_back').css('background-image', "none");
            $('.arrow').html(item.sign)
            $('.list_p').html(item.auspicious).css({ "color": "#e9c000", "fontSize": "2rem" })
            $('.mian_back').animate({ opacity: 1 }, 1000);

        });
        $('.main_list').css("backgroundColor", "#00629F");


    })

})