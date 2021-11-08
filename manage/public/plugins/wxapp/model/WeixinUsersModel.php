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
class WeixinUsersModel extends Model
{
    // 数据表名称
    protected $table = 'wx_app_weixin_users';


    /**
     * 通过openid获取用户对象
     * @param int $openid
     * @param string $appID
     * @param string $appsecret
     * @return string|array
     */
    public function getUserModelByOpenId($openid, $appID, $appsecret)
    {
        $um = $this->db()->where(['openid' => $openid])->find();

        if (!empty($um)) {
            //session('wx_user', $um);
            $um = $um->toArray();
        } else {
            $um = WeiXinMPHelper::getUserByOpenId($openid, $appID, $appsecret);
            if (array_saft_value($um, 'openid')) {
                $result = $this->allowField(true)->save($um);
                if ($result) {
                    //session('wx_user', $um);
                } else {
                    return '用户信息获取失败.';
                }
            } else {
                return '用户信息获取失败';
            }
        }

        return $um;
    }

    /**
     * 修改微信授权用户信息
     * @param array $um
     * @return string|array
     */
    public function updateUserModel(&$um)
    {
        if (empty($um)) {
            return false;
        }
        $oldum = $this->db()->where(['openid' => array_saft_value($um, 'openid')])->find();
        if ($oldum && !is_array($oldum)) {
            $oldum = $oldum->toArray();
        }
        $um['lastentertime'] = date('Y-m-d H:i:s');

        if (empty($oldum)) {
            $result = $this->allowField(true)->save($um);
            $um['id'] = $result;
        } else {
            foreach ($um as $key => $value) {
                if (!empty($value)) {
                    $oldum[$key] = $value;
                }
            }
            $um = $oldum;
            $result = $this->allowField(true)->isUpdate(true)->save($oldum);
        }

        return $result;
    }
}
