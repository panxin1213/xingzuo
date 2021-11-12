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

class DataController extends AppBaseController
{

    public function index()
    {
        $this->success("SUCCESS", null, [
            'addbanner' => "https://bgcdn.icheguo.com/xingzuo/index_banner.png",
            'waimailist'    => [
                [
                    "appid" => "wxece3a9a4c82f58c9",
                    "id" => "eleme",
                    "imgIndex" => "https://bgcdn.icheguo.com/xingzuo/banner_index_elm.png",
                    "imgSub" => "https://bgcdn.icheguo.com/xingzuo/banner_sub_elm.png",
                    "path" => "taoke/pages/shopping-guide/index?scene=U5JQpku",
                    "report" => "to_elem_mini",
                    "type" => 1
                ], [
                    "appid" => "wxde8ac0a21135c07d",
                    "id" => "meituan",
                    "imgIndex" => "https://bgcdn.icheguo.com/xingzuo/banner_index_mt.png",
                    "imgSub" => "https://bgcdn.icheguo.com/xingzuo/banner_sub_mt.png",
                    "path" => "/index/pages/h5/h5?lch=cps:waimai:5:95c5232106d0648060c3159173e8d087:dogxingzuo:33:110695\u0026weburl=https%3A%2F%2Fdpurl.cn%2FJcqw3GXz\u0026f_userId=1\u0026f_token=1", "report" => "to_mt_mini",
                    "type" => 1
                ]
            ],
            'float_icon' => "https://bgcdn.icheguo.com/xingzuo/lucky_fl_default.png",
            "luck_week" => ["image_url" => "https://bgcdn.icheguo.com/xingzuo/lucky_fl_default.png", "wechat_url" => "https://mp.weixin.qq.com/s/XsfbHJUOgCjc1K5KB4lDLQ"]
        ]);
    }


    public function getData()
    {
        $param = $this->request->param();

        $xingzuo  = array_saft_value($param, 'xingzuo');
        $type = intval(array_saft_value($param, 'type'));


    }
}
