<?php
namespace App\Http\Controllers\Api\Module\Currency;

use Illuminate\Http\Request;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-06-28
 *
 * 货币种类控制器类
 */
class CategoryController extends BaseController
{
  // 模型
  protected $_model = 'App\Models\Api\Module\Currency\Category';

  // 查询条件
  protected $_params = [
    'title',
  ];

  // 排序
  protected $_order = [
    ['key' => 'sort', 'value' => 'desc'],
    ['key' => 'create_time', 'value' => 'desc'],
  ];


  /**
   * @api {get} /api/currency/category/list?page={page} 01. 货币种类列表
   * @apiDescription 获取货币种类分页列表
   * @apiGroup 80. 货币种类模块
   *
   * @apiParam {int} page 当前页数
   * @apiParam {String} title 货币标题
   *
   * @apiSuccess (字段说明) {Number} id 货币种类编号
   * @apiSuccess (字段说明) {String} code 货币种类代码
   * @apiSuccess (字段说明) {String} title 货币种类名称
   * @apiSuccess (字段说明) {String} is_hot 是否热门
   * @apiSuccess (字段说明) {String} is_main 是否主流
   * @apiSuccess (字段说明) {String} is_defi 是否DeFi
   *
   * @apiSampleRequest /api/currency/category/list
   * @apiVersion 1.0.0
   */
  public function list(Request $request)
  {
    try
    {
      $condition = self::getSimpleWhereData();

      // 对用户请求进行过滤
      $filter = $this->filter($request->all());

      $condition = array_merge($condition, $this->_where, $filter);

      // 获取关联对象
      $relevance = self::getRelevanceData($this->_relevance, 'list');

      $response = $this->_model::getPaging($condition, $relevance, $this->_order);

      return self::success($response);
    }
    catch(\Exception $e)
    {
      // 记录异常信息
      self::record($e);

      return self::error(Code::ERROR);
    }
  }


  /**
   * @api {get} /api/currency/category/hot 02. 热门货币种类
   * @apiDescription 获取热门货币种类数据
   * @apiGroup 80. 货币种类模块
   *
   * @apiParam {int} total 显示数量，默认显示8个
   *
   * @apiSuccess (字段说明) {Number} id 货币种类编号
   * @apiSuccess (字段说明) {String} code 货币种类代码
   * @apiSuccess (字段说明) {String} title 货币种类名称
   * @apiSuccess (字段说明) {String} is_hot 是否热门
   * @apiSuccess (字段说明) {String} is_main 是否主流
   * @apiSuccess (字段说明) {String} is_defi 是否DeFi
   *
   * @apiSampleRequest /api/currency/category/hot
   * @apiVersion 1.0.0
   */
  public function hot(Request $request)
  {
    try
    {
      $condition = self::getSimpleWhereData(1, 'is_hot');

      // 对用户请求进行过滤
      $filter = $this->filter($request->all());

      $condition = array_merge($condition, $this->_where, $filter);

      $total = $request->total ?? 8;

      // 获取关联对象
      $relevance = self::getRelevanceData($this->_relevance, 'hot');

      $response = $this->_model::getList($condition, $relevance, $this->_order, false, $total);

      return self::success($response);
    }
    catch(\Exception $e)
    {
      // 记录异常信息
      self::record($e);

      return self::error(Code::ERROR);
    }
  }


  /**
   * @api {get} /api/currency/category/main 03. 主流货币种类
   * @apiDescription 获取主流货币种类数据
   * @apiGroup 80. 货币种类模块
   *
   * @apiParam {int} total 显示数量，默认显示8个
   *
   * @apiSuccess (字段说明) {Number} id 货币种类编号
   * @apiSuccess (字段说明) {String} code 货币种类代码
   * @apiSuccess (字段说明) {String} title 货币种类名称
   * @apiSuccess (字段说明) {String} is_hot 是否热门
   * @apiSuccess (字段说明) {String} is_main 是否主流
   * @apiSuccess (字段说明) {String} is_defi 是否DeFi
   *
   * @apiSampleRequest /api/currency/category/main
   * @apiVersion 1.0.0
   */
  public function main(Request $request)
  {
    try
    {
      $condition = self::getSimpleWhereData(1, 'is_main');

      // 对用户请求进行过滤
      $filter = $this->filter($request->all());

      $condition = array_merge($condition, $this->_where, $filter);

      $total = $request->total ?? 8;

      // 获取关联对象
      $relevance = self::getRelevanceData($this->_relevance, 'main');

      $response = $this->_model::getList($condition, $relevance, $this->_order, false, $total);

      return self::success($response);
    }
    catch(\Exception $e)
    {
      // 记录异常信息
      self::record($e);

      return self::error(Code::ERROR);
    }
  }


  /**
   * @api {get} /api/currency/category/defi 04. DeFi货币种类
   * @apiDescription 获取主流货币种类数据
   * @apiGroup 80. 货币种类模块
   *
   * @apiParam {int} total 显示数量，默认显示24个
   *
   * @apiSuccess (字段说明) {Number} id 货币种类编号
   * @apiSuccess (字段说明) {String} code 货币种类代码
   * @apiSuccess (字段说明) {String} title 货币种类名称
   * @apiSuccess (字段说明) {String} is_hot 是否热门
   * @apiSuccess (字段说明) {String} is_main 是否主流
   * @apiSuccess (字段说明) {String} is_defi 是否DeFi
   *
   * @apiSampleRequest /api/currency/category/defi
   * @apiVersion 1.0.0
   */
  public function defi(Request $request)
  {
    try
    {
      $condition = self::getSimpleWhereData(1, 'is_defi');

      // 对用户请求进行过滤
      $filter = $this->filter($request->all());

      $condition = array_merge($condition, $this->_where, $filter);

      $total = $request->total ?? 24;

      // 获取关联对象
      $relevance = self::getRelevanceData($this->_relevance, 'defi');

      $response = $this->_model::getList($condition, $relevance, $this->_order, false, $total);

      return self::success($response);
    }
    catch(\Exception $e)
    {
      // 记录异常信息
      self::record($e);

      return self::error(Code::ERROR);
    }
  }


  /**
   * @api {get} /api/currency/category/view/{id} 05. 货币种类详情
   * @apiDescription 获取货币种类详情
   * @apiGroup 80. 货币种类模块
   *
   * @apiSuccess (字段说明) {Number} id 货币种类编号
   * @apiSuccess (字段说明) {String} code 货币种类代码
   * @apiSuccess (字段说明) {String} title 货币种类名称
   * @apiSuccess (字段说明) {String} is_hot 是否热门
   * @apiSuccess (字段说明) {String} is_main 是否主流
   * @apiSuccess (字段说明) {String} is_defi 是否DeFi
   *
   * @apiSampleRequest /api/currency/category/view/{id}
   * @apiVersion 1.0.0
   */
  public function view(Request $request, $id)
  {
    try
    {
      $condition = self::getSimpleWhereData($id);

      // 获取关联对象
      $relevance = self::getRelevanceData($this->_relevance, 'view');

      $response = $this->_model::getRow($condition, $relevance);

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