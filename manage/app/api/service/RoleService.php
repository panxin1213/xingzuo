<?php
//2021-09-23 16:09:38
namespace app\api\service;

use think\Db;
use think\Config;
use think\Log;

class RoleService extends \app\common\service\RoleService
{
    public function __construct()
    {
        parent::__construct();
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
            $acsv = new AuthAccessService();

            $acsv->Delete(['role_id' => intval($data['id'])]);

            $result = parent::Update($data, $where, $isSetAttr);

            if ($this->resultIsError($result) === true) {
                $model->db()->commit();
            } else {
                $model->db()->rollback();
            }
            return $result;
        } catch (\Exception $e) {
            $model->db()->rollback();
            Log::error($e);
            return ['error' => $e->getMessage()];
        }
    }
}
