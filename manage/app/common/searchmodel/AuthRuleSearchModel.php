<?php
//2020-06-17 19:35:04
namespace app\common\searchmodel;

class AuthRuleSearchModel extends \app\core\pager\SearchModel
{
    /**
     * where语句绑定方法
     * @return array
     */
    protected function BindWhere($param){
        $where = array();
        
        return $where;
    }
    
    /**
     * 获取当前SeachModel的数据模型
     * @return \think\Model
     */
    protected function getModel(){
        return null;
    }
    
    
    /**
     * 获取排序规则
     * @return string
     */
    protected function getOrderString(){
        return "";
    }
}