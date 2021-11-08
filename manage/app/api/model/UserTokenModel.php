<?php
//2021-09-23 16:09:38
namespace app\api\model;

use think\Model;
use think\Cache;
use app\api\traits\ModuleModelTraits;

class UserTokenModel extends \app\common\model\UserTokenModel
{
    use ModuleModelTraits;
}
