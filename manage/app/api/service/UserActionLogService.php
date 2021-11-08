<?php
//2021-09-23 16:09:38
namespace app\api\service;

use think\Db;
use think\Config;
use think\Log;

class UserActionLogService extends \app\common\service\UserActionLogService
{
    public function __construct()
    {
        parent::__construct();
    }
}