<?php
//2021-09-23 16:09:38
namespace app\user\searchmodel;

class WeixinUserOrderSearchModel extends \app\common\searchmodel\WeixinUserOrderSearchModel
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