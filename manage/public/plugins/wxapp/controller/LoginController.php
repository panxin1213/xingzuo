<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2014 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Dean <zxxjjforever@163.com>
// +----------------------------------------------------------------------
namespace plugins\wxapp\controller; //Demo插件英文名，改成你的插件英文就行了

use plugins\wxapp\model\WeixinPayCallbacklogsModel;
use plugins\wxapp\model\WeixinPayLogsModel;
use plugins\wxapp\model\WeixinUsersModel;
use plugins\wxapp\WeiXinMPHelper;
use think\Config;
use think\Log;

/**
 * 微信网页登录控制器
 */
class LoginController extends WeiXinBaseController
{

    protected function getResponseType()
    {
        return Config::get('default_ajax_return');
    }


    public function index()
    {
        $param = $this->request->param();

        if (empty(array_saft_value($param, 'code'))) {
            $this->error("Code empty", null);
        }

        $um = WeiXinMPHelper::getUserByCode(array_saft_value($param, 'code'), $this->config['appID'], $this->config['appsecret']);

        if (empty($um['openid'])) {
            $this->error("ERROR", null, $um);
        }

        $userinfo = array_saft_value($param, 'userInfo') ?: [];

        $userinfo['openid'] = $um['openid'];
        $userinfo['unionid'] = array_saft_value($um, 'unionid');

        $wum = new WeixinUsersModel();
        if ($wum->updateUserModel($userinfo) === false) {
            $this->error("ERROR:001", null, $um);
        }
        $userinfo = $wum->db()->where(['openid' => $um['openid']])->find()->toArray();

        session('wx_user', $userinfo);
        session("wx_session_key", $um['session_key']);

        unset($userinfo['openid']);
        unset($userinfo['unionid']);

        $this->success('SUCCESS', null, ['userinfo' => $userinfo]);
    }


    /**
     * 微信支付回调方法
     */
    public function notify()
    {
        $testxml  = file_get_contents("php://input");
        $errorstr = '';
        try {
            $jsonxml = json_encode(simplexml_load_string($testxml, 'SimpleXMLElement', LIBXML_NOCDATA));
            $data = json_decode($jsonxml, true); //转成数组，
            $data['xmlstr'] = $testxml;

            $result = $this->operationservice->paySuccess($data);
            if (!$result) {
                $errorstr = $result;
                Log::error('支付错误:' . $testxml);
            }
            $number = array_saft_value($data, 'out_trade_no');
            if (!empty($number)) {
                $wplmodel = new WeixinPayLogsModel();

                $wplmodel->Update(['xmlcontent' => $testxml], ['out_trade_no' => $number]);
            }
        } catch (\Exception $e) {
            $errorstr = $e->getMessage();
            Log::error($e);
        } finally {
            try {
                $wpcmodel = new WeixinPayCallbacklogsModel();
                $wpcmodel->db()->insert([
                    'xmlstring'     => $testxml,
                    'errorstr'      => $errorstr
                ]);
            } catch (\Exception $ex) {
                Log::error($ex);
            }
        }

        echo '<xml><return_code><![CDATA[SUCCESS]]></return_code><return_msg><![CDATA[OK]]></return_msg></xml>';

        exit();
    }
}
