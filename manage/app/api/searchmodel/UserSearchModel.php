<?php
//2021-09-23 16:09:38
namespace app\api\searchmodel;

class UserSearchModel extends \app\common\searchmodel\UserSearchModel
{
    /**
     * where语句绑定方法
     * @return array
     */
    protected function BindWhere($param)
    {
        $where = array();

        $where['user_type'] = 1;

        if (!empty($param['user_login'])) {
            $where['user_login'] = ['like', '%' . $param['user_login'] . '%'];
        }

        if (!empty($param['mobile'])) {
            $where['mobile'] = ['like', '%' . $param['mobile'] . '%'];
        }

        empty($param['fromtime']) or $where['create_time'][] = ['>= time', strtotime($param['fromtime'])];
        empty($param['totime']) or $where['create_time'][] = ['<= time', strtotime("+1 day", strtotime($param['totime']))];

        return $where;
    }

    /**
     * 获取当前SeachModel的数据模型
     * @return \think\Model
     */
    protected function getModel()
    {
        return 'id desc';
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
