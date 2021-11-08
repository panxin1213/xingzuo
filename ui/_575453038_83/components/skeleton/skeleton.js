Component({
    properties: {
        backgroung: {
            type: String,
            value: "#f2f3f5"
        },
        marginBottom: {
            type: String,
            value: ""
        },
        marginRight: {
            type: String,
            value: ""
        },
        marginTop: {
            type: String,
            value: ""
        },
        borderRadius: {
            type: String,
            value: ""
        },
        row: {
            type: Number,
            value: 0,
            observer: function(r) {
                this.setData({
                    rowArray: Array.from({
                        length: r
                    })
                });
            }
        },
        width: {
            type: null,
            value: "100%",
            observer: function(r) {
                this.setData({
                    widthIsArray: r instanceof Array
                });
            }
        },
        height: {
            type: null,
            value: "45rpx",
            observer: function(r) {
                this.setData({
                    heightIsArray: r instanceof Array
                });
            }
        }
    },
    data: {
        rowArray: [],
        widthIsArray: !1,
        heightIsArray: !1
    },
    methods: {}
});