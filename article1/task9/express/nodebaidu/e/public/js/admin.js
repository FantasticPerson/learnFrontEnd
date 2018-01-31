$(document).ready(function(){
    var csrftoken;
    var $newsTable = $('#newstable tbody');
    $.ajax({
        url:'/admin/gettoken',
        type:'get',
        success:function(data){
            csrftoken = data;
            refresh();
        }
    })

    

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
                newstitle:filterXSS($('#newstitle').val()),
                newstype:filterXSS($('#newstype').val()),
                newsimg:filterXSS($('#newsimg').val()),
                newstime:filterXSS($('#newstime').val()),
                newssrc:filterXSS($('#newssrc').val()),
                _csrf:csrftoken
            };
            $.ajax({
                url:'/admin/insert',
                type:'post',
                data:jsonNews,
                datatype:'json',
                success:function(data){
                    refresh();

                    $('#newstitle').val('');
                    $('#newstype').val('精选');
                    $('#newsimg').val('');
                    $('#newstime').val('');
                    $('#newssrc').val('');
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
                url:'/admin/delete',
                type:'post',
                data:{
                    newsid:deleteId,
                    _csrf:csrftoken
                },
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
            url:'/admin/curnews',
            type:'post',
            datatype:'json',
            data:{
                newsid:updateId,
                _csrf:csrftoken
            },
            success:function(data){
                $('#u-newstitle').val(data[0].newstitle);
                $('#u-newstype').val(data[0].newstype);
                $('#u-newsimg').val(data[0].newsimg);
                $('#u-newstime').val(data[0].newstime.split('T')[0]);
                $('#u-newssrc').val(data[0].newssrc);
            }
        })
    })

    $('#confirmUpdate').click(function(){
        $.ajax({
            url:'/admin/updateNews',
            type:'post',
            datatype:'json',
            data:{
                newstitle:filterXSS($('#u-newstitle').val()),
                newstype:filterXSS($('#u-newstype').val()),
                newsimg:filterXSS($('#u-newsimg').val()),
                newstime:filterXSS($('#u-newstime').val()),
                newssrc:filterXSS($('#u-newssrc').val()),
                id:updateId,
                _csrf:csrftoken
            },
            success:function(data){
                console.log('删除成功');
                $('#updateModal').modal('hide');
                refresh();
            },
            error:function(q,e){
                console.log(q,e);
            }
        })
    })
    function refresh(){
        //empty table
        $newsTable.empty();
        $.ajax({
            type:'get',
            url:'/admin/getnews',
            data:{
                newstype:null,
                _csrf:csrftoken
            },
            success:function(data){
                console.log(data);
                data.forEach(function(item,index){
                    console.log(index,item);
                    var $tdid = $('<td>').html(filterXSS(item.id));
                    var $tdtype = $('<td>').html(filterXSS(item.newstype));
                    var $tdtitle = $('<td>').html(filterXSS(item.newstitle));
                    var $tdimg = $('<td>').html(filterXSS(item.newsimg));
                    var $tddata = $('<td>').html(filterXSS(item.newstime));
                    var $tdsrc = $('<td>').html(filterXSS(item.newssrc));
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

