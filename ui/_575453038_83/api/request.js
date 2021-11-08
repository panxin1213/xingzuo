var t = require("../utils/util.js"), o = require("../config");

module.exports = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "POST", n = arguments.length > 1 ? arguments[1] : void 0, i = arguments.length > 2 ? arguments[2] : void 0, d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {}, a = arguments.length > 4 ? arguments[4] : void 0, s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : function() {}, c = arguments.length > 6 ? arguments[6] : void 0, l = n.indexOf("http") > -1 ? "" : o.host_api;
    if (l && !i.nosign) {
        var r = (0, t.encrypt)(i);
        i.sign = r;
    }
    wx.request({
        url: l + n,
        data: i,
        method: e,
        header: {
            "content-type": "application/x-www-form-urlencoded",
            version: o.version
        },
        success: function(t) {
            4 == t.data.code ? getApp().logout(s) : 0 == t.data.code || 4 == t.data.code || c || wx.showToast({
                title: t.data.msg,
                icon: "none"
            }), d(t);
        },
        fail: function(t) {
            a ? a() : wx.showToast({
                title: "网络异常",
                icon: "none"
            });
        }
    });
};