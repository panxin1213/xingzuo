<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2019 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 老猫 <thinkcmf@126.com>
// +----------------------------------------------------------------------
namespace plugins\wxapp\model;

use plugins\wxmphelper\WeiXinMPHelper;
use think\Model;

/**
 * 请求记录模型
 */
class WeixinPayLogsModel extends Model
{
    // 数据表名称
    protected $table = 'wx_app_weixin_pay_logs';


    /**
     * 添加支付订单信息
     * @param int $orderid 
     * @param string $out_trade_no 
     * @param float $total_fee 
     * @param string $openid 
     * @param string $body 
     * @return array
     */
    public function addInfo($orderid, $out_trade_no, $total_fee, $openid, $userid, $body = "")
    {
        $config = $this->getWXConfig();

        //$total_fee = 0.01;

        //统一下单参数构造
        $unifiedorder = array(
            'appid'            => $config['appid'],
            'mch_id'        => $config['pay_mchid'],
            'nonce_str'        => self::getNonceStr(),
            'body'            => $body ?: $out_trade_no,
            'out_trade_no'    => $out_trade_no,
            'total_fee'        => $total_fee * 100,
            'spbill_create_ip'    => get_client_ip(),
            'notify_url'    => url('notify', '', true, true),
            'trade_type'    => 'JSAPI',
            'openid'        => $openid
        );
        $unifiedorder['sign'] = self::makeSign($unifiedorder);

        //请求数据
        $xmldata = self::array2xml($unifiedorder);
        $url = 'https://api.mch.weixin.qq.com/pay/unifiedorder';
        $res = self::curl_post_ssl($url, $xmldata);
        if (!$res) {
            return ['error' => "Can't connect the server"];
        }

        $content = self::xml2array($res);

        if (strval($content['result_code']) == 'FAIL') {
            return ['error' => $content['err_code_des']];
        }
        if (strval($content['return_code']) == 'FAIL') {
            return ['error' => $content['return_msg']];
        }

        $m = array_merge($unifiedorder, $content);
        $m['orderid'] = $orderid;
        $m['userid'] = $userid;

        $result = $this->Insert($m);

        if (is_array($result) && !empty($result['error'])) {
            return $result;
        }

        return $result;
    }
}
