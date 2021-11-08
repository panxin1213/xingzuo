<?php
//2021-09-23 16:09:38
namespace app\user\service;

use think\Db;
use think\Config;
use think\Log;

class WeixinUserAppendService extends \app\common\service\WeixinUserAppendService
{
    public function __construct()
    {
        parent::__construct();
    }
}