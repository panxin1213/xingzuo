<?php
//2021-09-23 16:09:38
namespace app\api\service;

use think\Db;
use think\Config;
use think\Log;

class UserService extends \app\common\service\UserService
{
    public function __construct()
    {
        parent::__construct();
    }



    /**
     * 插入单条数据(返回值为数组时则为错误['error' => 'err'])
     * @param array $data
     * @return integer|array|string
     */
    public function Insert($data)
    {
        return parent::TransFunction(function () use ($data) {
            $result = parent::Insert($data);
            if ($this->resultIsError($result) === true) {
                $rusv = new RoleUserService();
                $rusv->InsertAll(array_map(function ($v) use ($result) {
                    $v['user_id'] = $result;
                    return $v;
                }, $data['rolelist'] ?: []));
            }

            return $result;
        });
    }


    /**
     * 修改信息
     * @param array $data 修改数据
     * @param array $where 修改条件
     * @return array|bool|int
     */
    public function Update($data, $where = array(), $isSetAttr = null)
    {
        $model = $this->getModel();

        $model->db()->startTrans();

        try {
            $rusv = new RoleUserService();
            $rusv->Delete(['user_id' => array_saft_value($data, 'id')]);

            $result = parent::Update($data, $where, $isSetAttr);
            if ($this->resultIsError($result) === true) {
                $rusv->InsertAll(array_map(function ($v) use ($data) {
                    $v['user_id'] = array_saft_value($data, 'id');
                    return $v;
                }, $data['rolelist'] ?: []));
            }

            if ($this->resultIsError($result) === true) {
                $model->db()->commit();
            } else {
                $model->db()->rollback();
            }

            return $result;
        } catch (\Exception $e) {
            Log::error($e);
            $model->db()->rollback();

            return ['error' => $e->getMessage()];
        }
    }
}
