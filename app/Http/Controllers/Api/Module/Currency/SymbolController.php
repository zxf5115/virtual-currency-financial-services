<?php
namespace App\Http\Controllers\Api\Module\Currency;

use Illuminate\Http\Request;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-06-28
 *
 * 货币交易对控制器类
 */
class SymbolController extends BaseController
{
  // 模型
  protected $_model = 'App\Models\Api\Module\Currency\Symbol';

  protected $_where = [
    'state' => 'online'
  ];

  // 查询条件
  protected $_params = [
    'symbol',
  ];

  // 排序
  protected $_order = [
    ['key' => 'sort', 'value' => 'desc'],
    ['key' => 'create_time', 'value' => 'desc'],
  ];


  /**
   * @api {get} /api/currency/symbol/list?page={page} 01. 货币交易对列表
   * @apiDescription 获取货币交易对分页列表
   * @apiGroup 81. 货币交易对模块
   *
   * @apiParam {int} page 当前页数
   * @apiParam {String} symbol 货币标题
   *
   * @apiSuccess (字段说明) {Number} id 货币编号
   * @apiSuccess (字段说明) {String} symbol 交易对
   * @apiSuccess (字段说明) {String} base_currency 交易对中的基础币种
   * @apiSuccess (字段说明) {String} quote_currency 交易对中的报价币种
   * @apiSuccess (字段说明) {String} state 交易对状态
   *
   * @apiSampleRequest /api/currency/symbol/list
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
   * @api {get} /api/currency/symbol/view/{id} 02. 货币交易对详情
   * @apiDescription 获取货币交易对详情
   * @apiGroup 81. 货币交易对模块
   *
   * @apiSuccess (字段说明) {Number} id 货币编号
   * @apiSuccess (字段说明) {String} symbol 交易对
   * @apiSuccess (字段说明) {String} base_currency 交易对中的基础币种
   * @apiSuccess (字段说明) {String} quote_currency 交易对中的报价币种
   * @apiSuccess (字段说明) {String} state 交易对状态
   *
   * @apiSampleRequest /api/currency/symbol/view/{id}
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