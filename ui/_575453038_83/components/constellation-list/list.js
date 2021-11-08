var t = require("../../utils/util");

Component({
    properties: {},
    data: {
        list: t.constellation_map
    },
    methods: {
        toResult: function(t) {
            this.triggerEvent("toresult", t);
        }
    }
});