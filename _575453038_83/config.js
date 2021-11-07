var o = "https://song.m2gou.com";

module.exports = {
    host: o,
    host_api: o + "/xz",
    img_api: o + "/h5/images/xz",
    music_api: o + "",
    font_api: o + "/h5/fonts",
    img_host: "https://img.w2gou.com",
    version: wx.getAccountInfoSync() && wx.getAccountInfoSync().miniProgram && wx.getAccountInfoSync().miniProgram.version || "1.0.0"
};