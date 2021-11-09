import Taro from '@tarojs/taro'

export function richText2(l) {
    return null === l ? "" : l.replace(/style=""/gi, "").replace(/font-size:=""/gi, "").replace(/<h4>/gi, '<h4 style="font-size:14px;font-weight:normal;padding:10px;">').replace(/<p>/gi, '<p style="color:#000;width:100%;box-sizing:border-box;font-size:16px;font-weight:normal;padding:0 10px;margin:10px 0;">').replace(/<strong>/gi, '<strong style="line-height:45px;color:#000;">').replace(/<br\s*\/?>/gi, "\r\n").replace(/ style="font-size: 18px;"/gi, ' style="font-size: 15px;"').replace(/img/gi, 'img style="width:96% !important;vertical-align:middle;margin-left:2%;"').replace(/\u67e5\u770b\u5168\u5c4b\u65b9\u6848/gi, "");
}

export function richText(l) {
    return null === l ? "" : l.replace(/<table([\s\w"-=\/\.:;]+)/gi, '<table$1 style="border-collapse: collapse;margin:10px;color:#666;"').replace(/ style=""/gi, "").replace(/ aid="undefined"\//gi, "").replace(/ title=""/gi, "").replace(/ aid="undefined"/gi, "").replace(/.jpg"\//gi, '.jpg"').replace(/.gif"\//gi, '.gif"').replace(/.png"\//gi, '.png"').replace(/<img([\s\w"-=\/\.:;]+)/gi, '<img$1 style="width:100% !important;vertical-align:middle;"');
}

export function getRectInfo() {
    var e, a = Taro.getSystemInfoSync(), c = a.platform, d = a.windowHeight;
    try {
        if (null === (e = Taro.getMenuButtonBoundingClientRect ? Taro.getMenuButtonBoundingClientRect() : null)) throw "getMenuButtonBoundingClientRect error";
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
}


export function compareVersion(e, a) {
    e = e.split("."), a = a.split(".");
    for (var c = Math.max(e.length, a.length); e.length < c;) e.push("0");
    for (; a.length < c;) a.push("0");
    for (var d = 0; d < c; d++) {
        var f = parseInt(e[d]), b = parseInt(a[d]);
        if (f > b) return 1;
        if (f < b) return -1;
    }
    return 0;
}

const b = function (e) {
    return (e = e.toString())[1] ? e : "0" + e;
};


export function getDate(e) {
    var a = "", c = new Date(), d = c.getFullYear(), f = c.getMonth() + 1, i = c.getDate(), t = c.getDay(), s = null, r = null;
    switch (e) {
        case "t0":
            a = f + "月" + i + "日";
            break;

        case "t0-1":
            (a = Object.create ? Object.create(null) : {}).date = "".concat(b(f), ".").concat(b(i)),
                a.day = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][t];
            break;

        case "t1":
            s = new Date(Date.now() + 864e5), a = "".concat(s.getMonth() + 1, "月").concat(s.getDate(), "日");
            break;

        case "t1-1":
            s = new Date(Date.now() + 864e5), (a = Object.create ? Object.create(null) : {}).date = "".concat(b(s.getMonth() + 1), ".").concat(b(s.getDate())),
                a.day = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][s.getDay()];
            break;

        case "t2":
            s = new Date(Date.now() - function (e) {
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
}