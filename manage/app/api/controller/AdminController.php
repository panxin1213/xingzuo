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

use app\api\service\AdminMenuService;
use app\api\service\RoleService;
use app\api\service\RoleUserService;
use app\api\service\UserService;

class AdminController extends BaseController
{
    protected function GetService()
    {
        $sv = new UserService();
        $sv->SetWith("rolelist");

        return $sv;
    }

    /**
     * 获取不允许更新的字段集合
     * @return array
     */
    protected function GetExcludeUpdateField()
    {
        return [
            'addtime',
            'last_login_time',
            'last_login_ip',
            'add_uid',
            'updatetime',
            'edit_uid'
        ];
    }


    /**
     * 获取显示字段集合
     * @return array
     */
    protected function GetShowFields()
    {
        return null;
    }

    /**
     * 获取无法使用的action方法
     * @return array
     */
    protected function GetExcludeAction()
    {
        return null;
    }

    /**
     * 添加对象信息
     */
    public function add($param = null)
    {
        $param = $this->request->param();
        $param['user_pass'] = \cmf_password(array_saft_value($param, 'user_pass'));
        $param['user_type'] = 1;
        $param['create_time'] = time();
        $param['user_nickname'] = array_saft_value($param, 'user_nickname') ?: array_saft_value($param, 'user_login');


        if (isset($param['roleid'])) {
            $param['rolelist'] = is_array($param['roleid']) ? array_map(function ($v) {
                return ['role_id' => $v];
            }, $param['roleid']) : [['role_id' => $param['roleid']]];
        }
        unset($param['roleid']);

        return parent::add($param);
    }



    public function editPost($param = null)
    {
        $param = $this->request->param();

        $id = array_saft_value($param, 'id');

        $msv = $this->GetService();

        if ($id < 1 || !($model = $msv->Get($id))) {
            $this->error("信息不存在或已删除");
        }

        if (isset($param['user_status'])) {
            $model['user_status'] = $param['user_status'];
        }

        if (isset($param['username'])) {
            $model['username'] = $param['username'];
        }

        if (isset($param['mobile'])) {
            $model['mobile'] = $param['mobile'];
        }

        if (isset($param['roleid'])) {
            $model['rolelist'] = is_array($param['roleid']) ? array_map(function ($v) {
                return ['role_id' => $v];
            }, $param['roleid']) : [['role_id' => $param['roleid']]];
        }
        unset($model['roleid']);

        if (!empty($param['user_pass'])) {
            $model['user_pass'] = cmf_password($param['user_pass']);
        }

        $result = $msv->Update($model);

        if ($msv->resultIsError($result) === true) {
            $model = $msv->Get($id);
            $this->success("修改成功", null, ['model' => $model]);
        } else {
            $this->error($result['error']);
        }
    }



    protected function datacallback($list)
    {
        return array_map(function ($v) {
            $v['rolename'] = join(',', array_column($v['rolelist']->toArray() ?: [], 'name'));
            return $v;
        }, $list);
    }
}
