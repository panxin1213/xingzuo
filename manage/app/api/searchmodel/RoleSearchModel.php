<?php
//2021-09-23 16:09:38
namespace app\api\searchmodel;

class RoleSearchModel extends \app\common\searchmodel\RoleSearchModel
{
    /**
     * where语句绑定方法
     * @return array
     */
    protected function BindWhere($param)
    {
        $where = array();

        if (isset($param['status'])) {
            $where['status'] = $param['status'];
        }

        if (!empty($param['name'])) {
            $where['name'] = ['like', '%' . $param['name'] . '%'];
        }

        return $where;
    }

    /**
     * 获取当前SeachModel的数据模型
     * @return \think\Model
     */
    protected function getModel()
    {
        return null;
    }


    /**
     * 获取排序规则
     * @return string
     */
    protected function getOrderString()
    {
        return "id desc";
    }
}
