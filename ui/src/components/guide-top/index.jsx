import { Image, View } from "@tarojs/components";
import { useEffect, useState } from "react";
import { compareVersion, getRectInfo } from "../../common/util";
import Taro from '@tarojs/taro'

import img_addbar_h from './images/img_addbar_h.png'
import img_addbar_n from './images/img_addbar_n.png'
import guide_img_xz from './images/guide_img_xz.png'
import "./index.scss"


const n = getRectInfo();
const i = Taro.getSystemInfoSync();
const o = compareVersion(i.version, "6.6.0") >= 0;
const a = o ? n.menuButtonInfo.top : 0;
const s = o ? n.menuHeight : n.menuHeight / 2;
const tiptop = n.navBarHeight + n.menuBotton + 20;
const ir = .75 * n.menuWidth + n.menuRight;

export default function Index() {
    const [tips, settips] = useState(false)
    const [mask, setmask] = useState(false)

    const right = n.menuRight + n.menuWidth + 2;
    useEffect(() => {
        const st = parseInt(Taro.getStorageSync("guide7day"));
        if (isNaN(st) || (Date.parse(new Date()) - st) > 24 * 3600 * 7) {
            settips(true);
        }
    }, [])

    const hideTip = () => {
        settips(false);
        Taro.setStorageSync("guide7day", Date.parse(new Date()));
    }
    const showGuide = () => {
        setmask(true);
    }
    const hideGuide = () => {
        setmask(false);
    }

    return <>
        {
            tips ? <View class="guide-top-wrap">
                <View class="guide-tips" style={{ paddingRight: right, top: a, height: s }}>
                    <View onClick={showGuide} class="guide-txt" hoverClass="guide-btn-act">
                        <Image class="guide-txt-bg-h" mode="widthFix" src={img_addbar_h}></Image>
                        <Image class="guide-txt-bg-n" mode="widthFix" src={img_addbar_n}></Image>
                    </View>
                    <View onClick={hideTip} class="guide-tips-close"></View>
                </View>
                {
                    mask ? <><View catchtouchmove="stop" class="guide-mask"></View>
                        <View class="guide-info-wrap" style={{ top: tiptop }}>
                            <View class="guide-info">
                                <i class="i" style={{ right: ir }}></i>
                                <View class="step1">
                                    点击右上角<i></i>按钮
                                    <Image class="tips-img" src={guide_img_xz}></Image>
                                </View>
                                <View class="step2">
                                    下次查星座，微信首页下拉即可找到“鱼喵星座”
                                </View>
                            </View>
                            <View onClick={hideGuide} class="guide-close" hoverClass="guide-close-act">我知道了</View>
                        </View></> : ""
                }
            </View> : ""
        }</>

}