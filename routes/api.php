<?php

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', [
  'namespace'  =>  'Api',
  'middleware'  =>  'serializer:array'
], function ($api)
{
  $api->group([
    'middleware'  =>  'api.throttle', // 启用节流限制
    'limit'  =>  1000, // 允许次数
    'expires'  =>  1, // 分钟
  ], function ($api)
  {
    $api->group(['namespace' => 'System'], function ($api) {
      $api->post('login', 'LoginController@login'); // 密码登录
      $api->post('sms_login', 'LoginController@sms_login'); // 短信登录
      $api->post('sms_code', 'LoginController@sms_code'); // 登录验证码
      $api->post('weixin_login', 'LoginController@weixin_login'); // 微信登录
      $api->post('apple_login', 'LoginController@apple_login'); // 苹果登录
      $api->post('register', 'LoginController@register');
      $api->post('bind_mobile', 'LoginController@bind_mobile');
      $api->post('bind_code', 'LoginController@bind_code');
      $api->post('reset_code', 'LoginController@reset_code');
      $api->post('back_mobile', 'LoginController@back_mobile');
      $api->get('logout', 'LoginController@logout'); // 退出

      // 系统基础数据路由
      $api->group(['prefix' => 'system'], function ($api) {
        $api->get('kernel', 'SystemController@kernel'); // 系统信息路由
      });

      // 上传路由
      $api->group(['prefix' => 'file', 'middleware' => ['auth:api', 'refresh.token', 'failure']], function ($api) {
        // 上传文件
        $api->post('file', 'FileController@file');
        // 上传图片
        $api->post('picture', 'FileController@picture');
      });
    });



    $api->group(['namespace' => 'Module'], function ($api) {

      // 公共路由
      $api->group(['namespace' => 'Common', 'prefix' => 'common'], function ($api) {

        // 省市县路由
        $api->group(['prefix' => 'area'], function ($api) {
          $api->get('list', 'AreaController@list');
        });

        // 系统协议路由
        $api->group(['prefix' => 'agreement'], function ($api) {
          $api->get('about', 'AgreementController@about');
          $api->get('user', 'AgreementController@user');
          $api->get('employ', 'AgreementController@employ');
          $api->get('privacy', 'AgreementController@privacy');
          $api->get('specification', 'AgreementController@specification');
          $api->get('liability', 'AgreementController@liability');
        });

        // 支付回调路由
        $api->group(['prefix' => 'notify'], function ($api) {
          $api->any('wechat', 'NotifyController@wechat');
          $api->any('alipay', 'NotifyController@alipay');
          $api->any('apple', 'NotifyController@apple');
        });

        // 客服路由
        $api->group(['prefix' => 'service'], function ($api) {
          $api->post('data', 'ServiceController@data');
        });

        // 支付类型路由
        $api->group(['prefix' => 'pay'], function ($api) {
          $api->post('data', 'PayController@data');
        });
      });



      // 广告路由
      $api->group(['prefix' => 'advertising'], function ($api) {
        $api->get('select', 'AdvertisingController@select');

        $api->group(['namespace' => 'Advertising', 'prefix' => 'position'], function ($api) {
          $api->get('list', 'PositionController@list');
          $api->get('select', 'PositionController@select');
          $api->get('view/{id}', 'PositionController@view');
        });
      });


      // 投诉路由
      $api->group(['namespace' => 'Complain', 'prefix' => 'complain'], function ($api) {
        $api->group(['prefix' => 'category'], function ($api) {
          // 投诉分类路由
          $api->get('select', 'CategoryController@select');
        });
      });


      // 常见问题路由
      $api->group(['prefix'  => 'problem'], function ($api) {
        $api->get('list', 'ProblemController@list');
        $api->get('select', 'ProblemController@select');
        $api->get('view/{id}', 'ProblemController@view');

        // 常见问题分类路由
        $api->group(['namespace' => 'Problem', 'prefix'  => 'category'], function ($api) {
          $api->get('select', 'CategoryController@select');
        });
      });


      // 项目路由
      $api->group(['prefix'  => 'project'], function ($api) {
        // 项目分类路由
        $api->group(['namespace' => 'Project', 'prefix'  => 'category'], function ($api) {
          $api->get('select', 'CategoryController@select');
        });
      });



      // 快讯路由
      $api->group(['prefix'  => 'flash'], function ($api) {
        $api->get('list', 'FlashController@list');
        $api->get('view/{id}', 'FlashController@view');

        // 快讯关联路由
        $api->group(['namespace' => 'Flash'], function ($api) {

          // 快讯分类路由
          $api->group(['prefix'  => 'category'], function ($api) {
            $api->get('select', 'CategoryController@select');
          });

          // 快讯评论路由
          $api->group(['prefix'  => 'comment'], function ($api) {
            $api->get('select', 'CommentController@select');
          });
        });
      });


      // 资讯路由
      $api->group(['prefix'  => 'information'], function ($api) {
        $api->get('list', 'InformationController@list');
        $api->get('recommend', 'InformationController@recommend');
        $api->get('related', 'InformationController@related');
        $api->get('view/{id}', 'InformationController@view');

        // 资讯关联路由
        $api->group(['namespace' => 'Information'], function ($api) {

          // 资讯分类路由
          $api->group(['prefix'  => 'category'], function ($api) {
            $api->get('select', 'CategoryController@select');
          });

          // 资讯评论路由
          $api->group(['prefix'  => 'comment'], function ($api) {
            $api->get('select', 'CommentController@select');
          });
        });
      });


      // 社区路由
      $api->group(['prefix'  => 'community'], function ($api) {
        $api->get('list', 'CommunityController@list');
        $api->get('hot', 'CommunityController@hot');
        $api->get('view/{id}', 'CommunityController@view');

        // 社区关联路由
        $api->group(['namespace' => 'Community'], function ($api) {

          // 社区分类路由
          $api->group(['prefix'  => 'category'], function ($api) {
            $api->get('select', 'CategoryController@select');
          });

          // 社区评论路由
          $api->group(['prefix'  => 'comment'], function ($api) {
            $api->get('select', 'CommentController@select');
          });
        });
      });


      // 通知路由
      $api->group(['namespace' => 'Notice', 'prefix' => 'notice', 'middleware' => ['auth:api', 'refresh.token', 'failure']], function ($api) {

        // 通知分类路由
        $api->group(['prefix'  => 'category'], function ($api) {
          $api->get('select', 'CategoryController@select');
        });
      });


      // 贵宾路由
      $api->group(['prefix'  => 'vip'], function ($api) {
        $api->get('list', 'VipController@list');
        $api->get('select', 'VipController@select');
        $api->get('view/{id}', 'VipController@view');
      });



      // 会员路由
      $api->group(['prefix'  => 'member', 'middleware' => ['auth:api', 'refresh.token', 'failure']], function ($api) {
        $api->get('archive', 'MemberController@archive');
        $api->get('asset', 'MemberController@asset');
        $api->get('status', 'MemberController@status');
        $api->post('handle', 'MemberController@handle');
        $api->get('data', 'MemberController@data');
        $api->post('password', 'MemberController@password');
        $api->post('change_code', 'MemberController@change_code');
        $api->post('change_mobile', 'MemberController@change_mobile');


        // 会员关联内容路由
        $api->group(['namespace' => 'Member'], function ($api) {

          // 会员认证路由
          $api->group(['prefix'  => 'certification'], function ($api) {
            $api->post('status', 'CertificationController@status');
            $api->post('personal', 'CertificationController@personal');
            $api->post('company', 'CertificationController@company');
            $api->post('project', 'CertificationController@project');
            $api->get('data', 'CertificationController@data');
          });

          // 会员资产路由
          $api->group(['prefix'  => 'asset'], function ($api) {
            $api->get('list', 'AssetController@list');
            $api->get('income', 'AssetController@income');
            $api->get('expend', 'AssetController@expend');
          });

          // 会员消息路由
          $api->group(['prefix'  => 'notice'], function ($api) {
            $api->get('list', 'NoticeController@list');
            $api->post('finish', 'NoticeController@finish');
          });

          // 会员分享路由
          $api->group(['prefix'  => 'share'], function ($api) {
            $api->get('data', 'ShareController@data');
          });


          // 会员关注路由
          $api->group(['prefix'  => 'attention'], function ($api) {
            $api->get('list', 'AttentionController@list');
            $api->post('status', 'AttentionController@status');
            $api->post('handle', 'AttentionController@handle');
          });

          // 会员邀请路由
          $api->group(['prefix'  => 'invitation'], function ($api) {
            $api->get('list', 'InvitationController@list');
            $api->post('status', 'InvitationController@status');
            $api->post('handle', 'InvitationController@handle');
          });






          // 会员投诉路由
          $api->group(['prefix'  => 'complain'], function ($api) {
            $api->get('list', 'ComplainController@list');
            $api->get('view/{id}', 'ComplainController@view');
            $api->post('handle', 'ComplainController@handle');
          });


          // 会员客服路由
          $api->group(['prefix'  => 'contact'], function ($api) {
            $api->post('handle', 'ContactController@handle');
          });


          // 会员设置路由
          $api->group(['prefix'  => 'setting'], function ($api) {
            $api->get('data', 'SettingController@data');
            $api->post('handle', 'SettingController@handle');
          });


          // 贵宾路由
          $api->group(['prefix'  => 'vip'], function ($api) {
            $api->post('status', 'VipController@status');
            $api->post('handle', 'VipController@handle');
          });


          // 会员快讯路由
          $api->group(['namespace' => 'Flash', 'prefix'  => 'flash'], function ($api) {

            // 会员快讯利益路由
            $api->group(['prefix'  => 'benefit'], function ($api) {
              $api->post('bullish', 'BenefitController@bullish');
              $api->post('bearish', 'BenefitController@bearish');
            });

            // 会员快讯评论路由
            $api->group(['prefix'  => 'comment'], function ($api) {
              $api->post('handle', 'CommentController@handle');
            });
          });


          // 会员资讯路由
          $api->group(['prefix'  => 'information'], function ($api) {
            $api->get('list', 'InformationController@list');
            $api->get('view/{id}', 'InformationController@view');
            $api->post('handle', 'InformationController@handle');
            $api->post('delete', 'InformationController@delete');


            // 会员资讯关联路由
            $api->group(['namespace' => 'Information'], function ($api) {

              // 会员资讯浏览路由
              $api->group(['prefix'  => 'browse'], function ($api) {
                $api->get('list', 'BrowseController@list');
                $api->post('clear', 'BrowseController@clear');
              });

              // 会员资讯评论路由
              $api->group(['prefix'  => 'comment'], function ($api) {
                $api->post('handle', 'CommentController@handle');
              });

              // 会员资讯点赞路由
              $api->group(['prefix'  => 'approval'], function ($api) {
                $api->get('list', 'ApprovalController@list');
                $api->post('status', 'ApprovalController@status');
                $api->post('handle', 'ApprovalController@handle');
              });

              // 会员资讯收藏路由
              $api->group(['prefix'  => 'collection'], function ($api) {
                $api->get('list', 'CollectionController@list');
                $api->post('status', 'CollectionController@status');
                $api->post('handle', 'CollectionController@handle');
              });
            });
          });


          // 会员社区路由
          $api->group(['prefix'  => 'community'], function ($api) {
            $api->get('list', 'CommunityController@list');
            $api->get('view/{id}', 'CommunityController@view');
            $api->post('handle', 'CommunityController@handle');


            // 会员资讯关联路由
            $api->group(['namespace' => 'Community'], function ($api) {

              // 会员资讯评论路由
              $api->group(['prefix'  => 'comment'], function ($api) {
                $api->post('handle', 'CommentController@handle');
              });

              // 会员资讯点赞路由
              $api->group(['prefix'  => 'approval'], function ($api) {
                $api->get('list', 'ApprovalController@list');
                $api->post('status', 'ApprovalController@status');
                $api->post('handle', 'ApprovalController@handle');
              });

              // 会员资讯收藏路由
              $api->group(['prefix'  => 'collection'], function ($api) {
                $api->get('list', 'CollectionController@list');
                $api->post('status', 'CollectionController@status');
                $api->post('handle', 'CollectionController@handle');
              });
            });
          });







          // 会员送货地址路由
          $api->group(['prefix'  => 'address'], function ($api) {
            $api->get('list', 'AddressController@list');
            $api->get('select', 'AddressController@select');
            $api->get('view/{id}', 'AddressController@view');
            $api->get('default', 'AddressController@default');
            $api->post('handle', 'AddressController@handle');
            $api->post('delete', 'AddressController@delete');
          });

          // 会员点赞路由
          $api->group(['prefix'  => 'approval'], function ($api) {
            $api->get('list', 'ApprovalController@list');
            $api->get('select', 'ApprovalController@select');
            $api->post('status', 'ApprovalController@status');
            $api->post('handle', 'ApprovalController@handle');
          });

          // 会员课程路由
          $api->group(['prefix'  =>  'course'], function ($api) {
            $api->get('list', 'CourseController@list');
            $api->get('select', 'CourseController@select');
            $api->get('center', 'CourseController@center');
            $api->get('view/{id}', 'CourseController@view');
            $api->get('status/{id}', 'CourseController@status');
            $api->get('addition/{id}', 'CourseController@addition');
            $api->post('apply', 'CourseController@apply');
            $api->post('finish', 'CourseController@finish');

            // 会员课程单元路由
            $api->group(['namespace' => 'Relevance', 'prefix'  =>  'unit'], function ($api) {
              $api->get('list', 'UnitController@list');
              $api->get('select', 'UnitController@select');
              $api->get('view/{id}', 'UnitController@view');

              // 会员课程单元知识点路由
              $api->group(['namespace' => 'Relevance', 'prefix'  =>  'point'], function ($api) {
                $api->get('list', 'PointController@list');
                $api->get('select', 'PointController@select');
                $api->get('view/{id}', 'PointController@view');
                $api->get('status/{id}', 'PointController@status');
                $api->post('finish', 'PointController@finish');
              });
            });
          });


          // 会员评论路由
          $api->group(['prefix'  => 'comment'], function ($api) {
            $api->get('list', 'CommentController@list');
            $api->get('select', 'CommentController@select');
            $api->post('handle', 'CommentController@handle');
          });



        });
      });



      // 教育中心路由
      $api->group(['namespace' => 'Education', 'prefix' => 'education'], function ($api) {

        // 课件路由
        $api->group(['prefix' => 'courseware'], function ($api) {
          $api->any('list', 'CoursewareController@list');
          $api->get('recommend', 'CoursewareController@recommend');
          $api->get('view/{id}', 'CoursewareController@view');

          // 课件级别
          $api->group(['namespace' => 'Courseware'], function ($api) {

            // 课件分类
            $api->group(['prefix' => 'category'], function ($api) {
              $api->get('select', 'CategoryController@select');
            });

            // 课件老师
            $api->group(['prefix' => 'teacher'], function ($api) {
              $api->get('select', 'TeacherController@select');
              $api->get('view/{id}', 'TeacherController@view');
            });

            // 课件知识点
            $api->group(['prefix' => 'point'], function ($api) {
              $api->any('list', 'PointController@list');
              $api->get('select', 'PointController@select');
              $api->get('view/{id}', 'PointController@view');
            });

          });
        });
      });
    });
  });
});
