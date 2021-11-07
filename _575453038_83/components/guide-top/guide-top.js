var t, e = require("../../utils/util.js"), n = null;

Component({
    properties: {},
    data: {
        mask: !1,
        tips: !0
    },
    attached: function() {
        var n = (0, e.getRectInfo)(), i = wx.getSystemInfoSync(), o = (0, e.compareVersion)(i.version, "6.6.0") >= 0, a = o ? n.menuButtonInfo.top : 0, s = o ? n.menuHeight : n.menuHeight / 2, u = wx.getStorageSync("guide7day") || 0;
        console.log(wx.getStorageSync("scene"), "---测试测试测");
        var c = wx.getStorageSync("scene"), r = !0;
        if (t = 3, Date.now() - u >= 6048e5) if ("1001" == c || "1089" == c || "1103" == c || "1104" == c || "1106" == c || "1090" == c) r = !wx.getStorageSync("guideOnce"), 
        t = 1; else if ("1007" == c || "1008" == c || "1074" == c || "1082" == c || "1088" == c || "1096" == c) r = !0, 
        t = 2; else {
            var g = wx.getStorageSync("guide1Day") || 0;
            r = Date.now() - g >= 864e5;
        } else r = !1, t = 0;
        this.setData({
            m_t: a,
            m_h: s,
            top: n.menuButtonInfo.top + 2 + "px",
            right: n.menuRight + n.menuWidth + 2 + "px",
            tiptop: n.navBarHeight + n.menuBotton + 20 + "px",
            ir: .75 * n.menuWidth + n.menuRight + "rpx",
            tips: r
        });
    },
    ready: function(e) {
        if (this.data.tips) switch (t) {
          case 1:
            this.timeOut().then(function() {
                wx.setStorageSync("guideOnce", !0);
            });
            break;

          case 2:
            this.timeOut();
            break;

          case 3:
            this.timeOut().then(function() {
                wx.setStorageSync("guide1Day", Date.now());
            });
        }
    },
    methods: {
        showGuide: function() {
            this.setData({
                mask: !0
            });
        },
        hideGuide: function(t) {
            this.setData({
                mask: !1
            });
        },
        hideTip: function() {
            this.setData({
                tips: !1
            }), wx.setStorageSync("guide7day", Date.now());
        },
        stop: function() {},
        timeOut: function() {
            var t = this;
            return new Promise(function(e, i) {
                clearTimeout(n), n = setTimeout(function() {
                    t.setData({
                        tips: !1
                    }, function() {
                        e();
                    }), clearTimeout(n), n = null;
                }, 13e3);
            });
        }
    }
});