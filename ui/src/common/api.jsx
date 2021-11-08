
import Data from '../data.json'
import Taro from '@tarojs/taro'

const _baseUrl = "http://api.xz.icheguo.com:8090/";

function get(options) {
    Taro.showLoading();
    return new Promise((resole, reject) => {
        resole(Data[options.type]);
    }).finally(() => {
        Taro.hideLoading();
    });
}


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
                resolve(res);
            }
        })
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
                                "data": res.data.data.userinfo
                            });
                            resolve(res);
                        }).catch(res => {
                            reject(res);
                        });
                    }
                }
            })
        }).then(res => {
            console.log('success', res);
            return res;
        }).catch(res => {
            console.log('error', res);
        }).finally(() => {
            Taro.hideLoading();
        });
    }
}