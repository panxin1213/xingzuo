<?php
//2021-09-23 16:09:37
namespace app\api\searchmodel;

class AdminMenuSearchModel extends \app\common\searchmodel\AdminMenuSearchModel
{
    /**
     * where语句绑定方法
     * @return array
     */
    protected function BindWhere($param)
    {
        $where = array();

        if (isset($param['status']) && $param['status'] != '') {
            $where['status'] = $param['status'];
        }

        if (!empty($param['parent_id'])) {
            $where['parent_id'] = $param['parent_id'];
        }

        if (!empty($param['ids'])) {
            $where['id'] = ['in', $param['ids']];
        }

        if (!empty($param['rule_names'])) {
            $where['rule_name'] = ['in', $param['rule_names']];
        }

        $where['app'] = 'api';

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
        return "";
    }
}
