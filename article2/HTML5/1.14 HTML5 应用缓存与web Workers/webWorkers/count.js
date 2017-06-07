/**
 * Created by wdd on 2017/6/6.
 */
var countNum = 0;
function count(){
    postMessage(countNum);
    countNum++;
    setTimeout(count,1000);
}
count();