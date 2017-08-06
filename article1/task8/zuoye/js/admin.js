$(document).ready(function(){
    var $newsTable = $('#newstable tbody');
    refresh();

    $('#btnupdate').click(function(e){
        e.preventDefault();
        if($('#newstitle').val() === '' || $('#newstype').val() === '' || $('#newsimg').val() === '' || $('#newstime').val() === '' || $('#newssrc').val() === ''){
            if($('#newstitle').val() === ''){
                $('#newstitle').parent().addClass('has-error');
            } else {
                $('#newstitle').parent().removeClass('has-error');
            }
            if($('#newstype').val() === ''){
                $('#newstype').parent().addClass('has-error');
            } else {
                $('#newstype').parent().removeClass('has-error');
            }
            if($('#newsimg').val() === ''){
                $('#newsimg').parent().addClass('has-error');
            } else {
                $('#newsimg').parent().removeClass('has-error');
            }
            if($('#newstime').val() === ''){
                $('#newstime').parent().addClass('has-error');
            } else {
                $('#newstime').parent().removeClass('has-error');
            }
            if($('#newssrc').val() === ''){
                $('#newssrc').parent().addClass('has-error');
            } else {
                $('#newssrc').parent().removeClass('has-error');
            }
        
        } else {
            var jsonNews ={
                newstitle:$('#newstitle').val(),
                newstype:$('#newstype').val(),
                newsimg:$('#newsimg').val(),
                newstime:$('#newstime').val(),
                newssrc:$('#newssrc').val(),
            };
            $.ajax({
                url:'http://localhost/zuoye/server/insert.php',
                type:'post',
                data:jsonNews,
                datatype:'json',
                success:function(data){
                    refresh();
                }
            })
        }
    })
    //删除新闻的功能
    var deleteId = null;
    $newsTable.on('click','.btn-danger',function(){
        $('#deleteModal').modal('show');
        deleteId = $(this).parent().prevAll().eq(5).html();
    })

    $('#confirmDelete').click(function(){
        if(deleteId){
            $.ajax({
                url:'http://localhost/zuoye/server/delete.php',
                type:'post',
                data:{newsid:deleteId},
                success:function(data){
                    console.log('删除成功');
                    $('#deleteModal').modal('hide');
                    refresh();
                }
            })
        }
    })

    //修改新闻的功能
    var updateId = null;
    $newsTable.on('click','.btn-primary',function(){
        $('#updateModal').modal('show');
        updateId = $(this).parent().prevAll().eq(5).html();
        $.ajax({
            url:'http://localhost/zuoye/server/curnews.php',
            type:'post',
            datatype:'json',
            data:{newsid:updateId},
            success:function(data){
                $('#u-newstitle').val(data[0].newstitle);
                $('#u-newstype').val(data[0].newstype);
                $('#u-newsimg').val(data[0].newsimg);
                $('#u-newstime').val(data[0].newstime.split(' ')[0]);
                $('#u-newssrc').val(data[0].newssrc);
            }
        })
    })

    $('#confirmUpdate').click(function(){
        $.ajax({
            url:'http://localhost/zuoye/server/update.php',
            type:'post',
            data:{
                newstitle:$('#u-newstitle').val(),
                newstype:$('#u-newstype').val(),
                newsimg:$('#u-newsimg').val(),
                newstime:$('#newstime').val(),
                newssrc:$('#newssrc').val(),
                id:updateId
            },
            success:function(data){
                console.log('删除成功');
                $('#updateModal').modal('hide');
                refresh();
            }
        })
    })
    function refresh(){
        //empty table
        $newsTable.empty();
        $.ajax({
            type:'get',
            url:'http://localhost/zuoye/server/getnews.php',
            data:{newstype:null},
            success:function(data){
                console.log(data);
                data.forEach(function(item,index){
                    console.log(index,item);
                    var $tdid = $('<td>').html(item.id);
                    var $tdtype = $('<td>').html(item.newstype);
                    var $tdtitle = $('<td>').html(item.newstitle);
                    var $tdimg = $('<td>').html(item.newsimg);
                    var $tddata = $('<td>').html(item.newstime);
                    var $tdsrc = $('<td>').html(item.newssrc);
                    var $tdbtn = $('<td>');
                    var $btnEdit=$('<button>').addClass('btn btn-primary btn-xs').html('修改');
                    var $btnDelete=$('<button>').addClass('btn btn-danger btn-xs').html('删除');
                    $tdbtn.append($btnEdit,$btnDelete);
                    var $row = $('<tr>').append($tdid,$tdtype,$tdtitle,$tdimg,$tdsrc,$tddata,$tdbtn);
                    $newsTable.append($row);
                })
            }
        })
    }
});

