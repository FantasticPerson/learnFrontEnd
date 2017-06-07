/**
 * Created by wdd on 2017/6/6.
 */
var serverData,statusDiv;
var SERVER_URL = 'index.php';
window.onload = function(){
    serverData = document.getElementById('ServerData');
    statusDiv = document.getElementById('statusDiv');
    startListenServer();
};

function startListenServer(){
    statusDiv.innerHTML = "start connect server ...";
      var es = new EventSource(SERVER_URL);
      es.onopen = openHandler;
      es.onerror = errorHandler;
      es.onmessage = messageHandler;
}

function openHandler(e){
    statusDiv.innerHTML = 'server open';

}

function errorHandler(e){
    statusDiv.innerHTML = "error";
}

function messageHandler(e){
    serverData.innerHTML = e.data;
}