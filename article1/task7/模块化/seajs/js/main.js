/**
 * Created by wdd on 2017/7/15.
 */
define(function(require,exports,module){
    // var $=require('jquery');
    require('jquery');
    var index = require.async('index',function(index){
        index.doSomeThing();
    });
    console.log('index');
    // index.doSomeThing();
    console.log('1111');
});