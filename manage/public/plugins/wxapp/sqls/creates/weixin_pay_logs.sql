DROP TABLE IF EXISTS `wx_app_weixin_pay_logs`;&$#$&
CREATE TABLE `wx_app_weixin_pay_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `appid` varchar(255) NOT NULL COMMENT 'appid',
  `mch_id` varchar(255) NOT NULL COMMENT '商户ID',
  `body` varchar(255) NOT NULL COMMENT '下单内容',
  `out_trade_no` varchar(255) NOT NULL COMMENT '订单编号',
  `total_fee` int(11) NOT NULL COMMENT '订单金额',
  `spbill_create_ip` varchar(255) NOT NULL COMMENT '下单IP',
  `notify_url` varchar(255) NOT NULL COMMENT '支付成功后回调地址',
  `trade_type` varchar(255) NOT NULL COMMENT '下单类型',
  `openid` varchar(255) NOT NULL COMMENT '用户openid',
  `prepay_id` varchar(255) NOT NULL COMMENT '预支付ID',
  `bank_type` varchar(255) DEFAULT NULL COMMENT '银行类型',
  `cash_fee` int(11) DEFAULT NULL COMMENT '金额',
  `fee_type` varchar(255) DEFAULT NULL COMMENT '金额类型',
  `is_subscribe` varchar(255) DEFAULT NULL COMMENT '是否关注',
  `nonce_str` varchar(255) DEFAULT NULL COMMENT '随机字符串',
  `result_code` varchar(255) DEFAULT NULL COMMENT '业务结果',
  `return_code` varchar(255) DEFAULT NULL COMMENT '返回状态码',
  `sign` varchar(255) DEFAULT NULL COMMENT '签名',
  `time_end` varchar(255) DEFAULT NULL COMMENT '支付完成时间',
  `transaction_id` varchar(255) DEFAULT NULL COMMENT '微信支付订单号',
  `return_msg` varchar(255) DEFAULT NULL COMMENT '返回信息',
  `addtime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '添加时间',
  `uptime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `userid` int(11) NOT NULL COMMENT '用户编号',
  `orderid` varchar(255) NOT NULL COMMENT '订单ID',
  `xmlcontent` text COMMENT '回调xml内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8 COMMENT='微信支付信息表'