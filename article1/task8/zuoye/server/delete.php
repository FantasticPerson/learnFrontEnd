<?php
    header("Content-type:application/json;charset=utf-8");
    require_once('db.php');

    if($link){
        $newid = $_POST['newsid'];
        mysqli_query($link,"SET NAMES utf8");
        $sql = "DELETE FROM `news` WHERE `news`.`id`={$newid}";
        $result = mysqli_query($link,$sql); 
        if(!$result){
            die('Error'.mysqli_error($link));
        }
        echo json_encode(array('success'=>'ok'));
    }
?>