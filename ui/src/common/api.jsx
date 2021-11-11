
import Taro from '@tarojs/taro'

const _baseUrl = "http://api.xz.icheguo.com:8090/";


function Request(options) {
    return new Promise((resolve, reject) => {
        Taro.request({
            mode: "cors",
            credentials: "include",
            header: { "Cookie": (Taro.getStorageSync('cookie') || []).join(";") },
            fail: function (res) {
                reject(res);
            },
            ...options,
            success: function (res) {
                const { cookies } = res;
                if (cookies && cookies.length) {
                    Taro.setStorage({
                        "key": "cookie",
                        "data": [...(Taro.getStorageSync('cookie') || []), ...cookies]
                    });
                }
                resolve(res.data);
            }
        })
    });
}

export const getIndex = function () {
    return Request({
        url: _baseUrl + 'api/data/index'
    });
}


export const Login = function () {
    if (Taro.ENV_TYPE.WEAPP === Taro.getEnv()) {
        Taro.showLoading();
        return new Promise((resolve, reject) => {
            Taro.login({
                success: function (res) {
                    if (res.code) {
                        Taro.clearStorage();
                        Request({
                            url: _baseUrl + 'plugin/wxapp/login/index',
                            data: {
                                code: res.code
                            }
                        }).then(res => {
                            Taro.setStorage({
                                "key": "userinfo",
                                "data": res.data.userinfo
                            });
                            resolve(res);
                        }).catch(res => {
                            reject(res);
                        });
                    }
                }
            })
        }).then(res => {
            return res;
        }).catch(res => {
        }).finally(() => {
            Taro.hideLoading();
        });
    }
}