<?php
//2021-09-23 16:09:38
namespace app\api\model;

use think\Model;
use think\Cache;
use app\api\traits\ModuleModelTraits;

class UserModel extends \app\common\model\UserModel
{
    use ModuleModelTraits;

    public function toArray()
    {
        $arr = parent::toArray();

        $arr['addtime'] = date('Y-m-d H:i:s', $arr['create_time']);
        $arr['last_login_time'] = !empty($arr['last_login_time']) ? date('Y-m-d H:i:s', $arr['last_login_time']) : '';


        return $arr;
    }


    public function rolelist()
    {
        return $this->belongsToMany('RoleModel', 'role_user', 'role_id', 'user_id');
    }
}
