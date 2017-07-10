var calculateStr = '';
var showStr = '';
var showPercent = false;
var hasCalculate = false;
function onItemClick(){
    showPercent = false;
    var target = event.target || event.srcElement;
    var value = target.innerText;
    if(value >= "0" && value <= "9" && value.length === 1){
        if(hasCalculate){
            calculateStr = '';
            showStr = '';
        }
        calculateStr += value;
        showStr += value;
        hasCalculate = false;
    } else if(value === "+" || value === "-" || value === "X" || value === "÷"){
        calculateStr += value;
        showStr = '';
        hasCalculate = false;
    } else if(value === '清屏'){
        calculateStr = '';
        showStr = '';
        hasCalculate = false;
    } else if(value === '删除'){
        if(showStr.length > 0){
            showStr = showStr.slice(0,showStr.length-1);
            calculateStr = calculateStr.slice(0,calculateStr.length-1);
        }
        hasCalculate = false;
    } else if(value === '+/-' || value === '1/x' || value === '%' || value === '√'){
        calculate(value);
    } else {
        calculate();
    }
    showScreen();
}

function showScreen(){
    var itemScreen = document.getElementsByClassName('screen')[0];
    if(showPercent){
        var tempNumber = Number(showStr);
        tempNumber = tempNumber*100 + '%';
        itemScreen.innerText = tempNumber;
    } else {
        itemScreen.innerText = showStr === '' ? '0' : showStr;
    }
}

function calculate(value) {
    hasCalculate = true;
    var tempCalculater = calculateStr;
    if(calculateStr[0] === '-'){
        tempCalculater = tempCalculater.slice(1,tempCalculater.length)
    }

    var arr = tempCalculater.split(/[+X÷\-]{1}/);
    var arr2 = tempCalculater.match(/[+X÷\-]{1}/g);
    if(calculateStr[0] === '-'){
        arr[0] = String(-Number(arr[0]));
    }
    var tempResult = 0;
    if(value){
        if((!arr2 || arr2.length === 0) && arr.length === 1){
            if(value === '+/-'){
                tempResult = -Number(calculateStr);
            } else if(value === '1/x'){
                if(Number(calculateStr) === 0){
                    tempResult = 0;
                } else {
                    tempResult = (1 / Number(calculateStr)).toFixed(9)
                }
            } else if(value === '%'){
                showPercent = true;
                tempResult = Number(calculateStr);
            } else if(value === '√'){
                if(Number(calculateStr) >0) {
                    tempResult = Math.sqrt(Number(calculateStr)).toFixed(9);
                } else {
                    tempResult = 0;
                }
            }
        } else {
            tempResult = 0;
        }
    } else {
        if (arr && arr2 && arr.length <= arr2.length + 1) {
            tempResult = getResult(arr[0], arr[1], arr2[0]);
            if (tempResult === 'Nan') {
                return;
            } else {
                for (var i = 1; i < arr.length - 1; i++) {
                    tempResult = getResult(tempResult, arr[i + 1], arr2[i]);
                    if (tempResult === 'Nan') {
                        break;
                    }
                }
            }
        } else if(arr.length === 1){
            tempResult = Number(arr[0]);
        }
    }
    if(tempResult === 0 || tempResult === undefined || tempResult === 'Nan'){
        calculateStr = ''
    } else {
        calculateStr = String(tempResult).replace(/\.*0*0$/, '');
    }
    showStr = calculateStr;
    showScreen();
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
    } else if(opt === '÷'){
        if(tNum2 === 0){
            return 'Nan';
        }
        return  (tNum1 / tNum2).toFixed(9);
    }
}