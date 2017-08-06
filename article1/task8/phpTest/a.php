<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <?php
        // require_once('b.php');
        // include_once('b.php');
        // echo $b;
        // echo $GLOBALS['b'];
        // if(1>2){
        //  echo "我的第一段PHP";
        // }else{ 
        //     echo "hello php";
        // }
        // $a = "测试";
        // echo $a;
        // if(isset($a)){
        //     echo $a;
        // }
        // $arr = array('0'=>"苹果",'1'=>"测试");
        // echo json_encode($arr);
        // echo $arr[0];
        // echo $_SESSION['views'];

        
?>
<form action='b.php' method='get'>
        <label for='username'>用户名</label>
            <input type='text' name='username'/>
            <p></p>
            <label for='password'>密码</label>
            <input type='text' name='password'/>
            <input type='submit' value='提交'/>
        </form>
    </body>
</html>