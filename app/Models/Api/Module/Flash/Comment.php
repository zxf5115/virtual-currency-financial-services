<?php
namespace App\Models\Api\Module\Flash;

use App\Models\Common\Module\Flash\Comment as Common;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-06-10
 *
 * 快讯评论模型类
 */
class Comment extends Common
{
  use \Awobaz\Compoships\Compoships;


  // 隐藏的属性
  protected $hidden = [
    'organization_id',
    'flash_id',
    'member_id',
    'status',
    'update_time'
  ];


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-07-31
   * ------------------------------------------
   * 获取子集数据
   * ------------------------------------------
   *
   * 具体描述一些细节
   *
   * @param [type] $data [description]
   * @return [type]
   */
  public static function getChildData($data)
  {
    try
    {
      $response = [];

      if(empty($data))
      {
        $data;
      }

      foreach($data as $key => $item)
      {
        $where = [
          'parent_id' => $item['id']
        ];

        $order = [['key' => 'create_time', 'value' => 'desc']];

        $response = self::getList($where, 'member', $order, true);

        if(empty($response))
        {
          continue;
        }

        $data[$key]['child'] = $response;

        $data[$key]['child'] = self::getChildData($response);
      }

      return $data;
    }
    catch(\Exception $e)
    {
      // 记录异常信息
      record($e);

      return self::error(Code::ERROR);
    }
  }


  // 关联函数 ------------------------------------------------------

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-06-09
   * ------------------------------------------
   * 快讯评论置与快讯关联函数
   * ------------------------------------------
   *
   * 快讯评论置与快讯关联函数
   *
   * @return [关联对象]
   */
  public function flash()
  {
    return $this->hasMany(
      'App\Models\Api\Module\Flash',
      'flash_id',
      'id'
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-06-11
   * ------------------------------------------
   * 评论与评论人关联表
   * ------------------------------------------
   *
   * 评论与评论人关联表
   *
   * @return [关联对象]
   */
  public function member()
  {
    return $this->belongsTo(
      'App\Models\Api\Module\Member',
      'member_id',
      'id'
    );
  }
}
