console.log("hello world");

var timeSec = 2000; //wait 2 seconds
var myReloadPage = function() {
    location.reload();
}
    
setTimeout(myReloadPage, timeSec );
