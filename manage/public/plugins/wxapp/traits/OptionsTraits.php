<?php

namespace plugins\wxapp\traits;



trait OptionsTraits
{

    protected $config = null;

    /**
     * @var \plugins\wxapp\service\IOperationService $operationservice
     * @return \plugins\wxapp\service\IOperationService
     */
    protected $operationservice = null;



    protected function InitOptions()
    {
        $this->config = $this->getPlugin()->getConfig();

        if (empty($this->config['DefaultOperationService'])) {
            $this->config['DefaultOperationService'] = '\plugins\wxapp\service\OperationService';
        }

        $this->operationservice = new $this->config['DefaultOperationService']();

        $this->assign("controller", $this->request->param('_controller'));
        $this->assign("action", $this->request->param('_action'));
    }
}
