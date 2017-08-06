<?php
    header("Content-type:application/json;charset=utf-8");
    
    // $arr = array(
    //     'newstype'=>'百家',
    //     'newsimg'=>'img/1.jpeg',
    //     'newstime'=>'2016-02-28',
    //     'newssrc'=>'极客学院',
    //     'newstitle'=>'测试ajax'
    //     );
    // echo json_encode($arr);
    $link = mysqli_connect('localhost','root','123','baidunews',3306);
    if($link){
        //执行成功的过程
        if($_GET['newstype']){
            $newstype = $_GET['newstype'];
            $sql = "SELECT * FROM `news` WHERE `newstype`='{$newstype}'";
            mysqli_query($link,"SET NAMES utf8");
            $result = mysqli_query($link,$sql);
            if($result){
                $sendData = array();
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
            } else {
                echo json_encode(array('success'=>'none'));
            }
        } else {
            $sql = 'SELECT * FROM news';
            mysqli_query($link,"SET NAMES utf8");
            $result = mysqli_query($link,$sql);
            $sendData = array();
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
        
    } else {
        die('Error'.mysqli_error($link));
        echo json_encode(array('连接信息'=>'链接失败'));
    }
    mysqli_close($link);
?>