<?php

namespace plugins\wxapp\traits;

use think\Response;
use think\exception\HttpResponseException;
use think\Log;
use think\Request;



trait ControllerTraits
{

    protected function sendresposne($result)
    {
        $type = $this->getResponseType();

        $response = Response::create($result, $type);
        $header = $this->GetResponseAccessHeader();
        $response = $response->header($header);
        throw new HttpResponseException($response);
    }


    protected function GetResponseAccessHeader()
    {
        $request = null;
        try {
            if ($this->request) {
                $request = $this->request;
            } else {
                $request = Request::instance();
            }
        } catch (\Exception $ex) {
            $request = Request::instance();
        }
        $origin = $request->header("Origin");
        $header = [];


        if (empty($origin)) {
            $origin = get_referer();
            Log::error($origin);
        }

        if (!empty($origin)) {
            $before_hosts = explode(',', config("before_hosts"));
            if (!in_array($origin, $before_hosts)) {
                $origin = "";
            }
            $header['Access-Control-Allow-Origin'] = $origin ?: "*";
            $header['Access-Control-Allow-Headers'] = 'X-Requested-With,Content-Type,Access-Control-Allow-Origin';
            $header['Access-Control-Allow-Methods'] = 'GET,POST,PATCH,PUT,DELETE,OPTIONS';
            $header['Access-Control-Allow-Credentials'] = "true";
        }

        return $header;
    }

    /**
     * 操作成功跳转的快捷方法
     * @access protected
     * @param mixed $msg 提示信息
     * @param mixed $data 返回的数据
     * @param array $header 发送的Header信息
     * @return void
     */
    protected function success($msg = '', $url = NULL, $data = '', $wait = 3, array $header = [])
    {
        // if (empty(Request()->header("Origin")) && !empty($data) && empty($this->request->param('showjson'))) {
        //     echo '<pre>';
        //     print_r($data);
        //     echo '</pre>';
        //     return '';
        // }
        $code = 1;
        $result = [
            'code' => $code,
            'msg' => $msg,
            'data' => $data,
        ];

        $this->sendresposne($result);
    }

    /**
     * 操作错误跳转的快捷方法
     * @access protected
     * @param mixed $msg 提示信息,若要指定错误码,可以传数组,格式为['code'=>您的错误码,'msg'=>'您的错误消息']
     * @param mixed $data 返回的数据
     * @param array $header 发送的Header信息
     * @return void
     */
    protected function error($msg = '', $url = NULL, $data = '', $wait = 3, array $header = [])
    {
        $code = 0;
        if (is_array($msg)) {
            $code = $msg['code'];
            $msg = $msg['msg'];
        }
        $result = [
            'code' => $code,
            'msg' => $msg,
            'data' => $data,
        ];

        $this->sendresposne($result);
    }
}
