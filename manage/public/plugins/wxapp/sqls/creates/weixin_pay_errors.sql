DROP TABLE IF EXISTS `wx_app_weixin_pay_errors`;&$#$&
CREATE TABLE `wx_app_weixin_pay_errors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `xmlcontent` text NOT NULL COMMENT '微信回调内容',
  `addtime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '添加时间',
  `error` varchar(255) NOT NULL COMMENT '错误信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='微信支付错误信息表'