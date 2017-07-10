/**
 * Created by wdd on 2017/7/8.
 */
var calculateStr = '';
var showStr = '';
function onItemClick(){
    var value = event.target.innerText;
    if(value >= "0" && value <= "9"){
        calculateStr += value;
        showStr += value;
    } else if(value === "+" || value === "-" || value === "X" || value === "¡Â"){
        calculateStr += value;
        showStr = '';
    } else {
        calculate();
    }
    showScreen();
    console.log(calculateStr);
}

function showScreen(){
    var itemScreen = document.getElementsByClassName('screen')[0];
    itemScreen.innerText = showStr;
}

function calculate() {
    var arr = calculateStr.split(/[+\-X¡Â]{1}/);
    var arr2 = calculateStr.match(/[+\-X¡Â]{1}/g);
    calculateStr = '';
    if(arr && arr2 && arr.length === arr2.length+1){
        var tempResult = getResult(arr[0],arr[1],arr2[0]);
        if(tempResult === 'Nan'){
            return;
        }
        for(var i=1;i<arr2.length;i++){
            tempResult = getResult(tempResult,arr[i+1],arr2[i]);
            if(tempResult === 'Nan'){
                return;
            }
        }
        calculateStr = tempResult.replace(/\.0*/,'');
        showStr = calculateStr;
        showScreen();
    }
}

function getResult(num1,num2,opt){
    var tNum1 = (Number(num1));
    var tNum2 = (Number(num2));
    if(opt === '+'){
        return tNum1 + tNum2;
    } else if(opt === '-'){
        return  tNum1 - tNum2;
    } else if(opt === 'X'){
        return  (tNum1 * tNum2).toFixed(9);
    } else if(opt === '¡Â'){
        if(tNum2 === 0){
            return 'Nan';
        }
        return  (tNum1 / tNum2).toFixed(9);
    }
}