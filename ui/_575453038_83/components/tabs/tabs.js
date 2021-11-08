Component({
    properties: {
        items: {
            type: Array,
            value: [ "item1", "item2", "item3", "item4" ]
        },
        width: {
            type: String,
            value: "690"
        },
        height: {
            type: String,
            value: "120"
        },
        textColor: {
            type: String,
            value: "#777777"
        },
        textSize: {
            type: String,
            value: "32"
        },
        selectColor: {
            type: String,
            value: "#000000"
        },
        selected: {
            type: String,
            value: "0",
            observer: function(t) {
                this.setData({
                    mSelected: t
                }), this.changeTab({
                    currentTarget: {
                        dataset: {
                            index: t
                        }
                    }
                });
            }
        },
        dataCus: {
            type: Array,
            value: "",
            observer: function(t) {
                this.setData({
                    mDataCus: t
                });
            }
        },
        bg: {
            type: String,
            value: "#F8DC3E"
        }
    },
    data: {
        isScroll: !0,
        scrollStyle: "",
        bottom: "0",
        mSelected: "0",
        mDataCus: []
    },
    externalClasses: [ "cus" ],
    methods: {
        computePos: function(t) {
            var e = t.currentTarget.dataset.index;
            this.setData({
                mSelected: e
            }), e;
        },
        changeTab: function(t) {
            this.computePos(t);
        },
        onItemTap: function(t) {
            this.triggerEvent("itemtap", t, {
                bubbles: !0
            });
        }
    },
    lifetimes: {
        ready: function() {},
        detached: function() {
            null;
        }
    }
});