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

class OptionsController extends BaseController
{

    protected function GetService()
    {
        return null;
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


    public function upload()
    {
        $uploadSetting = cmf_get_upload_setting();

        $storage = cmf_get_option('storage');

        if (empty($storage)) {
            $storage['type']     = 'Local';
            $storage['storages'] = ['Local' => ['name' => '本地']];
        } else {
            if (empty($storage['type'])) {
                $storage['type'] = 'Local';
            }

            if (empty($storage['storages']['Local'])) {
                $storage['storages']['Local'] = ['name' => '本地'];
            }
        }

        $this->success('SUCCESS', null, ['data' => $uploadSetting, 'storages' => $storage]);
    }

    public function uploadpost()
    {
        if ($this->request->isPost()) {
            //TODO 非空验证
            $uploadSetting = $this->request->post();
            $type = array_saft_value($uploadSetting, 'type');
            unset($uploadSetting['type']);

            cmf_set_option('upload_setting', $uploadSetting);

            $storage = cmf_get_option('storage');

            $storage['type'] = $type;
            cmf_set_option('storage', $storage);

            $this->success('保存成功！');
        }
        $this->error("修改失败");
    }
}
