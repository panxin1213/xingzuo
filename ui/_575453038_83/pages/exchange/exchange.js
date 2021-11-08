require("../../config");

var e = require("../../utils/util.js"), a = null;

Page({
    data: {
        src: "",
        appid: 8579,
        type: 4,
        adshow: !1,
        target: 4
    },
    globalData: {
        src: ""
    },
    onLoad: function(a) {
        var c = "";
        switch (this.globalData.src = a.type, this.createInterstitialAd(), String(a.type)) {
          case "111":
            c = "https://shop91121063.youzan.com/wscshop/showcase/homepage?kdt_id=90928895";
            break;

          case "download":
            c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100004661&idx=1&sn=92e32612453da32b48ff12856741b2cf&chksm=1feff43d28987d2bcf2729c549012e0e02037b0262bb5fcc4561f4030b32a182ad181e43bede#rd";
            break;

          case "welfare":
            c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100004649&idx=1&sn=6822c03ad23a62a2a6fc9ae6e352fa15&chksm=1feff42128987d37f0f9c8e12436e779455e1603ed1a8765cb36fe7ffd21ba6a612663385679#rd";
            break;

          case "subscribe":
            c = a.link;
            break;

          case "gzh":
            c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100004633&idx=1&sn=7b156cb480ddf5e79065e0a6898b6df2&chksm=1feff41128987d077a7f958d80f9d61f0de3e0a5c8d5fcf90c369d6183e19361204d1966f582#rd";
            break;

          case "test":
            c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100004683&idx=1&sn=d19bfbbac43d965f428874308081ec2e&chksm=1feff44328987d5514c102606483075d2fdb86fa139c12a0e8d19291e24aff80570e634405cd#rd";
            break;

          case "ymtest":
            c = "https://mp.weixin.qq.com/s/RBmhltCh_X5asq-vVLxU4w";
            break;

          case "zttest":
            c = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100004977&idx=2&sn=0f9c0186696f26cbd63c904f57e6b778&chksm=1feff37928987a6fae6f59cf895d7d102ca3b40a7dfd8f8ae7722e531f95fd97a594faa84318#rd";
            break;

          case "lctest":
            c = this.getLCSrc(a.res);
            break;

          case "xz":
            this.globalData.name = a.name, this.globalData.id = a.id, c = (0, e.xzEssayUrl)(a.name, a.id), 
            this.show();
            break;

          case "h5ad":
            c = a.url ? decodeURIComponent(a.url) : "https://waimai.m2gou.com/public_web.html";
        }
        console.log(c), this.setData({
            src: c
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onShareAppMessage: function() {
        var a = "", c = "pages/exchange/exchange?type=" + this.globalData.src;
        switch (String(this.globalData.src)) {
          case "welfare":
            a = "二狗星座：福利社兑换礼物";
            break;

          case "download":
            a = "点进来！做个能花会省的小富婆...";
            break;

          case "subscribe":
            a = "二狗星座：每日运势抢先看";
            break;

          case "gzh":
            a = "关注公众号，开启每日运势提醒";
            break;

          case "test":
            c = "/pages/index/index?ch=ergouXz&ch_type=test", a = "二狗星座专有娱乐测试，真的不测一下？";
            break;

          case "lctest":
            c = "/test/questions/questions", a = "看看你的“绿茶”潜质有多高~";
            break;

          case "xz":
            a = "".concat(e.constellation_map[this.globalData.name].name || "她/他", "原来是这样的人"), 
            c = "pages/exchange/exchange?type=".concat(this.globalData.src, "&name=").concat(this.globalData.name, "&id=").concat(this.globalData.id);
        }
        return {
            title: a,
            path: c,
            success: function() {
                wx.showToast({
                    title: "转发成功！去群里看看~",
                    icon: "success",
                    duration: 2e3
                });
            },
            fail: function(e) {}
        };
    },
    getLCSrc: function(e) {
        var a = "";
        switch (e) {
          case "A":
            a = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006436&idx=1&sn=65cecfa60f6b70002057b78c1f202b7c&chksm=1feffd2c2898743a3922672298f864632cbc0c79b88fe74d56780d58bf3a0fe1ff8c0d2d2c54#rd";
            break;

          case "B":
            a = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006430&idx=1&sn=cb77b29da23ba911671dd7ded352a308&chksm=1feffd16289874006a333c7277e540f162be9477fb3a1b2171db1ed55ee61160c1144c7833bd#rd";
            break;

          case "C":
            a = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006440&idx=1&sn=a530a9294eaffa20a5edc6257b232cde&chksm=1feffd2028987436af854f6ef47345c31a49d7eb802311d10329ef3ed9da804145d17cdb891b#rd";
            break;

          case "D":
            a = "http://mp.weixin.qq.com/s?__biz=MzA4Mzk0ODEzNQ==&mid=100006444&idx=1&sn=7cc79c1e5d0b2dd8ac6a019c12d45fe1&chksm=1feffd2428987432fee002e008afbd06b3692b433ba1d3ed8a9f440c1716f79d947dd8b53acd#rd";
        }
        return a;
    },
    createInterstitialAd: function() {
        wx.createInterstitialAd && ((a = wx.createInterstitialAd({
            adUnitId: "adunit-8645873ab1c215aa"
        })).onLoad(function() {
            console.log("onLoad event emit");
        }), a.onError(function(e) {
            console.log("onError event emit", e);
        }), a.onClose(function(e) {
            console.log("onClose event emit", e);
        }));
    },
    show: function() {
        var e = setTimeout(function() {
            a.show().catch(function(e) {
                console.error(e);
            }), clearTimeout(e), e = null;
        }, 2e3);
    }
});