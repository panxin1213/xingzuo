require("../../config");

var e = require("../../api/index"), t = getApp();

Page({
    data: {
        preferenceData: {
            top: null,
            middle: [],
            bottom: []
        }
    },
    onLoad: function(e) {
        this.getPreference();
    },
    onReady: function() {},
    onShow: function() {
        var e = new Date();
        wx.setStorage({
            data: new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0).getTime(),
            key: "b_tag",
            complete: function() {
                t.checkRedDot();
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    toOtherMini: function(e) {
        var t = e.currentTarget && e.currentTarget.dataset && e.currentTarget.dataset.type || "", a = e.currentTarget && e.currentTarget.dataset && e.currentTarget.dataset.path || "";
        if (2 !== t) {
            if (wx.navigateToMiniProgram) {
                var n = e.currentTarget && e.currentTarget.dataset && e.currentTarget.dataset.id || "", r = e.currentTarget && e.currentTarget.dataset && e.currentTarget.dataset.position || "", o = this.data.preferenceData[r] || {}, i = {};
                if ("[object Array]" === Object.prototype.toString.call(o)) for (var c in o) o[c] && o[c].id === n && (i = o[c]); else i = o;
                console.log(i);
                var u = i.path, g = i.appid, d = i.report;
                g && wx.navigateToMiniProgram({
                    appId: g,
                    path: u,
                    envVersion: "release",
                    success: function(e) {
                        d && reportAnalytics(d, {});
                    },
                    fail: function(e) {}
                });
            }
        } else a && wx.navigateTo({
            url: "/pages/exchange/exchange?type=h5ad&url=" + encodeURIComponent(a)
        });
    },
    getPreference: function() {
        var t = this;
        (0, e.getSpread)({
            mode: "web"
        }, function(e) {
            var a = (e.data || {}).data;
            a && (a.top && a.top.status > 0 ? a.top.type = 2 : a.top = null, t.setData({
                preferenceData: {
                    top: a.top,
                    middle: a.middle || [],
                    bottom: a.bottom || []
                }
            }));
        }, function() {});
    },
    adLoad: function() {
        console.log("原生模板广告加载成功");
    },
    adError: function(e) {
        console.log("原生模板广告加载失败", e);
    }
});