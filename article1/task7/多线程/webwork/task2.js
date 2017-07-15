/**
 * Created by wdd on 2017/7/15.
 */
connect = function(e){
    // connect_number = connect_number+1;
    var result = 0;

    port.onmessage = function(e) {
        var port = e.port[0];
        port.postMessage("connect success");
        port.onmessage=function() {
            if (e.data !== 'get') {
                for (var i = 0; i < e.data; i++) {
                    result += i;
                }
                port.postMessage(result);
            }
        }
    }
};