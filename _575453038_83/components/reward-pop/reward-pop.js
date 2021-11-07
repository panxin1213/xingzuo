var i = require("mobx-miniprogram-bindings"), t = require("../../utils/store"), s = getApp();

Component({
    behaviors: [ i.storeBindingsBehavior ],
    data: {
        show: !0
    },
    storeBindings: {
        store: t.store,
        fields: {
            sign7d: function() {
                return t.store.sign7d;
            }
        },
        actions: {
            updateSign7dFlag: "updateSign7dFlag"
        }
    },
    methods: {
        close: function() {
            this.setData({
                show: !1
            }), this.updateSign7dFlag(-1), s.setUserConfig("signin7d", -1), this.triggerEvent("got");
        }
    }
});