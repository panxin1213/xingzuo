var t = require("../../api/index"), e = require("../../config"), i = null;

Component({
    properties: {
        data: {
            type: String,
            value: "",
            observer: function(t, e) {
                if (t) {
                    var i = JSON.parse(t);
                    i.item = i.item || {}, this._show(i.type, i.item);
                }
            }
        }
    },
    data: {
        cls: "",
        show: !1,
        type: 0,
        img_api: e.img_api,
        img_host: e.img_host
    },
    methods: {
        close: function(t) {
            this.closeHandle();
        },
        _show: function(t, e) {
            this.setData({
                show: !0,
                type: t,
                cls: "",
                title: e.title,
                linkthumb: e.linkthumb,
                id: e.id,
                gif: e.gif
            });
        },
        handleTarotContact: function(e) {
            var i = (e && e.detail || {}).path;
            (0, t.reportAnalytics)("banner_click", {
                id: e.currentTarget.dataset.id
            }), i || this.closeHandle();
        },
        toService: function(t) {
            var e = this;
            this.closeHandle().then(function() {
                e.triggerEvent("service");
            });
        },
        closeHandle: function(t) {
            var e = this;
            return new Promise(function(t, n) {
                e.setData({
                    cls: "hide"
                }), i = setTimeout(function() {
                    e.setData({
                        cls: "",
                        show: !1,
                        type: 0
                    }), clearTimeout(i), i = null, t();
                }, 200);
            });
        }
    }
});