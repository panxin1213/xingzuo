Component({
    properties: {
        goods: {
            type: Array,
            value: []
        }
    },
    data: {},
    methods: {
        moreGoods: function() {
            this.triggerEvent("moregoods");
        },
        buyGoods: function(o) {
            this.triggerEvent("buygoods", o.currentTarget);
        }
    }
});