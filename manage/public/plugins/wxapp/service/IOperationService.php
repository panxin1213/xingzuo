<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2018 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Dean <zxxjjforever@163.com>
// +----------------------------------------------------------------------
namespace plugins\wxapp\service; //Demo插件英文名，改成你的插件英文就行了

interface IOperationService
{
    /**
     * 微信登录成功后回调方法
     * @param array $um 微信用户对象
     * @return string 错误信息
     */
    public function loginSuccessAfter(&$um, $param);


    /**
     * 授权登录成功后处理
     * @param array $um 微信用户对象
     * @param string $state
     * @return void
     */
    public function authorizeAfter($um, $state);


    /**
     * 通过openid判断是否存在用户
     * @param string $openid opendId
     * @return bool
     */
    public function hasUserByOpenId($openid);

    /**
     * 支付前调取方法，用以获取订单编号
     * @param array ['orderid']
     * @return array ['number', 'price', ...., 'body']
     */
    public function payBefore($param);

    /**
     * 支付成功后回调
     * @param array $data
     * @return bool
     */
    public function paySuccess($data);


    /**
     * 获取用户信息
     * @param array $param
     */
    public function getUserModel($param);
}
