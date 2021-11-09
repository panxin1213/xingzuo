import { Image, View, Button, Text } from "@tarojs/components";

import "./index.scss"
import home_banner from './images/home_banner.png'
import aries from './images/aries.png';
import taurus from './images/taurus.png';
import gemini from './images/gemini.png';
import cancer from './images/cancer.png';
import leo from './images/leo.png';
import virgo from './images/virgo.png';
import libra from './images/libra.png';
import scorpio from './images/scorpio.png';
import sagittarius from './images/sagittarius.png';
import capricorn from './images/capricorn.png';
import aquarius from './images/aquarius.png';
import pisces from './images/pisces.png';

export default function Index(props) {

    const list = [
        {
            id: "aries",
            name: "白羊座",
            time: "3.21-4.19",
            temperament: "热情、冲动、自信",
            url: aries,
            color: "#dcb5b5",
            idx: 0,
            perbg: "#EFCECE"
        },
        {
            id: "taurus",
            name: "金牛座",
            time: "4.20-5.20",
            temperament: "慢热、耐心、保守",
            url: taurus,
            color: "#ffd688",
            idx: 1,
            perbg: "#FFE2AC"
        },
        {
            id: "gemini",
            name: "双子座",
            time: "5.21-6.21",
            temperament: "多变、好奇心、花心",
            url: gemini,
            color: "#e5c6fb",
            idx: 2,
            perbg: "#F3C7FB"
        },
        {
            id: "cancer",
            name: "巨蟹座",
            time: "6.22-7.22",
            temperament: "温柔体贴、善良、同情心",
            url: cancer,
            color: "#ffa89a",
            idx: 3,
            perbg: "#FFDBC1"
        },
        {
            id: "leo",
            name: "狮子座",
            time: "7.23-8.22",
            temperament: "慷慨、大方、自负自大",
            url: leo,
            color: "#ffd688",
            idx: 4,
            perbg: "#FFF49B"
        },
        {
            id: "virgo",
            name: "处女座",
            time: "8.23-9.22",
            temperament: "完美主义、挑剔、认真",
            url: virgo,
            color: "#feb0b0",
            idx: 5,
            perbg: "#FFC4DA"
        },
        {
            id: "libra",
            name: "天秤座",
            time: "9.23-10.23",
            temperament: "优雅、公正、追求和平",
            url: libra,
            color: "#88f3e7",
            idx: 6,
            perbg: "#ADF2EB"
        },
        {
            id: "scorpio",
            name: "天蝎座",
            time: "10.24-11.22",
            temperament: "爱恨分明、冷酷、神秘",
            url: scorpio,
            color: "#ddc7fb",
            idx: 7,
            perbg: "#DCC7FB"
        },
        {
            id: "sagittarius",
            name: "射手座",
            time: "11.23-12.21",
            temperament: "乐观、热爱自由、粗心",
            url: sagittarius,
            color: "#a4ed78",
            idx: 8,
            perbg: "#D6F487"
        },
        {
            id: "capricorn",
            name: "摩羯座",
            time: "12.22-1.19",
            temperament: "古板、稳重、严肃",
            url: capricorn,
            color: "#ab97ca",
            idx: 9,
            perbg: "#C7C8FB"
        },
        {
            id: "aquarius",
            name: "水瓶座",
            time: "1.20-2.18",
            temperament: "智慧、独特、叛逆",
            url: aquarius,
            color: "#84d9ff",
            idx: 10,
            perbg: "#C1EBFF"
        },
        {
            id: "pisces",
            name: "双鱼座",
            time: "2.19-3.20",
            temperament: "幻想、奉献精神、宽容",
            url: pisces,
            color: "#ffc5c5",
            idx: 11,
            perbg: "#FFC5C5"
        }
    ];

    const toResult = () => {
    }

    return <View class="con-wrap">
        <Image class="index-banner" mode="widthFixed" src={home_banner}></Image>
        <View class="inner-wrap">
            {
                list.map((item, index) => {
                    return <Button key={index} onClick={toResult} class="item" id={item.id}>
                        <Image class="img" src={item.url}></Image>
                        <Text class="name">{item.name}</Text>
                        <Text class="time">{item.time}</Text>
                    </Button>
                })
            }
        </View>
    </View >

}