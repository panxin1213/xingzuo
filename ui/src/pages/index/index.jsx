import { Image, OpenData, Text, View, Swiper, SwiperItem, Button } from "@tarojs/components";
import { useEffect, useState } from "react";
import GuideTop from '../../components/guide-top/index'
import Nav from '../../components/nav/index'
import "./index.scss"
import moom from '../images/moom.png';
import bannertop from '../images/banner-top.png'
import ConstellationList from '../../components/constellationlist'
import { getDate, getRectInfo } from "../../common/util";
import { getIndex } from "../../common/api";
import FloatBtn from '../../components/float-btn'
import Taro from '@tarojs/taro'
import Tabs from '../../components/tabs'
import Star from '../../components/star';
import tarot from '../images/tarot.png';
import lucky from '../images/lucky.png';
import share from '../images/share.png';
import Process from '../../components/process';
import Skeleton from '../../components/skeleton';


const a = getRectInfo();
const e = Taro.getSystemInfoSync();
const move_h = e.windowHeight - a.navBarHeight;
const move_t = 136;
const float_y = e.windowHeight - e.windowHeight / 1334 * 750;

const h = ["100vh", "100vh", "100vh", "100vh", "100vh"]
const tab_item = ["今日", "明日", "本周", "本月", "今年"]
const date_arr = [getDate("t0-1"), getDate("t1-1"), getDate("t2"), getDate("t3"), getDate("t4")]

export default function Index() {
  const [isShow, setisShow] = useState(2)
  const [xzTop, setxzTop] = useState(106)
  const [addBanner, setaddBanner] = useState("")
  const [waimailist, setwaimailist] = useState([])
  const [floatBtnShow, setfloatBtnShow] = useState(false)
  const [weekLuckyIcon, setweekLuckyIcon] = useState("")
  const [btnReddot, setbtnReddot] = useState(false)
  const [floatBtnHide, setfloatBtnHide] = useState(false)
  const [bannerTop, setbannerTop] = useState(48)
  const [info, setinfo] = useState({})
  const [act, setact] = useState(0)
  const [act_select, setact_select] = useState(0)
  const [detail, setdetail] = useState([{}, {}, {}, {}, {}])
  const [sourceType, setsourceType] = useState(0)
  const [gzhShow, setgzhShow] = useState(false)

  const setfixtop = () => {
  }

  useEffect(() => {
    setxzTop(a.menuButtonInfo.top + a.menuButtonInfo.height);
    setbannerTop(a.menuButtonInfo.top);

    getIndex().then(res => {
      if (res.code) {
        setaddBanner(res.data.addbanner);
        setwaimailist(res.data.waimailist);
        setweekLuckyIcon(res?.data?.luck_week?.image_url || res.data.float_icon);
        setfloatBtnHide(!!res?.data?.luck_week?.wechat_url);
      }
    });
  }, [])

  const serviceHandle = () => {

  }

  const toMiniPro = () => {
  }

  const toSubscribeText = () => { }

  const menuEl = <>
    <Nav setfixtop={setfixtop} className="nav-wrap" p_b={"0"} position="static" title=""></Nav>
    <Image className="moon-bg" src={moom}></Image>
    <View className="constellation-list"><ConstellationList></ConstellationList></View>
    {addBanner ? <View class="index-banner" hoverClass="index-banner-act">
      <Image class="index-banner-image" mode="widthFix" src={addBanner}></Image>
    </View> : ""}
    {waimailist.length ? <View class="index-banner-waimai" style={{ top: xzTop }}>
      {waimailist.map((waimai, index) => {
        return <View class="waimai-item" key={index}>
          <Image class="waimai-img" mode="widthFix" src={waimai.imgIndex}></Image>
        </View>
      })
      }
    </View> : ""
    }
  </>

  const changetab = (index) => {
    setact_select(index);
    setact(index);
  }

  const back = () => {
    setisShow(1);
  }

  const swiperchange = () => {
  }

  const toTarot = () => {
  }

  const buyGoods = () => {
  }


  const infoEl = <>
    {floatBtnHide ? <FloatBtn luckyservice={toSubscribeText} h={move_h} hide={floatBtnShow} icon={weekLuckyIcon} l="unset" reddot={btnReddot} shareType="3" t={move_t} type="luckyBtn" w={170} y={float_y}></FloatBtn> : ""}
    <View class="banner-top" style={{ paddingTop: bannerTop }}>
      <View bindtap="toRadar" class="banner-item" data-id="-2">
        <Image class="banner-item-bg" src={bannertop}></Image>
        <Text class="banner-item-txt">{info && info.name}和哪个星座最配？</Text>
        <View class="banner-item-head">
          <OpenData type="userAvatarUrl"></OpenData>
        </View>
      </View>
      {waimailist.length ? <View class="banner-waimai">
        {waimailist.map((waimai, index) => {
          return <View onClick={toMiniPro} class="waimai-item" key={index}>
            <Image class="waimai-img" mode="widthFix" src={waimai.imgSub}></Image>
          </View>
        })}
      </View> : ""}
    </View>
    <View class="swiper-wrap" style={{ height: h[act] }}>
      <Tabs bg={info.color} itemtap={changetab} height={35} items={tab_item} selected={act_select} textSize={14} width={690}>
        <View onClick={back} class="back tab-back" hoverClass="back-act" slot="btn">
          <Text class="txt">切换星座</Text>
        </View>
      </Tabs>
      <Swiper onChange={swiperchange} class="swiper" current={act} duration="200" easingFunction="linear" nextMargin="0px" previousMargin="0px">
        {
          detail.map((item, index) => {
            return <SwiperItem class="swiper-item" key={index}>
              {detail[index] ? <View class="tab-content">
                <View class="stat">
                  <View class="top" style={{ backgroundColor: info.color }}>
                    <Image class="xz-img" mode="heightFix" src={index == 0 ? info.img : info.default_img}></Image>
                    <View class="xz-stat">
                      <View class="constellation">{info && info.name}<i class="time">{info && info.time}</i>
                      </View>
                      <Star count={detail[index] && detail[index].grade} type="star-b red"></Star>
                      <Text class="suggest">{detail[index] && detail[index].suggest}</Text>
                    </View>
                    {index == 0 || index == 1 ? <View class="time-txt">
                      <Text class="date">{date_arr[index].date}</Text>
                      <Text class="day">{date_arr[index].day}</Text>
                    </View> : ""}
                  </View>
                  <View class="btns-wrap">
                    <Button onClick={toTarot} class="btn btn-tarot" data-type="4" hoverClass="btn-act" id="tarot">
                      <Image class="btn-img" src={tarot}></Image>
                      <Text class="btn-shine"></Text>
                    </Button>
                    <Button bindtap="luckyPopShow" class="btn btn-l" data-type="3-0" hoverClass="btn-act" id="lucky-btn1">
                      <Image class="btn-img" src={lucky}></Image>
                    </Button>
                    <Button class="btn btn-r icon-share-1" data-type="2" hoverClass="btn-act" openType="share">
                      <Image class="btn-img" src={share}></Image>
                    </Button>
                  </View>
                  <View class="bottom">
                    <View class="item">
                      <Text class="title">爱情运势</Text>
                      <Star count={detail[index] && detail[index].love} type="red"></Star>
                    </View>
                    <View class="item">
                      <Text class="title">事业学业</Text>
                      <Star count={detail[index] && detail[index].career} type="blue"></Star>
                    </View>
                    <View class="item">
                      <Text class="title">财富运势</Text>
                      <Star count={detail[index] && detail[index].wealthy} type="orange"></Star>
                    </View>
                    {sourceType === 1 ? <>
                      {index == 0 || index == 1 ? <View class="item">
                        <Text class="title">幸运数字</Text>
                        <Text class="lucky-num">{detail[index] && detail[index].luckyNum}</Text>
                      </View> : ""}
                      {index == 0 || index == 1 ? <View class="item">
                        <Text class="title">健康指数</Text>
                        <Process bg="linear-gradient(to right,#50E3D0,#0DD591)" class="process" percent={detail[index] && detail[index].healthy}></Process>
                      </View> : ""}
                      {index == 2 || index == 3 || index == 4 ? <View class="item">
                        <Text class="title">健康指数</Text>
                        <Star count="{{detail[index]&&detail[index].healthy}}" type="green"></Star>
                      </View> : ""}
                      {index == 2 ? <View class="item">
                        <Text class="title">幸运星座</Text>
                        <Text class="match">{detail[index] && detail[index].match}</Text>
                      </View> : ""}
                      {index == 0 || index == 1 || index == 2 ? <View class="item">
                        <Text class="title">幸运颜色</Text>
                        <Text class="lucky-color">{detail[index] && detail[index].luckyColor}</Text>
                      </View> : ""}
                      {index == 2 ? <View class="item">
                        <Text class="title">提防星座</Text>
                        <Text class="match">{detail[index] && detail[index].beware}</Text>
                      </View> : ""}
                      {index == 0 || index == 1 ? <>
                        <View class="item">
                          <Text class="title">人缘指数</Text>
                          <Process bg="linear-gradient(to right,#FF9C89,#FF7A9C)" class="process" percent={detail[index] && detail[index].popularity}></Process>
                        </View>
                        {index == 0 || index == 1 ? <View class="item">
                          <Text class="title">速配星座</Text>
                          <Text class="match">{detail[index] && detail[index].match}</Text>
                        </View> : ""}
                      </> : ""}
                    </> : ""}
                    {sourceType === 0 ? <>
                      <View class="item">
                        <Text class="title">健康指数</Text>
                        <Star count={detail[index] && detail[index].healthy} type="green"></Star>
                      </View>
                      {index == 0 || index == 1 ? <>
                        <View class="item">
                          <Text class="title">幸运数字</Text>
                          <Text class="lucky-num">{detail[index] && detail[index].luckyNum}</Text>
                        </View>
                        <View class="item">
                          <Text class="title">速配星座</Text>
                          <Text class="match">{detail[index] && detail[index].match}</Text>
                        </View>
                        <View class="item">
                          <Text class="title">幸运颜色</Text>
                          <Text class="lucky-color">{detail[index] && detail[index].luckyColor}</Text>
                        </View>
                        <View class="item">
                          <Text class="title">提防星座</Text>
                          <Text class="match">{detail[index] && detail[index].beware}</Text>
                        </View>
                        <View class="item" style="width:100%;">
                          <Text class="title">适合穿搭</Text>
                          <Text class="match" style="width:auto;">{detail[index] && detail[index].luckyDress}</Text>
                        </View>
                      </> : ""}
                      {index == 2 ? <>
                        <View class="item">
                          <Text class="title">幸运の日</Text>
                          <Text class="match">{detail[index] && detail[index].bestDay}</Text>
                        </View>
                        <View class="item">
                          <Text class="title">提防の日</Text>
                          <Text class="match">{detail[index] && detail[index].worstDay}</Text>
                        </View>
                        <View class="item" style="width:100%;">
                          <Text class="title">本周建议</Text>
                          <Text class="match" style="width:auto;">{detail[index] && detail[index].weekSummary}</Text>
                        </View>
                      </> : ""}
                      {index == 3 ? <>
                        <View class="item">
                          <Text class="title">幸运物品</Text>
                          <Text class="match">{detail[index] && detail[index].luckyGoods}</Text>
                        </View>
                        <View class="item" style="align-items: flex-start;">
                          <Text class="title">减压方式</Text>
                          <Text class="match">{detail[index] && detail[index].decompression}</Text>
                        </View>
                      </> : ""}
                    </> : ""}
                  </View>
                </View>
                {gzhShow ? <View onClick={serviceHandle} class="banner" data-id="10002" hoverClass="star-banner-bg-act" id="GZHnoticeALD">
                  <Image class="star-banner-bg" mode="widthFix" src={addBanner}></Image>
                </View> : ""}
                <View class="detail">
                  {index !== 4 && sourceType === 0 || sourceType === 1 ? <View class="block">
                    <View class="tit whole">
                      <Text class="tit-t">综合运势</Text>
                    </View>
                    <View class="con">{detail[index] && detail[index].comprehensiveFortune}</View>
                  </View> : ""}
                  {index !== 2 && sourceType === 0 || sourceType === 1 ? <View class="block">
                    <View class="tit love">
                      <Text class="tit-t">爱情运势</Text>
                      <Button onClick={buyGoods} class="btn love-btn" hoverClass="btn-act" id="love-goods">『爱情, 人缘』水晶倾心能量手链</Button>
                    </View>
                    <View class="con">{detail[index] && detail[index].loveFortune}</View>
                    {index == 4 && sourceType === 0 ? <View class="exp">感情桃花月：<Text class="month">{detail[index] && detail[index].emotionMonth}</Text>
                    </View> : ""}
                  </View> : ""}
                  {index == 2 && sourceType === 0 ? <>
                    <View class="block">
                      <View class="tit married">
                        <Text class="tit-t">有对象</Text>
                      </View>
                      <View class="con">{detail[index] && detail[index].married}</View>
                    </View>
                    <View class="block">
                      <View class="tit single">
                        <Text class="tit-t">没对象</Text>
                      </View>
                      <View class="con">{detail[index] && detail[index].single}</View>
                    </View>
                  </> : ""}
                  <View class="block">
                    <View class="tit career">
                      <Text class="tit-t">事业学业</Text>
                    </View>
                    <View class="con">{detail[index] && detail[index].careerFortune}</View>
                    {index == 4 && sourceType === 0 ? <View class="exp">事业运势好运月：<Text class="month">{detail[index] && detail[index].careerMonth}</Text>
                    </View> : ""}
                  </View>
                  <View class="block">
                    <View class="tit wealthy">
                      <Text class="tit-t">财富运势</Text>
                    </View>
                    <View class="con">{detail[index] && detail[index].wealthFortune}</View>
                    {index == 4 && sourceType === 0 ? <View class="exp">财富旺旺月：<Text class="month">{detail[index] && detail[index].wealthMonth}</Text>
                    </View> : ""}
                  </View>
                  {sourceType === 1 || index == 4 && sourceType === 0 ? <View class="block">
                    <View class="tit healthy">
                      <Text class="tit-t">健康运势</Text>
                    </View>
                    <View class="con">{detail[index] && detail[index].healthyFortune}</View>
                    {index == 4 && sourceType === 0 ? <View class="exp">健康注意月：<Text class="month">{detail[index] && detail[index].healthMonth}</Text>
                    </View> : ""}
                  </View> : ""}
                </View>
              </View> : <View class="skeletonBox">
                <Skeleton height={260} row={1}></Skeleton>
                <View class="center">
                  <Skeleton height={110} row={1} width={196}></Skeleton>
                  <Skeleton height={110} row={1} width={196}></Skeleton>
                  <Skeleton height={110} row={1} width={196}></Skeleton>
                </View>
                <View class="tips">
                  <View style={{ width: '50%' }}>
                    <Skeleton height={38} row={4} width="95%"></Skeleton>
                  </View>
                  <View style={{ width: '50%' }}>
                    <Skeleton height={38} row={4} width='95%'></Skeleton>
                  </View>
                </View>
                <Skeleton height={[35, 190, 35, 190, 35, 190]} row="6" width={['30%', '100%', '30%', '100%', '30%', '100%']}></Skeleton>
              </View>
              }
            </SwiperItem>
          })
        }
      </Swiper>
    </View>
  </>

  return <>
    {/* <mp-navigation-bar></mp-navigation-bar> */}
    <View bindscroll="scrollHandle" class="container">
      <GuideTop />
      {
        isShow === 1 ? menuEl : infoEl
      }
      {/* <block wx:if="{{isShow=='1'}}">
        <nav bind:setfixtop="setfixtop" class="nav-wrap" p_b="0" position="static" title=""></nav>
        <Image class="moon-bg" src="/images/moom.png"></Image>
        <constellation-list bind:toresult="toResult" class="constellation-list" style="top: {{xzTop}};"></constellation-list>
        <View bindtap="serviceHandle" class="index-banner" data-id="{{10002}}" hoverClass="index-banner-act" id="GZHnoticeALDIndex" wx:if="{{gzhShow&&fromThirdMini==1}}">
          <Image class="index-banner-image" mode="widthFix" src="{{img_host}}/xz/ad/index_banner.png"></Image>
        </View>
        <View class="index-banner-waimai" style="top: {{xzTop}};" wx:if="{{waimaiList&&waimaiList.length>0}}">
          <View bindtap="toMiniPro" class="waimai-item" data-idx="{{idx}}" id="{{waimai.id}}" wx:for="{{waimaiList}}" wx:for-index="idx" wx:for-item="waimai">
            <Image class="waimai-img" mode="widthFix" src="{{waimai.imgIndex}}"></Image>
          </View>
        </View>
      </block>
      <block wx:elif="{{isShow=='2'}}">
        <float-btn bind:luckyservice="toSubscribeText" h="{{move_h}}" hide="{{floatBtnShow}}" icon="{{weekLuckyIcon}}" l="unset" reddot="{{btnReddot}}" shareType="3" t="{{move_t}}" type="luckyBtn" w="170rpx" y="{{float_y}}" wx:if="{{!floatBtnHide}}"></float-btn>
        <View class="banner-top" style="padding-top:{{bannerTop}};">
          <View bindtap="toRadar" class="banner-item" data-id="-2">
            <Image class="banner-item-bg" src="/images/banner-top.png"></Image>
            <Text class="banner-item-txt">{{ info&& info.name}}和哪个星座最配？</Text>
            <View class="banner-item-head">
              <open-data type="userAvatarUrl"></open-data>
            </View>
          </View>
          <View class="banner-waimai" wx:if="{{waimaiList&&waimaiList.length>0}}">
            <View bindtap="toMiniPro" class="waimai-item" data-idx="{{idx}}" id="{{waimai.id}}" wx:for="{{waimaiList}}" wx:for-index="idx" wx:for-item="waimai">
              <Image class="waimai-img" mode="widthFix" src="{{waimai.imgSub}}"></Image>
            </View>
          </View>
        </View>
        <nav bind:setfixtop="setfixtop" class="nav-wrap" p_b="0" position="fixed" title="二狗星座" wx:if="{{navShow}}">
          <View bindtap="back" class="back" hoverClass="back-act" slot="btn">
            <Text class="txt">切换星座</Text>
          </View>
        </nav>
        <View class="swiper-wrap" style="height:{{h[act]}};">
          <tabs bg="{{info.color}}" bind:itemtap="changetab" height="70" items="{{tab_item}}" selected="{{act_select}}" textSize="28" width="690">
            <View bindtap="back" class="back tab-back" hoverClass="back-act" slot="btn">
              <Text class="txt">切换星座</Text>
            </View>
          </tabs>
          <swiper bindchange="swiperchange" class="swiper" current="{{act}}" duration="200" easingFunction="linear" nextMargin="0px" previousMargin="0px">
            <swiper-item class="swiper-item" wx:for="{{detail}}" wx:key="{{index}}">
              <View class="tab-content" id="tabcon{{index}}" wx:if="{{detail[index]}}">
                <View class="stat">
                  <View class="top" style="background-color:{{info.color}};">
                    <Image class="xz-img" mode="heightFix" src="{{index==0?info.img:info.default_img}}"></Image>
                    <View class="xz-stat">
                      <View class="constellation">{{ info&& info.name}}<i class="time">{{ info&& info.time}}</i>
                      </View>
                      <Star class="star" count="{{detail[index]&&detail[index].grade}}" type="star-b red"></Star>
                      <Text class="suggest">{{ detail[index]&& detail[index].suggest }}</Text>
                    </View>
                    <View class="time-txt" wx:if="{{index==0||index==1}}">
                      <Text class="date">{{ date_arr[index].date }}</Text>
                      <Text class="day">{{ date_arr[index].day }}</Text>
                    </View>
                  </View>
                  <View class="btns-wrap">
                    <Button bindtap="toTarot" class="btn btn-tarot" data-type="4" hoverClass="btn-act" id="tarot">
                      <Image class="btn-img" src="/images/icon/tarot.png"></Image>
                      <Text class="btn-shine"></Text>
                    </Button>
                    <Button bindtap="luckyPopShow" class="btn btn-l" data-type="3-0" hoverClass="btn-act" id="lucky-btn1">
                      <Image class="btn-img" src="/images/icon/lucky.png"></Image>
                    </Button>
                    <Button class="btn btn-r icon-share-1" data-type="2" hoverClass="btn-act" openType="share">
                      <Image class="btn-img" src="/images/icon/share.png"></Image>
                    </Button>
                  </View>
                  <View class="bottom">
                    <View class="item">
                      <Text class="title">爱情运势</Text>
                      <Star class="star" count="{{detail[index]&&detail[index].love}}" type="red"></Star>
                    </View>
                    <View class="item">
                      <Text class="title">事业学业</Text>
                      <Star class="star" count="{{detail[index]&&detail[index].career}}" type="blue"></Star>
                    </View>
                    <View class="item">
                      <Text class="title">财富运势</Text>
                      <Star class="star" count="{{detail[index]&&detail[index].wealthy}}" type="orange"></Star>
                    </View>
                    <block wx:if="{{sourceType===1}}">
                      <View class="item" wx:if="{{index==0||index==1}}">
                        <Text class="title">幸运数字</Text>
                        <Text class="lucky-num">{{ detail[index]&& detail[index].luckyNum }}</Text>
                      </View>
                      <View class="item" wx:if="{{index==0||index==1}}">
                        <Text class="title">健康指数</Text>
                        <process bg="linear-gradient(to right,#50E3D0,#0DD591)" class="process" percent="{{detail[index]&&detail[index].healthy}}"></process>
                      </View>
                      <View class="item" wx:if="{{index==2||index==3||index==4}}">
                        <Text class="title">健康指数</Text>
                        <Star class="star" count="{{detail[index]&&detail[index].healthy}}" type="green"></Star>
                      </View>
                      <View class="item" wx:if="{{index==2}}">
                        <Text class="title">幸运星座</Text>
                        <Text class="match">{{ detail[index]&& detail[index].match }}</Text>
                      </View>
                      <View class="item" wx:if="{{index==0||index==1||index==2}}">
                        <Text class="title">幸运颜色</Text>
                        <Text class="lucky-color">{{ detail[index]&& detail[index].luckyColor }}</Text>
                      </View>
                      <View class="item" wx:if="{{index==2}}">
                        <Text class="title">提防星座</Text>
                        <Text class="match">{{ detail[index]&& detail[index].beware }}</Text>
                      </View>
                      <block wx:if="{{index==0||index==1}}">
                        <View class="item">
                          <Text class="title">人缘指数</Text>
                          <process bg="linear-gradient(to right,#FF9C89,#FF7A9C)" class="process" percent="{{detail[index]&&detail[index].popularity}}"></process>
                        </View>
                        <View class="item" wx:if="{{index==0||index==1}}">
                          <Text class="title">速配星座</Text>
                          <Text class="match">{{ detail[index]&& detail[index].match }}</Text>
                        </View>
                      </block>
                    </block>
                    <block wx:if="{{sourceType===0}}">
                      <View class="item">
                        <Text class="title">健康指数</Text>
                        <Star class="star" count="{{detail[index]&&detail[index].healthy}}" type="green"></Star>
                      </View>
                      <block wx:if="{{index==0||index==1}}">
                        <View class="item">
                          <Text class="title">幸运数字</Text>
                          <Text class="lucky-num">{{ detail[index]&& detail[index].luckyNum }}</Text>
                        </View>
                        <View class="item">
                          <Text class="title">速配星座</Text>
                          <Text class="match">{{ detail[index]&& detail[index].match }}</Text>
                        </View>
                        <View class="item">
                          <Text class="title">幸运颜色</Text>
                          <Text class="lucky-color">{{ detail[index]&& detail[index].luckyColor }}</Text>
                        </View>
                        <View class="item">
                          <Text class="title">提防星座</Text>
                          <Text class="match">{{ detail[index]&& detail[index].beware }}</Text>
                        </View>
                        <View class="item" style="width:100%;">
                          <Text class="title">适合穿搭</Text>
                          <Text class="match" style="width:auto;">{{ detail[index]&& detail[index].luckyDress }}</Text>
                        </View>
                      </block>
                      <block wx:if="{{index==2}}">
                        <View class="item">
                          <Text class="title">幸运の日</Text>
                          <Text class="match">{{ detail[index]&& detail[index].bestDay }}</Text>
                        </View>
                        <View class="item">
                          <Text class="title">提防の日</Text>
                          <Text class="match">{{ detail[index]&& detail[index].worstDay }}</Text>
                        </View>
                        <View class="item" style="width:100%;">
                          <Text class="title">本周建议</Text>
                          <Text class="match" style="width:auto;">{{ detail[index]&& detail[index].weekSummary }}</Text>
                        </View>
                      </block>
                      <block wx:if="{{index==3}}">
                        <View class="item">
                          <Text class="title">幸运物品</Text>
                          <Text class="match">{{ detail[index]&& detail[index].luckyGoods }}</Text>
                        </View>
                        <View class="item" style="align-items: flex-start;">
                          <Text class="title">减压方式</Text>
                          <Text class="match">{{ detail[index]&& detail[index].decompression }}</Text>
                        </View>
                      </block>
                    </block>
                  </View>
                </View>
                <View bindtap="serviceHandle" class="banner" data-id="10002" hoverClass="star-banner-bg-act" id="GZHnoticeALD" wx:if="{{fromThirdMini===1&&gzhShow}}">
                  <Image class="star-banner-bg" mode="widthFix" src="{{img_host}}/xz/ad/star_banner.png"></Image>
                </View>
                <View bindtap="serviceHandle" class="banner" data-id="0" hoverClass="banner-act" id="GZHnotice" wx:if="{{fromThirdMini!==1&&gzhShow}}">
                  <Image class="banner-bg" mode="widthFix" src="{{img_api}}/gzh_banner.png"></Image>
                </View>
                <View class="detail">
                  <View class="block" wx:if="{{index!==4&&sourceType===0||sourceType===1}}">
                    <View class="tit whole">
                      <Text class="tit-t">综合运势</Text>
                    </View>
                    <View class="con">{{ detail[index]&& detail[index].comprehensiveFortune }}</View>
                  </View>
                  <View class="block" wx:if="{{index!==2&&sourceType===0||sourceType===1}}">
                    <View class="tit love">
                      <Text class="tit-t">爱情运势</Text>
                      <Button catchtap="buyGoods" class="btn love-btn" hoverClass="btn-act" id="love-goods">『爱情, 人缘』水晶倾心能量手链</Button>
                    </View>
                    <View class="con">{{ detail[index]&& detail[index].loveFortune }}</View>
                    <View class="exp" wx:if="{{index==4&&sourceType===0}}">感情桃花月：<Text class="month">{{ detail[index]&& detail[index].emotionMonth }}</Text>
                    </View>
                  </View>
                  <block wx:if="{{index==2&&sourceType===0}}">
                    <View class="block">
                      <View class="tit married">
                        <Text class="tit-t">有对象</Text>
                      </View>
                      <View class="con">{{ detail[index]&& detail[index].married }}</View>
                    </View>
                    <View class="block">
                      <View class="tit single">
                        <Text class="tit-t">没对象</Text>
                      </View>
                      <View class="con">{{ detail[index]&& detail[index].single }}</View>
                    </View>
                  </block>
                  <View class="block">
                    <View class="tit career">
                      <Text class="tit-t">事业学业</Text>
                    </View>
                    <View class="con">{{ detail[index]&& detail[index].careerFortune }}</View>
                    <View class="exp" wx:if="{{index==4&&sourceType===0}}">事业运势好运月：<Text class="month">{{ detail[index]&& detail[index].careerMonth }}</Text>
                    </View>
                  </View>
                  <View class="block">
                    <View class="tit wealthy">
                      <Text class="tit-t">财富运势</Text>
                    </View>
                    <View class="con">{{ detail[index]&& detail[index].wealthFortune }}</View>
                    <View class="exp" wx:if="{{index==4&&sourceType===0}}">财富旺旺月：<Text class="month">{{ detail[index]&& detail[index].wealthMonth }}</Text>
                    </View>
                  </View>
                  <View class="block" wx:if="{{sourceType===1||index==4&&sourceType===0}}">
                    <View class="tit healthy">
                      <Text class="tit-t">健康运势</Text>
                    </View>
                    <View class="con">{{ detail[index]&& detail[index].healthyFortune }}</View>
                    <View class="exp" wx:if="{{index==4&&sourceType===0}}">健康注意月：<Text class="month">{{ detail[index]&& detail[index].healthMonth }}</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View class="skeletonBox" wx:else>
                <skeleton height="{{'260rpx'}}" row="1"></skeleton>
                <View class="center">
                  <skeleton height="{{'110rpx'}}" row="1" width="{{'196rpx'}}"></skeleton>
                  <skeleton height="{{'110rpx'}}" row="1" width="{{'196rpx'}}"></skeleton>
                  <skeleton height="{{'110rpx'}}" row="1" width="{{'196rpx'}}"></skeleton>
                </View>
                <View class="tips">
                  <View style="width: 50%;">
                    <skeleton height="{{['38rpx','38rpx','38rpx','38rpx']}}" row="4" width="{{['95%','95%','95%','95%']}}"></skeleton>
                  </View>
                  <View style="width: 50%;">
                    <skeleton height="{{['38rpx','38rpx','38rpx','38rpx']}}" row="4" width="{{['95%','95%','95%','95%']}}"></skeleton>
                  </View>
                </View>
                <skeleton height="{{['35rpx','190rpx','35rpx','190rpx','35rpx','190rpx']}}" row="6" width="{{['30%','100%','30%','100%','30%','100%']}}"></skeleton>
              </View>
            </swiper-item>
          </swiper>
        </View>
        <View class="extendWrap" style="padding-top: 50rpx;">
          <xz-extend bind:essayDetail="essayDetail" xzInfo="{{xzInfo}}">
            <View class="ext-tit">了解{{ info&& info.name}}</View>
          </xz-extend>
        </View>
        <View class="cs-wrap" wx:if="{{tarotList.length>0}}">
          <View class="ext-tit">超准测算</View>
          <tarot bind:tarotService="tarotService" tarotList="{{tarotList}}"></tarot>
        </View>
        <View class="link-down" style="display:{{link?'block':'none'}};"></View>
        <show-tip msg="{{msg}}"></show-tip>
      </block>
      <block wx:else></block>
      <lucky-pop auth="{{auth}}" bind:saveService="saveHandle" bind:settingService="settingHandle" lucky="{{lucky_data}}" luckyList="{{luckyList}}" secTitle="{{secTitle}}"></lucky-pop>
      <pub bind:service="serviceHandle" data="{{pub_data}}"></pub> */}
    </View>
  </>
}