Page({
    data: {},
    onLoad: function() {},
    onReady: function() {},
    onUnload: function() {},
    back: function() {
        (getCurrentPages && getCurrentPages()).length > 1 ? wx.navigateBack() : wx.switchTab({
            url: "/pages/index/index"
        });
    }
});