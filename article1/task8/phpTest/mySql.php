<?php
    $con = mysqli_connect('localhost','root','123');
    if(!$con){
        die('could not connect:'.mysqli_error());
    } else {
        // echo 'mysql ok';
        mysqli_select_db($con,'phplesson');
        //$res = mysqli_query($con,"INSERT INTO `news` (`title`, `name`, `content`) VALUES ('11', '123', '123')");
        //$res = mysqli_query($con,"DELETE FROM `news` WHERE `title`=1");
        $res = mysqli_query($con,"UPDATE `news` SET `name`='666' WHERE `title`=11");
        if(!$res){
            die('Error'.mysqli_error($con));
        } else {
            echo 'success';
        }
    }

    mysqli_close($con);
?>