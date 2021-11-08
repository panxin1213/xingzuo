<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2018 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Dean <zxxjjforever@163.com>
// +----------------------------------------------------------------------
namespace plugins\wxapp\service; //Demo插件英文名，改成你的插件英文就行了

class OperationService implements IOperationService
{

    /**
     * 微信登录成功后回调方法
     * @param array $um 微信用户对象
     * @return string 错误信息
     */
    public function loginSuccessAfter(&$um, $param)
    {
        throw new \Exception("请实现IOperationService的loginSuccessAfter方法，用于用户微信登录后操作处理。");
    }



    /**
     * 授权登录成功后处理
     * @param array $um 微信用户对象
     * @param string $state
     * @return void
     */
    public function authorizeAfter($um, $state)
    {
        throw new \Exception("请实现IOperationService的authorizeAfter方法，用于用户微信授权登录后操作处理。");
    }


    /**
     * 通过openid判断是否存在用户
     * @param string $openid opendId
     * @return bool
     */
    public function hasUserByOpenId($openid)
    {
        throw new \Exception("请实现IOperationService的hasUserByOpenId方法，用于关注后再次扫码判断用户是否存在。");
    }


    /**
     * 支付前调取方法，用以获取订单编号
     * @param array ['orderid']
     * @return array ['number', 'price', ...., 'body']
     */
    public function payBefore($param)
    {
        throw new \Exception("请实现IOperationService的payBefore方法，用于支付订单生成前获取订单编号，金额，备注等内容。");
    }


    /**
     * 支付成功后回调
     * @param array $data
     * @return bool
     */
    public function paySuccess($data)
    {
        throw new \Exception("请实现IOperationService的paySuccess方法，用于支付成功后的回调处理。");
    }


    /**
     * 获取用户信息
     * @param array $param
     */
    public function getUserModel($param)
    {
        throw new \Exception("请实现IOperationService的getUserModel方法，用于获取用户信息，如果没有特殊情况返回null就可以了。");
    }
}
