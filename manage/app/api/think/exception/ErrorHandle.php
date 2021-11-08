<?php

namespace app\api\think\exception;

use think\Db;
use Exception;
use app\api\traits\ControllerTraits;
use think\exception\ErrorException;
use think\Response;

class ErrorHandle extends \app\common\think\exception\ErrorHandle
{

    use ControllerTraits;

    /**
     * Report or log an exception.
     *
     * @param  \Exception $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        try {
            if ($exception instanceof ErrorException) {
                if (in_array($exception->getSeverity(), [2, 8, 1024, 8192])) {
                    return;
                }
            }
        } catch (\Exception $ex) {
        }
        $headers = $this->GetResponseAccessHeader();

        if (!empty($headers)) {
            unset($k);
            unset($v);
            foreach ($headers as $k => $v) {
                header($k . ': ' . $v);
            }
        }

        parent::report($exception);
    }
}
