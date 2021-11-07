var t = require("../../utils/util.js");

Component({
    properties: {
        editData: {
            type: Object,
            value: {},
            observer: function(t, e) {
                t && t.onlyshow ? this._show() : this._update(t);
            }
        },
        auth: {
            type: Number,
            value: 0,
            observer: function(t, e) {
                this.setData({
                    user_auth: t
                });
            }
        },
        edit_type: {
            type: Number,
            value: 1
        },
        cls: {
            type: String,
            value: ""
        },
        info: {
            type: Number,
            value: 0
        }
    },
    data: {
        constellation: "",
        birth: "",
        show: !1,
        sex: "",
        user_auth: 0,
        onlyShow: !1,
        enddate: "",
        canIUseGetUserProfile: !!wx.getUserProfile
    },
    attached: function(t) {
        var e = new Date(), i = e.getFullYear(), s = e.getMonth() + 1, a = e.getDate();
        s = s > 10 ? s : "0" + s, a = a > 10 ? a : "0" + a, this.setData({
            enddate: i + "-" + s + "-" + a
        });
    },
    methods: {
        _update: function(e) {
            if (e) {
                e.birth = e.birth || 0;
                var i = "";
                if (e.birth) {
                    var s = e.birth.split("-"), a = s[1], n = s[2];
                    i = (0, t.checkDate)(a, n);
                }
                this.setData({
                    birth: e.birth,
                    sex: e.sex,
                    show: !0,
                    constellation: i,
                    onlyShow: !1
                });
            }
        },
        _show: function() {
            this.setData({
                show: !0,
                onlyShow: !0
            });
        },
        submitfr: function() {
            var t = this.data.birth.split("-").join(""), e = Object.create(null) || {};
            e.birth = t, e.sex = this.data.sex, e.inviteid = this.data.inviteid, this.triggerEvent("submit", e);
        },
        submit: function() {
            if (this.data.birth && "0" != this.data.birth) if ("" != this.data.sex) {
                var t = this.data.birth.split("-").join(""), e = Object.create(null) || {};
                e.birth = t, e.sex = this.data.sex, e.edit_type = this.data.edit_type, this.triggerEvent("submit", e);
            } else wx.showToast({
                title: "还没选择性别噢~",
                icon: "none"
            }); else wx.showToast({
                title: "还没选择生日噢~",
                icon: "none"
            });
        },
        getUserProfile: function() {
            var t = this;
            wx.getUserProfile({
                desc: "用于开启星座匹配服务",
                success: function(e) {
                    t.triggerEvent("gotauth", e.userInfo), wx.nextTick(function() {
                        t.setData({
                            show: !1
                        });
                    }), t.submit();
                },
                fail: function(e) {
                    console.log(e), t.triggerEvent("rejectauth"), t.submit();
                }
            });
        },
        getUserInfo: function(t) {
            var e = this;
            t.detail.userInfo ? (this.triggerEvent("gotauth", t.detail.userInfo), wx.nextTick(function() {
                e.setData({
                    show: !1
                });
            })) : this.triggerEvent("rejectauth"), this.submit();
        },
        radioChange: function(t) {
            this.setData({
                sex: t.currentTarget.dataset.id
            });
        },
        bindDateChange: function(e) {
            var i = e.detail.value.split("-"), s = i[1], a = i[2], n = (0, t.checkDate)(s, a);
            this.setData({
                birth: e.detail.value,
                constellation: n
            });
        },
        close: function(t) {
            this.setData({
                show: !1
            });
        },
        showEditDialog: function(t) {
            this.triggerEvent("showeditdialog", t);
        },
        generateShareCode: function(t) {
            var e = this;
            this.setData({
                show: !1
            }, function() {
                e.triggerEvent("generatesharecode", t);
            });
        }
    }
});