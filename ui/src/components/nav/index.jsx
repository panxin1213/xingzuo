import { Slot, View } from "@tarojs/components";
import { compareVersion, getRectInfo } from "../../common/util";
import Taro, { useReady } from '@tarojs/taro'

import "./index.scss"


const e = getRectInfo();
const i = Taro.getSystemInfoSync();
const n = compareVersion(i.version, "6.6.0") >= 0;
const o = n ? ("0" == e.menuButtonInfo.top ? Math.abs(e.menuBotton) : e.menuButtonInfo.top) : 0
const s = n ? e.menuHeight : e.menuHeight / 2;

export default function Index(props) {

    const { title = "", position = "fixed", p_b = 34, titStyle = {}, bg = "" } = props;

    useReady(() => {
        "fixed" == props.position ? setFixTop() : props.setfixtop({
            h: 0
        });
    })

    const setFixTop = () => {
        Taro.createSelectorQuery().select("#fix-top").boundingClientRect(function (t) {
            t && t.height;
        }).exec(function (e) {
            e[0] && e[0].height && props.setfixtop({
                h: e[0].height
            });
        });
    }

    return <>
        <View class="fix-top" id="fix-top" style={{ paddingTop: o, position: position, paddingBottom: p_b, background: bg }} >
            <View class="navigate-box" style={{ height: s, lineHeight: s }}>
                <View class="tit" style={{ ...titStyle }}>
                    {title}
                    <Slot name="btn"></Slot>
                </View>
            </View>
            <Slot name=""></Slot>
            <Slot name="tabs"></Slot>
        </View>

    </>
}