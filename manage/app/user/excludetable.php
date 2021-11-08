<?php

/**
 * 排除自动生成表名称,需要去掉前缀，然后驼峰式，例：oa_m_company,则为MCompany
 */
return
    [
        'AdminMenu', 'Asset', 'AuthAccess',
        'AuthRule', 'Hook', 'HookPlugin', 'Option', 'Plugin',
        'RecycleBin', 'Role',
        'RoleUser', 'Route', 'Theme', 'ThemeFile', 'User',
        'UserAction', 'UserActionLog', 'UserLoginAttempt',
        'UserToken', 'VerificationCode'
    ];
