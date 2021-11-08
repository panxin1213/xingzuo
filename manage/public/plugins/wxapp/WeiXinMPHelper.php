<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2018 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Dean <zxxjjforever@163.com>
// +----------------------------------------------------------------------
namespace plugins\wxapp; //Demo插件英文名，改成你的插件英文就行了

use plugins\wxapp\model\WeixinPayErrorsModel;
use plugins\wxapp\model\WeixinPayLogsModel;
use think\Log;

/**
 * 微信小程序工具类
 */
class WeiXinMPHelper
{

    /**
     * 通过openid获取用户信息
     * @param string $code
     * @param string $appid 
     * @param string $appsecret
     * @return array|false
     */
    public static function getUserByCode($code, $appid, $appsecret)
    {
        $url = "https://api.weixin.qq.com/sns/jscode2session?appid={$appid}&secret={$appsecret}&js_code={$code}&grant_type=authorization_code";

        $json = json_decode(file_get_contents($url), true);

        if ($json) {
            return $json;
        } else {
            return false;
        }
    }


    /**
     * 生成支付统一订单方法
     * https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_1
     * @param int $orderid 订单ID
     * @param string $out_trade_no 订单编号
     * @param float $total_fee 订单金额
     * @param string $openid 用户openid
     * @param int $userid 用户ID
     * @param string $body 备注内容
     * @param string $appid 应用appid
     * @param string $mchid 商户id
     * @param string $payapikey 商户apikey
     * @return string|array 错误信息或者统一下单payID
     */
    public static function payUnifiedorder($orderid, $out_trade_no, $total_fee, $openid, $userid, $body, $appid, $mchid, $payapikey, $notify_url = '')
    {
        //$total_fee = 0.01;

        //统一下单参数构造
        $unifiedorder = array(
            'appid'            => $appid,
            'mch_id'        => $mchid,
            'nonce_str'        => self::getNonceStr(),
            'body'            => $body ?: $out_trade_no,
            'out_trade_no'    => $out_trade_no,
            'total_fee'        => $total_fee,
            'spbill_create_ip'    => get_client_ip(),
            'notify_url'    => empty($notify_url) ? cmf_plugin_url('wxapp://login/notify', [], true) : $notify_url,
            'trade_type'    => 'JSAPI',
            'openid'        => $openid
        );

        if (empty($openid)) {
            $unifiedorder['trade_type'] = 'NATIVE';
            unset($unifiedorder['openid']);
            $unifiedorder['product_id'] = $orderid;
        }

        $unifiedorder['sign'] = self::makeSign($unifiedorder, $payapikey);

        //请求数据
        $xmldata = self::array2xml($unifiedorder);
        $url = 'https://api.mch.weixin.qq.com/pay/unifiedorder';
        $res = self::curl_post_ssl($url, $xmldata);
        $errors = [];
        if (!$res) {
            $errors = ['error' => "Can't connect the server"];
        } else {

            $content = self::xml2array($res);

            if (!empty($content['result_code']) && strval($content['result_code']) == 'FAIL') {
                $errors = ['error' => $content['err_code_des']];
            }
            if (!empty($content['return_code']) && strval($content['return_code']) == 'FAIL') {
                $errors = ['error' => $content['return_msg']];
            }
        }

        if (!empty($errors)) {
            $wpemodel = new WeixinPayErrorsModel();
            $wpemodel->save([
                'xmlcontent' => $res,
                'error'      => $errors['error']
            ]);

            return $errors;
        }

        $m = array_merge($unifiedorder, $content);

        $m['orderid'] = $orderid;
        $m['userid'] = $userid;
        unset($m['product_id']);

        $wplmodel = new WeixinPayLogsModel();

        $result = $wplmodel->save($m);

        if (is_array($result) && !empty($result['error'])) {
            return $result;
        }

        $data = [
            'appId'         => $appid,
            'timeStamp'     => time(),
            'nonceStr'    => self::getNonceStr(),
            'package'    => 'prepay_id=' . $m['prepay_id'],
            'signType'    => 'MD5',
            'code_url'      => array_saft_value($m, 'code_url')
        ];

        $data['paySign'] = self::makeSign($data, $payapikey);

        return $data;
    }












    /**
     * 生成签名
     * @return string 签名
     */
    private static function makeSign($data, $payapikey)
    {
        //获取微信支付秘钥
        $key = $payapikey;
        // 去空
        $data = array_filter($data);
        //签名步骤一：按字典序排序参数
        ksort($data);
        $string_a = http_build_query($data);
        $string_a = urldecode($string_a);
        //签名步骤二：在string后加入KEY
        //$config=$this->config;
        $string_sign_temp = $string_a . "&key=" . $key;
        //签名步骤三：MD5加密
        $sign = md5($string_sign_temp);
        // 签名步骤四：所有字符转为大写
        $result = strtoupper($sign);
        return $result;
    }


    /**
     * 将xml转为array
     * @param  string 	$xml xml字符串
     * @return array    转换得到的数组
     */
    private static function xml2array($xml)
    {
        //禁止引用外部xml实体
        libxml_disable_entity_loader(true);
        $result = json_decode(json_encode(simplexml_load_string($xml, 'SimpleXMLElement', LIBXML_NOCDATA)), true);
        return $result;
    }

    /**
     * 微信支付发起请求
     */
    private static function curl_post_ssl($url, $xmldata, $second = 30, $aHeader = array())
    {
        $ch = curl_init();
        //超时时间
        curl_setopt($ch, CURLOPT_TIMEOUT, $second);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        //这里设置代理，如果有的话
        //curl_setopt($ch,CURLOPT_PROXY, '10.206.30.98');
        //curl_setopt($ch,CURLOPT_PROXYPORT, 8080);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);


        if (count($aHeader) >= 1) {
            curl_setopt($ch, CURLOPT_HTTPHEADER, $aHeader);
        }

        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $xmldata);
        $data = curl_exec($ch);
        if ($data) {
            curl_close($ch);
            return $data;
        } else {
            $error = curl_errno($ch);
            Log::error("call faild, errorCode:$error\n");
            curl_close($ch);
            return false;
        }
    }


    /**
     * 将一个数组转换为 XML 结构的字符串
     * @param array $arr 要转换的数组
     * @param int $level 节点层级, 1 为 Root.
     * @return string XML 结构的字符串
     */
    private static function array2xml($arr, $level = 1)
    {
        $s = $level == 1 ? "<xml>" : '';
        foreach ($arr as $tagname => $value) {
            if (is_numeric($tagname)) {
                $tagname = $value['TagName'];
                unset($value['TagName']);
            }
            if (!is_array($value)) {
                $s .= "<{$tagname}>" . (!is_numeric($value) ? '<![CDATA[' : '') . $value . (!is_numeric($value) ? ']]>' : '') . "</{$tagname}>";
            } else {
                $s .= "<{$tagname}>" . self::array2xml($value, $level + 1) . "</{$tagname}>";
            }
        }
        $s = preg_replace("/([\x01-\x08\x0b-\x0c\x0e-\x1f])+/", ' ', $s);
        return $level == 1 ? $s . "</xml>" : $s;
    }



    /**
     * 
     * 产生随机字符串，不长于32位
     * @param int $length
     * @return string 产生的随机字符串
     */
    private static function getNonceStr($length = 32)
    {
        $chars = "abcdefghijklmnopqrstuvwxyz0123456789";
        $str = "";
        for ($i = 0; $i < $length; $i++) {
            $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
        }
        return $str;
    }
}
