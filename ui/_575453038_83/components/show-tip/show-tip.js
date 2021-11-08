var t = null;

Component({
    properties: {
        msg: {
            type: String,
            value: "",
            observer: function(t) {
                if (t) {
                    var e = JSON.parse(t);
                    console.log(t, e), this.setData({
                        txt: e.msg,
                        type: Number(e.type)
                    }), this._next();
                }
            }
        }
    },
    data: {
        txt: "",
        type: 1
    },
    methods: {
        _next: function() {
            var e = this;
            t = setTimeout(function() {
                e.setData({
                    txt: "",
                    type: 1
                }), clearTimeout(t), t = null;
            }, 1700);
        }
    }
});