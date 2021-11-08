<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2018 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Dean <zxxjjforever@163.com>
// +----------------------------------------------------------------------
return [
    'appID'                 => [ // 在后台插件配置表单中的键名 ,会是config[text]
        'title'   => 'appID', // 表单的label标题
        'type'    => 'text', // 表单的类型：text,password,textarea,checkbox,radio,select等
        'value'   => '', // 表单的默认值
        "rule"    => [
            "require" => true
        ],
        "message" => [
            "require" => 'appID不能为空'
        ],
        'tip'     => '微信小程序后台基本配置内appId' //表单的帮助提示
    ],
    'appsecret'                 => [ // 在后台插件配置表单中的键名 ,会是config[text]
        'title'   => 'appsecret', // 表单的label标题
        'type'    => 'text', // 表单的类型：text,password,textarea,checkbox,radio,select等
        'value'   => '', // 表单的默认值
        "rule"    => [
            "require" => true
        ],
        "message" => [
            "require" => 'appsecret不能为空'
        ],
        'tip'     => '微信小程序后台基本配置内appsecret' //表单的帮助提示
    ],
    'paymchid'                 => [ // 在后台插件配置表单中的键名 ,会是config[text]
        'title'   => 'paymchid', // 表单的label标题
        'type'    => 'text', // 表单的类型：text,password,textarea,checkbox,radio,select等
        'value'   => '', // 表单的默认值
        'tip'     => '微信支付商户ID' //表单的帮助提示
    ],
    'payapikey'                 => [ // 在后台插件配置表单中的键名 ,会是config[text]
        'title'   => 'payapikey', // 表单的label标题
        'type'    => 'text', // 表单的类型：text,password,textarea,checkbox,radio,select等
        'value'   => '', // 表单的默认值
        'tip'     => '微信支付商户apikey' //表单的帮助提示
    ],
    'DefaultOperationService'   => [ // 默认操作服务类，用于处理扫码登录后，关注后，等一系列系统操作
        'title'   => 'DefaultOperationService',
        'type'    => 'text',
        'value'   => '\plugins\wxapp\service\OperationService', // 表单的默认值
        "rule"    => [
            "require" => true
        ],
        "message" => [
            "require" => 'DefaultOperationService不能为空'
        ],
        'tip'     => '默认操作服务类，用于处理扫码登录后，关注后，等一系列系统操作，必须实现\plugins\wxmphelper\service\IOperationService接口' //表单的帮助提示
    ]
];
