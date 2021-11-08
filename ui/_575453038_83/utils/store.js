Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.store = void 0;

var t = require("mobx-miniprogram");

(0, t.configure)({
    enforceActions: "observed"
});

var n = (0, t.observable)({
    token: wx.getStorageSync("token") || "",
    unionid: wx.getStorageSync("unionid") || "",
    uuid: wx.getStorageSync("uuid") || "",
    d: wx.getStorageSync("sign_count") || "",
    sign7d: wx.getStorageSync("sign7d") || 0,
    tabbar_idx: 0,
    tabbar_tag: "",
    tabbar_flag: !1,
    current_tag: "",
    sessionkey: "",
    groupEncryptedData: null,
    updateToken: (0, t.action)(function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        wx.setStorageSync("token", t.token || ""), wx.setStorageSync("unionid", t.unionid || this.unionid || ""), 
        wx.setStorageSync("uuid", t.uuid || this.uuid || ""), wx.setStorageSync("sessionkey", t.sessionkey || this.sessionkey || ""), 
        wx.setStorageSync("authed", 1), this.token = t.token || "", this.unionid = t.unionid || this.unionid, 
        this.uuid = t.uuid || this.uuid, this.sessionkey = t.sessionkey || this.sessionkey;
    }),
    updateUnionId: (0, t.action)(function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        console.log("updateUnionId", t), t && (wx.setStorageSync("unionid", t), this.unionid = t || this.unionid);
    }),
    updateTabbar: (0, t.action)(function(t) {
        this.tabbar_idx = t;
    }),
    updateTag: (0, t.action)(function(t) {
        this.tabbar_tag = t;
    }),
    updateTabbarFlag: (0, t.action)(function() {
        this.tabbar_flag = !0;
    }),
    updateCurrentTag: (0, t.action)(function(t) {
        this.current_tag = t;
    }),
    setGroupEncryptedData: (0, t.action)(function(t) {
        var n = this;
        return new Promise(function(i, e) {
            n.groupEncryptedData = t, i();
        });
    }),
    updateSignCount: (0, t.action)(function(t) {
        this.d = Number(t), wx.setStorageSync("sign_count", Number(t));
    }),
    updateSign7dFlag: (0, t.action)(function(t) {
        this.sign7d = Number(t), wx.setStorageSync("sign7d", Number(t));
    })
});

exports.store = n;