<?php
namespace App\Events\Api\Member;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

/**
 * 金额事件
 */
class MoneyEvent
{
  use Dispatchable, InteractsWithSockets, SerializesModels;

  public $member_id = null;
  public $money     = null;

  /**
   * Create a new event instance.
   *
   * @return void
   */
  public function __construct($member_id, $money)
  {
    $this->member_id = $member_id;
    $this->money     = $money;
  }

  /**
   * Get the channels the event should broadcast on.
   *
   * @return \Illuminate\Broadcasting\Channel|array
   */
  public function broadcastOn()
  {
    return new PrivateChannel('channel-name');
  }
}
