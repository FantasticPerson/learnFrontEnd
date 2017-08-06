<?php
    // $GLOBALS['b'] = 'test';
    // session_start();
    // $_SESSION['views']=1;
    
    header("Content-type:text/html;charset=utf-8");
    $username =  $_GET['username'];
    if($username == 'admin'){
        echo 'sucusee';
    } else {
        echo 'failure';
    }
?>