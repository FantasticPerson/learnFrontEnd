// 单例模式
$(document).ready(function(){
    var index = {
        init :function(){
            var me = this;
            me.render();
            me.bind();
        },
        render:function(){
            var me =this;
            me.btn = $('.p-span');
        },
        bind:function(){
            var me = this;
            me.btn.click(function(){
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
        }
    }
    index.init();
});