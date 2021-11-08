<?php
//2021-09-23 16:09:38
namespace app\api\model;

use think\Model;
use think\Cache;
use app\api\traits\ModuleModelTraits;
use app\core\traits\ModelTraits;

class AuthAccessModel extends \app\common\model\AuthAccessModel
{
    use ModuleModelTraits;
    use ModelTraits;
}
