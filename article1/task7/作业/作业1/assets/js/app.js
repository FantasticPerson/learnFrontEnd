$(document).ready(function(){
    $('.p-span').on('click',function(){
        if(!$(this).hasClass('p-span-show')){
            for(var i=1;i< 5;i++){
                var className = '.p-span-'+i;
                var className2 = '.my-content-'+i;
                if($(className)[0] != $(this)[0]){
                    $(className).removeClass('p-span-show');
                    $(className2).css({display:'none'});
                } else {
                    $(className).addClass('p-span-show');
                    $(className2).css({display:'block'});
                }
            }
        }
    })
});