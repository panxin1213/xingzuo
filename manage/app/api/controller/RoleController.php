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

class RoleController extends BaseController
{

    protected function GetService()
    {
        $sv = new RoleService();
        $sv->SetWith('menulist');
        $sv->SetTogether("menulist");

        return $sv;
    }

    /**
     * 获取不允许更新的字段集合
     * @return array
     */
    protected function GetExcludeUpdateField()
    {
        return null;
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

        unset($param['addtime']);
        $param['update_time'] = time();
        $param['create_time'] = time();

        $msv = new AdminMenuService();
        $msv->SetNotAppendRequestParam();

        $menulist = array_column($msv->GetList([], 0), null, 'id');

        if (isset($param['menuids'])) {
            $param['menulist'] = array_map(function ($v) use ($menulist) {
                $menumodel = array_saft_value($menulist, $v);
                if (empty($menumodel)) {
                    return null;
                }
                return ['rule_name' => "{$menumodel['app']}/{$menumodel['controller']}/{$menumodel['action']}", 'type' => 'admin_url'];
            }, $param['menuids']);
        }
        return parent::add($param);
    }


    public function editbefore(&$model)
    {
        $rule_names = array_column($model['menulist'], 'rule_name');

        $amsv = new AdminMenuService();
        $amsv->SetNotAppendRequestParam();

        $menulist = $amsv->GetList(['rule_names' => $rule_names], 0);

        $model['menuids'] = array_column($menulist, 'id');
    }

    public function editPost($param = null)
    {
        $param = $this->request->param();

        $id = array_saft_value($param, 'id');

        $msv = $this->GetService();

        if ($id < 1 || !($model = $msv->Get($id))) {
            $this->error("信息不存在或已删除");
        }

        if (isset($param['status'])) {
            $model['status'] = $param['status'];
            //锁定角色判断是否有可用账号
            if (!$param['status']) {
                $rusv = new RoleUserService();
                $rusv->SetNotAppendRequestParam();
                $userids = $rusv->GetCount(['role_id' => $id]);
                if ($userids) {
                    $this->error("该角色中还有人员，请转交后再停用。");
                }
            }
        }

        $amsv = new AdminMenuService();

        $menulist = $amsv->GetList(['ids' => empty($param['menuIds']) ? [0] : $param['menuIds']], 0);

        if (isset($param['name'])) {
            $model['name'] = $param['name'];
        }

        if (isset($param['remark'])) {
            $model['remark'] = $param['remark'];
        }

        $model['menulist'] = array_map(function ($menumodel) use ($id) {
            return [
                'role_id' => $id,
                'rule_name' => "{$menumodel['app']}/{$menumodel['controller']}/{$menumodel['action']}",
                'type' => 'admin_url'
            ];
        }, $menulist);

        $result = $msv->Update($model);

        if ($msv->resultIsError($result) === true) {
            $model = $msv->Get($id);
            $this->success("修改成功", null, ['model' => $model]);
        } else {
            $this->error($result['error']);
        }
    }


    public function getrolelist()
    {
        return parent::index([
            'islock' => 0
        ]);
    }

    public function getOneRole()
    {
        $param = $this->request->param();

        $name = array_saft_value($param, 'name');

        if (empty($name)) {
            $this->success('SUCCESS', null, ['data' => []]);
        }

        $msv = $this->GetService();

        $m = $msv->Get(['name' => $name]);

        $this->success('SUCCESS', null, ['data' => $m ?: []]);
    }
}
