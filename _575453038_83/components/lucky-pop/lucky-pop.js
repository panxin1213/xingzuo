var t = require("../../config"), e = null;

Component({
    properties: {
        lucky: {
            type: String,
            value: "",
            observer: function(t, e) {
                t && this.setData({
                    show: !0
                });
            }
        },
        auth: {
            type: String,
            value: ""
        },
        secTitle: {
            type: String,
            value: ""
        },
        luckyList: {
            type: Array,
            value: []
        }
    },
    data: {
        show: !1,
        img_api: t.img_api,
        img_host: t.img_host
    },
    attached: function() {
        var t = new Date().getDay();
        this.setData({
            day: t + 1
        });
    },
    methods: {
        close: function(t) {
            var i = this;
            this.setData({
                close: "hide"
            }), e = setTimeout(function() {
                i.setData({
                    close: "",
                    show: !1
                }), clearTimeout(e), e = null;
            }, 200);
        },
        saveHandle: function(t) {
            this.triggerEvent("saveService");
        },
        openSetting: function(t) {
            this.triggerEvent("settingService", t);
        }
    }
});