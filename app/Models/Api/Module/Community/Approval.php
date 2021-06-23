<?php
namespace App\Models\Api\Module\Community;

use App\Models\Common\Module\Community\Approval as Common;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-06-21
 *
 * 社区点赞模型类
 */
class Approval extends Common
{

  // 隐藏的属性
  protected $hidden = [
    'id',
    'organization_id',
    'community_id',
    'member_id',
    'status',
    'create_time',
    'update_time'
  ];



  // 关联函数 ------------------------------------------------------

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-06-21
   * ------------------------------------------
   * 社区点赞与社区关联函数
   * ------------------------------------------
   *
   * 社区点赞与社区关联函数
   *
   * @return [关联对象]
   */
  public function community()
  {
    return $this->belongsTo(
      'App\Models\Api\Module\Community',
      'community_id',
      'id'
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-06-21
   * ------------------------------------------
   * 社区点赞与学员关联函数
   * ------------------------------------------
   *
   * 社区点赞与学员关联函数
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
