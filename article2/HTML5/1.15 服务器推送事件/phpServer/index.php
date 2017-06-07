<?php
/**
 * Created by PhpStorm.
 * User: wdd
 * Date: 2017/6/6
 * Time: 16:18
 */
header('Content-Type:text/event-stream');
for($i = 0;$i<100;$i++){
    date_default_timezone_set("Asia/Shanghai");
    echo 'data:'.date('Y-m-d H-i-s');
    echo "\n\n";
    flush();
    sleep(1);
}
