DROP TABLE IF EXISTS `wx_app_weixin_pay_callbacklogs`;&$#$&
CREATE TABLE `wx_app_weixin_pay_callbacklogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `addtime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '添加时间',
  `xmlstring` text NOT NULL COMMENT '发送内容',
  `errorstr` text NOT NULL COMMENT '处理错误信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='小程序支付回调记录表'