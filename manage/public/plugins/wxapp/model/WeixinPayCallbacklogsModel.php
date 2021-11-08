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
class WeixinPayCallbacklogsModel extends Model
{
    // 数据表名称
    protected $table = 'wx_app_weixin_pay_callbacklogs';
}
