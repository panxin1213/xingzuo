<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2014 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Dean <zxxjjforever@163.com>
// +----------------------------------------------------------------------
namespace plugins\wxapp\controller; //Demo插件英文名，改成你的插件英文就行了

use cmf\controller\PluginAdminBaseController;
use plugins\wxapp\model\WeixinUsersModel;
use plugins\wxapp\traits\OptionsTraits;

/**
 * 客服控制器
 */
class AdminIndexController extends PluginAdminBaseController
{
    use OptionsTraits;

    // 初始化
    protected function _initialize()
    {
        parent::_initialize();

        $this->InitOptions();
    }


    public function index()
    {
        $wumodel = new WeixinUsersModel();

        $list = $wumodel->db()->order('lastentertime desc')->paginate(10);

        $page = $list->render();

        $this->assign("page", $page);
        $this->assign("list", $list->items());

        return $this->fetch('/user/index');
    }


    public function changeadmin()
    {
        $param = $this->request->param();

        $id = intval(array_saft_value($param, 'id'));

        $wumodel = new WeixinUsersModel();

        $m = $wumodel->where(['id' => $id])->find();

        if (empty($m)) {
            $this->success("修改成功");
        }

        $result = $wumodel->isUpdate(true)->save(['isadmin' => $m['isadmin'] ? 0 : 1], ['id' => $id]);

        if ($result === false) {
            $this->error("修改失败");
        } else {
            $this->success("修改成功.");
        }
    }
}
