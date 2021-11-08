Component({
    properties: {
        tarotList: {
            type: Array,
            value: []
        },
        border: {
            type: Boolean,
            value: !1
        },
        more: {
            type: Boolean,
            value: !0
        },
        width: {
            type: Number,
            value: 690
        },
        title: {
            type: String,
            value: ""
        }
    },
    data: {},
    methods: {
        tarotService: function(e) {
            this.triggerEvent("tarotService", e);
        }
    }
});