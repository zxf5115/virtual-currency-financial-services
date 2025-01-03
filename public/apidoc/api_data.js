define({ "api": [
  {
    "type": "get",
    "url": "/api/logout",
    "title": "12. 退出",
    "description": "<p>退出登录状态</p>",
    "group": "01._登录模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/logout"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "GetApiLogout"
  },
  {
    "type": "post",
    "url": "/api/apple_login",
    "title": "06. 苹果登录",
    "description": "<p>通过第三方软件-苹果，进行登录</p>",
    "group": "01._登录模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "apply_id",
            "description": "<p>苹果AppleID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|令牌": [
          {
            "group": "字段说明|令牌",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份令牌</p>"
          }
        ],
        "字段说明|用户": [
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "role_id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "open_id",
            "description": "<p>微信编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "apply_id",
            "description": "<p>苹果编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "inviter_id",
            "description": "<p>邀请人编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          }
        ],
        "字段说明|角色": [
          {
            "group": "字段说明|角色",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "字段说明|角色",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "字段说明|角色",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>角色描述</p>"
          }
        ],
        "字段说明|贵宾": [
          {
            "group": "字段说明|贵宾",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>贵宾标题</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/apple_login"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "PostApiApple_login"
  },
  {
    "type": "post",
    "url": "/api/back_mobile",
    "title": "11. 手机找回密码",
    "description": "<p>通过手机号码找回密码</p>",
    "group": "01._登录模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>登录手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sms_code",
            "description": "<p>验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>新密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>确认密码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/back_mobile"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "PostApiBack_mobile"
  },
  {
    "type": "post",
    "url": "/api/bind_code",
    "title": "09. 获取绑定验证码",
    "description": "<p>获取登录手机号的绑定验证码</p>",
    "group": "01._登录模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户（18201018888）</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/bind_code"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "PostApiBind_code"
  },
  {
    "type": "post",
    "url": "/api/bind_mobile",
    "title": "08. 绑定手机号码",
    "description": "<p>绑定用的的手机号码</p>",
    "group": "01._登录模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "open_id",
            "description": "<p>微信登录编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>登录手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sms_code",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/bind_mobile"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "PostApiBind_mobile"
  },
  {
    "type": "post",
    "url": "/api/login",
    "title": "01. 密码登录",
    "description": "<p>通过账户密码进行登录操作</p>",
    "group": "01._登录模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户（18201018926）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>登录密码（123456）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|令牌": [
          {
            "group": "字段说明|令牌",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份令牌</p>"
          }
        ],
        "字段说明|用户": [
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "role_id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "open_id",
            "description": "<p>微信编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "apply_id",
            "description": "<p>苹果编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "inviter_id",
            "description": "<p>邀请人编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          }
        ],
        "字段说明|角色": [
          {
            "group": "字段说明|角色",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "字段说明|角色",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "字段说明|角色",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>角色描述</p>"
          }
        ],
        "字段说明|贵宾": [
          {
            "group": "字段说明|贵宾",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>贵宾标题</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/login"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "PostApiLogin"
  },
  {
    "type": "post",
    "url": "/api/oauth_login",
    "title": "02. 一键登录",
    "description": "<p>短信登录</p>",
    "group": "01._登录模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "login_token",
            "description": "<p>登录令牌</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|令牌": [
          {
            "group": "字段说明|令牌",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份令牌</p>"
          }
        ],
        "字段说明|用户": [
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "role_id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "open_id",
            "description": "<p>微信编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "apply_id",
            "description": "<p>苹果编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "inviter_id",
            "description": "<p>邀请人编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          }
        ],
        "字段说明|角色": [
          {
            "group": "字段说明|角色",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "字段说明|角色",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "字段说明|角色",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>角色描述</p>"
          }
        ],
        "字段说明|贵宾": [
          {
            "group": "字段说明|贵宾",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>贵宾标题</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/oauth_login"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "PostApiOauth_login"
  },
  {
    "type": "post",
    "url": "/api/register",
    "title": "07. 用户注册",
    "description": "<p>注册用户信息</p>",
    "group": "01._登录模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "open_id",
            "description": "<p>微信app编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "apply_id",
            "description": "<p>苹果登录编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>登录手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sex",
            "description": "<p>会员性别</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "age",
            "description": "<p>会员性别</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "region_id",
            "description": "<p>县</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "address",
            "description": "<p>详细地址</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/register"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "PostApiRegister"
  },
  {
    "type": "post",
    "url": "/api/reset_code",
    "title": "10. 重置验证码",
    "description": "<p>获取重置验证码</p>",
    "group": "01._登录模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户（18201018888）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "响应": [
          {
            "group": "响应",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/reset_code"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "PostApiReset_code"
  },
  {
    "type": "post",
    "url": "/api/sms_code",
    "title": "04. 登录验证码",
    "description": "<p>获取短信登录验证码</p>",
    "group": "01._登录模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户（18201018926）</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/sms_code"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "PostApiSms_code"
  },
  {
    "type": "post",
    "url": "/api/sms_login",
    "title": "03. 短信登录",
    "description": "<p>短信登录</p>",
    "group": "01._登录模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户（18201018926）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sms_code",
            "description": "<p>短信验证码（7777）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|令牌": [
          {
            "group": "字段说明|令牌",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份令牌</p>"
          }
        ],
        "字段说明|用户": [
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "role_id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "open_id",
            "description": "<p>微信编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "apply_id",
            "description": "<p>苹果编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "inviter_id",
            "description": "<p>邀请人编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          }
        ],
        "字段说明|角色": [
          {
            "group": "字段说明|角色",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "字段说明|角色",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "字段说明|角色",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>角色描述</p>"
          }
        ],
        "字段说明|贵宾": [
          {
            "group": "字段说明|贵宾",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>贵宾标题</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/sms_login"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "PostApiSms_login"
  },
  {
    "type": "post",
    "url": "/api/weixin_login",
    "title": "05. 微信登录",
    "description": "<p>通过第三方软件-微信，进行登录</p>",
    "group": "01._登录模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "open_id",
            "description": "<p>微信OpenID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|令牌": [
          {
            "group": "字段说明|令牌",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份令牌</p>"
          }
        ],
        "字段说明|用户": [
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "role_id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "open_id",
            "description": "<p>微信编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "apply_id",
            "description": "<p>苹果编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "inviter_id",
            "description": "<p>邀请人编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          }
        ],
        "字段说明|角色": [
          {
            "group": "字段说明|角色",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "字段说明|角色",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "字段说明|角色",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>角色描述</p>"
          }
        ],
        "字段说明|贵宾": [
          {
            "group": "字段说明|贵宾",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>贵宾标题</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/weixin_login"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "PostApiWeixin_login"
  },
  {
    "type": "get",
    "url": "/api/common/agreement/about",
    "title": "03. 关于我们",
    "description": "<p>获取关于我们协议</p>",
    "group": "02._公共模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>协议内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/agreement/about"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/AgreementController.php",
    "groupTitle": "02._公共模块",
    "name": "GetApiCommonAgreementAbout"
  },
  {
    "type": "get",
    "url": "/api/common/agreement/employ",
    "title": "05. 使用协议",
    "description": "<p>获取使用协议</p>",
    "group": "02._公共模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>协议内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/agreement/employ"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/AgreementController.php",
    "groupTitle": "02._公共模块",
    "name": "GetApiCommonAgreementEmploy"
  },
  {
    "type": "get",
    "url": "/api/common/agreement/liability",
    "title": "08. 免责声明",
    "description": "<p>获取免责声明</p>",
    "group": "02._公共模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>协议内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/agreement/liability"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/AgreementController.php",
    "groupTitle": "02._公共模块",
    "name": "GetApiCommonAgreementLiability"
  },
  {
    "type": "get",
    "url": "/api/common/agreement/privacy",
    "title": "06. 隐私协议",
    "description": "<p>获取使用协议</p>",
    "group": "02._公共模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>协议内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/agreement/privacy"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/AgreementController.php",
    "groupTitle": "02._公共模块",
    "name": "GetApiCommonAgreementPrivacy"
  },
  {
    "type": "get",
    "url": "/api/common/agreement/service",
    "title": "08. 服务协议",
    "description": "<p>获取服务协议</p>",
    "group": "02._公共模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>协议内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/agreement/service"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/AgreementController.php",
    "groupTitle": "02._公共模块",
    "name": "GetApiCommonAgreementService"
  },
  {
    "type": "get",
    "url": "/api/common/agreement/specification",
    "title": "07. 账户使用规范",
    "description": "<p>获取账户使用规范</p>",
    "group": "02._公共模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>协议内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/agreement/specification"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/AgreementController.php",
    "groupTitle": "02._公共模块",
    "name": "GetApiCommonAgreementSpecification"
  },
  {
    "type": "get",
    "url": "/api/common/agreement/user",
    "title": "04. 用户协议",
    "description": "<p>获取用户协议</p>",
    "group": "02._公共模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>协议内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/agreement/user"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/AgreementController.php",
    "groupTitle": "02._公共模块",
    "name": "GetApiCommonAgreementUser"
  },
  {
    "type": "get",
    "url": "/api/common/agreement/vip",
    "title": "09. 贵宾说明",
    "description": "<p>获取贵宾说明</p>",
    "group": "02._公共模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>协议内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/agreement/vip"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/AgreementController.php",
    "groupTitle": "02._公共模块",
    "name": "GetApiCommonAgreementVip"
  },
  {
    "type": "get",
    "url": "/api/common/area/list",
    "title": "02. 地区列表",
    "description": "<p>获取全国地区列表</p>",
    "group": "02._公共模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "parent_id",
            "description": "<p>上级地区编号（为空：获取省，省编号: 获取市，市编号: 获取县）</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/area/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/AreaController.php",
    "groupTitle": "02._公共模块",
    "name": "GetApiCommonAreaList"
  },
  {
    "type": "get",
    "url": "/api/system/kernel",
    "title": "01. 系统信息",
    "description": "<p>获取系统配置内容信息</p>",
    "group": "02._公共模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "web_chinese_name",
            "description": "<p>网站中文名称</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "web_english_name",
            "description": "<p>网站英文名字</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "web_url",
            "description": "<p>站点链接</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "keywords",
            "description": "<p>网站关键字</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>网站描述</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>网站logo</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>公司电话</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>公司邮箱</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "copyright",
            "description": "<p>备案号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "web_status",
            "description": "<p>站点状态</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "web_close_info",
            "description": "<p>站点关闭原因</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/system/kernel"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/SystemController.php",
    "groupTitle": "02._公共模块",
    "name": "GetApiSystemKernel"
  },
  {
    "type": "post",
    "url": "/api/common/notify/alipay",
    "title": "15. 支付宝支付回调",
    "description": "<p>获取支付宝支付回调</p>",
    "group": "02._公共模块",
    "sampleRequest": [
      {
        "url": "/api/common/notify/alipay"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/NotifyController.php",
    "groupTitle": "02._公共模块",
    "name": "PostApiCommonNotifyAlipay"
  },
  {
    "type": "post",
    "url": "/api/common/notify/apple",
    "title": "16. 苹果支付回调",
    "description": "<p>获取微信支付回调</p>",
    "group": "02._公共模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "order_no",
            "description": "<p>订单号(创建支付订单id)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "is_box",
            "description": "<p>是否为沙盒</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "receipt",
            "description": "<p>苹果凭证</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/notify/apple"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/NotifyController.php",
    "groupTitle": "02._公共模块",
    "name": "PostApiCommonNotifyApple"
  },
  {
    "type": "post",
    "url": "/api/common/notify/wechat",
    "title": "14. 微信支付回调",
    "description": "<p>获取微信支付回调</p>",
    "group": "02._公共模块",
    "sampleRequest": [
      {
        "url": "/api/common/notify/wechat"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/NotifyController.php",
    "groupTitle": "02._公共模块",
    "name": "PostApiCommonNotifyWechat"
  },
  {
    "type": "post",
    "url": "/api/common/pay/data",
    "title": "09. 支付类型",
    "description": "<p>获取支付类型</p>",
    "group": "02._公共模块",
    "sampleRequest": [
      {
        "url": "/api/common/pay/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/PayController.php",
    "groupTitle": "02._公共模块",
    "name": "PostApiCommonPayData"
  },
  {
    "type": "post",
    "url": "/api/common/service/data",
    "title": "11. 客服联系方式",
    "description": "<p>获取客服联系方式</p>",
    "group": "02._公共模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "service_mobile",
            "description": "<p>客服电话</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "service_wechat",
            "description": "<p>客服微信号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/service/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/ServiceController.php",
    "groupTitle": "02._公共模块",
    "name": "PostApiCommonServiceData"
  },
  {
    "type": "post",
    "url": "/api/common/share/data",
    "title": "10. 分享公共数据",
    "description": "<p>获取分享公共数据</p>",
    "group": "02._公共模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "share_qrcode",
            "description": "<p>分享二维码</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "share_content",
            "description": "<p>分享内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/share/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/ShareController.php",
    "groupTitle": "02._公共模块",
    "name": "PostApiCommonShareData"
  },
  {
    "type": "post",
    "url": "/api/file/file",
    "title": "01. 上传文件",
    "description": "<p>通过base64的内容进行文件上传</p>",
    "group": "03._上传模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "file",
            "description": "<p>文件数据</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "category",
            "description": "<p>文件分类 excel word pdf video audio ...</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>文件地址</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/file/file"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/FileController.php",
    "groupTitle": "03._上传模块",
    "name": "PostApiFileFile"
  },
  {
    "type": "post",
    "url": "/api/file/picture",
    "title": "02. 上传图片",
    "description": "<p>通过base64的内容进行图片上传</p>",
    "group": "03._上传模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "file",
            "description": "<p>图片数据</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "category",
            "description": "<p>图片分类 picture avatar ...</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>图片地址</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/file/picture"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/FileController.php",
    "groupTitle": "03._上传模块",
    "name": "PostApiFilePicture"
  },
  {
    "type": "get",
    "url": "/api/advertising/position/select",
    "title": "01. 广告位数据",
    "description": "<p>获取广告位不分页列表数据</p>",
    "group": "04._广告位模块",
    "success": {
      "fields": {
        "响应|广告位": [
          {
            "group": "响应|广告位",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>广告位编号</p>"
          },
          {
            "group": "响应|广告位",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>广告位名称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/advertising/position/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Advertising/PositionController.php",
    "groupTitle": "04._广告位模块",
    "name": "GetApiAdvertisingPositionSelect"
  },
  {
    "type": "get",
    "url": "/api/advertising/position/view/{id}",
    "title": "02. 广告位详情",
    "description": "<p>获取广告位详情</p>",
    "group": "04._广告位模块",
    "success": {
      "fields": {
        "响应|广告位": [
          {
            "group": "响应|广告位",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>广告位编号</p>"
          },
          {
            "group": "响应|广告位",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>广告位名称</p>"
          }
        ],
        "响应|广告": [
          {
            "group": "响应|广告",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>广告标题</p>"
          },
          {
            "group": "响应|广告",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>广告图片</p>"
          },
          {
            "group": "响应|广告",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>广告链接</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/advertising/position/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Advertising/PositionController.php",
    "groupTitle": "04._广告位模块",
    "name": "GetApiAdvertisingPositionViewId"
  },
  {
    "type": "get",
    "url": "/api/advertising/select",
    "title": "01. 广告数据",
    "description": "<p>获取广告不分页列表</p>",
    "group": "05._广告模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "position_id",
            "description": "<p>广告位编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "total",
            "description": "<p>显示广告数量，默认显示5条</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>广告标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>广告图片</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>广告链接</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/advertising/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/AdvertisingController.php",
    "groupTitle": "05._广告模块",
    "name": "GetApiAdvertisingSelect"
  },
  {
    "type": "get",
    "url": "/api/complain/category/select",
    "title": "01. 投诉分类数据",
    "description": "<p>获取投诉分类不分页列表数据</p>",
    "group": "06._投诉分类模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>投诉分类编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>投诉分类标题</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/complain/category/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Complain/CategoryController.php",
    "groupTitle": "06._投诉分类模块",
    "name": "GetApiComplainCategorySelect"
  },
  {
    "type": "get",
    "url": "/api/problem/category/select",
    "title": "01. 常见问题分类数据",
    "description": "<p>获取常见问题分类不分页列表数据</p>",
    "group": "07._常见问题分类模块",
    "success": {
      "fields": {
        "字段说明|问题分类": [
          {
            "group": "字段说明|问题分类",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>常见问题分类编号</p>"
          },
          {
            "group": "字段说明|问题分类",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>常见问题分类标题</p>"
          }
        ],
        "字段说明|问题": [
          {
            "group": "字段说明|问题",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>常见问题标题</p>"
          },
          {
            "group": "字段说明|问题",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>常见问题内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/problem/category/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Problem/CategoryController.php",
    "groupTitle": "07._常见问题分类模块",
    "name": "GetApiProblemCategorySelect"
  },
  {
    "type": "get",
    "url": "/api/problem/list?page={page}",
    "title": "01. 常见问题列表",
    "description": "<p>获取常见问题分页列表</p>",
    "group": "08._常见问题模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>常见问题编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>常见问题标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>常见问题内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/problem/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/ProblemController.php",
    "groupTitle": "08._常见问题模块",
    "name": "GetApiProblemListPagePage"
  },
  {
    "type": "get",
    "url": "/api/problem/select",
    "title": "02. 常见问题数据",
    "description": "<p>获取常见问题不分页列表数据</p>",
    "group": "08._常见问题模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>常见问题编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>常见问题标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>常见问题内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/problem/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/ProblemController.php",
    "groupTitle": "08._常见问题模块",
    "name": "GetApiProblemSelect"
  },
  {
    "type": "get",
    "url": "/api/problem/view/{id}",
    "title": "03. 常见问题详情",
    "description": "<p>获取常见问题详情</p>",
    "group": "08._常见问题模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>常见问题编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>常见问题标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>常见问题内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/problem/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/ProblemController.php",
    "groupTitle": "08._常见问题模块",
    "name": "GetApiProblemViewId"
  },
  {
    "type": "get",
    "url": "/api/notice/category/select",
    "title": "01. 通知分类数据",
    "description": "<p>获取通知分类不分页列表数据</p>",
    "group": "09._通知分类模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员通知分类编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>会员通知分类标题</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/notice/category/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Notice/CategoryController.php",
    "groupTitle": "09._通知分类模块",
    "name": "GetApiNoticeCategorySelect"
  },
  {
    "type": "get",
    "url": "/api/project/category/select",
    "title": "01. 项目分类数据",
    "description": "<p>获取项目分类不分页列表数据</p>",
    "group": "10._项目分类模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>项目分类编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>项目分类标题</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/project/category/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Project/CategoryController.php",
    "groupTitle": "10._项目分类模块",
    "name": "GetApiProjectCategorySelect"
  },
  {
    "type": "get",
    "url": "/api/notice/list?page={page}",
    "title": "我的通知列表",
    "description": "<p>获取当前会员通知分页列表</p>",
    "group": "11._通知模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>通知编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>通知内容</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>通知时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/notice/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/NoticeController.php",
    "groupTitle": "11._通知模块",
    "name": "GetApiNoticeListPagePage"
  },
  {
    "type": "get",
    "url": "/api/vip/list?page={page}",
    "title": "01. 贵宾列表",
    "description": "<p>获取贵宾分页列表</p>",
    "group": "19._贵宾模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>贵宾编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>贵宾标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>贵宾内容</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>贵宾费用</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "valid_time",
            "description": "<p>贵宾时限(月)</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/vip/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/VipController.php",
    "groupTitle": "19._贵宾模块",
    "name": "GetApiVipListPagePage"
  },
  {
    "type": "get",
    "url": "/api/vip/select",
    "title": "02. 贵宾数据",
    "description": "<p>获取贵宾不分页列表数据</p>",
    "group": "19._贵宾模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>贵宾编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>贵宾标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>贵宾内容</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>贵宾费用</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "valid_time",
            "description": "<p>贵宾时限(月)</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/vip/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/VipController.php",
    "groupTitle": "19._贵宾模块",
    "name": "GetApiVipSelect"
  },
  {
    "type": "get",
    "url": "/api/vip/view/{id}",
    "title": "03. 贵宾详情",
    "description": "<p>获取贵宾详情</p>",
    "group": "19._贵宾模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>贵宾编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>贵宾标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>贵宾内容</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>贵宾费用</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "valid_time",
            "description": "<p>贵宾时限(月)</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/vip/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/VipController.php",
    "groupTitle": "19._贵宾模块",
    "name": "GetApiVipViewId"
  },
  {
    "type": "get",
    "url": "/api/member/archive",
    "title": "01. 当前会员档案",
    "description": "<p>获取当前会员的档案信息</p>",
    "group": "20._会员模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明|会员": [
          {
            "group": "字段说明|会员",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "字段说明|会员",
            "type": "String",
            "optional": false,
            "field": "role_id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "字段说明|会员",
            "type": "String",
            "optional": false,
            "field": "inviter_id",
            "description": "<p>邀请人编号</p>"
          },
          {
            "group": "字段说明|会员",
            "type": "String",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "字段说明|会员",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "字段说明|会员",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "字段说明|会员",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          }
        ],
        "字段说明|档案": [
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别</p>"
          },
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "attention_total",
            "description": "<p>关注总数</p>"
          },
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "fans_total",
            "description": "<p>粉丝总数</p>"
          },
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "approval_total",
            "description": "<p>点赞总数</p>"
          },
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "accepted_total",
            "description": "<p>获赞总数</p>"
          },
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "region_id",
            "description": "<p>县</p>"
          },
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/archive"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/MemberController.php",
    "groupTitle": "20._会员模块",
    "name": "GetApiMemberArchive"
  },
  {
    "type": "get",
    "url": "/api/member/asset",
    "title": "02. 当前会员资产",
    "description": "<p>获取当前会员的资产信息</p>",
    "group": "20._会员模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明|会员": [
          {
            "group": "字段说明|会员",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "字段说明|会员",
            "type": "String",
            "optional": false,
            "field": "role_id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "字段说明|会员",
            "type": "String",
            "optional": false,
            "field": "inviter_id",
            "description": "<p>邀请人编号</p>"
          },
          {
            "group": "字段说明|会员",
            "type": "String",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "字段说明|会员",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "字段说明|会员",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "字段说明|会员",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          }
        ],
        "字段说明|资产": [
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>充值金额</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/asset"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/MemberController.php",
    "groupTitle": "20._会员模块",
    "name": "GetApiMemberAsset"
  },
  {
    "type": "get",
    "url": "/api/member/data",
    "title": "03. 会员数据",
    "description": "<p>根据会员编号获取会员数据</p>",
    "group": "20._会员模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|会员": [
          {
            "group": "字段说明|会员",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "字段说明|会员",
            "type": "String",
            "optional": false,
            "field": "role_id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "字段说明|会员",
            "type": "String",
            "optional": false,
            "field": "inviter_id",
            "description": "<p>邀请人编号</p>"
          },
          {
            "group": "字段说明|会员",
            "type": "String",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "字段说明|会员",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "字段说明|会员",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "字段说明|会员",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          }
        ],
        "字段说明|档案": [
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别</p>"
          },
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "attention_total",
            "description": "<p>关注总数</p>"
          },
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "fans_total",
            "description": "<p>粉丝总数</p>"
          },
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "approval_total",
            "description": "<p>点赞总数</p>"
          },
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "accepted_total",
            "description": "<p>获赞总数</p>"
          },
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "region_id",
            "description": "<p>县</p>"
          },
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/MemberController.php",
    "groupTitle": "20._会员模块",
    "name": "GetApiMemberData"
  },
  {
    "type": "get",
    "url": "/api/member/status",
    "title": "04. 当前会员是否填写资料",
    "description": "<p>获取当前会员是否填写资料信息</p>",
    "group": "20._会员模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>true|false</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/MemberController.php",
    "groupTitle": "20._会员模块",
    "name": "GetApiMemberStatus"
  },
  {
    "type": "post",
    "url": "/api/member/change_code",
    "title": "07. 修改验证码",
    "description": "<p>获取当前会员的修改验证码</p>",
    "group": "20._会员模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>旧手机号码（18201018888）</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/change_code"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/MemberController.php",
    "groupTitle": "20._会员模块",
    "name": "PostApiMemberChange_code"
  },
  {
    "type": "post",
    "url": "/api/member/change_mobile",
    "title": "08. 修改手机号码",
    "description": "<p>修改当前会员的手机号码</p>",
    "group": "20._会员模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>旧手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "new_username",
            "description": "<p>新手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sms_code",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/change_mobile"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/MemberController.php",
    "groupTitle": "20._会员模块",
    "name": "PostApiMemberChange_mobile"
  },
  {
    "type": "post",
    "url": "/api/member/handle",
    "title": "05. 编辑会员信息",
    "description": "<p>编辑会员信息</p>",
    "group": "20._会员模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sex",
            "description": "<p>会员性别</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "age",
            "description": "<p>会员性别</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "region_id",
            "description": "<p>县</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/MemberController.php",
    "groupTitle": "20._会员模块",
    "name": "PostApiMemberHandle"
  },
  {
    "type": "post",
    "url": "/api/member/password",
    "title": "06. 修改会员密码",
    "description": "<p>修改会员密码</p>",
    "group": "20._会员模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "old_password",
            "description": "<p>旧密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>新密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>确认密码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/password"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/MemberController.php",
    "groupTitle": "20._会员模块",
    "name": "PostApiMemberPassword"
  },
  {
    "type": "get",
    "url": "/api/member/asset/data",
    "title": "01. 我的资产",
    "description": "<p>获取当前会员的资产</p>",
    "group": "21._会员资产模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>我的金额</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/asset/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/AssetController.php",
    "groupTitle": "21._会员资产模块",
    "name": "GetApiMemberAssetData"
  },
  {
    "type": "get",
    "url": "/api/member/attention/list?page={page}",
    "title": "01. 会员关注列表",
    "description": "<p>获取当前会员关注分页列表</p>",
    "group": "22._会员关注模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|基础": [
          {
            "group": "字段说明|基础",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员关注编号</p>"
          },
          {
            "group": "字段说明|基础",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "字段说明|基础",
            "type": "Number",
            "optional": false,
            "field": "attention_member_id",
            "description": "<p>关注会员编号</p>"
          },
          {
            "group": "字段说明|基础",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>关注时间</p>"
          }
        ],
        "字段说明|关注人": [
          {
            "group": "字段说明|关注人",
            "type": "Number",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "字段说明|关注人",
            "type": "Number",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称</p>"
          }
        ],
        "字段说明|被关注人": [
          {
            "group": "字段说明|被关注人",
            "type": "Number",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "字段说明|被关注人",
            "type": "Number",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/attention/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/AttentionController.php",
    "groupTitle": "22._会员关注模块",
    "name": "GetApiMemberAttentionListPagePage"
  },
  {
    "type": "post",
    "url": "/api/member/attention/handle",
    "title": "03. 关注操作",
    "description": "<p>当前会员执行关注操作, 已经关注过，再次点击取消关注</p>",
    "group": "22._会员关注模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "attention_member_id",
            "description": "<p>关注编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/attention/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/AttentionController.php",
    "groupTitle": "22._会员关注模块",
    "name": "PostApiMemberAttentionHandle"
  },
  {
    "type": "post",
    "url": "/api/member/attention/status",
    "title": "02. 是否关注会员",
    "description": "<p>获取当前会员是否关注指定会员</p>",
    "group": "22._会员关注模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "attention_member_id",
            "description": "<p>关注会员编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>是否关注</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/attention/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/AttentionController.php",
    "groupTitle": "22._会员关注模块",
    "name": "PostApiMemberAttentionStatus"
  },
  {
    "type": "get",
    "url": "/api/member/invitation/list?page={page}",
    "title": "01. 会员邀请列表",
    "description": "<p>获取当前会员邀请分页列表</p>",
    "group": "23._会员邀请模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|基础": [
          {
            "group": "字段说明|基础",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员邀请编号</p>"
          },
          {
            "group": "字段说明|基础",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "字段说明|基础",
            "type": "Number",
            "optional": false,
            "field": "invitation_member_id",
            "description": "<p>邀请会员编号</p>"
          },
          {
            "group": "字段说明|基础",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>邀请时间</p>"
          }
        ],
        "字段说明|邀请人": [
          {
            "group": "字段说明|邀请人",
            "type": "Number",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "字段说明|邀请人",
            "type": "Number",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称</p>"
          }
        ],
        "字段说明|被邀请人": [
          {
            "group": "字段说明|被邀请人",
            "type": "Number",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "字段说明|被邀请人",
            "type": "Number",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/invitation/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/InvitationController.php",
    "groupTitle": "23._会员邀请模块",
    "name": "GetApiMemberInvitationListPagePage"
  },
  {
    "type": "post",
    "url": "/api/member/invitation/data",
    "title": "02. 邀请人数据",
    "description": "<p>获取当前用户邀请数据</p>",
    "group": "23._会员邀请模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "invitation_code",
            "description": "<p>邀请码</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "invitation_content",
            "description": "<p>邀请说明</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "qrcode",
            "description": "<p>二维码图片</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/invitation/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/InvitationController.php",
    "groupTitle": "23._会员邀请模块",
    "name": "PostApiMemberInvitationData"
  },
  {
    "type": "post",
    "url": "/api/member/invitation/handle",
    "title": "04. 邀请操作",
    "description": "<p>当前会员执行邀请操作, 已经邀请过，再次点击取消邀请</p>",
    "group": "23._会员邀请模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "invitation_code",
            "description": "<p>邀请码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/invitation/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/InvitationController.php",
    "groupTitle": "23._会员邀请模块",
    "name": "PostApiMemberInvitationHandle"
  },
  {
    "type": "post",
    "url": "/api/member/invitation/status",
    "title": "03. 是否邀请会员",
    "description": "<p>获取当前会员邀请的详情</p>",
    "group": "23._会员邀请模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "invitation_code",
            "description": "<p>邀请码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>是否邀请</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/invitation/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/InvitationController.php",
    "groupTitle": "23._会员邀请模块",
    "name": "PostApiMemberInvitationStatus"
  },
  {
    "type": "get",
    "url": "/api/member/notice/list?page={page}",
    "title": "我的通知列表",
    "description": "<p>获取当前会员通知分页列表</p>",
    "group": "24._会员通知模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "message_category_id",
            "description": "<p>通知分类编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>会员通知编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>通知内容</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>通知时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/notice/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/NoticeController.php",
    "groupTitle": "24._会员通知模块",
    "name": "GetApiMemberNoticeListPagePage"
  },
  {
    "type": "post",
    "url": "/api/member/notice/finish",
    "title": "我的通知已阅读",
    "description": "<p>当前会员通知标记已阅读</p>",
    "group": "24._会员通知模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "message_id",
            "description": "<p>会员通知编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/notice/finish"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/NoticeController.php",
    "groupTitle": "24._会员通知模块",
    "name": "PostApiMemberNoticeFinish"
  },
  {
    "type": "get",
    "url": "/api/member/complain/list?page={page}",
    "title": "01. 我的投诉列表",
    "description": "<p>获取我的投诉分页列表</p>",
    "group": "25._会员投诉模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "category_id",
            "description": "<p>投诉位编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|投诉": [
          {
            "group": "字段说明|投诉",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>投诉编号</p>"
          },
          {
            "group": "字段说明|投诉",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>投诉标题</p>"
          },
          {
            "group": "字段说明|投诉",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>投诉内容</p>"
          },
          {
            "group": "字段说明|投诉",
            "type": "String",
            "optional": false,
            "field": "customer_name",
            "description": "<p>客户姓名</p>"
          },
          {
            "group": "字段说明|投诉",
            "type": "String",
            "optional": false,
            "field": "contact",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "字段说明|投诉",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>投诉时间</p>"
          }
        ],
        "字段说明|投诉分类": [
          {
            "group": "字段说明|投诉分类",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>投诉分类标题</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/complain/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/ComplainController.php",
    "groupTitle": "25._会员投诉模块",
    "name": "GetApiMemberComplainListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/complain/view/{id}",
    "title": "02. 我的投诉详情",
    "description": "<p>获取我的投诉详情</p>",
    "group": "25._会员投诉模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明|投诉": [
          {
            "group": "字段说明|投诉",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>投诉编号</p>"
          },
          {
            "group": "字段说明|投诉",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>投诉标题</p>"
          },
          {
            "group": "字段说明|投诉",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>投诉内容</p>"
          },
          {
            "group": "字段说明|投诉",
            "type": "String",
            "optional": false,
            "field": "customer_name",
            "description": "<p>客户姓名</p>"
          },
          {
            "group": "字段说明|投诉",
            "type": "String",
            "optional": false,
            "field": "contact",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "字段说明|投诉",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>投诉时间</p>"
          }
        ],
        "字段说明|投诉分类": [
          {
            "group": "字段说明|投诉分类",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>投诉分类标题</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/complain/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/ComplainController.php",
    "groupTitle": "25._会员投诉模块",
    "name": "GetApiMemberComplainViewId"
  },
  {
    "type": "post",
    "url": "/api/member/complain/handle",
    "title": "03. 提交投诉信息",
    "description": "<p>提交投诉信息</p>",
    "group": "25._会员投诉模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category_id",
            "description": "<p>投诉类型（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>投诉标题（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>投诉内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "customer_name",
            "description": "<p>客户姓名（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contact",
            "description": "<p>联系方式（不可为空）</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/complain/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/ComplainController.php",
    "groupTitle": "25._会员投诉模块",
    "name": "PostApiMemberComplainHandle"
  },
  {
    "type": "post",
    "url": "/api/member/contact/handle",
    "title": "01. 提交联系客服信息",
    "description": "<p>提交联系客服信息信息</p>",
    "group": "26._会员客服模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>投诉类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>投诉内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>投诉内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>投诉内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/contact/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/ContactController.php",
    "groupTitle": "26._会员客服模块",
    "name": "PostApiMemberContactHandle"
  },
  {
    "type": "get",
    "url": "/api/member/information/list?page={page}",
    "title": "01. 我的资讯列表",
    "description": "<p>获取我的资讯分页列表</p>",
    "group": "27._会员资讯模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>资讯编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>资讯标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>资讯封面</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>资讯内容</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>资讯来源</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>资讯作者</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "read_total",
            "description": "<p>阅读总数</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>是否推荐</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/information/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/InformationController.php",
    "groupTitle": "27._会员资讯模块",
    "name": "GetApiMemberInformationListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/information/view/{id}",
    "title": "02. 我的资讯详情",
    "description": "<p>获取我的资讯详情</p>",
    "group": "27._会员资讯模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>资讯编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>资讯标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>资讯封面</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>资讯内容</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>资讯来源</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>资讯作者</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "read_total",
            "description": "<p>阅读总数</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>是否推荐</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/information/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/InformationController.php",
    "groupTitle": "27._会员资讯模块",
    "name": "GetApiMemberInformationViewId"
  },
  {
    "type": "post",
    "url": "/api/member/information/delete",
    "title": "04. 资讯删除",
    "description": "<p>当前会员资讯发布</p>",
    "group": "27._会员资讯模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>资讯编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/information/delete"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/InformationController.php",
    "groupTitle": "27._会员资讯模块",
    "name": "PostApiMemberInformationDelete"
  },
  {
    "type": "post",
    "url": "/api/member/information/handle",
    "title": "03. 资讯发布",
    "description": "<p>当前会员资讯发布</p>",
    "group": "27._会员资讯模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category_id",
            "description": "<p>资讯分类</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>资讯标题</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "picture",
            "description": "<p>资讯封面</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>资讯内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "source",
            "description": "<p>资讯来源</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/information/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/InformationController.php",
    "groupTitle": "27._会员资讯模块",
    "name": "PostApiMemberInformationHandle"
  },
  {
    "type": "get",
    "url": "/api/member/setting/data",
    "title": "01. 我的设置",
    "description": "<p>获取我的设置详情</p>",
    "group": "28._会员设置模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "push_switch",
            "description": "<p>推送开关</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/setting/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/SettingController.php",
    "groupTitle": "28._会员设置模块",
    "name": "GetApiMemberSettingData"
  },
  {
    "type": "post",
    "url": "/api/member/setting/handle",
    "title": "03. 推送设置",
    "description": "<p>当前会员设置推送开关</p>",
    "group": "28._会员设置模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "push_switch",
            "description": "<p>推送开关 1 推送 2 不推送</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/setting/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/SettingController.php",
    "groupTitle": "28._会员设置模块",
    "name": "PostApiMemberSettingHandle"
  },
  {
    "type": "post",
    "url": "/api/member/certification/company",
    "title": "03. 企业认证",
    "description": "<p>当前会员企业认证</p>",
    "group": "29._会员认证模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "company_name",
            "description": "<p>企业名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "business_license_no",
            "description": "<p>营业执照号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "business_license_picture",
            "description": "<p>营业执照图片</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/certification/company"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CertificationController.php",
    "groupTitle": "29._会员认证模块",
    "name": "PostApiMemberCertificationCompany"
  },
  {
    "type": "post",
    "url": "/api/member/certification/data",
    "title": "05. 我的认证",
    "description": "<p>当前会员认证信息</p>",
    "group": "29._会员认证模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明|个人": [
          {
            "group": "字段说明|个人",
            "type": "string",
            "optional": false,
            "field": "id_card_front_picture",
            "description": "<p>身份证正面照片</p>"
          },
          {
            "group": "字段说明|个人",
            "type": "string",
            "optional": false,
            "field": "id_card_behind_picture",
            "description": "<p>身份证反面照片</p>"
          }
        ],
        "字段说明|企业": [
          {
            "group": "字段说明|企业",
            "type": "string",
            "optional": false,
            "field": "company_name",
            "description": "<p>企业名称</p>"
          },
          {
            "group": "字段说明|企业",
            "type": "string",
            "optional": false,
            "field": "business_license_no",
            "description": "<p>营业执照号</p>"
          },
          {
            "group": "字段说明|企业",
            "type": "string",
            "optional": false,
            "field": "business_license_picture",
            "description": "<p>营业执照图片</p>"
          }
        ],
        "字段说明|项目": [
          {
            "group": "字段说明|项目",
            "type": "string",
            "optional": false,
            "field": "project_name",
            "description": "<p>项目名称</p>"
          },
          {
            "group": "字段说明|项目",
            "type": "string",
            "optional": false,
            "field": "project_logo",
            "description": "<p>项目logo</p>"
          },
          {
            "group": "字段说明|项目",
            "type": "string",
            "optional": false,
            "field": "realname",
            "description": "<p>联系人</p>"
          },
          {
            "group": "字段说明|项目",
            "type": "string",
            "optional": false,
            "field": "category_id",
            "description": "<p>项目类型</p>"
          },
          {
            "group": "字段说明|项目",
            "type": "string",
            "optional": false,
            "field": "project_website",
            "description": "<p>项目官网</p>"
          },
          {
            "group": "字段说明|项目",
            "type": "string",
            "optional": false,
            "field": "project_document",
            "description": "<p>白皮书地址</p>"
          },
          {
            "group": "字段说明|项目",
            "type": "string",
            "optional": false,
            "field": "project_social",
            "description": "<p>社交媒体</p>"
          },
          {
            "group": "字段说明|项目",
            "type": "string",
            "optional": false,
            "field": "project_report",
            "description": "<p>审计报告</p>"
          },
          {
            "group": "字段说明|项目",
            "type": "string",
            "optional": false,
            "field": "project_github",
            "description": "<p>github地址</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/certification/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CertificationController.php",
    "groupTitle": "29._会员认证模块",
    "name": "PostApiMemberCertificationData"
  },
  {
    "type": "post",
    "url": "/api/member/certification/personal",
    "title": "02. 个人认证",
    "description": "<p>当前会员个人认证</p>",
    "group": "29._会员认证模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id_card_front_picture",
            "description": "<p>身份证正面照片</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id_card_behind_picture",
            "description": "<p>身份证反面照片</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/certification/personal"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CertificationController.php",
    "groupTitle": "29._会员认证模块",
    "name": "PostApiMemberCertificationPersonal"
  },
  {
    "type": "post",
    "url": "/api/member/certification/project",
    "title": "04. 项目认证",
    "description": "<p>当前会员项目认证</p>",
    "group": "29._会员认证模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "project_name",
            "description": "<p>项目名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "project_logo",
            "description": "<p>项目logo</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "realname",
            "description": "<p>联系人</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>联系人手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category_id",
            "description": "<p>项目类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "project_website",
            "description": "<p>项目官网</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "project_document",
            "description": "<p>白皮书地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "project_social",
            "description": "<p>社交媒体</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "project_report",
            "description": "<p>审计报告</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "project_github",
            "description": "<p>github地址</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/certification/project"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CertificationController.php",
    "groupTitle": "29._会员认证模块",
    "name": "PostApiMemberCertificationProject"
  },
  {
    "type": "post",
    "url": "/api/member/certification/status",
    "title": "01. 会员是否认证",
    "description": "<p>当前会员是否认证</p>",
    "group": "29._会员认证模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>是否认证</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/certification/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CertificationController.php",
    "groupTitle": "29._会员认证模块",
    "name": "PostApiMemberCertificationStatus"
  },
  {
    "type": "post",
    "url": "/api/member/vip/handle",
    "title": "02. 开通贵宾",
    "description": "<p>当前会员开通贵宾</p>",
    "group": "30._会员贵宾模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "vip_id",
            "description": "<p>贵宾编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "money",
            "description": "<p>贵宾费用</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/vip/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/VipController.php",
    "groupTitle": "30._会员贵宾模块",
    "name": "PostApiMemberVipHandle"
  },
  {
    "type": "post",
    "url": "/api/member/vip/status",
    "title": "01. 是否是贵宾",
    "description": "<p>获取当前会员是否是贵宾</p>",
    "group": "30._会员贵宾模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>是否贵宾</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/vip/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/VipController.php",
    "groupTitle": "30._会员贵宾模块",
    "name": "PostApiMemberVipStatus"
  },
  {
    "type": "get",
    "url": "/api/member/community/list?page={page}",
    "title": "01. 我的社区列表",
    "description": "<p>获取我的社区分页列表</p>",
    "group": "31._会员社区模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "category_id",
            "description": "<p>社区分类编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>社区编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>社区标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>社区封面</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>社区内容</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>社区作者</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_hot",
            "description": "<p>是否热门</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/community/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CommunityController.php",
    "groupTitle": "31._会员社区模块",
    "name": "GetApiMemberCommunityListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/community/view/{id}",
    "title": "02. 我的社区详情",
    "description": "<p>获取我的社区详情</p>",
    "group": "31._会员社区模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>社区编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>社区标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>社区封面</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>社区内容</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>社区作者</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_hot",
            "description": "<p>是否热门</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/community/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CommunityController.php",
    "groupTitle": "31._会员社区模块",
    "name": "GetApiMemberCommunityViewId"
  },
  {
    "type": "post",
    "url": "/api/member/community/handle",
    "title": "03. 社区发布",
    "description": "<p>当前会员社区发布</p>",
    "group": "31._会员社区模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category_id",
            "description": "<p>社区分类</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>社区标题</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "picture",
            "description": "<p>社区封面</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>社区内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "author",
            "description": "<p>社区作者</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/community/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CommunityController.php",
    "groupTitle": "31._会员社区模块",
    "name": "PostApiMemberCommunityHandle"
  },
  {
    "type": "post",
    "url": "/api/member/share/data",
    "title": "01. 会员分享数据",
    "description": "<p>获取学员分享配置</p>",
    "group": "32._会员分享模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "invitation_code",
            "description": "<p>邀请码</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "invitation_content",
            "description": "<p>邀请说明</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "qrcode",
            "description": "<p>二维码图片</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/share/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/ShareController.php",
    "groupTitle": "32._会员分享模块",
    "name": "PostApiMemberShareData"
  },
  {
    "type": "get",
    "url": "/api/member/money/expend",
    "title": "03. 我的消费记录",
    "description": "<p>获取当前会员的消费记录</p>",
    "group": "33._会员资产明细模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>收支金额</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>收支时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/money/expend"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/MoneyController.php",
    "groupTitle": "33._会员资产明细模块",
    "name": "GetApiMemberMoneyExpend"
  },
  {
    "type": "get",
    "url": "/api/member/money/income",
    "title": "02. 我的充值记录",
    "description": "<p>获取当前会员的充值记录</p>",
    "group": "33._会员资产明细模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>收支金额</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>收支时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/money/income"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/MoneyController.php",
    "groupTitle": "33._会员资产明细模块",
    "name": "GetApiMemberMoneyIncome"
  },
  {
    "type": "get",
    "url": "/api/member/money/list",
    "title": "01. 我的收支记录",
    "description": "<p>获取当前会员的收支记录</p>",
    "group": "33._会员资产明细模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>收支类型</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>收支金额</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>收支时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/money/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/MoneyController.php",
    "groupTitle": "33._会员资产明细模块",
    "name": "GetApiMemberMoneyList"
  },
  {
    "type": "post",
    "url": "/api/member/money/handle",
    "title": "04. 充值操作",
    "description": "<p>当前会员充值</p>",
    "group": "33._会员资产明细模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "money",
            "description": "<p>充值金额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pay_type",
            "description": "<p>充值方式</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/money/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/MoneyController.php",
    "groupTitle": "33._会员资产明细模块",
    "name": "PostApiMemberMoneyHandle"
  },
  {
    "type": "get",
    "url": "/api/member/cart/select",
    "title": "01. 我的购物车数据",
    "description": "<p>获取我的购物车数据</p>",
    "group": "34._会员购物车模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明|课程": [
          {
            "group": "字段说明|课程",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>资讯编号</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>课程代码</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程图片</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>课程内容</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>课程价格</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "point_total",
            "description": "<p>课程集数</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "watch_total",
            "description": "<p>观看总数</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "is_shelf",
            "description": "<p>是否上架</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "is_trial",
            "description": "<p>是否试看</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>是否推荐</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/cart/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CartController.php",
    "groupTitle": "34._会员购物车模块",
    "name": "GetApiMemberCartSelect"
  },
  {
    "type": "post",
    "url": "/api/member/cart/add",
    "title": "02. 加入购物车",
    "description": "<p>当前会员把课程加入购物车</p>",
    "group": "34._会员购物车模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "total",
            "description": "<p>购买数量</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/cart/add"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CartController.php",
    "groupTitle": "34._会员购物车模块",
    "name": "PostApiMemberCartAdd"
  },
  {
    "type": "post",
    "url": "/api/member/cart/change",
    "title": "03. 修改数量",
    "description": "<p>当前会员修改购物车课程数量</p>",
    "group": "34._会员购物车模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>购物车编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/cart/change"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CartController.php",
    "groupTitle": "34._会员购物车模块",
    "name": "PostApiMemberCartChange"
  },
  {
    "type": "post",
    "url": "/api/member/cart/delete",
    "title": "04. 删除购物车",
    "description": "<p>当前会员把课程删除购物车</p>",
    "group": "34._会员购物车模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>购物车编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/cart/delete"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CartController.php",
    "groupTitle": "34._会员购物车模块",
    "name": "PostApiMemberCartDelete"
  },
  {
    "type": "get",
    "url": "/api/member/order/list?page={page}",
    "title": "01. 我的订单列表",
    "description": "<p>获取当前会员课程订单列表(分页)</p>",
    "group": "35._会员订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pay_status",
            "description": "<p>支付状态 0 待支付 1 已支付</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|订单": [
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "order_no",
            "description": "<p>订单号</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "pay_money",
            "description": "<p>支付金额</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "pay_type",
            "description": "<p>支付类型</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "pay_status",
            "description": "<p>支付状态</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "pay_time",
            "description": "<p>支付时间</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "order_status",
            "description": "<p>订单状态</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          }
        ],
        "字段说明|课程": [
          {
            "group": "字段说明|课程",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>课程代码</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程图片</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>课程内容</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>课程价格</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "point_total",
            "description": "<p>课程集数</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "watch_total",
            "description": "<p>观看总数</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "is_shelf",
            "description": "<p>是否上架</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "is_trial",
            "description": "<p>是否试看</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>是否推荐</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/OrderController.php",
    "groupTitle": "35._会员订单模块",
    "name": "GetApiMemberOrderListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/order/view/{id}",
    "title": "02. 我的订单详情",
    "description": "<p>获取当前会员课程订单的详情</p>",
    "group": "35._会员订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|订单": [
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "order_no",
            "description": "<p>订单号</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "pay_money",
            "description": "<p>支付金额</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "pay_type",
            "description": "<p>支付类型</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "pay_status",
            "description": "<p>支付状态</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "pay_time",
            "description": "<p>支付时间</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "order_status",
            "description": "<p>订单状态</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          }
        ],
        "字段说明|课程": [
          {
            "group": "字段说明|课程",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>课程代码</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程图片</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>课程内容</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>课程价格</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "point_total",
            "description": "<p>课程集数</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "watch_total",
            "description": "<p>观看总数</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "is_shelf",
            "description": "<p>是否上架</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "is_trial",
            "description": "<p>是否试看</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>是否推荐</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/OrderController.php",
    "groupTitle": "35._会员订单模块",
    "name": "GetApiMemberOrderViewId"
  },
  {
    "type": "post",
    "url": "/api/member/order/buy",
    "title": "06. 购物车购买",
    "description": "<p>当前会员直接购买</p>",
    "group": "35._会员订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课程编号数组</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pay_money",
            "description": "<p>支付金额</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pay_type",
            "description": "<p>支付类型 1 支付宝 2 微信 3 充值 4 苹果</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/buy"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/OrderController.php",
    "groupTitle": "35._会员订单模块",
    "name": "PostApiMemberOrderBuy"
  },
  {
    "type": "post",
    "url": "/api/member/order/cancel",
    "title": "08. 订单取消",
    "description": "<p>当前会员取消订单</p>",
    "group": "35._会员订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/cancel"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/OrderController.php",
    "groupTitle": "35._会员订单模块",
    "name": "PostApiMemberOrderCancel"
  },
  {
    "type": "post",
    "url": "/api/member/order/change",
    "title": "04. 修改订单",
    "description": "<p>当前会员修改订单</p>",
    "group": "35._会员订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pay_type",
            "description": "<p>支付类型 1 支付宝 2 微信 4 苹果</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/change"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/OrderController.php",
    "groupTitle": "35._会员订单模块",
    "name": "PostApiMemberOrderChange"
  },
  {
    "type": "post",
    "url": "/api/member/order/finish",
    "title": "07. 订单完成",
    "description": "<p>当前会员标记订单完成</p>",
    "group": "35._会员订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/finish"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/OrderController.php",
    "groupTitle": "35._会员订单模块",
    "name": "PostApiMemberOrderFinish"
  },
  {
    "type": "post",
    "url": "/api/member/order/handle",
    "title": "03. 创建订单",
    "description": "<p>当前会员创建课程订单</p>",
    "group": "35._会员订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课程编号数组</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pay_money",
            "description": "<p>支付金额</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pay_type",
            "description": "<p>支付类型 1 支付宝 2 微信 3 充值 4 苹果</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/OrderController.php",
    "groupTitle": "35._会员订单模块",
    "name": "PostApiMemberOrderHandle"
  },
  {
    "type": "post",
    "url": "/api/member/order/pay",
    "title": "05. 订单支付",
    "description": "<p>当前会员订单支付</p>",
    "group": "35._会员订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/pay"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/OrderController.php",
    "groupTitle": "35._会员订单模块",
    "name": "PostApiMemberOrderPay"
  },
  {
    "type": "get",
    "url": "/api/member/courseware/list?page={page}",
    "title": "01. 我的课程列表",
    "description": "<p>获取当前会员的课程分页列表</p>",
    "group": "36._会员课程模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|会员课程": [
          {
            "group": "字段说明|会员课程",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>会员课程编号</p>"
          },
          {
            "group": "字段说明|会员课程",
            "type": "String",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "字段说明|会员课程",
            "type": "String",
            "optional": false,
            "field": "is_finish",
            "description": "<p>是否完成学习</p>"
          },
          {
            "group": "字段说明|会员课程",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "字段说明|课程": [
          {
            "group": "字段说明|课程",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>课程代码</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程图片</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>课程内容</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>课程价格</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "point_total",
            "description": "<p>课程集数</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "watch_total",
            "description": "<p>观看总数</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "is_shelf",
            "description": "<p>是否上架</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "is_trial",
            "description": "<p>是否试看</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>是否推荐</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/courseware/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CoursewareController.php",
    "groupTitle": "36._会员课程模块",
    "name": "GetApiMemberCoursewareListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/courseware/status/{id}",
    "title": "02. 当前课程是否被购买",
    "description": "<p>获取当前课程是否被当前会员购买</p>",
    "group": "36._会员课程模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Boolean",
            "optional": false,
            "field": "true",
            "description": "<p>|false 是否订阅</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/courseware/status/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CoursewareController.php",
    "groupTitle": "36._会员课程模块",
    "name": "GetApiMemberCoursewareStatusId"
  },
  {
    "type": "get",
    "url": "/api/member/courseware/view/{id}",
    "title": "03. 我的课程详情",
    "description": "<p>获取当前会员课程详情</p>",
    "group": "36._会员课程模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|会员课程": [
          {
            "group": "字段说明|会员课程",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>会员课程编号</p>"
          },
          {
            "group": "字段说明|会员课程",
            "type": "String",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "字段说明|会员课程",
            "type": "String",
            "optional": false,
            "field": "is_finish",
            "description": "<p>是否完成学习</p>"
          },
          {
            "group": "字段说明|会员课程",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "字段说明|课程": [
          {
            "group": "字段说明|课程",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>课程代码</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程图片</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>课程内容</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>课程价格</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "point_total",
            "description": "<p>课程集数</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "watch_total",
            "description": "<p>观看总数</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "is_shelf",
            "description": "<p>是否上架</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "is_trial",
            "description": "<p>是否试看</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>是否推荐</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/courseware/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CoursewareController.php",
    "groupTitle": "36._会员课程模块",
    "name": "GetApiMemberCoursewareViewId"
  },
  {
    "type": "post",
    "url": "/api/member/courseware/expense",
    "title": "05. 课程学习",
    "description": "<p>当前贵宾会员学习课程</p>",
    "group": "36._会员课程模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/courseware/expense"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CoursewareController.php",
    "groupTitle": "36._会员课程模块",
    "name": "PostApiMemberCoursewareExpense"
  },
  {
    "type": "post",
    "url": "/api/member/courseware/finish",
    "title": "04. 完成课程",
    "description": "<p>当前会员学习完成了课程</p>",
    "group": "36._会员课程模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/courseware/finish"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/CoursewareController.php",
    "groupTitle": "36._会员课程模块",
    "name": "PostApiMemberCoursewareFinish"
  },
  {
    "type": "get",
    "url": "/api/member/fans/list?page={page}",
    "title": "01. 会员粉丝列表",
    "description": "<p>获取当前会员粉丝分页列表</p>",
    "group": "37._会员粉丝模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|基础": [
          {
            "group": "字段说明|基础",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员粉丝编号</p>"
          },
          {
            "group": "字段说明|基础",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>粉丝会员编号</p>"
          },
          {
            "group": "字段说明|基础",
            "type": "Number",
            "optional": false,
            "field": "attention_member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "字段说明|基础",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>粉丝时间</p>"
          }
        ],
        "字段说明|粉丝人": [
          {
            "group": "字段说明|粉丝人",
            "type": "Number",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "字段说明|粉丝人",
            "type": "Number",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称</p>"
          }
        ],
        "字段说明|被粉丝人": [
          {
            "group": "字段说明|被粉丝人",
            "type": "Number",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "字段说明|被粉丝人",
            "type": "Number",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/fans/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/FansController.php",
    "groupTitle": "37._会员粉丝模块",
    "name": "GetApiMemberFansListPagePage"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/category/select",
    "title": "01. 课程分类数据",
    "description": "<p>获取课程分类不分页列表</p>",
    "group": "40._课程分类模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程分类编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程分类名称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/courseware/category/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/CategoryController.php",
    "groupTitle": "40._课程分类模块",
    "name": "GetApiEducationCoursewareCategorySelect"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/list?page={page}",
    "title": "01. 课程列表",
    "description": "<p>获取课程分页列表</p>",
    "group": "41._课程模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程标题</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>课程代码</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程图片</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>课程内容</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>课程价格</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "point_total",
            "description": "<p>课程集数</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "watch_total",
            "description": "<p>观看总数</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_shelf",
            "description": "<p>是否上架</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_trial",
            "description": "<p>是否试看</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>是否推荐</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/courseware/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/CoursewareController.php",
    "groupTitle": "41._课程模块",
    "name": "GetApiEducationCoursewareListPagePage"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/recommend",
    "title": "02. 推荐课程",
    "description": "<p>获取推荐课程数据</p>",
    "group": "41._课程模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "category_id",
            "description": "<p>课程分类编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "total",
            "description": "<p>显示数量，默认显示4个</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>课程代码</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程图片</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>课程内容</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>课程价格</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "point_total",
            "description": "<p>课程集数</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "watch_total",
            "description": "<p>观看总数</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_shelf",
            "description": "<p>是否上架</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_trial",
            "description": "<p>是否试看</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>是否推荐</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/courseware/recommend"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/CoursewareController.php",
    "groupTitle": "41._课程模块",
    "name": "GetApiEducationCoursewareRecommend"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/view/{id}",
    "title": "03. 课程详情",
    "description": "<p>获取课程详情</p>",
    "group": "41._课程模块",
    "success": {
      "fields": {
        "字段说明|课程": [
          {
            "group": "字段说明|课程",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>课程代码</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程图片</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>课程内容</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>课程价格</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "point_total",
            "description": "<p>课程集数</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "watch_total",
            "description": "<p>观看总数</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "is_shelf",
            "description": "<p>是否上架</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "is_trial",
            "description": "<p>是否试看</p>"
          },
          {
            "group": "字段说明|课程",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>是否推荐</p>"
          }
        ],
        "字段说明|课程分类": [
          {
            "group": "字段说明|课程分类",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>课程分类编号</p>"
          },
          {
            "group": "字段说明|课程分类",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程分类名称</p>"
          }
        ],
        "字段说明|课程老师": [
          {
            "group": "字段说明|课程老师",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>课程老师编号</p>"
          },
          {
            "group": "字段说明|课程老师",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程老师姓名</p>"
          },
          {
            "group": "字段说明|课程老师",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>课程老师电话</p>"
          },
          {
            "group": "字段说明|课程老师",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程老师头像</p>"
          },
          {
            "group": "字段说明|课程老师",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>课程老师头衔</p>"
          },
          {
            "group": "字段说明|课程老师",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>课程老师介绍</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/courseware/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/CoursewareController.php",
    "groupTitle": "41._课程模块",
    "name": "GetApiEducationCoursewareViewId"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/teacher/select",
    "title": "01. 课程老师数据",
    "description": "<p>获取课程老师不分页列表</p>",
    "group": "42._课程老师模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程老师编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程老师姓名</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>课程老师电话</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程老师头像</p>"
          },
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "position",
            "description": "<p>课程老师头衔</p>"
          },
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "content",
            "description": "<p>课程老师介绍</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/courseware/teacher/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/TeacherController.php",
    "groupTitle": "42._课程老师模块",
    "name": "GetApiEducationCoursewareTeacherSelect"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/teacher/view/{id}",
    "title": "02. 课程老师详情",
    "description": "<p>获取课程老师详情</p>",
    "group": "42._课程老师模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程老师编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程老师姓名</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>课程老师电话</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程老师头像</p>"
          },
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "position",
            "description": "<p>课程老师头衔</p>"
          },
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "content",
            "description": "<p>课程老师介绍</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/courseware/teacher/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/TeacherController.php",
    "groupTitle": "42._课程老师模块",
    "name": "GetApiEducationCoursewareTeacherViewId"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/point/list?page={page}",
    "title": "01. 课程知识点列表",
    "description": "<p>获取课程知识点分页列表</p>",
    "group": "43._课程知识点模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课程编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程知识点编号</p>"
          },
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程知识点名称</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程知识点封面</p>"
          },
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "url",
            "description": "<p>课程知识点视频</p>"
          },
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "approval_total",
            "description": "<p>点赞总数</p>"
          },
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/courseware/point/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/PointController.php",
    "groupTitle": "43._课程知识点模块",
    "name": "GetApiEducationCoursewarePointListPagePage"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/point/select",
    "title": "02. 课程知识点数据",
    "description": "<p>获取课程知识点不分页列表</p>",
    "group": "43._课程知识点模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课程编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程知识点编号</p>"
          },
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程知识点名称</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程知识点封面</p>"
          },
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "url",
            "description": "<p>课程知识点视频</p>"
          },
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "approval_total",
            "description": "<p>点赞总数</p>"
          },
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/courseware/point/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/PointController.php",
    "groupTitle": "43._课程知识点模块",
    "name": "GetApiEducationCoursewarePointSelect"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/point/view/{id}",
    "title": "03. 课程知识点详情",
    "description": "<p>获取课程知识点详情</p>",
    "group": "43._课程知识点模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程知识点编号</p>"
          },
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程知识点名称</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程知识点封面</p>"
          },
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "url",
            "description": "<p>课程知识点视频</p>"
          },
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "approval_total",
            "description": "<p>点赞总数</p>"
          },
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/courseware/point/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/PointController.php",
    "groupTitle": "43._课程知识点模块",
    "name": "GetApiEducationCoursewarePointViewId"
  },
  {
    "type": "get",
    "url": "/api/member/courseware/point/approval/list?page={page}",
    "title": "01. 会员知识点点赞列表",
    "description": "<p>获取当前会员知识点点赞分页列表</p>",
    "group": "44._课程知识点点赞模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|课程知识点": [
          {
            "group": "字段说明|课程知识点",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程知识点编号</p>"
          },
          {
            "group": "字段说明|课程知识点",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "字段说明|课程知识点",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程知识点名称</p>"
          },
          {
            "group": "字段说明|课程知识点",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程知识点封面</p>"
          },
          {
            "group": "字段说明|课程知识点",
            "type": "Number",
            "optional": false,
            "field": "url",
            "description": "<p>课程知识点视频</p>"
          },
          {
            "group": "字段说明|课程知识点",
            "type": "Number",
            "optional": false,
            "field": "approval_total",
            "description": "<p>点赞总数</p>"
          },
          {
            "group": "字段说明|课程知识点",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ],
        "字段说明|会员": [
          {
            "group": "字段说明|会员",
            "type": "Number",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "字段说明|会员",
            "type": "Number",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/courseware/point/approval/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Courseware/Point/ApprovalController.php",
    "groupTitle": "44._课程知识点点赞模块",
    "name": "GetApiMemberCoursewarePointApprovalListPagePage"
  },
  {
    "type": "post",
    "url": "/api/member/courseware/point/approval/handle",
    "title": "03. 点赞操作",
    "description": "<p>当前会员知识点执行社区点赞操作, 已经点赞过，再次点击取消点赞</p>",
    "group": "44._课程知识点点赞模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "point_id",
            "description": "<p>知识点编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/courseware/point/approval/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Courseware/Point/ApprovalController.php",
    "groupTitle": "44._课程知识点点赞模块",
    "name": "PostApiMemberCoursewarePointApprovalHandle"
  },
  {
    "type": "post",
    "url": "/api/member/courseware/point/approval/status",
    "title": "02. 知识点是否点赞",
    "description": "<p>获取当前会员知识点是否点赞</p>",
    "group": "44._课程知识点点赞模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "point_id",
            "description": "<p>知识点编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/courseware/point/approval/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Courseware/Point/ApprovalController.php",
    "groupTitle": "44._课程知识点点赞模块",
    "name": "PostApiMemberCoursewarePointApprovalStatus"
  },
  {
    "type": "get",
    "url": "/api/flash/category/select",
    "title": "01. 快讯分类数据",
    "description": "<p>获取快讯分类不分页列表数据</p>",
    "group": "50._快讯分类模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>快讯分类编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>快讯分类标题</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/flash/category/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Flash/CategoryController.php",
    "groupTitle": "50._快讯分类模块",
    "name": "GetApiFlashCategorySelect"
  },
  {
    "type": "get",
    "url": "/api/flash/list?page={page}",
    "title": "01. 快讯列表",
    "description": "<p>获取快讯分页列表</p>",
    "group": "51._快讯模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "category_id",
            "description": "<p>分类编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>快讯编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>快讯标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>快讯内容</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "bullish_total",
            "description": "<p>利多总数</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "bearish_total",
            "description": "<p>利空总数</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_benefit",
            "description": "<p>利空利多 0 未知 1 利多 2 利空</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>首页推荐</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/flash/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/FlashController.php",
    "groupTitle": "51._快讯模块",
    "name": "GetApiFlashListPagePage"
  },
  {
    "type": "get",
    "url": "/api/flash/recommend",
    "title": "02. 推荐快讯",
    "description": "<p>获取推荐快讯数据</p>",
    "group": "51._快讯模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "category_id",
            "description": "<p>分类编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "total",
            "description": "<p>显示数量，默认显示4个</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>快讯编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>快讯标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>快讯内容</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "bullish_total",
            "description": "<p>利多总数</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "bearish_total",
            "description": "<p>利空总数</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_benefit",
            "description": "<p>利空利多 0 未知 1 利多 2 利空</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>首页推荐</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/flash/recommend"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/FlashController.php",
    "groupTitle": "51._快讯模块",
    "name": "GetApiFlashRecommend"
  },
  {
    "type": "get",
    "url": "/api/flash/view/{id}",
    "title": "03. 快讯详情",
    "description": "<p>获取快讯详情</p>",
    "group": "51._快讯模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>快讯编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>快讯标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>快讯内容</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "bullish_total",
            "description": "<p>利多总数</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "bearish_total",
            "description": "<p>利空总数</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_benefit",
            "description": "<p>利空利多 0 未知 1 利多 2 利空</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>首页推荐</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/flash/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/FlashController.php",
    "groupTitle": "51._快讯模块",
    "name": "GetApiFlashViewId"
  },
  {
    "type": "get",
    "url": "/api/flash/comment/list?page={page}",
    "title": "01. 快讯评论列表",
    "description": "<p>获取快讯评论分页列表</p>",
    "group": "52._快讯评论模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "flash_id",
            "description": "<p>快讯编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|评论": [
          {
            "group": "字段说明|评论",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "字段说明|评论",
            "type": "String",
            "optional": false,
            "field": "approval_total",
            "description": "<p>点赞数量</p>"
          },
          {
            "group": "字段说明|评论",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>评论时间</p>"
          }
        ],
        "字段说明|评论人": [
          {
            "group": "字段说明|评论人",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>评论人头像</p>"
          },
          {
            "group": "字段说明|评论人",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>评论人昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/flash/comment/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Flash/CommentController.php",
    "groupTitle": "52._快讯评论模块",
    "name": "GetApiFlashCommentListPagePage"
  },
  {
    "type": "get",
    "url": "/api/flash/comment/other",
    "title": "02. 快讯其他评论数据",
    "description": "<p>获取快讯其他评论数据</p>",
    "group": "52._快讯评论模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "flash_id",
            "description": "<p>快讯编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment_id",
            "description": "<p>基础评论编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|评论": [
          {
            "group": "字段说明|评论",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "字段说明|评论",
            "type": "String",
            "optional": false,
            "field": "approval_total",
            "description": "<p>点赞数量</p>"
          },
          {
            "group": "字段说明|评论",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>评论时间</p>"
          }
        ],
        "字段说明|评论人": [
          {
            "group": "字段说明|评论人",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>评论人头像</p>"
          },
          {
            "group": "字段说明|评论人",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>评论人昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/flash/comment/other"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Flash/CommentController.php",
    "groupTitle": "52._快讯评论模块",
    "name": "GetApiFlashCommentOther"
  },
  {
    "type": "post",
    "url": "/api/member/flash/comment/handle",
    "title": "02. 快讯评论操作",
    "description": "<p>当前会员执行快讯评论操作</p>",
    "group": "52._快讯评论模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "flash_id",
            "description": "<p>快讯编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "parent_id",
            "description": "<p>上级评论编号, 0为初始评论</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "comment_id",
            "description": "<p>基础评论编号, 0为初始评论</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "be_member_id",
            "description": "<p>被评论人编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/flash/comment/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Flash/CommentController.php",
    "groupTitle": "52._快讯评论模块",
    "name": "PostApiMemberFlashCommentHandle"
  },
  {
    "type": "post",
    "url": "/api/member/flash/comment/approval/handle",
    "title": "02. 点赞操作",
    "description": "<p>当前会员执行快讯评论点赞操作, 已经点赞过，再次点击取消点赞</p>",
    "group": "53._快讯评论点赞模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment_id",
            "description": "<p>评论编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/flash/comment/approval/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Flash/Comment/ApprovalController.php",
    "groupTitle": "53._快讯评论点赞模块",
    "name": "PostApiMemberFlashCommentApprovalHandle"
  },
  {
    "type": "post",
    "url": "/api/member/flash/comment/approval/status",
    "title": "01. 评论是否点赞",
    "description": "<p>获取当前会员点赞的详情</p>",
    "group": "53._快讯评论点赞模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "comment_id",
            "description": "<p>评论编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/flash/comment/approval/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Flash/Comment/ApprovalController.php",
    "groupTitle": "53._快讯评论点赞模块",
    "name": "PostApiMemberFlashCommentApprovalStatus"
  },
  {
    "type": "get",
    "url": "/api/member/flash/benefit/bearish",
    "title": "03. 会员利空操作",
    "description": "<p>当前会员会员快讯利空操作</p>",
    "group": "54._会员快讯利益模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "flash_id",
            "description": "<p>快讯编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/flash/benefit/bearish"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Flash/BenefitController.php",
    "groupTitle": "54._会员快讯利益模块",
    "name": "GetApiMemberFlashBenefitBearish"
  },
  {
    "type": "get",
    "url": "/api/member/flash/benefit/bullish",
    "title": "02. 会员利多操作",
    "description": "<p>当前会员会员快讯利多操作</p>",
    "group": "54._会员快讯利益模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "flash_id",
            "description": "<p>快讯编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/flash/benefit/bullish"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Flash/BenefitController.php",
    "groupTitle": "54._会员快讯利益模块",
    "name": "GetApiMemberFlashBenefitBullish"
  },
  {
    "type": "post",
    "url": "/api/member/flash/benefit/status",
    "title": "01. 快讯利益态度",
    "description": "<p>当前会员是否发表快讯利益态度</p>",
    "group": "54._会员快讯利益模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "flash_id",
            "description": "<p>快讯编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/flash/benefit/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Flash/BenefitController.php",
    "groupTitle": "54._会员快讯利益模块",
    "name": "PostApiMemberFlashBenefitStatus"
  },
  {
    "type": "get",
    "url": "/api/information/category/select",
    "title": "01. 资讯分类数据",
    "description": "<p>获取资讯分类不分页列表数据</p>",
    "group": "60._资讯分类模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>资讯分类编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>资讯分类标题</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/information/category/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Information/CategoryController.php",
    "groupTitle": "60._资讯分类模块",
    "name": "GetApiInformationCategorySelect"
  },
  {
    "type": "get",
    "url": "/api/information/list?page={page}",
    "title": "01. 资讯列表",
    "description": "<p>获取资讯分页列表</p>",
    "group": "61._资讯模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "category_id",
            "description": "<p>分类编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "title",
            "description": "<p>标题信息</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "subject_id",
            "description": "<p>专题编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "is_subject",
            "description": "<p>是否专题(普通资讯、专题资讯)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>资讯编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>资讯标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>资讯封面</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>资讯内容</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>资讯来源</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>资讯作者</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "read_total",
            "description": "<p>阅读总数</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_top",
            "description": "<p>是否置顶</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>是否推荐</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_comment",
            "description": "<p>是否可以评论</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/information/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/InformationController.php",
    "groupTitle": "61._资讯模块",
    "name": "GetApiInformationListPagePage"
  },
  {
    "type": "get",
    "url": "/api/information/recommend?page={page}",
    "title": "02. 推荐资讯列表",
    "description": "<p>获取推荐资讯分页列表</p>",
    "group": "61._资讯模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>资讯编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>资讯标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>资讯封面</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>资讯内容</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>资讯来源</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>资讯作者</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "read_total",
            "description": "<p>阅读总数</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_top",
            "description": "<p>是否置顶</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>是否推荐</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_comment",
            "description": "<p>是否可以评论</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/information/recommend"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/InformationController.php",
    "groupTitle": "61._资讯模块",
    "name": "GetApiInformationRecommendPagePage"
  },
  {
    "type": "get",
    "url": "/api/information/similar",
    "title": "04. 相关资讯数据",
    "description": "<p>获取相关资讯不分页数据列表</p>",
    "group": "61._资讯模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>资讯编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "total",
            "description": "<p>显示数量(默认4个)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>资讯编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>资讯标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>资讯内容</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>资讯来源</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>资讯作者</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "read_total",
            "description": "<p>阅读总数</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_top",
            "description": "<p>是否置顶</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>是否推荐</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_comment",
            "description": "<p>是否可以评论</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/information/similar"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/InformationController.php",
    "groupTitle": "61._资讯模块",
    "name": "GetApiInformationSimilar"
  },
  {
    "type": "get",
    "url": "/api/information/subject",
    "title": "03. 专题资讯数据",
    "description": "<p>获取专题资讯不分页数据列表</p>",
    "group": "61._资讯模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "total",
            "description": "<p>显示数量(默认4个)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>资讯编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>资讯标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>资讯内容</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>资讯来源</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>资讯作者</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "read_total",
            "description": "<p>阅读总数</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_top",
            "description": "<p>是否置顶</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>是否推荐</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_comment",
            "description": "<p>是否可以评论</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/information/subject"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/InformationController.php",
    "groupTitle": "61._资讯模块",
    "name": "GetApiInformationSubject"
  },
  {
    "type": "get",
    "url": "/api/information/view/{id}",
    "title": "05. 资讯详情",
    "description": "<p>获取资讯详情</p>",
    "group": "61._资讯模块",
    "success": {
      "fields": {
        "字段说明|资讯": [
          {
            "group": "字段说明|资讯",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>资讯编号</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>资讯标题</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>资讯封面</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>资讯内容</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>资讯来源</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>资讯作者</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "read_total",
            "description": "<p>阅读总数</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "is_top",
            "description": "<p>是否置顶</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>是否推荐</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "is_comment",
            "description": "<p>是否可以评论</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ],
        "字段说明|标签": [
          {
            "group": "字段说明|标签",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标签名字</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/information/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/InformationController.php",
    "groupTitle": "61._资讯模块",
    "name": "GetApiInformationViewId"
  },
  {
    "type": "get",
    "url": "/api/information/comment/list?page={page}",
    "title": "01. 资讯评论列表",
    "description": "<p>获取资讯评论分页列表</p>",
    "group": "62._资讯评论模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "information_id",
            "description": "<p>资讯编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|评论": [
          {
            "group": "字段说明|评论",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "字段说明|评论",
            "type": "String",
            "optional": false,
            "field": "approval_total",
            "description": "<p>点赞数量</p>"
          },
          {
            "group": "字段说明|评论",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>评论时间</p>"
          }
        ],
        "字段说明|评论人": [
          {
            "group": "字段说明|评论人",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>评论人头像</p>"
          },
          {
            "group": "字段说明|评论人",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>评论人昵称</p>"
          }
        ],
        "字段说明|被评论人": [
          {
            "group": "字段说明|被评论人",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>被评论人头像</p>"
          },
          {
            "group": "字段说明|被评论人",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>被评论人昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/information/comment/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Information/CommentController.php",
    "groupTitle": "62._资讯评论模块",
    "name": "GetApiInformationCommentListPagePage"
  },
  {
    "type": "get",
    "url": "/api/information/comment/other",
    "title": "02. 资讯其他评论数据",
    "description": "<p>获取资讯其他评论数据</p>",
    "group": "62._资讯评论模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "information_id",
            "description": "<p>资讯编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment_id",
            "description": "<p>基础评论编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|评论": [
          {
            "group": "字段说明|评论",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "字段说明|评论",
            "type": "String",
            "optional": false,
            "field": "approval_total",
            "description": "<p>点赞数量</p>"
          },
          {
            "group": "字段说明|评论",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>评论时间</p>"
          }
        ],
        "字段说明|评论人": [
          {
            "group": "字段说明|评论人",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>评论人头像</p>"
          },
          {
            "group": "字段说明|评论人",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>评论人昵称</p>"
          }
        ],
        "字段说明|被评论人": [
          {
            "group": "字段说明|被评论人",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>被评论人头像</p>"
          },
          {
            "group": "字段说明|被评论人",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>被评论人昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/information/comment/other"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Information/CommentController.php",
    "groupTitle": "62._资讯评论模块",
    "name": "GetApiInformationCommentOther"
  },
  {
    "type": "post",
    "url": "/api/member/information/comment/handle",
    "title": "02. 资讯评论操作",
    "description": "<p>当前会员执行评论操作</p>",
    "group": "62._资讯评论模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "information_id",
            "description": "<p>资讯编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "parent_id",
            "description": "<p>上级评论编号, 0为初始评论</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "comment_id",
            "description": "<p>基础评论编号, 0为初始评论</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "be_member_id",
            "description": "<p>被评论人编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/information/comment/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Information/CommentController.php",
    "groupTitle": "62._资讯评论模块",
    "name": "PostApiMemberInformationCommentHandle"
  },
  {
    "type": "get",
    "url": "/api/member/information/approval/data",
    "title": "05. 点赞统计",
    "description": "<p>当前会员执行资讯点赞统计</p>",
    "group": "63._资讯点赞模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/information/approval/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Information/ApprovalController.php",
    "groupTitle": "63._资讯点赞模块",
    "name": "GetApiMemberInformationApprovalData"
  },
  {
    "type": "get",
    "url": "/api/member/information/approval/list?page={page}",
    "title": "01. 会员点赞列表",
    "description": "<p>获取当前会员点赞分页列表</p>",
    "group": "63._资讯点赞模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|资讯": [
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资讯编号</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>资讯标题</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>资讯封面</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>资讯内容</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>资讯来源</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>资讯作者</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "read_total",
            "description": "<p>阅读总数</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>是否推荐</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ],
        "字段说明|会员": [
          {
            "group": "字段说明|会员",
            "type": "Number",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "字段说明|会员",
            "type": "Number",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/information/approval/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Information/ApprovalController.php",
    "groupTitle": "63._资讯点赞模块",
    "name": "GetApiMemberInformationApprovalListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/information/approval/passive?page={page}",
    "title": "02. 点赞过我的列表",
    "description": "<p>获取会员过我的分页列表</p>",
    "group": "63._资讯点赞模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|我的资讯": [
          {
            "group": "字段说明|我的资讯",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资讯编号</p>"
          },
          {
            "group": "字段说明|我的资讯",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>资讯标题</p>"
          },
          {
            "group": "字段说明|我的资讯",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>资讯封面</p>"
          },
          {
            "group": "字段说明|我的资讯",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>资讯内容</p>"
          },
          {
            "group": "字段说明|我的资讯",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>资讯来源</p>"
          },
          {
            "group": "字段说明|我的资讯",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>资讯作者</p>"
          },
          {
            "group": "字段说明|我的资讯",
            "type": "String",
            "optional": false,
            "field": "read_total",
            "description": "<p>阅读总数</p>"
          },
          {
            "group": "字段说明|我的资讯",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>是否推荐</p>"
          },
          {
            "group": "字段说明|我的资讯",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ],
        "字段说明|点赞会员": [
          {
            "group": "字段说明|点赞会员",
            "type": "Number",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "字段说明|点赞会员",
            "type": "Number",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/information/approval/passive"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Information/ApprovalController.php",
    "groupTitle": "63._资讯点赞模块",
    "name": "GetApiMemberInformationApprovalPassivePagePage"
  },
  {
    "type": "post",
    "url": "/api/member/information/approval/handle",
    "title": "04. 点赞操作",
    "description": "<p>当前会员执行资讯点赞操作, 已经点赞过，再次点击取消点赞</p>",
    "group": "63._资讯点赞模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "information_id",
            "description": "<p>资讯编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/information/approval/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Information/ApprovalController.php",
    "groupTitle": "63._资讯点赞模块",
    "name": "PostApiMemberInformationApprovalHandle"
  },
  {
    "type": "post",
    "url": "/api/member/information/approval/status",
    "title": "03. 资讯是否点赞",
    "description": "<p>获取当前会员点赞的详情</p>",
    "group": "63._资讯点赞模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "information_id",
            "description": "<p>资讯编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/information/approval/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Information/ApprovalController.php",
    "groupTitle": "63._资讯点赞模块",
    "name": "PostApiMemberInformationApprovalStatus"
  },
  {
    "type": "get",
    "url": "/api/member/information/collection/list?page={page}",
    "title": "01. 我的收藏列表",
    "description": "<p>获取当前会员收藏分页列表</p>",
    "group": "64._资讯收藏模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|资讯": [
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资讯编号</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>资讯标题</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>资讯封面</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>资讯内容</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>资讯来源</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>资讯作者</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "read_total",
            "description": "<p>阅读总数</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>是否推荐</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ],
        "字段说明|会员": [
          {
            "group": "字段说明|会员",
            "type": "Number",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "字段说明|会员",
            "type": "Number",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/information/collection/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Information/CollectionController.php",
    "groupTitle": "64._资讯收藏模块",
    "name": "GetApiMemberInformationCollectionListPagePage"
  },
  {
    "type": "post",
    "url": "/api/member/information/collection/handle",
    "title": "03. 收藏操作",
    "description": "<p>当前会员执行资讯收藏操作, 已经收藏过，再次点击取消收藏</p>",
    "group": "64._资讯收藏模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "information_id",
            "description": "<p>资讯编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/information/collection/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Information/CollectionController.php",
    "groupTitle": "64._资讯收藏模块",
    "name": "PostApiMemberInformationCollectionHandle"
  },
  {
    "type": "post",
    "url": "/api/member/information/collection/status",
    "title": "02. 资讯是否收藏",
    "description": "<p>获取当前会员资讯收藏的详情</p>",
    "group": "64._资讯收藏模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "information_id",
            "description": "<p>资讯编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/information/collection/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Information/CollectionController.php",
    "groupTitle": "64._资讯收藏模块",
    "name": "PostApiMemberInformationCollectionStatus"
  },
  {
    "type": "get",
    "url": "/api/information/subject/select",
    "title": "01. 资讯专题数据",
    "description": "<p>获取资讯专题不分页列表数据</p>",
    "group": "65._资讯专题模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>资讯专题编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>资讯专题标题</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/information/subject/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Information/SubjectController.php",
    "groupTitle": "65._资讯专题模块",
    "name": "GetApiInformationSubjectSelect"
  },
  {
    "type": "get",
    "url": "/api/member/information/browse/list?page={page}",
    "title": "01. 我的浏览历史列表",
    "description": "<p>获取我的浏览历史分页列表</p>",
    "group": "66._资讯浏览历史模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|资讯": [
          {
            "group": "字段说明|资讯",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>资讯编号</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>资讯标题</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>资讯封面</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>资讯内容</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>资讯来源</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>资讯作者</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "read_total",
            "description": "<p>阅读总数</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>是否推荐</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/information/browse/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Information/BrowseController.php",
    "groupTitle": "66._资讯浏览历史模块",
    "name": "GetApiMemberInformationBrowseListPagePage"
  },
  {
    "type": "post",
    "url": "/api/member/information/browse/clear",
    "title": "02. 清除浏览历史",
    "description": "<p>当前会员清除浏览历史</p>",
    "group": "66._资讯浏览历史模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/member/information/browse/clear"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Information/BrowseController.php",
    "groupTitle": "66._资讯浏览历史模块",
    "name": "PostApiMemberInformationBrowseClear"
  },
  {
    "type": "post",
    "url": "/api/member/information/comment/approval/handle",
    "title": "02. 点赞操作",
    "description": "<p>当前会员执行资讯评论点赞操作, 已经点赞过，再次点击取消点赞</p>",
    "group": "67._资讯评论点赞模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment_id",
            "description": "<p>评论编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/information/comment/approval/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Information/Comment/ApprovalController.php",
    "groupTitle": "67._资讯评论点赞模块",
    "name": "PostApiMemberInformationCommentApprovalHandle"
  },
  {
    "type": "post",
    "url": "/api/member/information/comment/approval/status",
    "title": "01. 评论是否点赞",
    "description": "<p>获取当前会员点赞的详情</p>",
    "group": "67._资讯评论点赞模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "comment_id",
            "description": "<p>评论编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/information/comment/approval/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Information/Comment/ApprovalController.php",
    "groupTitle": "67._资讯评论点赞模块",
    "name": "PostApiMemberInformationCommentApprovalStatus"
  },
  {
    "type": "get",
    "url": "/api/community/category/select",
    "title": "01. 社区分类数据",
    "description": "<p>获取社区分类不分页列表数据</p>",
    "group": "70._社区分类模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>社区分类编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>社区分类标题</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/community/category/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Community/CategoryController.php",
    "groupTitle": "70._社区分类模块",
    "name": "GetApiCommunityCategorySelect"
  },
  {
    "type": "get",
    "url": "/api/community/hot",
    "title": "04. 热门社区数据",
    "description": "<p>获取热门社区数据列表</p>",
    "group": "71._社区模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "total",
            "description": "<p>显示数量，默认显示6个</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>社区编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>社区标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>社区封面</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>社区内容</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>社区作者</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "read_total",
            "description": "<p>阅读数量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "approval_total",
            "description": "<p>点赞数量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "comment_total",
            "description": "<p>评论数量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "collection_total",
            "description": "<p>收藏数量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_approval",
            "description": "<p>是否点赞</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_hot",
            "description": "<p>是否热门</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>是否推荐</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/community/hot"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/CommunityController.php",
    "groupTitle": "71._社区模块",
    "name": "GetApiCommunityHot"
  },
  {
    "type": "get",
    "url": "/api/community/list?page={page}",
    "title": "01. 社区列表",
    "description": "<p>获取社区分页列表</p>",
    "group": "71._社区模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "category_id",
            "description": "<p>社区分类编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "category_title",
            "description": "<p>社区分类名称</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "title",
            "description": "<p>社区标题</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>社区编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>社区标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>社区封面</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>社区内容</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>社区作者</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_hot",
            "description": "<p>是否热门</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "read_total",
            "description": "<p>阅读数量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "approval_total",
            "description": "<p>点赞数量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "comment_total",
            "description": "<p>评论数量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "collection_total",
            "description": "<p>收藏数量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_approval",
            "description": "<p>是否点赞</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>是否推荐</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/community/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/CommunityController.php",
    "groupTitle": "71._社区模块",
    "name": "GetApiCommunityListPagePage"
  },
  {
    "type": "get",
    "url": "/api/community/recommend",
    "title": "03. 推荐社区数据",
    "description": "<p>获取推荐社区数据列表</p>",
    "group": "71._社区模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "total",
            "description": "<p>显示数量，默认显示6个</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>社区编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>社区标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>社区封面</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>社区内容</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>社区作者</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "read_total",
            "description": "<p>阅读数量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "approval_total",
            "description": "<p>点赞数量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "comment_total",
            "description": "<p>评论数量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "collection_total",
            "description": "<p>收藏数量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_approval",
            "description": "<p>是否点赞</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_hot",
            "description": "<p>是否热门</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>是否推荐</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/community/recommend"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/CommunityController.php",
    "groupTitle": "71._社区模块",
    "name": "GetApiCommunityRecommend"
  },
  {
    "type": "get",
    "url": "/api/community/symbol?page={page}",
    "title": "02. 交易对社区列表",
    "description": "<p>获取社区分页列表</p>",
    "group": "71._社区模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "symbol",
            "description": "<p>交易对</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>社区编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>社区标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>社区封面</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>社区内容</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>社区作者</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_hot",
            "description": "<p>是否热门</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "read_total",
            "description": "<p>阅读数量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "approval_total",
            "description": "<p>点赞数量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "comment_total",
            "description": "<p>评论数量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "collection_total",
            "description": "<p>收藏数量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_approval",
            "description": "<p>是否点赞</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>是否推荐</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/community/symbol"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/CommunityController.php",
    "groupTitle": "71._社区模块",
    "name": "GetApiCommunitySymbolPagePage"
  },
  {
    "type": "get",
    "url": "/api/community/view/{id}",
    "title": "05. 社区详情",
    "description": "<p>获取社区详情</p>",
    "group": "71._社区模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>社区编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>社区标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>社区封面</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>社区内容</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>社区作者</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "read_total",
            "description": "<p>阅读数量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "approval_total",
            "description": "<p>点赞数量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "comment_total",
            "description": "<p>评论数量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "collection_total",
            "description": "<p>收藏数量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_approval",
            "description": "<p>是否点赞</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_hot",
            "description": "<p>是否热门</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_recommend",
            "description": "<p>是否推荐</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/community/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/CommunityController.php",
    "groupTitle": "71._社区模块",
    "name": "GetApiCommunityViewId"
  },
  {
    "type": "get",
    "url": "/api/community/comment/list?page={page}",
    "title": "01. 社区评论列表",
    "description": "<p>获取社区评论分页列表</p>",
    "group": "72._社区评论模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "community_id",
            "description": "<p>社区编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|评论": [
          {
            "group": "字段说明|评论",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "字段说明|评论",
            "type": "String",
            "optional": false,
            "field": "approval_total",
            "description": "<p>点赞数量</p>"
          },
          {
            "group": "字段说明|评论",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>评论时间</p>"
          }
        ],
        "字段说明|评论人": [
          {
            "group": "字段说明|评论人",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>评论人头像</p>"
          },
          {
            "group": "字段说明|评论人",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>评论人昵称</p>"
          }
        ],
        "字段说明|被评论人": [
          {
            "group": "字段说明|被评论人",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>被评论人头像</p>"
          },
          {
            "group": "字段说明|被评论人",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>被评论人昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/community/comment/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Community/CommentController.php",
    "groupTitle": "72._社区评论模块",
    "name": "GetApiCommunityCommentListPagePage"
  },
  {
    "type": "get",
    "url": "/api/community/comment/other",
    "title": "02. 社区剩余评论数据",
    "description": "<p>获取社区剩余评论数据</p>",
    "group": "72._社区评论模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "community_id",
            "description": "<p>社区编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment_id",
            "description": "<p>基础评论编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|评论": [
          {
            "group": "字段说明|评论",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "字段说明|评论",
            "type": "String",
            "optional": false,
            "field": "approval_total",
            "description": "<p>点赞数量</p>"
          },
          {
            "group": "字段说明|评论",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>评论时间</p>"
          }
        ],
        "字段说明|评论人": [
          {
            "group": "字段说明|评论人",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>评论人头像</p>"
          },
          {
            "group": "字段说明|评论人",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>评论人昵称</p>"
          }
        ],
        "字段说明|被评论人": [
          {
            "group": "字段说明|被评论人",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>被评论人头像</p>"
          },
          {
            "group": "字段说明|被评论人",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>被评论人昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/community/comment/other"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Community/CommentController.php",
    "groupTitle": "72._社区评论模块",
    "name": "GetApiCommunityCommentOther"
  },
  {
    "type": "post",
    "url": "/api/member/community/comment/handle",
    "title": "02. 社区评论操作",
    "description": "<p>当前会员执行评论操作</p>",
    "group": "72._社区评论模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "community_id",
            "description": "<p>社区编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "parent_id",
            "description": "<p>上级评论编号, 0为初始评论</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "comment_id",
            "description": "<p>基础评论编号, 0为初始评论</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "be_member_id",
            "description": "<p>被评论人编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/community/comment/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Community/CommentController.php",
    "groupTitle": "72._社区评论模块",
    "name": "PostApiMemberCommunityCommentHandle"
  },
  {
    "type": "get",
    "url": "/api/member/community/approval/list?page={page}",
    "title": "01. 会员点赞列表",
    "description": "<p>获取当前会员点赞分页列表</p>",
    "group": "73._社区点赞模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|社区": [
          {
            "group": "字段说明|社区",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>社区编号</p>"
          },
          {
            "group": "字段说明|社区",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>社区标题</p>"
          },
          {
            "group": "字段说明|社区",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>社区封面</p>"
          },
          {
            "group": "字段说明|社区",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>社区内容</p>"
          },
          {
            "group": "字段说明|社区",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>社区作者</p>"
          },
          {
            "group": "字段说明|社区",
            "type": "String",
            "optional": false,
            "field": "is_hot",
            "description": "<p>是否热门</p>"
          },
          {
            "group": "字段说明|社区",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ],
        "字段说明|会员": [
          {
            "group": "字段说明|会员",
            "type": "Number",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "字段说明|会员",
            "type": "Number",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/community/approval/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Community/ApprovalController.php",
    "groupTitle": "73._社区点赞模块",
    "name": "GetApiMemberCommunityApprovalListPagePage"
  },
  {
    "type": "post",
    "url": "/api/member/community/approval/handle",
    "title": "03. 点赞操作",
    "description": "<p>当前会员执行社区点赞操作, 已经点赞过，再次点击取消点赞</p>",
    "group": "73._社区点赞模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "community_id",
            "description": "<p>社区编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/community/approval/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Community/ApprovalController.php",
    "groupTitle": "73._社区点赞模块",
    "name": "PostApiMemberCommunityApprovalHandle"
  },
  {
    "type": "post",
    "url": "/api/member/community/approval/status",
    "title": "02. 社区是否点赞",
    "description": "<p>获取当前会员点赞的详情</p>",
    "group": "73._社区点赞模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "community_id",
            "description": "<p>社区编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/community/approval/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Community/ApprovalController.php",
    "groupTitle": "73._社区点赞模块",
    "name": "PostApiMemberCommunityApprovalStatus"
  },
  {
    "type": "get",
    "url": "/api/member/community/collection/list?page={page}",
    "title": "01. 我的收藏列表",
    "description": "<p>获取当前会员收藏分页列表</p>",
    "group": "74._社区收藏模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|资讯": [
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>资讯编号</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>资讯标题</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>资讯封面</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>资讯内容</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>资讯作者</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "is_hot",
            "description": "<p>是否热门</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ],
        "字段说明|会员": [
          {
            "group": "字段说明|会员",
            "type": "Number",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "字段说明|会员",
            "type": "Number",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/community/collection/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Community/CollectionController.php",
    "groupTitle": "74._社区收藏模块",
    "name": "GetApiMemberCommunityCollectionListPagePage"
  },
  {
    "type": "post",
    "url": "/api/member/community/collection/handle",
    "title": "03. 收藏操作",
    "description": "<p>当前会员执行资讯收藏操作, 已经收藏过，再次点击取消收藏</p>",
    "group": "74._社区收藏模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "community_id",
            "description": "<p>资讯编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/community/collection/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Community/CollectionController.php",
    "groupTitle": "74._社区收藏模块",
    "name": "PostApiMemberCommunityCollectionHandle"
  },
  {
    "type": "post",
    "url": "/api/member/community/collection/status",
    "title": "02. 资讯是否收藏",
    "description": "<p>获取当前会员资讯收藏的详情</p>",
    "group": "74._社区收藏模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "community_id",
            "description": "<p>资讯编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/community/collection/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Community/CollectionController.php",
    "groupTitle": "74._社区收藏模块",
    "name": "PostApiMemberCommunityCollectionStatus"
  },
  {
    "type": "get",
    "url": "/api/member/community/attention/list?page={page}",
    "title": "01. 我的关注列表",
    "description": "<p>获取当前会员关注分页列表</p>",
    "group": "75._社区关注模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "category_title",
            "description": "<p>社区分类名称</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "category_id",
            "description": "<p>社区分类编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|资讯": [
          {
            "group": "字段说明|资讯",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>社区编号</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>社区标题</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>社区封面</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>社区内容</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>社区作者</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "is_hot",
            "description": "<p>是否热门</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "comment_total",
            "description": "<p>评论数量</p>"
          },
          {
            "group": "字段说明|资讯",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>发布时间</p>"
          }
        ],
        "字段说明|资讯分类": [
          {
            "group": "字段说明|资讯分类",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>资讯分类标题</p>"
          }
        ],
        "字段说明|发布人": [
          {
            "group": "字段说明|发布人",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>发布人头像</p>"
          },
          {
            "group": "字段说明|发布人",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>发布人昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/community/attention/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Community/AttentionController.php",
    "groupTitle": "75._社区关注模块",
    "name": "GetApiMemberCommunityAttentionListPagePage"
  },
  {
    "type": "post",
    "url": "/api/member/community/attention/handle",
    "title": "03. 关注操作",
    "description": "<p>当前会员执行关注操作, 已经关注过，再次点击取消关注</p>",
    "group": "75._社区关注模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category_id",
            "description": "<p>社区分类编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/community/attention/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Community/AttentionController.php",
    "groupTitle": "75._社区关注模块",
    "name": "PostApiMemberCommunityAttentionHandle"
  },
  {
    "type": "post",
    "url": "/api/member/community/attention/status",
    "title": "02. 是否关注社区",
    "description": "<p>获取当前会员是否关注指定社区</p>",
    "group": "75._社区关注模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "category_id",
            "description": "<p>社区分类编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>是否关注</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/community/attention/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Community/AttentionController.php",
    "groupTitle": "75._社区关注模块",
    "name": "PostApiMemberCommunityAttentionStatus"
  },
  {
    "type": "post",
    "url": "/api/member/community/comment/approval/handle",
    "title": "02. 点赞操作",
    "description": "<p>当前会员执行社区评论点赞操作, 已经点赞过，再次点击取消点赞</p>",
    "group": "76._社区评论点赞模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment_id",
            "description": "<p>评论编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/community/comment/approval/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Community/Comment/ApprovalController.php",
    "groupTitle": "76._社区评论点赞模块",
    "name": "PostApiMemberCommunityCommentApprovalHandle"
  },
  {
    "type": "post",
    "url": "/api/member/community/comment/approval/status",
    "title": "01. 评论是否点赞",
    "description": "<p>获取当前会员点赞的详情</p>",
    "group": "76._社区评论点赞模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "comment_id",
            "description": "<p>评论编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/community/comment/approval/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Community/Comment/ApprovalController.php",
    "groupTitle": "76._社区评论点赞模块",
    "name": "PostApiMemberCommunityCommentApprovalStatus"
  },
  {
    "type": "get",
    "url": "/api/currency/category/defi",
    "title": "05. DeFi货币种类",
    "description": "<p>获取主流货币种类数据</p>",
    "group": "80._货币种类模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "total",
            "description": "<p>显示数量，默认显示24个</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>货币种类编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>币种名称</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "symbol",
            "description": "<p>币种符号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>币种全称</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "logo_url",
            "description": "<p>图标链接</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "market_cap_usd",
            "description": "<p>币种市值</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "available_supply",
            "description": "<p>流通量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "total_supply",
            "description": "<p>发行总量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "max_supply",
            "description": "<p>最大发行量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "issue_time",
            "description": "<p>上市时间</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_hot",
            "description": "<p>是否热门</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_main",
            "description": "<p>是否主流</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_defi",
            "description": "<p>是否DeFi</p>"
          },
          {
            "group": "字段说明",
            "type": "Array",
            "optional": false,
            "field": "api",
            "description": "<p>第三方接口数据</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/currency/category/defi"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Currency/CategoryController.php",
    "groupTitle": "80._货币种类模块",
    "name": "GetApiCurrencyCategoryDefi"
  },
  {
    "type": "get",
    "url": "/api/currency/category/hot",
    "title": "03. 热门货币种类",
    "description": "<p>获取热门货币种类数据</p>",
    "group": "80._货币种类模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "total",
            "description": "<p>显示数量，默认显示8个</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>货币种类编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>币种名称</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "symbol",
            "description": "<p>币种符号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>币种全称</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "logo_url",
            "description": "<p>图标链接</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "market_cap_usd",
            "description": "<p>币种市值</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "available_supply",
            "description": "<p>流通量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "total_supply",
            "description": "<p>发行总量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "max_supply",
            "description": "<p>最大发行量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "issue_time",
            "description": "<p>上市时间</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_hot",
            "description": "<p>是否热门</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_main",
            "description": "<p>是否主流</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_defi",
            "description": "<p>是否DeFi</p>"
          },
          {
            "group": "字段说明",
            "type": "Array",
            "optional": false,
            "field": "api",
            "description": "<p>第三方接口数据</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/currency/category/hot"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Currency/CategoryController.php",
    "groupTitle": "80._货币种类模块",
    "name": "GetApiCurrencyCategoryHot"
  },
  {
    "type": "get",
    "url": "/api/currency/category/list?page={page}",
    "title": "01. 货币种类列表",
    "description": "<p>获取货币种类分页列表</p>",
    "group": "80._货币种类模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "symbol",
            "description": "<p>币种符号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>货币种类编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>币种名称</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "symbol",
            "description": "<p>币种符号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>币种全称</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "logo_url",
            "description": "<p>图标链接</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "market_cap_usd",
            "description": "<p>币种市值</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "available_supply",
            "description": "<p>流通量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "total_supply",
            "description": "<p>发行总量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "max_supply",
            "description": "<p>最大发行量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "issue_time",
            "description": "<p>上市时间</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_hot",
            "description": "<p>是否热门</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_main",
            "description": "<p>是否主流</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_defi",
            "description": "<p>是否DeFi</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/currency/category/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Currency/CategoryController.php",
    "groupTitle": "80._货币种类模块",
    "name": "GetApiCurrencyCategoryListPagePage"
  },
  {
    "type": "get",
    "url": "/api/currency/category/main",
    "title": "04. 主流货币种类",
    "description": "<p>获取主流货币种类数据</p>",
    "group": "80._货币种类模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "total",
            "description": "<p>显示数量，默认显示8个</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>货币种类编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>币种名称</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "symbol",
            "description": "<p>币种符号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>币种全称</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "logo_url",
            "description": "<p>图标链接</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "market_cap_usd",
            "description": "<p>币种市值</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "available_supply",
            "description": "<p>流通量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "total_supply",
            "description": "<p>发行总量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "max_supply",
            "description": "<p>最大发行量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "issue_time",
            "description": "<p>上市时间</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_hot",
            "description": "<p>是否热门</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_main",
            "description": "<p>是否主流</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_defi",
            "description": "<p>是否DeFi</p>"
          },
          {
            "group": "字段说明",
            "type": "Array",
            "optional": false,
            "field": "api",
            "description": "<p>第三方接口数据</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/currency/category/main"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Currency/CategoryController.php",
    "groupTitle": "80._货币种类模块",
    "name": "GetApiCurrencyCategoryMain"
  },
  {
    "type": "get",
    "url": "/api/currency/category/select",
    "title": "02. 货币种类数据",
    "description": "<p>获取货币种类不分页数据列表</p>",
    "group": "80._货币种类模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>显示数量(默认显示20个)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>货币种类编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>币种名称</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "symbol",
            "description": "<p>币种符号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>币种全称</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "logo_url",
            "description": "<p>图标链接</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "market_cap_usd",
            "description": "<p>币种市值</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "available_supply",
            "description": "<p>流通量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "total_supply",
            "description": "<p>发行总量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "max_supply",
            "description": "<p>最大发行量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "issue_time",
            "description": "<p>上市时间</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_hot",
            "description": "<p>是否热门</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_main",
            "description": "<p>是否主流</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_defi",
            "description": "<p>是否DeFi</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/currency/category/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Currency/CategoryController.php",
    "groupTitle": "80._货币种类模块",
    "name": "GetApiCurrencyCategorySelect"
  },
  {
    "type": "get",
    "url": "/api/currency/category/view/{id}",
    "title": "05. 货币种类详情",
    "description": "<p>获取货币种类详情</p>",
    "group": "80._货币种类模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>货币种类编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>币种名称</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "symbol",
            "description": "<p>币种符号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>币种全称</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "logo_url",
            "description": "<p>图标链接</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "market_cap_usd",
            "description": "<p>币种市值</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "available_supply",
            "description": "<p>流通量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "total_supply",
            "description": "<p>发行总量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "max_supply",
            "description": "<p>最大发行量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "issue_time",
            "description": "<p>上市时间</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_hot",
            "description": "<p>是否热门</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_main",
            "description": "<p>是否主流</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "is_defi",
            "description": "<p>是否DeFi</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/currency/category/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Currency/CategoryController.php",
    "groupTitle": "80._货币种类模块",
    "name": "GetApiCurrencyCategoryViewId"
  },
  {
    "type": "get",
    "url": "/api/currency/symbol/list?page={page}",
    "title": "01. 货币交易对列表",
    "description": "<p>获取货币交易对分页列表</p>",
    "group": "81._货币交易对模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "symbol",
            "description": "<p>货币标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "quote_currency",
            "description": "<p>报价币种(默认传USDT)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>货币编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "market",
            "description": "<p>交易所名称</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "symbol",
            "description": "<p>交易对</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "base_currency",
            "description": "<p>交易对中的基础币种</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "quote_currency",
            "description": "<p>交易对中的报价币种</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>交易对简介</p>"
          },
          {
            "group": "字段说明",
            "type": "Array",
            "optional": false,
            "field": "api",
            "description": "<p>第三方接口数据</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/currency/symbol/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Currency/SymbolController.php",
    "groupTitle": "81._货币交易对模块",
    "name": "GetApiCurrencySymbolListPagePage"
  },
  {
    "type": "get",
    "url": "/api/currency/symbol/quote",
    "title": "02. 货币交易报价币种",
    "description": "<p>获取交易对中的报价币种不分页数据</p>",
    "group": "81._货币交易对模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>交易对中的报价币种</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/currency/symbol/quote"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Currency/SymbolController.php",
    "groupTitle": "81._货币交易对模块",
    "name": "GetApiCurrencySymbolQuote"
  },
  {
    "type": "get",
    "url": "/api/currency/symbol/view/{id}",
    "title": "03. 货币交易对详情",
    "description": "<p>获取货币交易对详情</p>",
    "group": "81._货币交易对模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>货币编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "market",
            "description": "<p>交易所名称</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "symbol",
            "description": "<p>交易对</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "base_currency",
            "description": "<p>交易对中的基础币种</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "quote_currency",
            "description": "<p>交易对中的报价币种</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>交易对简介</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/currency/symbol/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Currency/SymbolController.php",
    "groupTitle": "81._货币交易对模块",
    "name": "GetApiCurrencySymbolViewId"
  },
  {
    "type": "get",
    "url": "/api/member/currency/optional/list?page={page}",
    "title": "01. 自选货币列表",
    "description": "<p>获取当前自选货币分页列表</p>",
    "group": "83._自选货币模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|货币交易对": [
          {
            "group": "字段说明|货币交易对",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>货币编号</p>"
          },
          {
            "group": "字段说明|货币交易对",
            "type": "String",
            "optional": false,
            "field": "symbol",
            "description": "<p>交易对</p>"
          },
          {
            "group": "字段说明|货币交易对",
            "type": "String",
            "optional": false,
            "field": "base_currency",
            "description": "<p>交易对中的基础币种</p>"
          },
          {
            "group": "字段说明|货币交易对",
            "type": "String",
            "optional": false,
            "field": "quote_currency",
            "description": "<p>交易对中的报价币种</p>"
          },
          {
            "group": "字段说明|货币交易对",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>交易对状态</p>"
          }
        ],
        "字段说明|会员": [
          {
            "group": "字段说明|会员",
            "type": "Number",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "字段说明|会员",
            "type": "Number",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/currency/optional/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Currency/OptionalController.php",
    "groupTitle": "83._自选货币模块",
    "name": "GetApiMemberCurrencyOptionalListPagePage"
  },
  {
    "type": "post",
    "url": "/api/member/currency/optional/handle",
    "title": "03. 加入货币自选",
    "description": "<p>当前会员执行加入自选作, 已经加入过，再次点击取消加入</p>",
    "group": "83._自选货币模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "symbol_id",
            "description": "<p>货币交易对编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/currency/optional/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Currency/OptionalController.php",
    "groupTitle": "83._自选货币模块",
    "name": "PostApiMemberCurrencyOptionalHandle"
  },
  {
    "type": "post",
    "url": "/api/member/currency/optional/status",
    "title": "02. 是否加入自选",
    "description": "<p>获取当前自选货币的详情</p>",
    "group": "83._自选货币模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "symbol_id",
            "description": "<p>货币交易对编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/currency/optional/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Currency/OptionalController.php",
    "groupTitle": "83._自选货币模块",
    "name": "PostApiMemberCurrencyOptionalStatus"
  }
] });
