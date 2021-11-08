var e = require("../../config");

getApp();

Page({
    data: {
        img_api: e.img_api
    },
    onLoad: function(e) {
        wx.showShareMenu && wx.showShareMenu({
            withShareTicket: !0
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    toWelfare: function() {
        wx.navigateTo({
            url: "/pages/welfare/welfare"
        });
    },
    toOtherminiPro: function(e) {
        var n = e.currentTarget.dataset.id;
        wx.navigateToMiniProgram({
            appId: "wx4fbdce7b578060bf",
            path: "pages/news/news?selectedTabIndex=" + n,
            envVersion: "trial",
            success: function(e) {}
        });
    },
    onShareAppMessage: function(n) {
        var a = "二狗星座，更多精彩~", t = "/pages/more/more", i = "";
        return "button" == n.from && (a = "群友星座统计，看看大家都是什么星座？", t = "/groupStatistics/share/share", 
        i = e.img_api + "/share/share_group_stats.png"), {
            title: a,
            path: t,
            imageUrl: i,
            success: function() {
                wx.showToast({
                    title: "转发成功！快去看看~",
                    icon: "success",
                    duration: 2e3
                });
            },
            fail: function(e) {}
        };
    }
});