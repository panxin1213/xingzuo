import { Image, View } from "@tarojs/components";
import { useState } from "react";
import GuideTop from '../../components/guide-top/index'
import Nav from '../../components/nav/index'
import "./index.scss"

export default function Index() {
  const [isShow, setisShow] = useState(1)

  const setfixtop = () => {
  }

  const menuEl = <>
    <Nav setfixtop={setfixtop} class="nav-wrap" p_b={"0"} position="static" title=""></Nav>
    {/* <Image class="moon-bg" src="/images/moom.png"></Image>
    <constellation-list bind:toresult="toResult" class="constellation-list" style="top: {{xzTop}};"></constellation-list>
    <View bindtap="serviceHandle" class="index-banner" data-id="{{10002}}" hoverClass="index-banner-act" id="GZHnoticeALDIndex" wx:if="{{gzhShow&&fromThirdMini==1}}">
      <Image class="index-banner-image" mode="widthFix" src="{{img_host}}/xz/ad/index_banner.png"></Image>
    </View>
    <View class="index-banner-waimai" style="top: {{xzTop}};" wx:if="{{waimaiList&&waimaiList.length>0}}">
      <View bindtap="toMiniPro" class="waimai-item" data-idx="{{idx}}" id="{{waimai.id}}" wx:for="{{waimaiList}}" wx:for-index="idx" wx:for-item="waimai">
        <Image class="waimai-img" mode="widthFix" src="{{waimai.imgIndex}}"></Image>
      </View>
    </View> */}
  </>;

  return <>
    {/* <mp-navigation-bar></mp-navigation-bar> */}
    <View bindscroll="scrollHandle" class="container">
      <GuideTop />
      {
        isShow === 1 ? menuEl : <></>
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
            <text class="banner-item-txt">{{ info&& info.name}}和哪个星座最配？</text>
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
            <text class="txt">切换星座</text>
          </View>
        </nav>
        <View class="swiper-wrap" style="height:{{h[act]}};">
          <tabs bg="{{info.color}}" bind:itemtap="changetab" height="70" items="{{tab_item}}" selected="{{act_select}}" textSize="28" width="690">
            <View bindtap="back" class="back tab-back" hoverClass="back-act" slot="btn">
              <text class="txt">切换星座</text>
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
                      <star class="star" count="{{detail[index]&&detail[index].grade}}" type="star-b red"></star>
                      <text class="suggest">{{ detail[index]&& detail[index].suggest }}</text>
                    </View>
                    <View class="time-txt" wx:if="{{index==0||index==1}}">
                      <text class="date">{{ date_arr[index].date }}</text>
                      <text class="day">{{ date_arr[index].day }}</text>
                    </View>
                  </View>
                  <View class="btns-wrap">
                    <button bindtap="toTarot" class="btn btn-tarot" data-type="4" hoverClass="btn-act" id="tarot">
                      <Image class="btn-img" src="/images/icon/tarot.png"></Image>
                      <text class="btn-shine"></text>
                    </button>
                    <button bindtap="luckyPopShow" class="btn btn-l" data-type="3-0" hoverClass="btn-act" id="lucky-btn1">
                      <Image class="btn-img" src="/images/icon/lucky.png"></Image>
                    </button>
                    <button class="btn btn-r icon-share-1" data-type="2" hoverClass="btn-act" openType="share">
                      <Image class="btn-img" src="/images/icon/share.png"></Image>
                    </button>
                  </View>
                  <View class="bottom">
                    <View class="item">
                      <text class="title">爱情运势</text>
                      <star class="star" count="{{detail[index]&&detail[index].love}}" type="red"></star>
                    </View>
                    <View class="item">
                      <text class="title">事业学业</text>
                      <star class="star" count="{{detail[index]&&detail[index].career}}" type="blue"></star>
                    </View>
                    <View class="item">
                      <text class="title">财富运势</text>
                      <star class="star" count="{{detail[index]&&detail[index].wealthy}}" type="orange"></star>
                    </View>
                    <block wx:if="{{sourceType===1}}">
                      <View class="item" wx:if="{{index==0||index==1}}">
                        <text class="title">幸运数字</text>
                        <text class="lucky-num">{{ detail[index]&& detail[index].luckyNum }}</text>
                      </View>
                      <View class="item" wx:if="{{index==0||index==1}}">
                        <text class="title">健康指数</text>
                        <process bg="linear-gradient(to right,#50E3D0,#0DD591)" class="process" percent="{{detail[index]&&detail[index].healthy}}"></process>
                      </View>
                      <View class="item" wx:if="{{index==2||index==3||index==4}}">
                        <text class="title">健康指数</text>
                        <star class="star" count="{{detail[index]&&detail[index].healthy}}" type="green"></star>
                      </View>
                      <View class="item" wx:if="{{index==2}}">
                        <text class="title">幸运星座</text>
                        <text class="match">{{ detail[index]&& detail[index].match }}</text>
                      </View>
                      <View class="item" wx:if="{{index==0||index==1||index==2}}">
                        <text class="title">幸运颜色</text>
                        <text class="lucky-color">{{ detail[index]&& detail[index].luckyColor }}</text>
                      </View>
                      <View class="item" wx:if="{{index==2}}">
                        <text class="title">提防星座</text>
                        <text class="match">{{ detail[index]&& detail[index].beware }}</text>
                      </View>
                      <block wx:if="{{index==0||index==1}}">
                        <View class="item">
                          <text class="title">人缘指数</text>
                          <process bg="linear-gradient(to right,#FF9C89,#FF7A9C)" class="process" percent="{{detail[index]&&detail[index].popularity}}"></process>
                        </View>
                        <View class="item" wx:if="{{index==0||index==1}}">
                          <text class="title">速配星座</text>
                          <text class="match">{{ detail[index]&& detail[index].match }}</text>
                        </View>
                      </block>
                    </block>
                    <block wx:if="{{sourceType===0}}">
                      <View class="item">
                        <text class="title">健康指数</text>
                        <star class="star" count="{{detail[index]&&detail[index].healthy}}" type="green"></star>
                      </View>
                      <block wx:if="{{index==0||index==1}}">
                        <View class="item">
                          <text class="title">幸运数字</text>
                          <text class="lucky-num">{{ detail[index]&& detail[index].luckyNum }}</text>
                        </View>
                        <View class="item">
                          <text class="title">速配星座</text>
                          <text class="match">{{ detail[index]&& detail[index].match }}</text>
                        </View>
                        <View class="item">
                          <text class="title">幸运颜色</text>
                          <text class="lucky-color">{{ detail[index]&& detail[index].luckyColor }}</text>
                        </View>
                        <View class="item">
                          <text class="title">提防星座</text>
                          <text class="match">{{ detail[index]&& detail[index].beware }}</text>
                        </View>
                        <View class="item" style="width:100%;">
                          <text class="title">适合穿搭</text>
                          <text class="match" style="width:auto;">{{ detail[index]&& detail[index].luckyDress }}</text>
                        </View>
                      </block>
                      <block wx:if="{{index==2}}">
                        <View class="item">
                          <text class="title">幸运の日</text>
                          <text class="match">{{ detail[index]&& detail[index].bestDay }}</text>
                        </View>
                        <View class="item">
                          <text class="title">提防の日</text>
                          <text class="match">{{ detail[index]&& detail[index].worstDay }}</text>
                        </View>
                        <View class="item" style="width:100%;">
                          <text class="title">本周建议</text>
                          <text class="match" style="width:auto;">{{ detail[index]&& detail[index].weekSummary }}</text>
                        </View>
                      </block>
                      <block wx:if="{{index==3}}">
                        <View class="item">
                          <text class="title">幸运物品</text>
                          <text class="match">{{ detail[index]&& detail[index].luckyGoods }}</text>
                        </View>
                        <View class="item" style="align-items: flex-start;">
                          <text class="title">减压方式</text>
                          <text class="match">{{ detail[index]&& detail[index].decompression }}</text>
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
                      <text class="tit-t">综合运势</text>
                    </View>
                    <View class="con">{{ detail[index]&& detail[index].comprehensiveFortune }}</View>
                  </View>
                  <View class="block" wx:if="{{index!==2&&sourceType===0||sourceType===1}}">
                    <View class="tit love">
                      <text class="tit-t">爱情运势</text>
                      <button catchtap="buyGoods" class="btn love-btn" hoverClass="btn-act" id="love-goods">『爱情, 人缘』水晶倾心能量手链</button>
                    </View>
                    <View class="con">{{ detail[index]&& detail[index].loveFortune }}</View>
                    <View class="exp" wx:if="{{index==4&&sourceType===0}}">感情桃花月：<text class="month">{{ detail[index]&& detail[index].emotionMonth }}</text>
                    </View>
                  </View>
                  <block wx:if="{{index==2&&sourceType===0}}">
                    <View class="block">
                      <View class="tit married">
                        <text class="tit-t">有对象</text>
                      </View>
                      <View class="con">{{ detail[index]&& detail[index].married }}</View>
                    </View>
                    <View class="block">
                      <View class="tit single">
                        <text class="tit-t">没对象</text>
                      </View>
                      <View class="con">{{ detail[index]&& detail[index].single }}</View>
                    </View>
                  </block>
                  <View class="block">
                    <View class="tit career">
                      <text class="tit-t">事业学业</text>
                    </View>
                    <View class="con">{{ detail[index]&& detail[index].careerFortune }}</View>
                    <View class="exp" wx:if="{{index==4&&sourceType===0}}">事业运势好运月：<text class="month">{{ detail[index]&& detail[index].careerMonth }}</text>
                    </View>
                  </View>
                  <View class="block">
                    <View class="tit wealthy">
                      <text class="tit-t">财富运势</text>
                    </View>
                    <View class="con">{{ detail[index]&& detail[index].wealthFortune }}</View>
                    <View class="exp" wx:if="{{index==4&&sourceType===0}}">财富旺旺月：<text class="month">{{ detail[index]&& detail[index].wealthMonth }}</text>
                    </View>
                  </View>
                  <View class="block" wx:if="{{sourceType===1||index==4&&sourceType===0}}">
                    <View class="tit healthy">
                      <text class="tit-t">健康运势</text>
                    </View>
                    <View class="con">{{ detail[index]&& detail[index].healthyFortune }}</View>
                    <View class="exp" wx:if="{{index==4&&sourceType===0}}">健康注意月：<text class="month">{{ detail[index]&& detail[index].healthMonth }}</text>
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