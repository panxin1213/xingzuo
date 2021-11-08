
import Data from '../data.json'
import Taro from '@tarojs/taro'

function get(options) {
    Taro.showLoading();
    return new Promise((resole, reject) => {
        resole(Data[options.type]);
    }).finally(() => {
        Taro.hideLoading();
    });
}
