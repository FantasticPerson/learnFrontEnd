<?php
    header("Content-type:application/json;charset=utf-8");

    require_once('db.php');

    if($link){
        //插入新闻
        $newstitle = $_POST['newstitle'];
        $newstype = $_POST['newstype'];
        $newsimg = $_POST['newsimg'];
        $newstime = $_POST['newstime'];
        $newssrc = $_POST['newssrc'];

        $sql = "INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES ('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";
        mysqli_query($link,"SET NAMES utf8");
        $result = mysqli_query($link,$sql);
        if(!$result){
            die('Error'.mysqli_error($link));
        }

        echo json_encode(array('success'=>'ok'));
    }
?>