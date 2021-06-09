define({ "api": [
  {
    "type": "get",
    "url": "/api/logout",
    "title": "09. 退出",
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
    "title": "05. 苹果登录",
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
    "url": "/api/bind_code",
    "title": "08. 获取绑定验证码",
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
    "title": "07. 绑定手机号码",
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
    "url": "/api/register",
    "title": "06. 用户注册",
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
    "url": "/api/sms_code",
    "title": "03. 登录验证码",
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
    "title": "02. 短信登录",
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
    "title": "04. 微信登录",
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
            "description": "<p>订单号</p>"
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
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>自增编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
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
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "service_qrcode",
            "description": "<p>客服微信二维码</p>"
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
            "optional": false,
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
            "optional": false,
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
            "optional": false,
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
    "url": "/api/member/order/course/list?page={page}",
    "title": "01. 课程订单列表(分页)",
    "description": "<p>获取当前会员课程订单列表(分页)</p>",
    "group": "12._课程订单模块",
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
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "order_no",
            "description": "<p>订单号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_money",
            "description": "<p>支付金额</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_type",
            "description": "<p>支付类型 1 支付宝 2 微信 4 苹果</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "order_status",
            "description": "<p>订单状态 0 待发货 1 待签收 2 已签收</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>支付时间</p>"
          }
        ],
        "course params": [
          {
            "group": "course params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课程描述</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程封面</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "buy_total",
            "description": "<p>销售数量</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/course/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Order/CourseController.php",
    "groupTitle": "12._课程订单模块",
    "name": "GetApiMemberOrderCourseListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/order/course/select",
    "title": "02. 课程订单列表(不分页)",
    "description": "<p>获取当前会员课程订单列表(不分页)</p>",
    "group": "12._课程订单模块",
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
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "order_no",
            "description": "<p>订单号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_money",
            "description": "<p>支付金额</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_type",
            "description": "<p>支付类型 1 支付宝 2 微信 4 苹果</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "order_status",
            "description": "<p>订单状态 0 待发货 1 待签收 2 已签收</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>支付时间</p>"
          }
        ],
        "course params": [
          {
            "group": "course params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课程描述</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程封面</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "buy_total",
            "description": "<p>销售数量</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/course/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Order/CourseController.php",
    "groupTitle": "12._课程订单模块",
    "name": "GetApiMemberOrderCourseSelect"
  },
  {
    "type": "get",
    "url": "/api/member/order/course/view/{id}",
    "title": "03. 课程订单详情",
    "description": "<p>获取当前会员课程订单的详情</p>",
    "group": "12._课程订单模块",
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
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "order_no",
            "description": "<p>订单号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_money",
            "description": "<p>支付金额</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_type",
            "description": "<p>支付类型 1 支付宝 2 微信 4 苹果</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "order_status",
            "description": "<p>订单状态 0 待发货 1 待签收 2 已签收</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>支付时间</p>"
          }
        ],
        "course params": [
          {
            "group": "course params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课程描述</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程封面</p>"
          },
          {
            "group": "course params",
            "type": "String",
            "optional": false,
            "field": "buy_total",
            "description": "<p>销售数量</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "logistics params": [
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单物流编号</p>"
          },
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "logistics params",
            "type": "String",
            "optional": false,
            "field": "present_name",
            "description": "<p>礼包名称</p>"
          },
          {
            "group": "logistics params",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>礼包周期</p>"
          },
          {
            "group": "logistics params",
            "type": "String",
            "optional": false,
            "field": "company_name",
            "description": "<p>物流公司名称</p>"
          },
          {
            "group": "logistics params",
            "type": "String",
            "optional": false,
            "field": "logistics_no",
            "description": "<p>物流单号</p>"
          },
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "logistics_status",
            "description": "<p>物流状态 0 待发货 1 待签收 2 已签收</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/course/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Order/CourseController.php",
    "groupTitle": "12._课程订单模块",
    "name": "GetApiMemberOrderCourseViewId"
  },
  {
    "type": "post",
    "url": "/api/member/order/course/cancel",
    "title": "07. 课程订单取消",
    "description": "<p>当前会员取消课程订单</p>",
    "group": "12._课程订单模块",
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
        "url": "/api/member/order/course/cancel"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Order/CourseController.php",
    "groupTitle": "12._课程订单模块",
    "name": "PostApiMemberOrderCourseCancel"
  },
  {
    "type": "post",
    "url": "/api/member/order/course/change",
    "title": "08. 修改课程订单",
    "description": "<p>当前会员修改课程订单</p>",
    "group": "12._课程订单模块",
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
            "field": "address_id",
            "description": "<p>收货地址编号</p>"
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
        "url": "/api/member/order/course/change"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Order/CourseController.php",
    "groupTitle": "12._课程订单模块",
    "name": "PostApiMemberOrderCourseChange"
  },
  {
    "type": "post",
    "url": "/api/member/order/course/finish",
    "title": "06. 课程订单完成",
    "description": "<p>当前会员收到货物后，点击完成课程订单</p>",
    "group": "12._课程订单模块",
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
        "url": "/api/member/order/course/finish"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Order/CourseController.php",
    "groupTitle": "12._课程订单模块",
    "name": "PostApiMemberOrderCourseFinish"
  },
  {
    "type": "post",
    "url": "/api/member/order/course/handle",
    "title": "04. 创建课程订单",
    "description": "<p>当前会员购买课程后，创建课程订单</p>",
    "group": "12._课程订单模块",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "address_id",
            "description": "<p>收货地址编号</p>"
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
        "url": "/api/member/order/course/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Order/CourseController.php",
    "groupTitle": "12._课程订单模块",
    "name": "PostApiMemberOrderCourseHandle"
  },
  {
    "type": "post",
    "url": "/api/member/order/course/pay",
    "title": "05. 订单支付确认",
    "description": "<p>当前会员支付完成后，调用接口更改订单支付状态</p>",
    "group": "12._课程订单模块",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "is_h5",
            "description": "<p>是否是h5订单 true false</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/course/pay"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Order/CourseController.php",
    "groupTitle": "12._课程订单模块",
    "name": "PostApiMemberOrderCoursePay"
  },
  {
    "type": "get",
    "url": "/api/member/attention/list?page={page}",
    "title": "01. 会员关注列表(分页)",
    "description": "<p>获取当前会员关注列表(分页)</p>",
    "group": "19._会员关注模块",
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
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员关注编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "attention_member_id",
            "description": "<p>关注会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>关注时间</p>"
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
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/AttentionController.php",
    "groupTitle": "19._会员关注模块",
    "name": "GetApiMemberAttentionListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/attention/select",
    "title": "02. 会员关注列表(不分页)",
    "description": "<p>获取当前会员关注列表(不分页)</p>",
    "group": "19._会员关注模块",
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
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员关注编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "attention_member_id",
            "description": "<p>关注会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>关注时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/attention/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/AttentionController.php",
    "groupTitle": "19._会员关注模块",
    "name": "GetApiMemberAttentionSelect"
  },
  {
    "type": "post",
    "url": "/api/member/attention/handle",
    "title": "04. 关注操作",
    "description": "<p>当前会员执行关注操作, 已经关注过，再次点击取消关注</p>",
    "group": "19._会员关注模块",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "attention_member_id",
            "description": "<p>作品编号</p>"
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
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/AttentionController.php",
    "groupTitle": "19._会员关注模块",
    "name": "PostApiMemberAttentionHandle"
  },
  {
    "type": "post",
    "url": "/api/member/attention/status",
    "title": "03. 是否关注会员",
    "description": "<p>获取当前会员关注的详情</p>",
    "group": "19._会员关注模块",
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
        "basic params": [
          {
            "group": "basic params",
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
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/AttentionController.php",
    "groupTitle": "19._会员关注模块",
    "name": "PostApiMemberAttentionStatus"
  },
  {
    "type": "get",
    "url": "/api/member/archive",
    "title": "01. 获取当前会员档案",
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
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
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
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "archive params": [
          {
            "group": "archive params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "archive params",
            "type": "Number",
            "optional": false,
            "field": "skill_level",
            "description": "<p>绘画基础</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "id_card_no",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "weixin",
            "description": "<p>微信号</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>生日</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "region_id",
            "description": "<p>县</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          }
        ],
        "asset params": [
          {
            "group": "asset params",
            "type": "String",
            "optional": false,
            "field": "red_envelope",
            "description": "<p>红包金额</p>"
          },
          {
            "group": "asset params",
            "type": "String",
            "optional": false,
            "field": "lollipop",
            "description": "<p>棒棒糖数</p>"
          },
          {
            "group": "asset params",
            "type": "String",
            "optional": false,
            "field": "production",
            "description": "<p>作品数</p>"
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
    "url": "/api/member/status",
    "title": "05. 当前会员是否填写资料",
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
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
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
    "type": "get",
    "url": "/api/member/view/{id}",
    "title": "04. 获取会员详情",
    "description": "<p>获取会员详情</p>",
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
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
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
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "archive params": [
          {
            "group": "archive params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "archive params",
            "type": "Number",
            "optional": false,
            "field": "skill_level",
            "description": "<p>绘画基础</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "id_card_no",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "weixin",
            "description": "<p>微信号</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>生日</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "archive params",
            "type": "String",
            "optional": false,
            "field": "region_id",
            "description": "<p>县</p>"
          },
          {
            "group": "archive params",
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
        "url": "/api/member/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/MemberController.php",
    "groupTitle": "20._会员模块",
    "name": "GetApiMemberViewId"
  },
  {
    "type": "post",
    "url": "/api/member/handle",
    "title": "02. 编辑会员信息",
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
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
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
            "description": "<p>会员头像（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": "<p>会员性别（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "birthday",
            "description": "<p>会员生日（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "skill_level",
            "description": "<p>绘画基础 0 无基础 1 1年以下 2 1年以上（不可为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "province_id",
            "description": "<p>省（可以为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city_id",
            "description": "<p>市（可以为空）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "region_id",
            "description": "<p>县（可以为空）</p>"
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
    "url": "/api/member/teacher",
    "title": "03. 成为招聘老师",
    "description": "<p>将满足条件的当前会员的身份变成招聘老师</p>",
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
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/member/teacher"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/MemberController.php",
    "groupTitle": "20._会员模块",
    "name": "PostApiMemberTeacher"
  },
  {
    "type": "get",
    "url": "/api/member/approval/list?page={page}",
    "title": "01. 会员点赞列表(分页)",
    "description": "<p>获取当前会员点赞列表(分页)</p>",
    "group": "22._会员点赞模块",
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
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员点赞编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "production_id",
            "description": "<p>作品编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>点赞时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/approval/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/ApprovalController.php",
    "groupTitle": "22._会员点赞模块",
    "name": "GetApiMemberApprovalListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/approval/select",
    "title": "02. 会员点赞列表(不分页)",
    "description": "<p>获取当前会员点赞列表(不分页)</p>",
    "group": "22._会员点赞模块",
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
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员点赞编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "production_id",
            "description": "<p>作品编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>点赞时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/approval/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/ApprovalController.php",
    "groupTitle": "22._会员点赞模块",
    "name": "GetApiMemberApprovalSelect"
  },
  {
    "type": "post",
    "url": "/api/member/approval/handle",
    "title": "04. 点赞操作",
    "description": "<p>当前会员执行点赞操作, 已经点赞过，再次点击取消点赞</p>",
    "group": "22._会员点赞模块",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "production_id",
            "description": "<p>作品编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/approval/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/ApprovalController.php",
    "groupTitle": "22._会员点赞模块",
    "name": "PostApiMemberApprovalHandle"
  },
  {
    "type": "post",
    "url": "/api/member/approval/status",
    "title": "03. 作品是否点赞",
    "description": "<p>获取当前会员点赞的详情</p>",
    "group": "22._会员点赞模块",
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
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "production_id",
            "description": "<p>作品编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/approval/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/ApprovalController.php",
    "groupTitle": "22._会员点赞模块",
    "name": "PostApiMemberApprovalStatus"
  },
  {
    "type": "get",
    "url": "/api/member/comment/list?page={page}",
    "title": "01. 会员评论列表(分页)",
    "description": "<p>获取当前会员评论列表(分页)</p>",
    "group": "23._会员评论模块",
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
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员评论编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "production_id",
            "description": "<p>作品编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "suffix",
            "description": "<p>内容类型 1 文本内容 2 音频内容</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>内容时长</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>评论时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/comment/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/CommentController.php",
    "groupTitle": "23._会员评论模块",
    "name": "GetApiMemberCommentListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/comment/select",
    "title": "02. 会员评论列表(不分页)",
    "description": "<p>获取当前会员评论列表(不分页)</p>",
    "group": "23._会员评论模块",
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
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员评论编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "production_id",
            "description": "<p>作品编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "suffix",
            "description": "<p>内容类型 1 文本内容 2 音频内容</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>内容时长</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>评论时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/comment/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/CommentController.php",
    "groupTitle": "23._会员评论模块",
    "name": "GetApiMemberCommentSelect"
  },
  {
    "type": "post",
    "url": "/api/member/comment/handle",
    "title": "04. 评论操作",
    "description": "<p>当前会员执行评论操作</p>",
    "group": "23._会员评论模块",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "production_id",
            "description": "<p>作品编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "suffix",
            "description": "<p>评论内容类型 1 文本内容 2 音频内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>内容时长</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/comment/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/CommentController.php",
    "groupTitle": "23._会员评论模块",
    "name": "PostApiMemberCommentHandle"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/index",
    "title": "4. 获取课件列表(不分页，关联查询)",
    "description": "<p>获取课件列表(不分页，关联查询)</p>",
    "group": "24._课件模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "present_id",
            "description": "<p>礼包编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unlock_id",
            "description": "<p>解锁编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>优惠说明</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_start_time",
            "description": "<p>报名开始时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_end_time",
            "description": "<p>报名结束时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_start_time",
            "description": "<p>开课时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "line_price",
            "description": "<p>划线价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "real_price",
            "description": "<p>销售价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "semester",
            "description": "<p>课件周期</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_status",
            "description": "<p>报名状态</p>"
          }
        ],
        "present params": [
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>礼包编号</p>"
          },
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>礼包名称</p>"
          },
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>礼包描述</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/courseware/index"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/CoursewareController.php",
    "groupTitle": "24._课件模块",
    "name": "GetApiEducationCoursewareIndex"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/list?page={page}",
    "title": "1. 获取课件列表(分页)",
    "description": "<p>获取课件列表(分页)</p>",
    "group": "24._课件模块",
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
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "present_id",
            "description": "<p>礼包编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unlock_id",
            "description": "<p>解锁编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>优惠说明</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_start_time",
            "description": "<p>报名开始时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_end_time",
            "description": "<p>报名结束时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_start_time",
            "description": "<p>开课时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "line_price",
            "description": "<p>划线价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "real_price",
            "description": "<p>销售价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "semester",
            "description": "<p>课件周期</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_status",
            "description": "<p>报名状态</p>"
          }
        ],
        "present params": [
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>礼包编号</p>"
          },
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>礼包名称</p>"
          },
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>礼包描述</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/courseware/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/CoursewareController.php",
    "groupTitle": "24._课件模块",
    "name": "GetApiEducationCoursewareListPagePage"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/select",
    "title": "2. 获取课件列表(不分页)",
    "description": "<p>获取课件列表(不分页)</p>",
    "group": "24._课件模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "present_id",
            "description": "<p>礼包编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unlock_id",
            "description": "<p>解锁编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>优惠说明</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_start_time",
            "description": "<p>报名开始时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_end_time",
            "description": "<p>报名结束时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_start_time",
            "description": "<p>开课时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "line_price",
            "description": "<p>划线价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "real_price",
            "description": "<p>销售价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "semester",
            "description": "<p>课件周期</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_status",
            "description": "<p>报名状态</p>"
          }
        ],
        "present params": [
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>礼包编号</p>"
          },
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>礼包名称</p>"
          },
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>礼包描述</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/courseware/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/CoursewareController.php",
    "groupTitle": "24._课件模块",
    "name": "GetApiEducationCoursewareSelect"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/view/{id}",
    "title": "3. 获取课件详情",
    "description": "<p>获取课件详情</p>",
    "group": "24._课件模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "present_id",
            "description": "<p>礼包编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unlock_id",
            "description": "<p>解锁编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>优惠说明</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_start_time",
            "description": "<p>报名开始时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_end_time",
            "description": "<p>报名结束时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_start_time",
            "description": "<p>开课时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "line_price",
            "description": "<p>划线价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "real_price",
            "description": "<p>销售价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "semester",
            "description": "<p>课件周期</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_status",
            "description": "<p>报名状态</p>"
          }
        ],
        "detail params": [
          {
            "group": "detail params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>课件详情编号</p>"
          },
          {
            "group": "detail params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>课件内容</p>"
          },
          {
            "group": "detail params",
            "type": "String",
            "optional": false,
            "field": "plan",
            "description": "<p>课件安排</p>"
          }
        ],
        "present params": [
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>礼包编号</p>"
          },
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>礼包名称</p>"
          },
          {
            "group": "present params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>礼包描述</p>"
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
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/CoursewareController.php",
    "groupTitle": "24._课件模块",
    "name": "GetApiEducationCoursewareViewId"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/level/list?page={page}",
    "title": "1. 课件级别列表(分页)",
    "description": "<p>获取课件级别列表(分页)</p>",
    "group": "25._课件级别模块",
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
            "description": "<p>课件编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "minimum_age",
            "description": "<p>最小年龄</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "largest_age",
            "description": "<p>最大年龄</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "level",
            "description": "<p>课件级别信息</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课件级别描述</p>"
          },
          {
            "group": "basic params",
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
        "url": "/api/education/courseware/level/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/Relevance/LevelController.php",
    "groupTitle": "25._课件级别模块",
    "name": "GetApiEducationCoursewareLevelListPagePage"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/level/select",
    "title": "2. 课件级别列表(不分页)",
    "description": "<p>获取课件级别列表(不分页)</p>",
    "group": "25._课件级别模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "minimum_age",
            "description": "<p>最小年龄</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "largest_age",
            "description": "<p>最大年龄</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "level",
            "description": "<p>课件级别信息</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课件级别描述</p>"
          },
          {
            "group": "basic params",
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
        "url": "/api/education/courseware/level/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/Relevance/LevelController.php",
    "groupTitle": "25._课件级别模块",
    "name": "GetApiEducationCoursewareLevelSelect"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/level/view/{id}",
    "title": "3. 课件级别详情",
    "description": "<p>获取课件级别详情</p>",
    "group": "25._课件级别模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "minimum_age",
            "description": "<p>最小年龄</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "largest_age",
            "description": "<p>最大年龄</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "level",
            "description": "<p>课件级别信息</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课件级别描述</p>"
          },
          {
            "group": "basic params",
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
        "url": "/api/education/courseware/level/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/Relevance/LevelController.php",
    "groupTitle": "25._课件级别模块",
    "name": "GetApiEducationCoursewareLevelViewId"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/level/unit/list?page={page}",
    "title": "01. 课件单元列表(分页)",
    "description": "<p>获取课件单元列表(分页)</p>",
    "group": "26._课件单元模块",
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
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件单元名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课件单元描述</p>"
          },
          {
            "group": "basic params",
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
        "url": "/api/education/courseware/level/unit/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/Relevance/Relevance/UnitController.php",
    "groupTitle": "26._课件单元模块",
    "name": "GetApiEducationCoursewareLevelUnitListPagePage"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/level/unit/select",
    "title": "02. 课件单元列表(不分页)",
    "description": "<p>获取课件单元列表(不分页)</p>",
    "group": "26._课件单元模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件单元名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课件单元描述</p>"
          },
          {
            "group": "basic params",
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
        "url": "/api/education/courseware/level/unit/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/Relevance/Relevance/UnitController.php",
    "groupTitle": "26._课件单元模块",
    "name": "GetApiEducationCoursewareLevelUnitSelect"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/level/unit/unlock",
    "title": "04. 课件单元解锁数据",
    "description": "<p>获取课件单元列表(不分页)</p>",
    "group": "26._课件单元模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件单元名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课件单元描述</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "wait_unlock_time",
            "description": "<p>解锁时间</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "is_unlock",
            "description": "<p>是否已解锁</p>"
          },
          {
            "group": "basic params",
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
        "url": "/api/education/courseware/level/unit/unlock"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/Relevance/Relevance/UnitController.php",
    "groupTitle": "26._课件单元模块",
    "name": "GetApiEducationCoursewareLevelUnitUnlock"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/level/unit/view/{id}",
    "title": "03. 课件单元详情",
    "description": "<p>获取课件详情</p>",
    "group": "26._课件单元模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件单元名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课件单元描述</p>"
          },
          {
            "group": "basic params",
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
        "url": "/api/education/courseware/level/unit/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/Relevance/Relevance/UnitController.php",
    "groupTitle": "26._课件单元模块",
    "name": "GetApiEducationCoursewareLevelUnitViewId"
  },
  {
    "type": "get",
    "url": "/api/member/complain/list?page={page}",
    "title": "01. 我的投诉列表",
    "description": "<p>获取我的投诉分页列表</p>",
    "group": "27._会员投诉模块",
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
        "响应": [
          {
            "group": "响应",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>投诉编号</p>"
          },
          {
            "group": "响应",
            "type": "Number",
            "optional": false,
            "field": "category_id",
            "description": "<p>投诉位编号</p>"
          },
          {
            "group": "响应",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>投诉标题</p>"
          },
          {
            "group": "响应",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>投诉图片资源</p>"
          },
          {
            "group": "响应",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>投诉其他资源</p>"
          },
          {
            "group": "响应",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>投诉链接</p>"
          },
          {
            "group": "响应",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
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
    "groupTitle": "27._会员投诉模块",
    "name": "GetApiMemberComplainListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/complain/select",
    "title": "02. 获取我的投诉列表(不分页)",
    "description": "<p>获取我的投诉列表(不分页)</p>",
    "group": "27._会员投诉模块",
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
            "field": "category_id",
            "description": "<p>投诉位编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "响应": [
          {
            "group": "响应",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>投诉编号</p>"
          },
          {
            "group": "响应",
            "type": "Number",
            "optional": false,
            "field": "category_id",
            "description": "<p>投诉位编号</p>"
          },
          {
            "group": "响应",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>投诉标题</p>"
          },
          {
            "group": "响应",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>投诉图片资源</p>"
          },
          {
            "group": "响应",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>投诉其他资源</p>"
          },
          {
            "group": "响应",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>投诉链接</p>"
          },
          {
            "group": "响应",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/complain/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/ComplainController.php",
    "groupTitle": "27._会员投诉模块",
    "name": "GetApiMemberComplainSelect"
  },
  {
    "type": "get",
    "url": "/api/member/complain/view/{id}",
    "title": "03. 获取我的投诉详情",
    "description": "<p>获取我的投诉详情</p>",
    "group": "27._会员投诉模块",
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
        "响应": [
          {
            "group": "响应",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>投诉编号</p>"
          },
          {
            "group": "响应",
            "type": "Number",
            "optional": false,
            "field": "category_id",
            "description": "<p>投诉位编号</p>"
          },
          {
            "group": "响应",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>投诉标题</p>"
          },
          {
            "group": "响应",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>投诉图片资源</p>"
          },
          {
            "group": "响应",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>投诉其他资源</p>"
          },
          {
            "group": "响应",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>投诉链接</p>"
          },
          {
            "group": "响应",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
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
    "groupTitle": "27._会员投诉模块",
    "name": "GetApiMemberComplainViewId"
  },
  {
    "type": "post",
    "url": "/api/member/complain/handle",
    "title": "04. 编辑投诉信息",
    "description": "<p>编辑招聘老师的信息</p>",
    "group": "27._会员投诉模块",
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
            "field": "content",
            "description": "<p>投诉内容（不可为空）</p>"
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
    "groupTitle": "27._会员投诉模块",
    "name": "PostApiMemberComplainHandle"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/level/unit/point/list?page={page}",
    "title": "1. 课件知识点列表(分页)",
    "description": "<p>获取课件知识点列表(分页)</p>",
    "group": "27._课件知识点模块",
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
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件单元编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件知识点编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件知识点名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课件知识点封面</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "url",
            "description": "<p>课件知识点视频</p>"
          },
          {
            "group": "basic params",
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
        "url": "/api/education/courseware/level/unit/point/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/Relevance/Relevance/Relevance/PointController.php",
    "groupTitle": "27._课件知识点模块",
    "name": "GetApiEducationCoursewareLevelUnitPointListPagePage"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/level/unit/point/select",
    "title": "2. 课件知识点列表(不分页)",
    "description": "<p>获取课件知识点列表(不分页)</p>",
    "group": "27._课件知识点模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件单元编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件知识点编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件知识点名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课件知识点封面</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "url",
            "description": "<p>课件知识点视频</p>"
          },
          {
            "group": "basic params",
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
        "url": "/api/education/courseware/level/unit/point/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/Relevance/Relevance/Relevance/PointController.php",
    "groupTitle": "27._课件知识点模块",
    "name": "GetApiEducationCoursewareLevelUnitPointSelect"
  },
  {
    "type": "get",
    "url": "/api/education/courseware/level/unit/point/view/{id}",
    "title": "3. 课件知识点详情",
    "description": "<p>获取课件知识点详情</p>",
    "group": "27._课件知识点模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件单元编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课件知识点编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课件知识点名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课件知识点封面</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "url",
            "description": "<p>课件知识点视频</p>"
          },
          {
            "group": "basic params",
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
        "url": "/api/education/courseware/level/unit/point/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Courseware/Relevance/Relevance/Relevance/PointController.php",
    "groupTitle": "27._课件知识点模块",
    "name": "GetApiEducationCoursewareLevelUnitPointViewId"
  },
  {
    "type": "post",
    "url": "/api/member/contact/handle",
    "title": "01. 编辑联系客服信息",
    "description": "<p>编辑联系客服信息信息</p>",
    "group": "28._会员客服模块",
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
    "groupTitle": "28._会员客服模块",
    "name": "PostApiMemberContactHandle"
  },
  {
    "type": "get",
    "url": "/api/education/course/list?page={page}",
    "title": "1. 获取课程列表(分页)",
    "description": "<p>获取课程列表(分页)</p>",
    "group": "28._课程模块",
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
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unlock_id",
            "description": "<p>解锁编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "present",
            "description": "<p>礼包信息</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>优惠说明</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_start_time",
            "description": "<p>报名开始时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_end_time",
            "description": "<p>报名结束时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_start_time",
            "description": "<p>开课时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "line_price",
            "description": "<p>划线价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "real_price",
            "description": "<p>销售价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "semester",
            "description": "<p>课程周期</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_status",
            "description": "<p>报名状态</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/course/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Course/CourseController.php",
    "groupTitle": "28._课程模块",
    "name": "GetApiEducationCourseListPagePage"
  },
  {
    "type": "get",
    "url": "/api/education/course/select",
    "title": "2. 获取课程列表(不分页)",
    "description": "<p>获取课程列表(不分页)</p>",
    "group": "28._课程模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unlock_id",
            "description": "<p>解锁编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "present",
            "description": "<p>礼包信息</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>优惠说明</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_start_time",
            "description": "<p>报名开始时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_end_time",
            "description": "<p>报名结束时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_start_time",
            "description": "<p>开课时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "line_price",
            "description": "<p>划线价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "real_price",
            "description": "<p>销售价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "semester",
            "description": "<p>课程周期</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_status",
            "description": "<p>报名状态</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/course/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Course/CourseController.php",
    "groupTitle": "28._课程模块",
    "name": "GetApiEducationCourseSelect"
  },
  {
    "type": "get",
    "url": "/api/education/course/view/{id}",
    "title": "3. 获取课程详情",
    "description": "<p>获取课程详情</p>",
    "group": "28._课程模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unlock_id",
            "description": "<p>解锁编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "present",
            "description": "<p>礼包信息</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>优惠说明</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_start_time",
            "description": "<p>报名开始时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_end_time",
            "description": "<p>报名结束时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_start_time",
            "description": "<p>开课时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "line_price",
            "description": "<p>划线价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "real_price",
            "description": "<p>销售价格</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "semester",
            "description": "<p>课程周期</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "apply_status",
            "description": "<p>报名状态</p>"
          }
        ],
        "detail params": [
          {
            "group": "detail params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>课程详情编号</p>"
          },
          {
            "group": "detail params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>课程内容</p>"
          },
          {
            "group": "detail params",
            "type": "String",
            "optional": false,
            "field": "plan",
            "description": "<p>课程安排</p>"
          }
        ],
        "picture params": [
          {
            "group": "picture params",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>课程轮播图片</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/course/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Course/CourseController.php",
    "groupTitle": "28._课程模块",
    "name": "GetApiEducationCourseViewId"
  },
  {
    "type": "get",
    "url": "/api/education/course/teacher/list?page={page}",
    "title": "1. 课程老师列表(分页)",
    "description": "<p>获取课程老师列表(分页)</p>",
    "group": "29._课程老师模块",
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
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程老师编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>老师编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>课程老师名称</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "teacher params": [
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>老师编号</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>老师姓名</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/course/teacher/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Course/Relevance/TeacherController.php",
    "groupTitle": "29._课程老师模块",
    "name": "GetApiEducationCourseTeacherListPagePage"
  },
  {
    "type": "get",
    "url": "/api/education/course/teacher/select",
    "title": "2. 课程老师列表(不分页)",
    "description": "<p>获取课程老师列表(不分页)</p>",
    "group": "29._课程老师模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程老师编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>老师编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>课程老师名称</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "teacher params": [
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>老师编号</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>老师姓名</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/course/teacher/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Course/Relevance/TeacherController.php",
    "groupTitle": "29._课程老师模块",
    "name": "GetApiEducationCourseTeacherSelect"
  },
  {
    "type": "get",
    "url": "/api/education/course/teacher/view/{id}",
    "title": "3. 课程老师详情",
    "description": "<p>获取课程老师详情</p>",
    "group": "29._课程老师模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程老师编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "teacher_id",
            "description": "<p>老师编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>课程老师名称</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "teacher params": [
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>老师编号</p>"
          },
          {
            "group": "teacher params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>老师姓名</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/course/teacher/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Course/Relevance/TeacherController.php",
    "groupTitle": "29._课程老师模块",
    "name": "GetApiEducationCourseTeacherViewId"
  },
  {
    "type": "get",
    "url": "/api/member/invitation/list?page={page}",
    "title": "01. 会员邀请列表(分页)",
    "description": "<p>获取当前会员邀请列表(分页)</p>",
    "group": "30._会员邀请模块",
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
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员邀请编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "invitation_member_id",
            "description": "<p>邀请会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>邀请时间</p>"
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
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/InvitationController.php",
    "groupTitle": "30._会员邀请模块",
    "name": "GetApiMemberInvitationListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/invitation/select",
    "title": "02. 会员邀请列表(不分页)",
    "description": "<p>获取当前会员邀请列表(不分页)</p>",
    "group": "30._会员邀请模块",
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
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员邀请编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "invitation_member_id",
            "description": "<p>邀请会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>邀请时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/invitation/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/InvitationController.php",
    "groupTitle": "30._会员邀请模块",
    "name": "GetApiMemberInvitationSelect"
  },
  {
    "type": "post",
    "url": "/api/member/invitation/handle",
    "title": "04. 邀请操作",
    "description": "<p>当前会员执行邀请操作, 已经邀请过，再次点击取消邀请</p>",
    "group": "30._会员邀请模块",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "invitation_member_id",
            "description": "<p>作品编号</p>"
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
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/InvitationController.php",
    "groupTitle": "30._会员邀请模块",
    "name": "PostApiMemberInvitationHandle"
  },
  {
    "type": "post",
    "url": "/api/member/invitation/status",
    "title": "03. 是否邀请会员",
    "description": "<p>获取当前会员邀请的详情</p>",
    "group": "30._会员邀请模块",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "invitation_member_id",
            "description": "<p>邀请会员编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
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
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/InvitationController.php",
    "groupTitle": "30._会员邀请模块",
    "name": "PostApiMemberInvitationStatus"
  },
  {
    "type": "get",
    "url": "/api/education/course/unlock/list?page={page}",
    "title": "1. 课程解锁列表(分页)",
    "description": "<p>获取课程解锁列表(分页)</p>",
    "group": "31._课程解锁模块",
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
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程解锁编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>课件解锁名称</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "section",
            "description": "<p>课程解锁章节</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>课程解锁时长</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>课程名称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/course/unlock/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Course/Relevance/UnlockController.php",
    "groupTitle": "31._课程解锁模块",
    "name": "GetApiEducationCourseUnlockListPagePage"
  },
  {
    "type": "get",
    "url": "/api/education/course/unlock/select",
    "title": "2. 课程解锁列表(不分页)",
    "description": "<p>获取课程解锁列表(不分页)</p>",
    "group": "31._课程解锁模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程解锁编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>课件解锁名称</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "section",
            "description": "<p>课程解锁章节</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>课程解锁时长</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>课程名称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/course/unlock/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Course/Relevance/UnlockController.php",
    "groupTitle": "31._课程解锁模块",
    "name": "GetApiEducationCourseUnlockSelect"
  },
  {
    "type": "get",
    "url": "/api/education/course/unlock/view/{id}",
    "title": "3. 课程解锁详情",
    "description": "<p>获取课程解锁详情</p>",
    "group": "31._课程解锁模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程解锁编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>课件解锁名称</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "section",
            "description": "<p>课程解锁章节</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>课程解锁时长</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>课程名称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/course/unlock/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Course/Relevance/UnlockController.php",
    "groupTitle": "31._课程解锁模块",
    "name": "GetApiEducationCourseUnlockViewId"
  },
  {
    "type": "post",
    "url": "/api/member/asset/center",
    "title": "01. 资产中心",
    "description": "<p>获取当前会员资产详情</p>",
    "group": "32._会员资产模块",
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
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "red_envelope",
            "description": "<p>红包金额</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "lollipop",
            "description": "<p>棒棒糖数</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "production",
            "description": "<p>作品数</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/asset/center"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/AssetController.php",
    "groupTitle": "32._会员资产模块",
    "name": "PostApiMemberAssetCenter"
  },
  {
    "type": "post",
    "url": "/api/member/asset/lollipop",
    "title": "02. 我的棒棒糖",
    "description": "<p>获取当前会员棒棒糖</p>",
    "group": "32._会员资产模块",
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
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>棒棒糖数</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/asset/lollipop"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/AssetController.php",
    "groupTitle": "32._会员资产模块",
    "name": "PostApiMemberAssetLollipop"
  },
  {
    "type": "post",
    "url": "/api/member/asset/money",
    "title": "02. 我的红包",
    "description": "<p>获取当前会员棒棒糖</p>",
    "group": "32._会员资产模块",
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
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>红包金额</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/asset/money"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/AssetController.php",
    "groupTitle": "32._会员资产模块",
    "name": "PostApiMemberAssetMoney"
  },
  {
    "type": "get",
    "url": "/api/member/course/unit/list?page={page}",
    "title": "01. 会员课程单元列表(分页)",
    "description": "<p>获取当前会员订阅的课程单元列表(分页)</p>",
    "group": "34._会员课程单元模块",
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
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>学员课程单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>学员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_finish",
            "description": "<p>是否完成学习 0 未完成 1 已完成</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "unit params": [
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>课件单元名称</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "description",
            "description": "<p>课程单元描述</p>"
          },
          {
            "group": "unit params",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/course/unit/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Relevance/UnitController.php",
    "groupTitle": "34._会员课程单元模块",
    "name": "GetApiMemberCourseUnitListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/course/unit/list?page={page}",
    "title": "01. 会员课程单元列表(分页)",
    "description": "<p>获取当前会员订阅的课程单元列表(分页)</p>",
    "group": "34._会员课程单元模块",
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
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>学员课程单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>学员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_finish",
            "description": "<p>是否完成学习 0 未完成 1 已完成</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "unit params": [
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>课件单元名称</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "description",
            "description": "<p>课程单元描述</p>"
          },
          {
            "group": "unit params",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/course/unit/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Relevance/Unit2Controller.php",
    "groupTitle": "34._会员课程单元模块",
    "name": "GetApiMemberCourseUnitListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/course/unit/select",
    "title": "02. 会员课程单元列表(不分页)",
    "description": "<p>获取当前会员订阅的课程单元列表(不分页)</p>",
    "group": "34._会员课程单元模块",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>学员课程单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>学员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_finish",
            "description": "<p>是否完成学习 0 未完成 1 已完成</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "unit params": [
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>课件单元名称</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "description",
            "description": "<p>课程单元描述</p>"
          },
          {
            "group": "unit params",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/course/unit/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Relevance/Unit2Controller.php",
    "groupTitle": "34._会员课程单元模块",
    "name": "GetApiMemberCourseUnitSelect"
  },
  {
    "type": "get",
    "url": "/api/member/course/unit/select",
    "title": "02. 会员课程单元列表(不分页)",
    "description": "<p>获取当前会员订阅的课程单元列表(不分页)</p>",
    "group": "34._会员课程单元模块",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>学员课程单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>学员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_finish",
            "description": "<p>是否完成学习 0 未完成 1 已完成</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "unit params": [
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>课件单元名称</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "description",
            "description": "<p>课程单元描述</p>"
          },
          {
            "group": "unit params",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/course/unit/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Relevance/UnitController.php",
    "groupTitle": "34._会员课程单元模块",
    "name": "GetApiMemberCourseUnitSelect"
  },
  {
    "type": "get",
    "url": "/api/member/course/view/unit/{id}",
    "title": "03. 当前会员课程单元详情",
    "description": "<p>获取当前会员课程单元详情</p>",
    "group": "34._会员课程单元模块",
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
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>学员课程单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>学员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_finish",
            "description": "<p>是否完成学习 0 未完成 1 已完成</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "unit params": [
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>课件单元名称</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "description",
            "description": "<p>课程单元描述</p>"
          },
          {
            "group": "unit params",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/course/unit/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Relevance/UnitController.php",
    "groupTitle": "34._会员课程单元模块",
    "name": "GetApiMemberCourseViewUnitId"
  },
  {
    "type": "get",
    "url": "/api/member/course/view/unit/{id}",
    "title": "03. 当前会员课程单元详情",
    "description": "<p>获取当前会员课程单元详情</p>",
    "group": "34._会员课程单元模块",
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
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>学员课程单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>学员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_finish",
            "description": "<p>是否完成学习 0 未完成 1 已完成</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "unit params": [
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>课件单元名称</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "description",
            "description": "<p>课程单元描述</p>"
          },
          {
            "group": "unit params",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "unit params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/course/unit/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Relevance/Unit2Controller.php",
    "groupTitle": "34._会员课程单元模块",
    "name": "GetApiMemberCourseViewUnitId"
  },
  {
    "type": "get",
    "url": "/api/member/course/unit/point/list?page={page}",
    "title": "01. 会员课程知识点列表(分页)",
    "description": "<p>获取当前会员订阅的课程列表(分页)</p>",
    "group": "36._会员课程知识点模块",
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
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课程单元编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>学员课程单元知识点编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>学员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "point_id",
            "description": "<p>课件单元知识点编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_unlock",
            "description": "<p>是否解锁 0 未解锁 1 已解锁</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unlock_time",
            "description": "<p>解锁时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_finish",
            "description": "<p>是否完成学习 0 未完成 1 已完成</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "point params": [
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程单元知识点编号</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件级别单元编号</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>课件单元知识点名称</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "picture",
            "description": "<p>课程单元知识点图片</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "url",
            "description": "<p>课程单元知识点资源地址</p>"
          },
          {
            "group": "point params",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/course/unit/point/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Relevance/Relevance/PointController.php",
    "groupTitle": "36._会员课程知识点模块",
    "name": "GetApiMemberCourseUnitPointListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/course/unit/point/list?page={page}",
    "title": "01. 会员课程知识点列表(分页)",
    "description": "<p>获取当前会员订阅的课程列表(分页)</p>",
    "group": "36._会员课程知识点模块",
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
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课程单元编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>学员课程单元知识点编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>学员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "point_id",
            "description": "<p>课件单元知识点编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_unlock",
            "description": "<p>是否解锁 0 未解锁 1 已解锁</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unlock_time",
            "description": "<p>解锁时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_finish",
            "description": "<p>是否完成学习 0 未完成 1 已完成</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "point params": [
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程单元知识点编号</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件级别单元编号</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>课件单元知识点名称</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "picture",
            "description": "<p>课程单元知识点图片</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "url",
            "description": "<p>课程单元知识点资源地址</p>"
          },
          {
            "group": "point params",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/course/unit/point/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Relevance/Relevance/Point2Controller.php",
    "groupTitle": "36._会员课程知识点模块",
    "name": "GetApiMemberCourseUnitPointListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/course/unit/point/select",
    "title": "02. 会员课程知识点列表(不分页)",
    "description": "<p>获取当前会员订阅的课程知识点列表(不分页)</p>",
    "group": "36._会员课程知识点模块",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课程单元编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>学员课程单元知识点编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>学员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "point_id",
            "description": "<p>课件单元知识点编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_unlock",
            "description": "<p>是否解锁 0 未解锁 1 已解锁</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unlock_time",
            "description": "<p>解锁时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_finish",
            "description": "<p>是否完成学习 0 未完成 1 已完成</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "point params": [
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程单元知识点编号</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件级别单元编号</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>课件单元知识点名称</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "picture",
            "description": "<p>课程单元知识点图片</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "url",
            "description": "<p>课程单元知识点资源地址</p>"
          },
          {
            "group": "point params",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/course/unit/point/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Relevance/Relevance/PointController.php",
    "groupTitle": "36._会员课程知识点模块",
    "name": "GetApiMemberCourseUnitPointSelect"
  },
  {
    "type": "get",
    "url": "/api/member/course/unit/point/select",
    "title": "02. 会员课程知识点列表(不分页)",
    "description": "<p>获取当前会员订阅的课程知识点列表(不分页)</p>",
    "group": "36._会员课程知识点模块",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课程单元编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>学员课程单元知识点编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>学员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "point_id",
            "description": "<p>课件单元知识点编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_unlock",
            "description": "<p>是否解锁 0 未解锁 1 已解锁</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unlock_time",
            "description": "<p>解锁时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_finish",
            "description": "<p>是否完成学习 0 未完成 1 已完成</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "point params": [
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程单元知识点编号</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件级别单元编号</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>课件单元知识点名称</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "picture",
            "description": "<p>课程单元知识点图片</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "url",
            "description": "<p>课程单元知识点资源地址</p>"
          },
          {
            "group": "point params",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/course/unit/point/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Relevance/Relevance/Point2Controller.php",
    "groupTitle": "36._会员课程知识点模块",
    "name": "GetApiMemberCourseUnitPointSelect"
  },
  {
    "type": "get",
    "url": "/api/member/course/unit/point/status/{id}",
    "title": "04. 当前课程知识点是否完成",
    "description": "<p>获取当前课程知识点是否完成</p>",
    "group": "36._会员课程知识点模块",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>学员课程单元知识点编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Boolean",
            "optional": false,
            "field": "true",
            "description": "<p>|false 是否完成</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/course/unit/point/status/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Relevance/Relevance/Point2Controller.php",
    "groupTitle": "36._会员课程知识点模块",
    "name": "GetApiMemberCourseUnitPointStatusId"
  },
  {
    "type": "get",
    "url": "/api/member/course/unit/point/status/{id}",
    "title": "04. 当前课程知识点是否完成",
    "description": "<p>获取当前课程知识点是否完成</p>",
    "group": "36._会员课程知识点模块",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>学员课程单元知识点编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Boolean",
            "optional": false,
            "field": "true",
            "description": "<p>|false 是否完成</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/course/unit/point/status/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Relevance/Relevance/PointController.php",
    "groupTitle": "36._会员课程知识点模块",
    "name": "GetApiMemberCourseUnitPointStatusId"
  },
  {
    "type": "get",
    "url": "/api/member/course/unit/point/view/{id}",
    "title": "03. 当前会员课程知识点详情",
    "description": "<p>获取当前会员课程知识点详情</p>",
    "group": "36._会员课程知识点模块",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>学员课程单元知识点编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>学员课程单元知识点编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>学员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "point_id",
            "description": "<p>课件单元知识点编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_unlock",
            "description": "<p>是否解锁 0 未解锁 1 已解锁</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unlock_time",
            "description": "<p>解锁时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_finish",
            "description": "<p>是否完成学习 0 未完成 1 已完成</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "point params": [
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程单元知识点编号</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件级别单元编号</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>课件单元知识点名称</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "picture",
            "description": "<p>课程单元知识点图片</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "url",
            "description": "<p>课程单元知识点资源地址</p>"
          },
          {
            "group": "point params",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/course/unit/point/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Relevance/Relevance/Point2Controller.php",
    "groupTitle": "36._会员课程知识点模块",
    "name": "GetApiMemberCourseUnitPointViewId"
  },
  {
    "type": "get",
    "url": "/api/member/course/unit/point/view/{id}",
    "title": "03. 当前会员课程知识点详情",
    "description": "<p>获取当前会员课程知识点详情</p>",
    "group": "36._会员课程知识点模块",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>学员课程单元知识点编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>学员课程单元知识点编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>学员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件单元编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "point_id",
            "description": "<p>课件单元知识点编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_unlock",
            "description": "<p>是否解锁 0 未解锁 1 已解锁</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "unlock_time",
            "description": "<p>解锁时间</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "is_finish",
            "description": "<p>是否完成学习 0 未完成 1 已完成</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ],
        "point params": [
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程单元知识点编号</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "courseware_id",
            "description": "<p>课件编号</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "level_id",
            "description": "<p>课件级别编号</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "unit_id",
            "description": "<p>课件级别单元编号</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>课件单元知识点名称</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "picture",
            "description": "<p>课程单元知识点图片</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "url",
            "description": "<p>课程单元知识点资源地址</p>"
          },
          {
            "group": "point params",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "point params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>添加时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/course/unit/point/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Relevance/Relevance/PointController.php",
    "groupTitle": "36._会员课程知识点模块",
    "name": "GetApiMemberCourseUnitPointViewId"
  },
  {
    "type": "post",
    "url": "/api/member/course/unit/point/finish",
    "title": "05. 完成课程知识点",
    "description": "<p>当前会员学习完成了课程知识点</p>",
    "group": "36._会员课程知识点模块",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>学员课程单元知识点编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/course/unit/point/finish"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Relevance/Relevance/Point2Controller.php",
    "groupTitle": "36._会员课程知识点模块",
    "name": "PostApiMemberCourseUnitPointFinish"
  },
  {
    "type": "post",
    "url": "/api/member/course/unit/point/finish",
    "title": "05. 完成课程知识点",
    "description": "<p>当前会员学习完成了课程知识点</p>",
    "group": "36._会员课程知识点模块",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>学员课程单元知识点编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/course/unit/point/finish"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Relevance/Relevance/PointController.php",
    "groupTitle": "36._会员课程知识点模块",
    "name": "PostApiMemberCourseUnitPointFinish"
  },
  {
    "type": "get",
    "url": "/api/member/role/info",
    "title": "01. 获取会员角色信息",
    "description": "<p>获取会员角色信息</p>",
    "group": "38._会员角色模块",
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
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>角色描述</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/role/info"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/RoleController.php",
    "groupTitle": "38._会员角色模块",
    "name": "GetApiMemberRoleInfo"
  },
  {
    "type": "get",
    "url": "/api/member/order/goods/logistics/list?page={page}",
    "title": "01. 商品订单物流列表(分页)",
    "description": "<p>获取当前会员商品订单物流列表(分页)</p>",
    "group": "40._商品订单物流模块",
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
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "company_name",
            "description": "<p>物流公司</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "logistics_no",
            "description": "<p>物流单号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "logistics_status",
            "description": "<p>物流状态</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/goods/logistics/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Order/Goods/LogisticsController.php",
    "groupTitle": "40._商品订单物流模块",
    "name": "GetApiMemberOrderGoodsLogisticsListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/order/goods/logistics/select",
    "title": "02. 商品订单物流列表(不分页)",
    "description": "<p>获取当前会员商品订单物流列表(不分页)</p>",
    "group": "40._商品订单物流模块",
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
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "company_name",
            "description": "<p>物流公司</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "logistics_no",
            "description": "<p>物流单号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "logistics_status",
            "description": "<p>物流状态</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/goods/logistics/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Order/Goods/LogisticsController.php",
    "groupTitle": "40._商品订单物流模块",
    "name": "GetApiMemberOrderGoodsLogisticsSelect"
  },
  {
    "type": "get",
    "url": "/api/member/order/goods/logistics/view/{id}",
    "title": "03. 商品订单物流详情",
    "description": "<p>获取当前会员商品订单物流的详情</p>",
    "group": "40._商品订单物流模块",
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
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "company_name",
            "description": "<p>物流公司</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "logistics_no",
            "description": "<p>物流单号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "logistics_status",
            "description": "<p>物流状态</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/goods/logistics/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Order/Goods/LogisticsController.php",
    "groupTitle": "40._商品订单物流模块",
    "name": "GetApiMemberOrderGoodsLogisticsViewId"
  },
  {
    "type": "get",
    "url": "/api/member/order/course/logistics/list?page={page}",
    "title": "01. 课程订单物流列表(分页)",
    "description": "<p>获取当前会员课程订单物流列表(分页)</p>",
    "group": "40._课程订单物流模块",
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
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "present_name",
            "description": "<p>礼包名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>礼包周期</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "company_name",
            "description": "<p>物流公司</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "logistics_no",
            "description": "<p>物流单号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "logistics_status",
            "description": "<p>物流状态</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/course/logistics/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Order/Course/LogisticsController.php",
    "groupTitle": "40._课程订单物流模块",
    "name": "GetApiMemberOrderCourseLogisticsListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/order/course/logistics/select",
    "title": "02. 课程订单物流列表(不分页)",
    "description": "<p>获取当前会员课程订单物流列表(不分页)</p>",
    "group": "40._课程订单物流模块",
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
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "present_name",
            "description": "<p>礼包名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>礼包周期</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "company_name",
            "description": "<p>物流公司</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "logistics_no",
            "description": "<p>物流单号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "logistics_status",
            "description": "<p>物流状态</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/course/logistics/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Order/Course/LogisticsController.php",
    "groupTitle": "40._课程订单物流模块",
    "name": "GetApiMemberOrderCourseLogisticsSelect"
  },
  {
    "type": "get",
    "url": "/api/member/order/course/logistics/view/{id}",
    "title": "03. 课程订单物流详情",
    "description": "<p>获取当前会员课程订单物流的详情</p>",
    "group": "40._课程订单物流模块",
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
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "present_name",
            "description": "<p>礼包名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>礼包周期</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "company_name",
            "description": "<p>物流公司</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "logistics_no",
            "description": "<p>物流单号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "logistics_status",
            "description": "<p>物流状态</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/course/logistics/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Order/Course/LogisticsController.php",
    "groupTitle": "40._课程订单物流模块",
    "name": "GetApiMemberOrderCourseLogisticsViewId"
  },
  {
    "type": "get",
    "url": "/api/member/order/goods/list?page={page}",
    "title": "01. 商品订单列表(分页)",
    "description": "<p>获取当前会员商品订单列表(分页)</p>",
    "group": "42._商品订单模块",
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
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "order_no",
            "description": "<p>订单号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "goods_id",
            "description": "<p>商品编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "exchange_type",
            "description": "<p>兑换方式 1 棒棒糖 2 现金</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "lollipop_total",
            "description": "<p>棒棒糖数量</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_money",
            "description": "<p>支付金额</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_type",
            "description": "<p>支付类型 1 支付宝 2 微信 4 苹果</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "order_status",
            "description": "<p>订单状态 0 待发货 1 待签收 2 已签收</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>支付时间</p>"
          }
        ],
        "goods params": [
          {
            "group": "goods params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品编号</p>"
          },
          {
            "group": "goods params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "goods params",
            "type": "String",
            "optional": false,
            "field": "cover",
            "description": "<p>商品封面</p>"
          },
          {
            "group": "goods params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>商品描述</p>"
          },
          {
            "group": "goods params",
            "type": "Number",
            "optional": false,
            "field": "lollipop_total",
            "description": "<p>兑换需要棒棒糖数量</p>"
          },
          {
            "group": "goods params",
            "type": "Number",
            "optional": false,
            "field": "cash_money",
            "description": "<p>兑换需要现金</p>"
          },
          {
            "group": "goods params",
            "type": "Number",
            "optional": false,
            "field": "exchange_total",
            "description": "<p>已兑换数量</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/goods/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Order/GoodsController.php",
    "groupTitle": "42._商品订单模块",
    "name": "GetApiMemberOrderGoodsListPagePage"
  },
  {
    "type": "get",
    "url": "/api/member/order/goods/select",
    "title": "02. 商品订单列表(不分页)",
    "description": "<p>获取当前会员商品订单列表(不分页)</p>",
    "group": "42._商品订单模块",
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
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "order_no",
            "description": "<p>订单号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "goods_id",
            "description": "<p>商品编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "exchange_type",
            "description": "<p>兑换方式 1 棒棒糖 2 现金</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "lollipop_total",
            "description": "<p>棒棒糖数量</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_money",
            "description": "<p>支付金额</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_type",
            "description": "<p>支付类型 1 支付宝 2 微信 4 苹果</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "order_status",
            "description": "<p>订单状态 0 待发货 1 待签收 2 已签收</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>支付时间</p>"
          }
        ],
        "goods params": [
          {
            "group": "goods params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品编号</p>"
          },
          {
            "group": "goods params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "goods params",
            "type": "String",
            "optional": false,
            "field": "cover",
            "description": "<p>商品封面</p>"
          },
          {
            "group": "goods params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>商品描述</p>"
          },
          {
            "group": "goods params",
            "type": "Number",
            "optional": false,
            "field": "lollipop_total",
            "description": "<p>兑换需要棒棒糖数量</p>"
          },
          {
            "group": "goods params",
            "type": "Number",
            "optional": false,
            "field": "cash_money",
            "description": "<p>兑换需要现金</p>"
          },
          {
            "group": "goods params",
            "type": "Number",
            "optional": false,
            "field": "exchange_total",
            "description": "<p>已兑换数量</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/goods/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Order/GoodsController.php",
    "groupTitle": "42._商品订单模块",
    "name": "GetApiMemberOrderGoodsSelect"
  },
  {
    "type": "get",
    "url": "/api/member/order/goods/view/{id}",
    "title": "03. 商品订单详情",
    "description": "<p>获取当前会员商品订单的详情</p>",
    "group": "42._商品订单模块",
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
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "order_no",
            "description": "<p>订单号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "goods_id",
            "description": "<p>商品编号</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "exchange_type",
            "description": "<p>兑换方式 1 棒棒糖 2 现金</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "lollipop_total",
            "description": "<p>棒棒糖数量</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_money",
            "description": "<p>支付金额</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "pay_type",
            "description": "<p>支付类型 1 支付宝 2 微信 4 苹果</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "order_status",
            "description": "<p>订单状态 0 待发货 1 待签收 2 已签收</p>"
          },
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>支付时间</p>"
          }
        ],
        "goods params": [
          {
            "group": "goods params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品编号</p>"
          },
          {
            "group": "goods params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "goods params",
            "type": "String",
            "optional": false,
            "field": "cover",
            "description": "<p>商品封面</p>"
          },
          {
            "group": "goods params",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>商品描述</p>"
          },
          {
            "group": "goods params",
            "type": "Number",
            "optional": false,
            "field": "lollipop_total",
            "description": "<p>兑换需要棒棒糖数量</p>"
          },
          {
            "group": "goods params",
            "type": "Number",
            "optional": false,
            "field": "cash_money",
            "description": "<p>兑换需要现金</p>"
          },
          {
            "group": "goods params",
            "type": "Number",
            "optional": false,
            "field": "exchange_total",
            "description": "<p>已兑换数量</p>"
          }
        ],
        "member params": [
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "open_id",
            "description": "<p>第三方登录编号</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "member_no",
            "description": "<p>会员号</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "member params",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "is_freeze",
            "description": "<p>是否冻结 1 冻结 2 不冻结</p>"
          },
          {
            "group": "member params",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>注册时间</p>"
          }
        ],
        "logistics params": [
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单物流编号</p>"
          },
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "logistics params",
            "type": "String",
            "optional": false,
            "field": "company_name",
            "description": "<p>物流公司名称</p>"
          },
          {
            "group": "logistics params",
            "type": "String",
            "optional": false,
            "field": "logistics_no",
            "description": "<p>物流单号</p>"
          },
          {
            "group": "logistics params",
            "type": "Number",
            "optional": false,
            "field": "logistics_status",
            "description": "<p>物流状态 0 待发货 1 待签收 2 已签收</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/goods/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Order/GoodsController.php",
    "groupTitle": "42._商品订单模块",
    "name": "GetApiMemberOrderGoodsViewId"
  },
  {
    "type": "post",
    "url": "/api/member/order/course/cancel",
    "title": "07. 商品订单取消",
    "description": "<p>当前会员取消商品订单</p>",
    "group": "42._商品订单模块",
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
        "url": "/api/member/order/course/cancel"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Order/GoodsController.php",
    "groupTitle": "42._商品订单模块",
    "name": "PostApiMemberOrderCourseCancel"
  },
  {
    "type": "post",
    "url": "/api/member/order/goods/change",
    "title": "09. 修改商品订单",
    "description": "<p>当前会员修改修改商品订单</p>",
    "group": "42._商品订单模块",
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
            "field": "address_id",
            "description": "<p>收货地址编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pay_type",
            "description": "<p>支付类型 1 支付包 2 微信 4 苹果</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/goods/change"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Order/GoodsController.php",
    "groupTitle": "42._商品订单模块",
    "name": "PostApiMemberOrderGoodsChange"
  },
  {
    "type": "post",
    "url": "/api/member/order/goods/finish",
    "title": "08. 商品订单完成",
    "description": "<p>当前会员收到货物后，点击完成商品订单</p>",
    "group": "42._商品订单模块",
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
        "url": "/api/member/order/goods/finish"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Order/GoodsController.php",
    "groupTitle": "42._商品订单模块",
    "name": "PostApiMemberOrderGoodsFinish"
  },
  {
    "type": "post",
    "url": "/api/member/order/goods/handle",
    "title": "04. 创建商品订单",
    "description": "<p>当前会员购买商品后，创建商品订单</p>",
    "group": "42._商品订单模块",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "goods_id",
            "description": "<p>商品编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "address_id",
            "description": "<p>收货地址编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "exchange_type",
            "description": "<p>兑换方式 1 棒棒糖 2 现金</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lollipop_total",
            "description": "<p>棒棒糖数量（与支付金额只填写一个默认使用棒棒糖）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pay_money",
            "description": "<p>支付金额（与棒棒糖数量只填写一个默认使用棒棒糖）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pay_type",
            "description": "<p>支付类型 1 支付包 2 微信 3 棒棒糖 4 苹果</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/member/order/goods/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Order/GoodsController.php",
    "groupTitle": "42._商品订单模块",
    "name": "PostApiMemberOrderGoodsHandle"
  },
  {
    "type": "post",
    "url": "/api/member/order/goods/pay",
    "title": "05. 订单支付确认",
    "description": "<p>当前会员支付完成后，调用接口更改订单支付状态</p>",
    "group": "42._商品订单模块",
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
        "url": "/api/member/order/goods/pay"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Member/Relevance/Order/GoodsController.php",
    "groupTitle": "42._商品订单模块",
    "name": "PostApiMemberOrderGoodsPay"
  },
  {
    "type": "get",
    "url": "/api/education/course/share/data",
    "title": "01. 课程分享数据",
    "description": "<p>获取课程解锁详情</p>",
    "group": "47._课程分享模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "course_id",
            "description": "<p>课程编号（不能为空）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "Number",
            "optional": false,
            "field": "picture",
            "description": "<p>分享图片</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/education/course/share/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Education/Course/Relevance/ShareController.php",
    "groupTitle": "47._课程分享模块",
    "name": "GetApiEducationCourseShareData"
  }
] });
