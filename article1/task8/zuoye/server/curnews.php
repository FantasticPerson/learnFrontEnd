<?php
    header("Content-type:application/json;charset=utf-8");
    require_once('db.php');

    if($link){
        $newid = $_POST['newsid'];
        mysqli_query($link,"SET NAMES utf8");
        $sql = "SELECT * FROM `news` WHERE `id`={$newid}";
        $result = mysqli_query($link,$sql); 
        $sendData = array();
        if(!$result){
            die('Error'.mysqli_error($link));
        }
        while($row = mysqli_fetch_assoc($result)){
            array_push($sendData,array(
                'id'=>$row['id'],
                'newstype'=>$row['newstype'],
                'newstitle'=>$row['newstitle'],
                'newsimg'=>$row['newsimg'],
                'newstime'=>$row['newstime'],
                'newssrc'=>$row['newssrc']
            ));
        }
        echo json_encode($sendData);
    }
?>