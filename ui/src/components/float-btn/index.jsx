import { Image, View, Button, MovableArea, MovableView } from "@tarojs/components";
import { useEffect, useState } from "react";
import Taro from '@tarojs/taro'

import "./index.scss"

export default function Index(props) {
    const { w = "90vw", h = "100vh", x = 0, y = 0, t = 0, type = "", l = "10vw", r = 0, shareType = "", hide = false, reddot = false, icon = "" } = props;

    const [init_x, setinit_x] = useState(0)
    const [init_y, setinit_y] = useState(0)

    const showShare = () => {
    }

    const pubHandle = () => {
    }

    const luckyHandle = () => {
        props.luckyservice();
    }

    useEffect(() => {
        var e = Taro.getSystemInfoSync(), t = e.windowWidth - e.windowWidth / 750 * 133, i = e.windowHeight - e.windowHeight / 1334 * 350;
        setinit_x(t);
        setinit_y(i);
    }, [])

    return <View class="moveable-wrap" style={{ top: t, width: w, height: h, left: l, right: r }}>
        <MovableArea style={{ width: w, height: h }}>
            <MovableView onClick={showShare} className={type == 'luckyBtn' ? 'bigMoveBtn' : 'movebtn'} direction="all" hoverClass="active" style={{ top: t, left: l }} x={x || init_x} y={y || init_y}>
                {type === "pub" ? <Button onClick={pubHandle} class="pub-btn" hoverClass="pub-btn-act" id="pub-btn"></Button> : (type === 'luckyBtn' ? <Button onClick={luckyHandle} class="lucky-btn" hoverClass="lucky-btn-act" id="subscribeFloatBtn" style={{ right: hide ? -106 : -12 }}>
                    <Image class="lucky-img" mode="aspeciFit" src={icon}></Image>
                </Button> : <Button class="share-btn" data-type={shareType} hoverClass="share-btn-act" id="share-btn" openType="share"></Button>)}
                {reddot ? <View class="reddot" style="right:{{o_hide?'-70rpx':'24rpx'}};">1</View> : ""}
            </MovableView>
        </MovableArea>
    </View>


}