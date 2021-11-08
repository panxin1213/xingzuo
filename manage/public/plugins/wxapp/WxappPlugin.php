<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2018 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Dean <zxxjjforever@163.com>
// +----------------------------------------------------------------------
namespace plugins\wxapp;//Demo插件英文名，改成你的插件英文就行了
use cmf\lib\Plugin;
use think\Db;
use think\Log;

//Demo插件英文名，改成你的插件英文就行了
class WxappPlugin extends Plugin
{

    public $info = [
        'name'        => 'Wxapp',//Demo插件英文名，改成你的插件英文就行了
        'title'       => '微信小程序',
        'description' => '微信小程序管理工具',
        'status'      => 1,
        'author'      => 'ThinkCMF',
        'version'     => '1.0',
        'demo_url'    => 'http://demo.thinkcmf.com',
        'author_url'  => 'http://www.thinkcmf.com'
    ];

    public $hasAdmin = 1; //插件是否有后台管理界面

    // 插件安装
    public function install()
    {
        $result = $this->CreatTables();

        if (is_array($result)) {
            Log::error("安装插件失败：" . $result['error']);
        }

        return true; //安装成功返回true，失败false
    }

    // 插件卸载
    public function uninstall()
    {
        $result = $this->DeleteTables();

        if (is_array($result)) {
            Log::error("卸载插件失败：" . $result['error']);
        }
        return true; //卸载成功返回true，失败false
    }



    /**
     * 获取创建公司表运行的sql语句集合
     * @param int $mcompanyid
     * @return array
     */
    private function getSqlsByFiles($filepath = 'creates')
    {
        $dirpath = PLUGINS_PATH . 'wxapp/sqls/' . $filepath;
        $dirs = scandir($dirpath);

        $files = [];

        foreach ($dirs as $filename) {
            if (strpos($filename, '.sql') !== false) {
                $files[] = $filename;
            }
        }
        $arrlist = [];

        foreach ($files as $filename) {
            $str = file_get_contents($dirpath . '/' . $filename);
            $str = \str_replace('{$prefix}', 'wx_', $str);

            $arrlist = array_values(array_filter(array_merge($arrlist, explode("&$#$&", $str))));
        }

        return $arrlist;
    }


    /**
     * 创建表
     * @return true|array
     */
    private function CreatTables()
    {
        $sqls = $this->getSqlsByFiles();
        try {
            foreach ($sqls as $sql) {
                Db::execute($sql);
            }
        } catch (\Exception $e) {
            return ['error' => $e->getMessage()];
        }

        return true;
    }

    
    /**
     * 删除表
     * @return true|array
     */
    private function DeleteTables()
    {
        $sqls = $this->getSqlsByFiles("deletes");
        try {
            foreach ($sqls as $sql) {
                Db::execute($sql);
            }
        } catch (\Exception $e) {
            return ['error' => $e->getMessage()];
        }

        return true;
    }
}