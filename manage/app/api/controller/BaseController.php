<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2019 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 小夏 < 449134904@qq.com>
// +----------------------------------------------------------------------
namespace app\api\controller;

use app\api\traits\ControllerTraits;
use app\core\controller\BaseServiceController;
use think\Config;
use think\Controller;
use think\Db;

abstract class BaseController extends BaseServiceController
{

    use ControllerTraits;

    protected $admin = null;
    /**
     * 初始化操作
     * @access protected
     */
    protected function _initialize()
    {
        parent::_initialize();

        $sessionAdminId = session('ADMIN_ID');
        if (!empty($sessionAdminId)) {
            $user = Db::name('user')->where('id', $sessionAdminId)->find();

            if (!$this->checkAccess($sessionAdminId)) {
                $this->error("您没有访问权限！");
            }
            $this->admin = $user;
        } else {
            $this->error([
                'code' => 10001,
                'msg' => '登录过期，请重新登录'
            ]);
        }
    }


    /**
     *  检查后台用户访问权限
     * @param int $userId 后台用户id
     * @return boolean 检查通过返回true
     */
    private function checkAccess($userId)
    {
        // 如果用户id是1，则无需判断
        if ($userId == 1) {
            return true;
        }

        $module     = $this->request->module();
        $controller = $this->request->controller();
        $action     = $this->request->action();
        $rule       = $module . $controller . $action;

        $notRequire = ["adminIndexindex", "adminMainindex"];
        if (!in_array($rule, $notRequire)) {
            return cmf_auth_check($userId);
        } else {
            return true;
        }
    }


    protected function getResponseType()
    {
        return Config::get('default_ajax_return');
    }
}
