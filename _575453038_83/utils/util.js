var e = require("../@babel/runtime/helpers/interopRequireDefault")(require("../@babel/runtime/helpers/typeof")), a = require("md5"), c = require("events"), d = wx.canIUse("button.open-type.getUserInfo"), f = function(a) {
    return !(!a || "object" !== (0, e.default)(a) || Array != a.constructor);
}, b = function(e) {
    return (e = e.toString())[1] ? e : "0" + e;
};

module.exports = {
    formatTime: function(e) {
        var a = e.getFullYear(), c = e.getMonth() + 1, d = e.getDate(), f = e.getHours(), i = e.getMinutes(), t = e.getSeconds();
        return {
            str: [ a, c, d ].map(b).join("/") + " " + [ f, i, t ].map(b).join(":"),
            date: {
                y: a,
                m: c,
                d: d,
                h: f,
                mm: i,
                s: t
            }
        };
    },
    isArray: f,
    encrypt: function(e) {
        var c = "", d = new Array();
        for (var b in e) d.push(b);
        for (var i in d = d.sort()) {
            var t = e[d[i]];
            if (f(t)) {
                var s = "";
                for (var r in t) {
                    var n = t[r];
                    if (f(n)) for (var m in n) s += n[m]; else s += n;
                }
                t = s;
            }
            c += d[i] + "=" + t + "&";
        }
        return a(c += "key=22b802831946772d4907171839f1ed77");
    },
    initee: function() {
        wx.ee || (wx.ee = new c());
    },
    canIUse: d,
    constellation_map: {
        aries: {
            id: "aries",
            name: "白羊座",
            time: "3.21-4.19",
            temperament: "热情、冲动、自信",
            url: "aries.png",
            color: "#dcb5b5",
            idx: 0,
            perbg: "#EFCECE"
        },
        taurus: {
            id: "taurus",
            name: "金牛座",
            time: "4.20-5.20",
            temperament: "慢热、耐心、保守",
            url: "taurus.png",
            color: "#ffd688",
            idx: 1,
            perbg: "#FFE2AC"
        },
        gemini: {
            id: "gemini",
            name: "双子座",
            time: "5.21-6.21",
            temperament: "多变、好奇心、花心",
            url: "gemini.png",
            color: "#e5c6fb",
            idx: 2,
            perbg: "#F3C7FB"
        },
        cancer: {
            id: "cancer",
            name: "巨蟹座",
            time: "6.22-7.22",
            temperament: "温柔体贴、善良、同情心",
            url: "cancer.png",
            color: "#ffa89a",
            idx: 3,
            perbg: "#FFDBC1"
        },
        leo: {
            id: "leo",
            name: "狮子座",
            time: "7.23-8.22",
            temperament: "慷慨、大方、自负自大",
            url: "leo.png",
            color: "#ffd688",
            idx: 4,
            perbg: "#FFF49B"
        },
        virgo: {
            id: "virgo",
            name: "处女座",
            time: "8.23-9.22",
            temperament: "完美主义、挑剔、认真",
            url: "virgo.png",
            color: "#feb0b0",
            idx: 5,
            perbg: "#FFC4DA"
        },
        libra: {
            id: "libra",
            name: "天秤座",
            time: "9.23-10.23",
            temperament: "优雅、公正、追求和平",
            url: "libra.png",
            color: "#88f3e7",
            idx: 6,
            perbg: "#ADF2EB"
        },
        scorpio: {
            id: "scorpio",
            name: "天蝎座",
            time: "10.24-11.22",
            temperament: "爱恨分明、冷酷、神秘",
            url: "scorpio.png",
            color: "#ddc7fb",
            idx: 7,
            perbg: "#DCC7FB"
        },
        sagittarius: {
            id: "sagittarius",
            name: "射手座",
            time: "11.23-12.21",
            temperament: "乐观、热爱自由、粗心",
            url: "sagittarius.png",
            color: "#a4ed78",
            idx: 8,
            perbg: "#D6F487"
        },
        capricorn: {
            id: "capricorn",
            name: "摩羯座",
            time: "12.22-1.19",
            temperament: "古板、稳重、严肃",
            url: "capricorn.png",
            color: "#ab97ca",
            idx: 9,
            perbg: "#C7C8FB"
        },
        aquarius: {
            id: "aquarius",
            name: "水瓶座",
            time: "1.20-2.18",
            temperament: "智慧、独特、叛逆",
            url: "aquarius.png",
            color: "#84d9ff",
            idx: 10,
            perbg: "#C1EBFF"
        },
        pisces: {
            id: "pisces",
            name: "双鱼座",
            time: "2.19-3.20",
            temperament: "幻想、奉献精神、宽容",
            url: "pisces.png",
            color: "#ffc5c5",
            idx: 11,
            perbg: "#FFC5C5"
        }
    },
    getDate: function(e) {
        var a = "", c = new Date(), d = c.getFullYear(), f = c.getMonth() + 1, i = c.getDate(), t = c.getDay(), s = null, r = null;
        switch (e) {
          case "t0":
            a = f + "月" + i + "日";
            break;

          case "t0-1":
            (a = Object.create ? Object.create(null) : {}).date = "".concat(b(f), ".").concat(b(i)), 
            a.day = [ "周日", "周一", "周二", "周三", "周四", "周五", "周六" ][t];
            break;

          case "t1":
            s = new Date(Date.now() + 864e5), a = "".concat(s.getMonth() + 1, "月").concat(s.getDate(), "日");
            break;

          case "t1-1":
            s = new Date(Date.now() + 864e5), (a = Object.create ? Object.create(null) : {}).date = "".concat(b(s.getMonth() + 1), ".").concat(b(s.getDate())), 
            a.day = [ "周日", "周一", "周二", "周三", "周四", "周五", "周六" ][s.getDay()];
            break;

          case "t2":
            s = new Date(Date.now() - function(e) {
                return 864e5 * Math.abs(0 - e);
            }(t)), r = new Date(s.getTime() + 5184e5), a = "".concat(s.getMonth() + 1, "月").concat(s.getDate(), "日 - ").concat(r.getMonth() + 1, "月").concat(r.getDate(), "日");
            break;

          case "t3":
            a = "".concat(d, "年").concat(f, "月");
            break;

          case "t4":
            a = "".concat(d, "年");
            break;

          case "t5":
            f = f > 9 ? f : "0".concat(f), i = i > 9 ? i : "0".concat(i), a = "".concat(d, "-").concat(f, "-").concat(i);
            break;

          case "t6":
            a = new Date(d, f - 1, i, 0, 0, 0, 0).getTime();
        }
        return a;
    },
    formatDate: function(e) {
        var a = new Date(1e3 * e);
        return a.getFullYear() + "-" + ((a.getMonth() + 1 < 10 ? "0" + (a.getMonth() + 1) : a.getMonth() + 1) + "-") + (a.getDate() + " ") + (a.getHours() < 10 ? "0" + a.getHours() + ":" : a.getHours() + ":") + (a.getMinutes() < 10 ? "0" + a.getMinutes() + ":" : a.getMinutes() + ":") + (a.getSeconds() < 10 ? "0" + a.getSeconds() : a.getSeconds());
    },
    compareVersion: function(e, a) {
        e = e.split("."), a = a.split(".");
        for (var c = Math.max(e.length, a.length); e.length < c; ) e.push("0");
        for (;a.length < c; ) a.push("0");
        for (var d = 0; d < c; d++) {
            var f = parseInt(e[d]), b = parseInt(a[d]);
            if (f > b) return 1;
            if (f < b) return -1;
        }
        return 0;
    },
    getRectInfo: function() {
        var e, a = wx.getSystemInfoSync(), c = a.platform, d = a.windowHeight;
        try {
            if (null === (e = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null)) throw "getMenuButtonBoundingClientRect error";
            if (!e.width) throw "getMenuButtonBoundingClientRect error";
        } catch (c) {
            var f = "", b = 96;
            "android" === a.platform ? (f = 8, b = 96) : "devtools" === a.platform ? f = ios ? 5.5 : 7.5 : (f = 4, 
            b = 88), a.statusBarHeight || (a.statusBarHeight = a.screenHeight - a.windowHeight - 20), 
            e = {
                bottom: a.statusBarHeight + f + 32,
                height: 32,
                left: a.windowWidth - b - 10,
                right: a.windowWidth - 10,
                top: a.statusBarHeight + f,
                width: b
            };
        }
        return {
            platform: c,
            windowHeight: d,
            navBarHeight: 2 * (e.top - a.statusBarHeight) + e.height + a.statusBarHeight,
            menuRight: a.screenWidth - e.right,
            menuBotton: e.top - a.statusBarHeight,
            menuHeight: e.height,
            menuWidth: e.width,
            menuButtonInfo: e
        };
    },
    getPoint: function(e, a, c, d) {
        for (var f = [], b = Math.PI / 180 * Math.round(360 / d), i = 0; i < d; i++) {
            var t = a + e * Math.sin(b * i), s = c + e * Math.cos(b * i);
            f.unshift({
                x: t,
                y: s
            });
        }
        return f;
    },
    checkDate: function(e, a) {
        var c = Number(e + "." + a);
        switch (!0) {
          case c >= 1.2 && c <= 2.18:
            return "水瓶座";

          case c >= 2.19 && c <= 3.2:
            return "双鱼座";

          case c >= 3.21 && c <= 4.19:
            return "白羊座";

          case c >= 4.2 && c <= 5.2:
            return "金牛座";

          case c >= 5.21 && c <= 6.21:
            return "双子座";

          case c >= 6.22 && c <= 7.22:
            return "巨蟹座";

          case c >= 7.23 && c <= 8.22:
            return "狮子座";

          case c >= 8.23 && c <= 9.22:
            return "处女座";

          case c >= 9.23 && c <= 10.23:
            return "天秤座";

          case c >= 10.24 && c <= 11.22:
            return "天蝎座";

          case c >= 11.23 && c <= 12.21:
            return "射手座";

          case c >= 12.22 || c <= 1.19:
            return "摩羯座";

          default:
            return "";
        }
    },
    xzUserEvent: {
        aries: {
            boy: "白羊座的男性可视为“超人”，他总是被一种渴望得到敬佩和标新立异的狂热所驱使，喜欢表现出压倒一切的精神。他不相信任何失败，总是激情满怀，知难而进。他喜欢长驱直入，速战速决。",
            girl: "个性奔放的白羊座女性，热情、直率、独立。身为天生的领导者，她总能迅速达成目标，并且以自己和伙伴的表现为傲。她喜欢做有刺激挑战性的事情，唾手可得的奖品，对她来说就是无趣。",
            legend: "在一个古老的国度，国王和皇后因性格不和而离婚，并再娶了另一名女子，可惜这位新皇后天生喜欢嫉妒，无法忍受国王对前妻所留下的一双子女的百般疼爱，于是邪恶的阴谋逐渐在她脑中成形春天来临。",
            love: "对白羊座人来说，对方的纵容与关注是他们最需要的。因为，他们需要得到一个答案：他们在你心中，永远是第一位。他们喜欢在爱情中主动追求对方，而对那些反过来追他们的人，总有些提不起兴趣。",
            personality: "活泼热情，积极主动，但做事易走极端、爱激动、好斗和缺乏纪律观念。总喜欢把生活这弦绷得紧紧的，内心的激动常常自发地表现在行动上，很少顾及后果。这是个不满足于半淡无味生活",
            lucky: "白羊座性格天生乐观、开朗，他们极少把不开心的事堆积在心里，虽然偶尔有些冲动，但也算是个可爱的人。白羊座的幸运物通常都很大件，大部分都不能带在身边。",
            child: "没有哪门乏味无趣的课程是火相星座孩子学不会的，如果他们愿意，自会一帆风顺，轻易拿下学业。但并非所有的父母都懂，他们年复一年地生闷气，搞不明白为什么自己的孩子智商那么高，成绩却那么差。"
        },
        taurus: {
            boy: "金牛座的男人做事向来不急躁，谈恋爱当然也不会！他不会见你一面，就莽莽撞撞地投进爱情的陷阱。当他看中一个女孩之后，他会观察很久再决定到底要不要追求。",
            girl: "金牛座的女人应该是属于社会中流砥柱型的人物。她们的性情稳定、温和，做起事来踏实而努力。她们讲实际，懂得预算，所以你大可放心的是，她绝不会是个挥在无度的少奶奶。还有让很多男人羡慕的一点",
            legend: "尼基公主欧罗巴是个非常美丽的少女，传说她的容貘艳冠群芳。欧罗巴每天醒来之后，就会提着黄金花篮到海边的鲜花草坪去，与同龄的贵族少女游玩嬉戏，或沐浴或摘花",
            love: "金牛座的人有个特点，他们对谁都很温柔。但这绝不是因为对你有好感才对你温柔体贴，是因为他们本身就是那样的人。因此，总是会产生很多很多的误会，所以追求者往往一堆，还死不变心。",
            personality: "金星是金牛座的守护星，金牛座是保守型的星座，不喜欢变动，安稳是他的生活态度。金牛座的人不会急躁冲动，只会忍耐，吃得苦中苦，方为人上人正是他们的写照，而且他们非常顽固，一旦决定的事",
            lucky: "金牛座是一个实在的星座，他们大多都是朴素的，实实在在的物品才能引起他们的购买欲望。对于金牛座而言，他们的幸运物和金牛的个性一样，很踏实，金牛的幸运物看起来也都是沉甸甸的",
            child: "金牛座的孩子其实很聪明，但是容易沉浸在自己的世界里，甚至可以说，金牛座的人在幼年时期是有些自闭的。金牛座的人很有野心，虽然不喜欢变化，但是变化出现的时候还是能够适应。"
        },
        gemini: {
            boy: "双子座的男人大多才华横溢，大脑思维开阔，新点子多。很多人还是多才多艺型。但都是初通而不精，在艺术方面有独特之处，你今天发现他会画画，画得不错，明天你又发现他歌喉很好，后天你发现他能给你做",
            girl: "这是一个富有异国情调和魅力的女性。思想境界开阔，内心充满着美好的幻想，聪明伶利，有些神经质。内心总是闪耀着美好、幸福、爱情和理想的火花她希望自己永远置身于无忧无虑的乐园中，喜欢用紧张的工作",
            legend: "丽达王妃生了许多可爱的孩子，其中有两个兄弟，不光是感情特别要好，长相也几乎一模一样，很容易让人以为他们俩是一对双生子。其实，在这两兄弟中，哥哥是丽达上妃与天神宙斯所生的儿子，弟弟则是与巴斯达国王",
            love: "从爱情方面，说双子座人花心的人是不了解双子的，至少你看到的双子太少了。双子座人对异性从来就有一种亲切友好的感觉，但并不代表他就喜欢她们。可能有人觉得这样是花心，关键在于双子座人不觉得，如果双子座人的情人",
            personality: "双子座的人朋友虽多，但仍有很强烈的孤独感。双子座人很能说话，他们跟任何层次的人可以天南地北地聊，可以聊得很八卦，也会聊一些很严肃的话题，比如今天又有某个明星怎样怎样了、隔壁班有多少美女帅哥",
            lucky: "双子座的性格较为多变，沉闷的生活绝不是他们要的生活方式，他们的幸运物与他们的性格十分相符，可能会给他们带来新的灵感，经常与这些东西相伴，双子会觉得身心皆很愉快",
            child: "双子座的孩子，还在妈咪肚子里时就不太安分，常会给妈咪假情报，好像等不及要出生似的。常不按理出牌，妈咪可能会觉得不太好掌握：而十分随兴、爱好自由的双子孩子也极不喜欢受约束，所以当你与孩子有冲突时"
        },
        cancer: {
            boy: "巨蟹男对人有敏锐的观察力，且内心蕴藏丰富的情感，巨蟹座的男人不难成为人际沟通的桥梁。巨蟹座人可以不厌其烦，反复为一件事奔走疏通，但这件事必须是他自认为可以胜任的。也就是说，热心，助人，应量力而为。",
            girl: "巨蟹女子的感官只有在触及想象的窗口时才会苏醒。她是个心境永远年轻，思想深处常常有朦胧意识的“姑娘”。她非常钟情，但往往不知道真正令她心醉的人到底是谁。当人们信任她时，她会充满温情、幽默和诗意。",
            legend: "敏感多情的巨蟹座是母性的象征，双臂坏绕着胸前，表现母亲护卫子女的天性。不过，就另一种象征意义而言，怀中婴儿代表了无助脆弱的自我，而环绕的双臂，则说明了巨蟹座浓厚的自我保护意义。在希腊神话中，传说",
            love: "巨蟹座的人喜欢优越和成功的对象，故伴侣必须是他所尊敬或景仰的人。他们生性浪漫热情，性生活上能充分发挥敏锐的官能感觉。不过巨蟹座的女人容易为繁忙的家务缠身，即使情势允许，也无法享受生活的情趣，因其天生的拘谨",
            personality: "巨蟹座的人具有不屈不挠的意志，一旦拟定计划，必然付诸实际行动。有时会过于大方，应避免不必要的奢侈巨蟹座的人情绪阴晴不定，常会没来由地大发脾气，对别人的问话，也会随自己的高兴予以反驳或根本拒绝回答",
            lucky: "对于顾家的巨蟹而言，奢华不实际的东西绝不会引起他们的注意力，买一件好看却不实用的东西，不如花昂贵的费用买一件能用相当久时间的物件，他们的幸运物跟他们的性格非常相符，温暖又不浪费钱",
            child: "巨蟹座的孩子有着超群的直觉和敏感，感情真挚、坦诚，但性格却比较脆弱。经常忧心忡忡，即便将来长大之后也始终和家庭，尤其是和母亲保持密切的关系。在工作中，他们的敏感常给自己带来麻烦，他们经常无意识地寻觅着保护"
        },
        leo: {
            boy: "狮子座的男生气度不凡，他的热情和威望能使他在事业上获得成功。没有忠诚、没有光辉和宏伟的计划，他就无法生存。他们心胸开阔、有远见卓识、有排除困难和驾驭形势的才能。所以，人们很容易对他产生钦佩之情。高傲是他性格的突出特点。",
            girl: "狮子座女孩绝不能忍受一个会对她发号施令的男人。我们虽然不能说她是个大女人主义的女人，但她绝不会让一个大男子主义的男人来伤害她的女性尊严。她喜欢尔宠着她、顺着她，当然，我也建议你这样做。因为，当一个狮子座女孩觉得",
            legend: "兰潮汐是兰之国度的领袖，兰之国度只是宇宙中最小的一种国度，而且常年处于混乱之中，兰潮汐雄心勃勃，与兰之国度的几大部落争斗，终于统领了兰之国度，并且在长期的经营下令兰之国度的规模和势力直逼银河，天神偶见他，知道在几",
            love: "狮子座的人欣赏自信、有激情而又开朗乐观的异性。他们最不喜欢拐弯抹角的人，言辞闪烁的人也会让他们反感。狮子座的人对感情很忠诚专一，富有魅力的他们也许会让很多人心仪，暗恋或明着追求的人都不少，但狮子座要求比较高，寻找恋爱对象",
            personality: "自尊心强，不谦虚，决不容忍别人的轻视；因为自信，所以能够包容别人，遇事不动声色。喜欢鼓舞别人，但如果把握不好，会显得自以为是，无意中损伤别人的自尊。他们人生目标明确，不会迷失方向。他们不善于接受新事物，有点顽固",
            lucky: "狮子座是一个充满自信的，他们与生俱来的气质让他们显得自信满满，因此，对于美，相信只要稍加点缀即可。狮子座的幸运物，看起来不起眼，但是很容易得到以及携带，还可以衬托出他们不同的气质和时尚感哦",
            child: "狮子座的孩子很早就会感到自己有举足轻重的影响。在学校里不太听话，个性很强，像个小霸王。对于狮子座的孩子，千万不要刺伤他的自尊心，否则他会愈加固执地高傲难管，不求进取。要恰到好处地维护他的尊严感，及时赞扬他的优点一旦他认"
        },
        virgo: {
            boy: "琼瑶式爱情小说中的男主角，绝对不会是处女座的男子，抽象的触电感觉，对一个典型的处女座男人来说实在是太不实际了。所以如果你遇上了一个处女座的男人，如果你爱上他，请不要期待一份激情浪漫的感觉，更不要一下子热情如火地把他给吓跑",
            girl: "处女座的女性举止沉着冷静，常使人误以为她内心也是如此平稳。其实她害羞、保守、凡事保留。她细致的心灵需要安全感，以及对生活有把握的主控感。在泰然自若的外表下，处女座的女性有一颗紧张和敏感的心。她常担心自己不如某人有吸引力，因而心生妒意",
            legend: "传说一人间管理谷物的农业之神、希腊的大地之母--狄蜜特，有一个美丽的独生女--泊瑟芬，她是春天的灿烂女神，只要她轻轻踏过的地方，都会开满娇艳欲滴的花朵。有一天她和同伴正在山谷中的一片草地上摘花，突然间，她看到一朵银色的水仙",
            love: "不容易接受他人的意见，不容易受到干扰，有时候显得固执己见。为了阐明自己的观点，可能会翻来覆去地唠叨。对没有把握的事，不会轻易尝试，更不会投机取巧。做事脚踏实地，但是缺乏爆发力，不能迅速开创新局面。做人从不招摇，也不自以为是",
            personality: "不容易接受他人的意见，不容易受到干扰，有时候显得固执己见。为了阐明自己的观点，可能会翻来覆去地唠叨。对没有把握的事，不会轻易尝试，更不会投机取巧。做事脚踏实地，但是缺乏爆发力，不能迅速开创新局面。",
            lucky: "完美的处女座对自己的外表当然也是诸多要求的，他们不会盲目的跟随潮流，适不适合自己，相对于那些美的事物，更是处女们的选择。别看处女座们的幸运物非常日常，但它们不但能增添美感，更来为他们带来好运气噢。",
            child: "温静洁雅的处女孩子，白白净净似清秀佳人（男生也很斯文）。自我管理能力较好，自尊天生超强，受不得一点委屈和挫折，但又不会轻易开口表达出来，孩子的爸妈要小心呵护，多给他尝试的机会。处女座孩子有时会过度较真，期待他人说到做到。"
        },
        libra: {
            boy: "天秤座男生的优势：富有魅力、温文尔雅、性格平稳、目光敏锐，具有合作精神。不足之处是：优柔寡断，不够坦率、难于理解。天秤座男生过分追求高雅的生活，因循守旧、机会主义、注重琐事、不专心和缺乏坚定性。",
            girl: "天秤座女性不喜欢太过情绪化的人，当然她本身也绝不是爱闹情绪的人。因为她是那么“讲道理”。她喜欢跟别人讲道理，更时时刻刻跟自己讲道理。但是人总归是有情绪的，而世间的事，也不是每一样都有道理说得通的。在这样的时侯，天秤座女子的秤臂就",
            legend: "正义女神是宙斯的女儿，海神波塞冬是宙斯的弟弟。正义女神有着男子一样的气质，坚毅而热情，波塞冬像海一样深邃、冰冷。宙斯有无数的妻子，因此也有数不清的儿女，而波塞冬是他唯一的兄弟。正义女神是他和天后赫拉用泪水造出来的。不仅宙斯和天后疼爱她",
            love: "天秤座是唯美主义者，在爱情方面也是如此，一般都会选择俊男美女作为恋爱对象。他们的感情比较深沉，不会轻易向对方表白。一般情况下，他们的爱情都是被动的，因为抵抗不住诱惑，所以总是在毫无准备的情况下接受对方。天秤座的人比较重视朋友",
            personality: "天秤座人深知社交礼仪，总是面带微笑，气质优雅，给别人留下很好的第一印象；遇事冷静，善于避免摩擦和纠纷。在为人处事上，能灵活地考虑问题，接受各种意见，行事公正。在人际关系中喜欢保持中立，扮演仲裁者角色。擅长做和事佬，总是主动为人排解纷争",
            lucky: "这世上最爱美的星座恐怕非天秤座莫属了，对于天秤而言，没有将自己打扮到最满意，是绝不会出门的，邋里邋遢的形象若被熟人瞧见，会大大折损他们在外人中的形象，这可不符合天秤座的性格。",
            child: "每当家里的气氛紧张起来时，你的天秤座孩子都会变成和平使者。天秤座的孩子希望每个人都能和平共处，害怕冲突。如果他生在一个吵闹、各执己见的家庭，他将不得不学习怎样让别人听到自己的声音，这对于天秤座孩子来说是非常困难的。"
        },
        scorpio: {
            boy: "天蝎座的男人是杯烈酒，既使有些外表看来温和淡然，他依然是一杯看起来像白开水的高粱酒，在你毫无防备地一饮而尽之后，马上醉得你分不清方向了。他是无敌铁金钢，唯一免于被他打败的方式，就是永远不跟他作战，你有两种方式，一是无怨无悔地爱他，再不就是",
            girl: "天蝎不是一个平常的星座，最不会讨人欢心，最重自尊，最讲义气，最有保护欲，最没有秘密，灾难中最冷静乐观，最暴躁，最怕寂寞，最不被理解，最没耐心，最冲动。天蝎座的女人也不是平常的女人，她充满阳光的气息，常喜欢指示别人。她的家庭不一定很是富裕",
            legend: "太阳神阿波罗的儿子--巴野顿，天生美丽而性感，他自己也因此感到自负，态度总是傲慢而无礼，太过好强的个性常使他无意间得罪了不少人。有一天，有个人告诉巴野顿说：“你并非太阳神的儿子！”说完大笑扬长而去，好强的巴野顿怎能吞得下这口气，于是便问自己的母亲",
            love: "天蝎座的人比较内敛，不怎么会说海誓山盟的情话，却是12星座中感情最强烈的星座，能够专注而持久地面对爱情。他们希望可以爱一个人爱到底，也希望对方能够如此。天蝎座的人在失恋后会保持冷静的态度，此外向他人诉苦也是让自己淡忘痛苦的方法之一。其实，在",
            personality: "天蝎座的人口才好，能够与人打成一片，能够充分展现自己，而且能够轻松地说服别人，很受欢迎。他们很有谋略，能够洞察事物发展的关键所在，善于预见并解决问题，有时过于深沉，容易引起别人的戒心。他们精力旺盛，在平静的外表下，隐藏着过人的精力",
            lucky: "天蝎座的性格神秘莫测，没人能读懂他们的心思，也没人有办法解开那块神秘的面纱，神秘不仅仅是天蝎的特征，还是他们自我保护的方式。神秘的天蝎座幸运物比较特别，与他独特的性格极为相配，对于天蝎座来说，它给自己带来了好运~",
            child: "天蝎座孩子的听力在12星座中是最弱的，这使他们容易发呆。天蝎对音乐的鉴赏能力却相当强，很小就能理解古典乐的美妙之处，并为此爱上那种乐器。在学乐器的持久力上，天蝎座孩子是最有耐心的。水相星座的特质使天蝎座的人有些神秘。天蝎座的人对于事情真相"
        },
        sagittarius: {
            boy: "射手座的乐观己经上升到了不可救药的层次。即使失业失恋外加严重失财，换了别的星座，可能都死过不下一回了，射手座却能乐呵呵地顺应大意，美滋滋地把自己的不幸当成是“天将降大任于斯人也”。射手男心中有无数远大的理想，却经常容易忽略眼前的问题，因此",
            girl: "射手座的女子往往对世界充满了好奇、缺乏戒心。尤其是在她们年纪尚轻的时侯，她满心真诚地寻找着与她的心灵契合的伴侣。结果经常是冲动地跳入爱河之后，才发现原来只是一条臭水沟。射手座的女孩通常都有着天真乐观的个性，爱情的挫折不会轻易将她击倒",
            legend: "在遥远古希腊的大草原中，驰骋着一批半人半兽的族群，这是一个生性凶猛的族群。“半人半兽”代表着理性与非理性、人性与兽性间的矛盾挣扎，这就是“人马族”。人马族里唯独的一个例外--奇伦。奇伦虽也是人马族的一员，但生性善良，对待朋友尤以坦率著称",
            love: "射手座人浪漫多情，对世界充满好奇，无戒心，故常因冲动而受到伤害。幸而乐观的个性使他们不至被挫折击倒，反而有再试次的勇气，所以常有人误以为他游戏爱情。喜欢两性交往，所以常会有从友情转化成爱情的情况发生，事实上，他们往往也不清楚这两者的区别",
            personality: "射手座是十二星座里的冒险家。射手座的人喜欢一切空间广阔的户外活动，特别是骑马奔驰。此星座人无论精上或是实际生活中都有对未知领域探索的倾向，他们认为生命是山一连串的挑战组合而成的，对任何事都充满好奇心",
            lucky: "对于爱冒险的射手座而言，最适合自己的无非是那些能够起到保护作用的物件，冒险时总会发生许多的意外，身上带几样能保护自己的东西能防身还能保护自己。对于好奇爱动的射手座而言，他们经常受到不明所以的攻击，所以射手的幸运物都是一些质地比较厚实的东西~",
            child: "射手座的孩子笑容可掬、生气勃勃，十分容易冲动。他需要自由和有益于健康的欢乐。他的主要优点是忠诚和具独立精神。如果人们能正确对待和理解他，他会表现得十分理智，而且完全可以信任你；但是如果人们强迫他，就再也无法奈何他，他会躲避到另一个虚伪"
        },
        capricorn: {
            boy: "摩羯座男人是12星座中最有耐心，凡事都脚踏实地，固执可以说是他们最大的特质，无论对事情的看法、态度、一旦坚持己见，不达到目的，他们是不会放手的。同样摩羯座的男人，忍耐力，勤奋也是12星座之最，当然他们亦是最孤独的一个星座。一个典型的摩羯座男人",
            girl: "在土星守护下的摩羯座女子，个性上多少会有一些抑郁倾向。她们绝少轻易吐露心事。所以，如果你爱上她，你可得用心体贴她的感受。大体上说来，她是不怎么乐观的。你很难让一个摩羯座的女人相信“神话”和“奇迹”。她不是不相信会有美好的未来。但是她肯定所有的",
            legend: "牧神潘恩长得很丑。他日日看管着宙斯的牛羊，却不敢与众神一起歌唱；他一直爱慕着神殿里弹竖琴的仙子，却不敢向她表白……这一切都只因为他丑陋的外表。潘恩害羞而自卑，也没有什么法力，在天界存在感几乎为零。没有人了解他那丑陋的外表下掩藏着的炽热的心",
            love: "摩羯座的人的爱情观是保守传统的，他们需要的是能在事业上、人生规划上一起努力的恋人，一个可靠的伴侣。对爱情讲求爱与诚，坚信只要彼此有真心，就会心灵相通。但是，这并不意味着他们不向往浪漫的爱情，他们认为浪漫并不需要以金钱为基础，一起牵着手逛街",
            personality: "摩羯是个比较有城府的人，他们不会去得罪人，但是一旦有人伤害他，他会加倍还给你。摩羯的人没有安全感，他们喜欢在任何人面前装傻，这可不是一般的装傻。摩羯人的聪明就在于这点，他们认为只有傻子才能不牵扯到任何伤害，与其做一个聪明的人，不如当",
            lucky: "摩羯座是工作狂，对于工作的热衷异于常人，他们不喜欢逛街，不喜欢娱乐，工作是他们的全部，当然也包括兴趣和爱好。工作时常常会遇到不知所措和难下决定的时候，它们的幸运物可以在摩羯座犹豫不决的时候，帮助他们做决定，所以别忘了要随身携带~",
            child: "摩羯座孩子很现实，一切都从最现实的观点出发，脚踏实地，追求实实在在的结果。他不太容许自己降低自我的理想标准，讨厌自己的点子与别人雷同。他们往往喜欢追求更高的理想，洁身自爱，并且从幼年期便立志做第一流的人物。摩羯座是象征着冬天开始的星座"
        },
        aquarius: {
            boy: "水瓶男是12星座中最理性、最有独创思想、最客观、最难以预测的男人。水瓶星座看起来超然，仿佛是一个心不在焉的教授。他聪明绝顶，有独特的思维，他的大脑里充满了稀奇古怪、让人震惊的思想和主意，你从不见他读书，但是，无论什么问题，他都能够发表让你刮目相看",
            girl: "水瓶座女生可能永远也不会知道自己想要的是什么，但是她一直都很清楚，她不想要的是什么。水瓶座女人总喜欢做幕后的看客，冷冷地看着一切，在她眼里，一切都在意料之中，她并不觉得有什么是新奇的，如果她表现得新奇，那是因为她觉得应该这样做。她像一个看戏的人",
            legend: "在特洛伊城里，住着一位俊美的王子。他的俊美容貌，连城中美女都自叹不如。有一天，神界将举办宴会，可是替宙斯倒酒的一个女孩子受伤了，所以没有人能够代替做这项工作。於是宙斯非常苦恼，不晓得该怎么辨。众神看宙斯这样烦恼，很想帮忙找人代替，可是介绍来",
            love: "水瓶座的人绝对表里如一，不会耍心眼、使诡计，因此，他们开始一段恋情之前，一定会将自己的需要坦诚告诉对方，从来不会说一套做一套。水瓶座的人只有在充分拥有自由的前提下，才会感觉到爱情生活的舒适。因此，在交往过程中，崇尚自由的水瓶座不会约束对方的行动",
            personality: "水瓶座的人比较理智，不管遇到什么问题，都可以保持冷静，能够多角度地看待问题，化繁为简，是12星座中处事最理智的人。善于克制冲动，避免不必要的麻烦，考虑问题很周全，不做无把握的事情。水瓶座的人性格比较外向，对朋友非常热情，永远把人生重心放在",
            lucky: "水瓶座得性格有些奇葩，他们总会莫名其妙的生出许多的怪点子，也会做出一些不明所以的举动，对于水瓶座而言，他们的幸运物也绝非普通的玩意儿。水瓶座的幸运能给他们带来好运，所以如果可能的话，记得全部都配齐，多使用幸运物一定能提升水瓶的运气哦~",
            child: "水瓶座孩子的个性极强，他向往人与人之间美好的情义，有着伟大的博爱精神，愿意用美好的心去看待世界。同时他也是个极为理性的孩子，很少感情用事尽管他是相当重感情的孩子。他是个不听从社会规则的怪孩子，不容易改变自己的意见或主张，但另一方面却又极端讨厌"
        },
        pisces: {
            boy: "双鱼座男人是一个来自天堂里的梦想家，带着诗一样的灵魂。他有一双扑朔迷离、水一样的眼睛，带着男人少有的浪漫期待和神秘的渴望。他不是生活在乏味、冷酷的现实中的人，只要有机会，他就会飘荡在云雾般的幻想天堂。",
            girl: "双鱼座女生没有安全感，他们爱得起，但是放不下，更怕伤害。双鱼座女生喜欢折磨人，一会对你好，一会对你坏。双鱼座喜欢追问你的过去，但又害怕知道你的往事。双鱼座喜欢自欺欺人，一直说以后一切都会好，其实她自己心里最明白事情有多糟。他们的内心很悲观，世界末日也不会在乎。",
            legend: "有一天天气极佳，众神在尼罗河畔举行盛大的宴会,所有神明都接到了邀请，美神维纳斯带着小儿子爱神丘比特也来参加, 牧神潘和大家演奏起美妙仙乐；美食美酒，一切都让人陶醉。",
            love: "双鱼座的人会把爱情当成生活的全部，他们不会视爱情为儿戏。为了心爱的人，他们可以牺牲自己的一切，而且并不奢望对方会给以同样的回报。双鱼座的人在恋爱方面是矛盾的。一方面他们很专情，一旦谈起恋爱，绝对是那种为了爱而奋不顾身的类型，女性甚至会采用献身的极端做法来证明她的爱，至于对方能不能接受就另当别论了。",
            personality: "双鱼座的人讨厌死板的生活方式和严肃的纪律，喜欢梦幻般美好的生活，容易被小事感动，是12星座中最浪漫多情的。能够注意到生活中感人的细节，总是保持乐观积极的心态。不重视现实，缺乏竞争力，过分注意细节，总是保持乐观积极的心态。",
            lucky: "看到双鱼座，就看到他们身边那一圈一圈的粉红泡泡，能与双鱼搭配的，想必就是那些带着粉红泡泡的物件，也只有它们能吸引双鱼们的眼睛。石榴石、披肩和造型钥匙圈都是双鱼座的幸运物，火红的石榴石，可爱的钥匙圈，是不是都与双鱼座十分的搭配呢！",
            child: "双鱼座是冬天和黄道带的最后一个星座。这一星座的孩了有自己独特的缄默方式。他们对世界上发生的一切，乃至虚无缥缈的事物都有浓厚的兴趣。这种琢磨不透的思想使这个星座的孩子变成轮神秘的光晕，吸引着许许多多的人。"
        }
    },
    xzEssayUrl: function(e, a) {
        var c = "";
        switch (e) {
          case "aries":
            switch (a) {
              case "boy":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100004799&idx=5&sn=2d530dfa332c6296ef5ade2748c30ceb&chksm=1feff4b728987da1fd913a929e88e035a09a482c9672739f465bb915e5c1c040c07ee4a41561#rd";
                break;

              case "girl":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100004799&idx=4&sn=a10546a0d178a63d11ea40f7f1a58bfd&chksm=1feff4b728987da1494a66c3f0de6cf111ebab788d3ffc0f95dc2c4bc8b01e4de9465466fc19#rd";
                break;

              case "legend":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100004799&idx=7&sn=cbfa3bf527ac127a04a809e9dbe69a41&chksm=1feff4b728987da1622708756f7aac698dc7df49707eacb3f6621316b1812a5f20e4b6b8ecad#rd";
                break;

              case "love":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100004799&idx=3&sn=908d203c7f0b97c0c96569cdc650687d&chksm=1feff4b728987da1257026dece5f3a1f498dad94edc94bc5ee8819293f1d5c2cb8321b86db36#rd";
                break;

              case "personality":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100004799&idx=1&sn=c10809da92f471b5acfc2b8a79117893&chksm=1feff4b728987da1bcd64733c10b919321d264fce31f265ea4eba7c29b86205f0560fef552ce#rd";
                break;

              case "lucky":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100004799&idx=2&sn=86d9b53b448c45ca4cfff56e9e2012e5&chksm=1feff4b728987da13bd36e47d7d3aeb9f5baa562c0ad5d65beac7098c34a91cd14399ec385b3#rd";
                break;

              case "child":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100004799&idx=6&sn=915197d657dd96f2c91a9cf7999918ce&chksm=1feff4b728987da12fc49f389d645bbbcecc216803063f7a3dd092c347d32be0ca1738b25940#rd";
            }
            break;

          case "taurus":
            switch (a) {
              case "boy":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005101&idx=5&sn=350ce1ee785f45606c9b0dbe447c89a8&chksm=1feff3e528987af33026038745650f4e437227325a26d3df388865bcd295b4d75e26a64fad0f#rd";
                break;

              case "girl":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005101&idx=4&sn=75c471258d4412343c65510128a1f9e3&chksm=1feff3e528987af3508b79a9889311790830e0486eea6123c6b16d395108cd31bbca3b8aba87#rd";
                break;

              case "legend":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005101&idx=7&sn=c24d2ebf29ce9f22e213e66599bf4367&chksm=1feff3e528987af3fdfbfb09755c3ebd23223082f9f04e2477f4fbd9e68affa51862a53a2099#rd";
                break;

              case "love":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005101&idx=3&sn=fc3f8c68316143952bc4710dd5b0d13e&chksm=1feff3e528987af3145841ca7142a76aad2b6396dd63ae68be46b380650c5f59809c09085013#rd";
                break;

              case "personality":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005101&idx=1&sn=a6707da244c72ab2622d0a0e900884ec&chksm=1feff3e528987af3a83b0a047ad308d0edc7d59b885827d8cf9bbae2a19b918d8e693fa10c07#rd";
                break;

              case "lucky":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005101&idx=2&sn=56a38a54650e93849981deae65994791&chksm=1feff3e528987af30ad23c1eda7eb077c0326676c593b87b76c452c08a608e989faa3a1ae78f#rd";
                break;

              case "child":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005101&idx=6&sn=4ff261d1837b18ed24f697a133661677&chksm=1feff3e528987af3d2596bb3e7e022bed81817d0a590ee5cb0d007c39c58207717e4c3a2f4e5#rd";
            }
            break;

          case "gemini":
            switch (a) {
              case "boy":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005178&idx=5&sn=7384bfea104af8d3d46b62689b84ab95&chksm=1feff23228987b247d831118034bca1c47372b2f7b26f537282a826d23ce1591ee46f4750071#rd";
                break;

              case "girl":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005178&idx=4&sn=dd87479ed3f5f3d3bfa3fd8807b70e73&chksm=1feff23228987b246ffbfa29e3079026609be063890fd377caa66e2f4f0cd4400703df636c80#rd";
                break;

              case "legend":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005178&idx=7&sn=f903467b66511c3c0d2f97650490107c&chksm=1feff23228987b248ede51b4e8df7ce77843196458d10aa3d87d00947a55a0afdb77bc864bea#rd";
                break;

              case "love":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005178&idx=3&sn=d94d46d3766c1afd4c2569a27bba537c&chksm=1feff23228987b24bb03f5e8b2e2cae190f376f02e2ac28b0e0081c8e7eaa96d04913cbad9f2#rd";
                break;

              case "personality":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005178&idx=1&sn=929dfce1d96abd0968a1568690bdd844&chksm=1feff23228987b249d15bb5d8eeb4fa0f6b2b33852752025b1c067ae27a8c3384e2fc4d596a1#rd";
                break;

              case "lucky":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005178&idx=2&sn=2cf6d0cbef83edaa7f784fab057d9786&chksm=1feff23228987b245217bd65acd653a71e7cd9b2bf72b7b52a1a75b938704e656ff0e30ddc64#rd";
                break;

              case "child":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005178&idx=6&sn=97f5bfade4b0539fe05439bf5215986c&chksm=1feff23228987b242a791e32fdbbda0944f410e9b109fbe823a1059d3400be970b0840980beb#rd";
            }
            break;

          case "cancer":
            switch (a) {
              case "boy":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005256&idx=5&sn=8124704a9315c950ef92dd3dd2c205f3&chksm=1feff28028987b96146bfe67b26ba3c55a2934efdf9fb6f4c7a9561f7303fdad652cfe1fb98e#rd";
                break;

              case "girl":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005256&idx=4&sn=3cb6e617ef2e0d652c107b4b4e6846ee&chksm=1feff28028987b9625748d5ace56f4b74deb49572db80f99fa2b6686ae967f380e951cef63a8#rd";
                break;

              case "legend":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005256&idx=7&sn=e1e2d21a38004eb8e60bb1c949bb0192&chksm=1feff28028987b962dd6b847067972f3a8716ab80bbd3b178901da233a554bb1870001e6229b#rd";
                break;

              case "love":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005256&idx=3&sn=59b6e89e4232ced62362e181c3e438eb&chksm=1feff28028987b9609a3b7b92b4dfa14c7c56949b0f547be68e0c6244f5e725949cba9c0b580#rd";
                break;

              case "personality":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005256&idx=1&sn=f4d5de1021edab4af85f75adac17c613&chksm=1feff28028987b962a15f3b5a2c35a7354d689ef1825c6dbf6e2d59b11ac3bd7edac66dec0d6#rd";
                break;

              case "lucky":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005256&idx=2&sn=4abb5832da397ccaaa2aa38303396ff2&chksm=1feff28028987b96e5290ef6f4eedb54879017fcc149c7a6f90b3a7461a12ebdd1619d7e8827#rd";
                break;

              case "child":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005256&idx=6&sn=af35a2ef314387aed728019d8ab08c9a&chksm=1feff28028987b96ffadd359c7e215b64e34fe7a6808e7e470b6c45c13cf2986ddacfcf851c1#rd";
            }
            break;

          case "leo":
            switch (a) {
              case "boy":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005365&idx=4&sn=7e36bfd6e2ab880d3394a9aa21e0ddff&chksm=1feff2fd28987bebb6e87ca468252275bb37642eafbc0e3ca64ecaf8c6472b3abca6b7f219a8#rd";
                break;

              case "girl":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005365&idx=3&sn=8ab400de7e98b0cdde8bba222b9d3f58&chksm=1feff2fd28987beb35aa43363fe558d5685c6a852ff6c210aa41d81edccc08dfa057a747199d#rd";
                break;

              case "legend":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005365&idx=6&sn=02e05611c2212339a43be48f9d1fb256&chksm=1feff2fd28987bebc56d7228b5877255a8a922aaa3d9329d3a762c332a6c56c81341011f6669#rd";
                break;

              case "love":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005365&idx=2&sn=fd6afefd86f17e8e1dae781e8dbbb9d6&chksm=1feff2fd28987beb88535f720b533d6ed89c8e92ebe310da2eafb00d7f69885f2a3bf654f07d#rd";
                break;

              case "personality":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005365&idx=1&sn=78602e28dad2d49fe8cbaccce85c9167&chksm=1feff2fd28987beb7a3fc38a23fcc57ee43e9424795ac52d9139e48057ab5957641d62766326#rd";
                break;

              case "lucky":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005365&idx=7&sn=caee686d7e9b205b3b2dda13a76e03a6&chksm=1feff2fd28987bebd155893bf8215a5d73e5f050a146c79558fad0bb908b6c26c1db447592ce#rd";
                break;

              case "child":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005365&idx=5&sn=9ac85f3fd197c9bd1d147cdb90892afd&chksm=1feff2fd28987beb7e1cf9a1b84f7e1c77f232d5c996f165f34423dd2c27c9fa670034e6d142#rd";
            }
            break;

          case "virgo":
            switch (a) {
              case "boy":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005395&idx=5&sn=560e523ef5d0a63a7ec7a2ed37b14f76&chksm=1feff11b2898780d59d9f317d3f9ac986837094c39a27ecd8f044d286fee8ff3cccd3d1bc51a#rd";
                break;

              case "girl":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005395&idx=4&sn=56cd8199ac63aea35071d538f1dcd9d1&chksm=1feff11b2898780dfadf28d2a03d33bcbe62095a7a6731f357ac4374061e86168f906116c358#rd";
                break;

              case "legend":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005395&idx=7&sn=0404f9782e27b50f06e6707f3d9a3b20&chksm=1feff11b2898780d59974f54569a9b31d8143004193705dbed9bf40fe9db7dcaac0ce9c2e696#rd";
                break;

              case "love":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005395&idx=3&sn=6b4105d07262b4aa688cf48df58358fa&chksm=1feff11b2898780d42bf0958f7278aa42fd839a9afbd6f6a3fe632a6abcdd1fd3d58eb568ff9#rd";
                break;

              case "personality":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005395&idx=1&sn=640d896caee26c89e835af94cb28306a&chksm=1feff11b2898780dc0f3dba7002531a6785ff5a16359b05a641333ccf61aa191ef4e869c9433#rd";
                break;

              case "lucky":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005395&idx=2&sn=7eab67401ea7858145aababee4aa2b28&chksm=1feff11b2898780d6d2151058e5d2cd8844a7a5999c7e3ff39a5b55f6685afe8fc1a05ea23a8#rd";
                break;

              case "child":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005395&idx=6&sn=ed65c6328d2994799d8896c51888d4b1&chksm=1feff11b2898780da5d83bbdb15065d222998e186c9c0742dbfb5875986054b2aa3e627aa1b4#rd";
            }
            break;

          case "libra":
            switch (a) {
              case "boy":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005446&idx=5&sn=9932d2990fed8dc0aae3475b2c1033e3&chksm=1feff14e2898785853d3492d95504318cfd75a273bc3e9c7beeebd58eaf53d7db027de90a93b#rd";
                break;

              case "girl":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005446&idx=4&sn=111d1872d76b61e93d3c719d5a7fea8a&chksm=1feff14e28987858809d841343a01d60ea5b8bbfa2794619fbcc75042e85cb9f0eaed44b7153#rd";
                break;

              case "legend":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005446&idx=7&sn=da3e69e97d4e414237704a8edbccb6e2&chksm=1feff14e28987858fac092c63035eb266476afe1e0c2c3c2144d3a9c20a55542d7f9d9941133#rd";
                break;

              case "love":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005446&idx=3&sn=171c874add7f9ebef0e4f6439fdb6f49&chksm=1feff14e28987858dafcd34ad53f7ccd67fbd6cf288a2cb764f4882c8de781d05e8ed80f1e8f#rd";
                break;

              case "personality":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005446&idx=1&sn=0dfe674f0b53a080ee6ca0ddf71255d5&chksm=1feff14e2898785854a56c40a048363a041c9c0a184747f85666295371702507cbd8176e704d#rd";
                break;

              case "lucky":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005446&idx=2&sn=8ed3d809adc052e78dea9380588f329d&chksm=1feff14e2898785850d35b20012dab9dfdd75f82bf66e79df7fee738cfcdcf93a28497c2231a#rd";
                break;

              case "child":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005446&idx=6&sn=08380c52e532b1c1e31c3c580efd9f10&chksm=1feff14e28987858c3d8949f74ec62421793950ea1d01e6f16c20bc547003a0daa2a47580324#rd";
            }
            break;

          case "scorpio":
            switch (a) {
              case "boy":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005533&idx=5&sn=ea5176ffb5ea04fab855e26a1c65b3ab&chksm=1feff19528987883980b8ff2b6d21ec290a312c9f0c75468f777114e47b4687f6674a883f02e#rd";
                break;

              case "girl":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005533&idx=4&sn=e1c3ec2b35fbce591e1ec25dcb5b2e09&chksm=1feff1952898788362c25915daf7c1c6d57427346b13742da12d6af463c8b06e26c2fd12e47f#rd";
                break;

              case "legend":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005533&idx=7&sn=9884cb9db3197ff8049b42aad3532cb4&chksm=1feff1952898788345b1a6f89913726dc30d8f6fa7ea0e0a7e46ece82384f80ca583859a40ee#rd";
                break;

              case "love":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005533&idx=3&sn=114c62f418504143e48c4a951a598304&chksm=1feff19528987883f68cb2e96eed0eebeb3836a04539b137a892d0105f5e8d7eb2e39abbc921#rd";
                break;

              case "personality":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005533&idx=1&sn=6dfb7857d3c591361f8eec6abebf238d&chksm=1feff195289878831aae201fb228a2a6bb8080d7f82c44ebe7b74aa8e9ae1f1121244445cce3#rd";
                break;

              case "lucky":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005533&idx=2&sn=125734aee34def33d955e823c687b45c&chksm=1feff19528987883a4766f6c4164f07fc1a53d44f8fe72835886038d43f519c5713d0cb6461d#rd";
                break;

              case "child":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100005533&idx=6&sn=fba4a74c106609e4086d3e750c5536d7&chksm=1feff19528987883d5b77579f00610f7be45721de579cc70c0151dc4bef0ec52977a07017116#rd";
            }
            break;

          case "sagittarius":
            switch (a) {
              case "boy":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006251&idx=5&sn=1b40f0ee01fa86742ae3a72d6402360b&chksm=1feffe6328987775612b92dec3706890617c5625049ea08aa5e908518b3030f87378b5ca3aa6#rd";
                break;

              case "girl":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006251&idx=4&sn=e68e172263b8a26fa6074fcd19195d4b&chksm=1feffe63289877753e22eb6a227884a1967d641c35766042a3bb0525072f1702094ad4e67c55#rd";
                break;

              case "legend":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006251&idx=7&sn=3b845434af53e8cdbde48a1b1058e9d9&chksm=1feffe6328987775266622292dd83a4a5e8a88a254db4d4dd58a4167d352cb44d36b019e9458#rd";
                break;

              case "love":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006251&idx=3&sn=1f2e2edf5a65c86a0a94833578baeb15&chksm=1feffe6328987775e587d4d0d9d0d50effec57f31ac6a92ea22c54e25ea80cd6cfe7cccd2568#rd";
                break;

              case "personality":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006251&idx=1&sn=d0ab0cb6cb5f500704b9afd8289e8ffc&chksm=1feffe63289877754d07858622d70041c2c834c6a6eae0744e3985f660186af483d0da5262b6#rd";
                break;

              case "lucky":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006251&idx=2&sn=e9047671280be9d8410af4c4ad7b3f25&chksm=1feffe6328987775192dee9e4f2017c2975854d5e244027ee4daab7674b04b64d906bc516615#rd";
                break;

              case "child":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006251&idx=6&sn=65cf62b5ff69d6b655cc61ee9da1029d&chksm=1feffe6328987775c3d6a56d1e1deb9452fea4172af1aa312b42e370552877ff4c9c44b13f81#rd";
            }
            break;

          case "capricorn":
            switch (a) {
              case "boy":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006289&idx=5&sn=6b4a3fec91e030691c15d21800228007&chksm=1feffe992898778f04570a4716c2d79bd3b60c63314a7b9e41825096b0685051ce77127186a5#rd";
                break;

              case "girl":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006289&idx=4&sn=26a7ef6339b7fc00d0825fccb8d68366&chksm=1feffe992898778f7eed86a76118226f0af1362af4cf2e63a2416ffeda003a3336e7a085dd5b#rd";
                break;

              case "legend":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006289&idx=7&sn=a43eba6eb21fdffbcb8843b4f1af7e79&chksm=1feffe992898778f9683dadabc76f1d06fb6193510cf2e39e9c68a3b21c1f9bbf98918d5e93a#rd";
                break;

              case "love":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006289&idx=3&sn=9cb8908bd8972d9ca0555ff69feb6839&chksm=1feffe992898778fc6ef61d3a1f6e5cf226e9c60ca67c655e012a8842783e7d1af999727d29c#rd";
                break;

              case "personality":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006289&idx=1&sn=84ba071f5111bdacd8c4f5554aad4b5e&chksm=1feffe992898778f9269a030484cd2a2f5eb2ca2ef87d19aa039128884bf7628b680652de64c#rd";
                break;

              case "lucky":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006289&idx=2&sn=fed77f5c86a7e51a0a41689454ba994c&chksm=1feffe992898778f97ef7bee2dbe789b2b2e4be4848870ef618932e595820c443314551d6ee3#rd";
                break;

              case "child":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006289&idx=6&sn=df6918f4642e3b02fe22dee9a050f607&chksm=1feffe992898778fb1073e849377ee246f9f2e92096ad3947e4f8f1960dfa92de4c40f4c8448#rd";
            }
            break;

          case "aquarius":
            switch (a) {
              case "boy":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006319&idx=5&sn=7b0c46b2ce7325e1e922b72b78a1e4e3&chksm=1feffea7289877b116e302cee2569166756a97f6861827ffdbb4c76e6067de31028ca0d4802d#rd";
                break;

              case "girl":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006319&idx=4&sn=2b3c0b88afbfe28eebe949619494680c&chksm=1feffea7289877b175e4d66f0349144820d2f01e907f511f606d0a0d8048cb9c895034d3e1cf#rd";
                break;

              case "legend":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006319&idx=7&sn=f4f067f17c9c38d3742bcff8c8eea9f4&chksm=1feffea7289877b1c1546142bce615a5bc4db6121adb4aa125c6f4347223db391e5bab36ce04#rd";
                break;

              case "love":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006319&idx=3&sn=3280a29018b26788852ae2bfa6f3ef21&chksm=1feffea7289877b1dc925f54d13717a73080badc5afa7f01d3884d0ed4dfba8cca8bc9bdeae5#rd";
                break;

              case "personality":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006319&idx=1&sn=4bebaa105ae3b03ab495d5d2d74e9863&chksm=1feffea7289877b124e4a3220cdd3fbd215ba1cbc4d7b1798b6f37dcee1a5d1d5c1fc17f47d5#rd";
                break;

              case "lucky":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006319&idx=2&sn=f0973f5105ac7bd93055fd25af323e57&chksm=1feffea7289877b12381717acb63df2ad6a57d154c1d1a5dea7c924343019673b759dc638e36#rd";
                break;

              case "child":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006319&idx=6&sn=e5e8d0de153a073b5368b7659a020540&chksm=1feffea7289877b13cb4139e083a38ae29ad5ceda05e12998f16a44db53cbe39f0314e152c1a#rd";
            }
            break;

          case "pisces":
            switch (a) {
              case "boy":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006405&idx=5&sn=08780b1acf13990aff7154a87f5e0d81&chksm=1feffd0d2898741bcfa5e27090bba53f7ab5d1a088cc4430990b8f066b19ea7510eb01be5806#rd";
                break;

              case "girl":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006405&idx=4&sn=a8625fc4eb9f3059f8ff20f72ca8c0d9&chksm=1feffd0d2898741bd6375d44d8d262744d400657537b1bad7be04b04774b485e95bfc46fa6a7#rd";
                break;

              case "legend":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006405&idx=7&sn=1bbb12e72cc3b8c0c177418880a15c5f&chksm=1feffd0d2898741bd3b388521864d9f286531f0c0942856841c604ad9bfc1dd72523a531c477#rd";
                break;

              case "love":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006405&idx=3&sn=5b54e6912b60cf2e05d4421eb20bb867&chksm=1feffd0d2898741b0bd0292c5368a9d501a494a41dcf463fb00117c224a971c29c01f09b67d2#rd";
                break;

              case "personality":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006405&idx=1&sn=1d5bada7fa3bcf0bb51043ef40c3db97&chksm=1feffd0d2898741b41cef02b3dea398287b1999dc8688bb1381fc4ed759857f027f9d1a0f06f#rd";
                break;

              case "lucky":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006405&idx=2&sn=66cb7a431e9fe6efd383debe339d0012&chksm=1feffd0d2898741bd75b11dca248be50f045b5c891654c518a2da4fff32c7f6af5bc47e71a4c#rd";
                break;

              case "child":
                c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006405&idx=6&sn=6768d7fca92d15a19052d18841e5711d&chksm=1feffd0d2898741be92d7b799c74a89d7398aeb5d6ed8f6daa0bcf27b67a138c620111a6d773#rd";
            }
        }
        return c || "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100004799&idx=2&sn=86d9b53b448c45ca4cfff56e9e2012e5&chksm=1feff4b728987da13bd36e47d7d3aeb9f5baa562c0ad5d65beac7098c34a91cd14399ec385b3#rd";
    }
};