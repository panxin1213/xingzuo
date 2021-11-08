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

class MenuController extends BaseController
{
    protected function GetService()
    {
        return new AdminMenuService();
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
     * 分页获取列表信息
     * @param array $param 附加搜索参数
     * @param array $dataappend 数据附加返回值
     * @param function $datacallback 数据处理方法
     */
    public function index($param = null, $dataappend = null, $datacallback = null)
    {
        $msv = $this->GetService();

        $list = array_values($this->BindList($msv->GetList([], 0)));

        $this->success("SUCCESS", null, ['list' => $list]);
    }

    // public function getMenuList()
    // {
    //     $msv = $this->GetService();

    //     $list = $msv->getMenuTreeList();

    //     $this->success("SUCCESS", null, ['menulist' => $list]);
    // }


    public function editordernum()
    {
        $param = $this->request->param();

        $id = array_saft_value($param, 'id');

        $msv = $this->GetService();

        if ($id < 1 || !($model = $msv->Get($id))) {
            $this->error("信息不存在或已删除");
        }

        $model['ordernum'] = intval(array_saft_value($param, 'ordernum') ?: 10000);

        $result = $msv->Update($model);

        if ($msv->resultIsError($result) === true) {
            $this->success("修改成功");
        } else {
            $this->error($result['error']);
        }
    }

    /**
     * @SWG\Post(
     *     path="/api/menu/changeislock",
     *     tags={"品牌后台"},
     *     summary="模块开启/关闭",
     *     produces={"application/json"},
     *     description="",
     *     @SWG\Parameter(
     *     in="formData",
     *     required=true,
     *     name="id",
     *     type="integer",
     *     description="模块id（对应菜单id）",
     * ),
     *     @SWG\Parameter(
     *     in="formData",
     *     required=true,
     *     name="islock",
     *     type="integer",
     *     description="是否锁定 传0|1",
     * ),
     *     @SWG\Response(response="200",description="ok")
     *  )
     */
    public function changeislock()
    {
        $param = $this->request->param();

        $id = array_saft_value($param, 'id');

        $msv = $this->GetService();

        if ($id < 1 || !($model = $msv->Get($id))) {
            $this->error("信息不存在或已删除");
        }

        $model['islock'] = $model['islock'] ? 0 : 1;

        $result = $msv->Update($model);

        if ($msv->resultIsError($result) === true) {
            $this->success("修改成功");
        } else {
            $this->error($result['error']);
        }
    }

    public function changeisclose()
    {
        $param = $this->request->param();

        $id = array_saft_value($param, 'id');

        $msv = $this->GetService();

        if ($id < 1 || !($model = $msv->Get($id))) {
            $this->error("信息不存在或已删除");
        }

        $model['isclose'] = $model['isclose'] ? 0 : 1;

        $result = $msv->Update($model);

        if ($msv->resultIsError($result) === true) {
            $this->success("修改成功");
        } else {
            $this->error($result['error']);
        }
    }


    public function delete($param = null)
    {
        $param = $this->request->param();

        $id = array_saft_value($param, 'id');

        $msv = $this->GetService();

        if ($id < 1 || !($model = $msv->Get($id))) {
            $this->success("删除成功");
        }

        $result = $msv->Delete($id);

        if ($msv->resultIsError($result) === true) {
            $this->success("删除成功");
        } else {
            if (is_array($result) && !empty($result['error'])) {
                $this->error($result['error']);
            } else {
                $this->error('删除失败');
            }
        }
    }


    private function BindList($list)
    {
        return array_map(function ($v) {
            $arr = [];
            $arr['basePath'] = null;
            $arr['code'] = array_saft_value($v, 'controller') . '/' . array_saft_value($v, 'action');
            $arr['createdAt'] = $v['addtime'];
            $arr['enabled'] = $v['status'];
            $arr['entry'] = null;
            $arr['icon'] = null;
            $arr['id'] = $v['id'];
            $arr['name'] = null;
            $arr['parentId'] = $v['parent_id'];
            $arr['path'] = $v['path'];
            $arr['sort'] = $v['list_order'];
            $arr['target'] = null;
            $arr['title'] = $v['name'];
            $arr['type'] = $v['type'] == 2 ? 2 : 1;
            $arr['updatedAt'] = $v['addtime'];
            $arr['target'] = 'menu';
            $arr['icon'] = array_saft_value($v, 'icon');
            $arr['app'] = array_saft_value($v, 'app');
            $arr['controller'] = array_saft_value($v, 'controller');
            $arr['action'] = array_saft_value($v, 'action');
            return $arr;
        }, $list);
    }

    /**
     * 用户菜单列表
     */
    public function getUserMenuList($returnmodel = 0)
    {
        $msv = $this->GetService();
        $list = array_values($this->BindList(array_filter($msv->GetList(['status' => 1], 0), function ($v) {
            // if (empty($this->admin['menuids'])) {
            //     return false;
            // }

            // return in_array($v['id'], $this->admin['menuids']);
            return true;
        })));

        if ($returnmodel) {
            return $list;
        }

        $this->success('SUCCESS', null, ['list' => $list]);
    }


    /**
     * 用户菜单收藏列表
     */
    public function getCollectMenuList()
    {
        $umcsv = $this->GetService();

        $list = $umcsv->GetList([], 0);

        $this->success('SUCCESS', null, ['list' => $list]);
    }

    /**
     * 保存收藏菜单
     */
    public function saveCollectedMenu()
    {
        // $param = $this->request->param();

        // $menuid = intval(array_saft_value($param, 'menuid'));

        // $umcsv = new UserMenuCollectService();
        // $where = ['userid' => $this->admin['id'], 'menuid' => $menuid, 'type' => 1];

        // $m = $umcsv->Get($where);

        // if (!empty($m)) {
        //     $result = $umcsv->Delete($where);
        // } else {
        //     $result = $umcsv->Insert($where);
        // }

        // if ($umcsv->resultIsError($result) === true) {
        //     $this->success("SUCCESS");
        // } else {
        //     $this->error(!empty($result['error']) ? $result['error'] : '保存失败');
        // }
    }

    /**
     * 批量增加菜单功能权限
     */
    public function updateSubActions()
    {
        $param = $this->request->param();


        $actions = array_saft_value($param, 'actions');
        $parentId = intval(array_saft_value($param, 'parentId'));

        $arrlist = [];

        $msv = $this->GetService();

        $hasids = array_column($msv->GetList(['parent_id' => $parentId, 'type' => 2], 0), 'id');

        if (is_array($actions)) {
            $arrlist = array_map(function ($v) use ($parentId) {
                $arr = [];
                $arr['id'] = intval(array_saft_value($v, 'id'));
                $arr['name'] = array_saft_value($v, 'title');
                $arr['parent_id'] = $parentId;
                $arr['type'] = 2;
                $arr['status'] = intval(array_saft_value($v, 'enabled'));
                $arr['app'] = 'api';
                $code = explode('/', array_saft_value($v, 'code'));
                $arr['controller'] = array_saft_value($code, 0);
                $arr['action'] = array_saft_value($code, 1);

                return $arr;
            }, $actions);

            $inserts = array_values(array_filter($arrlist, function ($v) {
                return !$v['id'];
            }));
            $updates = array_values(array_filter($arrlist, function ($v) {
                return $v['id'];
            }));
            $deletes = [];

            if (!empty($hasids)) {
                $thisids = array_column($arrlist, 'id');
                $deletes = array_filter($hasids, function ($v) use ($thisids) {
                    return !in_array($v, $thisids);
                });
            }

            if (!empty($inserts)) {
                $result = $msv->InsertAll($inserts);
            }
            if (!empty($updates)) {
                $result = $msv->UpdateAll($updates);
            }
            if (!empty($deletes)) {
                $result = $msv->Delete(['parent_id' => $parentId, 'id' => ['in', $deletes], 'type' => 2]);
            }
        } else {
            $this->success('SUCCESS');
        }
        if ($msv->resultIsError($result) === true) {
            $this->success('SUCCESS');
        } else {
            $this->error(!empty($result['error']) ? $result['error'] : '保存失败');
        }
    }
}
