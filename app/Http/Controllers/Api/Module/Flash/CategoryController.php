<?php
namespace App\Http\Controllers\Api\Module\Flash;

use Illuminate\Http\Request;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-06-08
 *
 * 快讯分类控制器类
 */
class CategoryController extends BaseController
{
  // 模型名称
  protected $_model = 'App\Models\Api\Module\Flash\Category';

  // 排序方式
  protected $_order = [
    ['key' => 'sort', 'value' => 'desc'],
    ['key' => 'create_time', 'value' => 'desc'],
  ];


  /**
   * @api {get} /api/flash/category/select 01. 快讯分类数据
   * @apiDescription 获取快讯分类不分页列表数据
   * @apiGroup 50. 快讯分类模块
   *
   * @apiSuccess (字段说明) {Number} id 快讯分类编号
   * @apiSuccess (字段说明) {String} title 快讯分类标题
   *
   * @apiSampleRequest /api/flash/category/select
   * @apiVersion 1.0.0
   */
  public function select(Request $request)
  {
    try
    {
      $condition = self::getSimpleWhereData();

      // 对用户请求进行过滤
      $filter = $this->filter($request->all());

      $condition = array_merge($condition, $this->_where, $filter);

      // 获取关联对象
      $relevance = self::getRelevanceData($this->_relevance, 'select');

      $response = $this->_model::getList($condition, $relevance, $this->_order);

      return self::success($response);
    }
    catch(\Exception $e)
    {
      // 记录异常信息
      self::record($e);

      return self::error(Code::ERROR);
    }
  }
}
