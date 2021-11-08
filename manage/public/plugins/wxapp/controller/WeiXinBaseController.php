<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2014 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Dean <zxxjjforever@163.com>
// +----------------------------------------------------------------------
namespace plugins\wxapp\controller; //Demo插件英文名，改成你的插件英文就行了

use cmf\controller\PluginBaseController;
use plugins\wxapp\traits\ControllerTraits;
use plugins\wxapp\traits\OptionsTraits;

class WeiXinBaseController extends PluginBaseController
{
    use ControllerTraits;
    use OptionsTraits;

    // 初始化
    protected function _initialize()
    {
        parent::_initialize();

        $this->InitOptions();
    }
}
