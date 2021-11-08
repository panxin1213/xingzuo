DROP TABLE IF EXISTS `wx_app_weixin_users`;&$#$&
CREATE TABLE `wx_app_weixin_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `openid` varchar(255) NOT NULL COMMENT 'openid',
  `nickName` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '姓名',
  `phone` varchar(255) DEFAULT NULL COMMENT '手机号码',
  `language` varchar(255) DEFAULT NULL COMMENT '用户语言',
  `city` varchar(255) DEFAULT NULL COMMENT '用户所在城市',
  `province` varchar(255) DEFAULT NULL COMMENT '所在省份',
  `country` varchar(255) DEFAULT NULL COMMENT '所在国家',
  `avatarUrl` varchar(1000) DEFAULT NULL COMMENT '头像',
  `unionid` varchar(255) DEFAULT NULL COMMENT '唯一标示',
  `gender` int(11) DEFAULT '0' COMMENT '性别',
  `addtime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '添加时间',
  `lastentertime`  datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '最后访问时间',
  `isadmin` int(11)  NOT NULL DEFAULT '0' COMMENT '是否是管理员',
  PRIMARY KEY (`id`),
  UNIQUE KEY `only_openid` (`openid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='微信用户信息表'
