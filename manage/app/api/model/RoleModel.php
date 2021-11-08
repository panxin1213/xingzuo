<?php
//2021-09-23 16:09:38
namespace app\api\model;

use think\Model;
use think\Cache;
use app\api\traits\ModuleModelTraits;

class RoleModel extends \app\common\model\RoleModel
{
    use ModuleModelTraits;


    public function menulist()
    {
        $hasmany = $this->hasMany("AuthAccessModel", 'role_id', 'id');
        return $hasmany;
    }

    public function toArray()
    {
        $arr = parent::toArray();

        $arr['addtime'] = date('Y-m-d H:i:s', $arr['create_time']);
        $arr['updatetime'] = date('Y-m-d H:i:s', $arr['update_time']);

        return $arr;
    }
}
