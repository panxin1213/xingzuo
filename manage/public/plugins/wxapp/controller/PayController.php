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
use plugins\wxapp\model\WeixinUsersModel;
use plugins\wxapp\WeiXinMPHelper;
use think\Config;
use think\Log;

/**
 * 微信网页登录控制器
 */
class PayController extends WeiXinBaseController
{

    protected function getResponseType()
    {
        return Config::get('default_ajax_return');
    }


    protected $user = null;

    /**
     * 初始化操作
     * @access protected
     */
    protected function _initialize()
    {
        parent::_initialize();
        $user = $this->operationservice->getUserModel($this->request->param) ?: session('wx_user');

        if (empty($user)) {
            $this->error(['code' => 40001, 'msg' => '请登录']);
        }
        $this->user = $user;
    }

    /**
     * 生成支付订单方法
     */
    public function prepay()
    {
        $param = $this->request->param();
        $param['userid'] = $this->user['id'];

        $orderinfo = $this->operationservice->payBefore($param);

        if (!empty($orderinfo['error'])) {
            $this->error($orderinfo['error']);
        }

        $result = WeiXinMPHelper::payUnifiedorder($orderinfo['orderid'], $orderinfo['number'], $orderinfo['price'], $this->user['openid'], $this->user['id'], array_saft_value($orderinfo, 'body'), $this->config['appID'], $this->config['paymchid'], $this->config['payapikey']);

        if (!empty($result['error'])) {
            $this->error($result['error']);
        } else {
            $this->success("SUCCESS", null, ['body' => $result]);
        }
    }
}
