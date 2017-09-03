
//var localStorageArray = JSON.parse(localStorage.getItem('urlArray'));
var block =  function(details){
  return {cancel: true}};

chrome.runtime.onMessage.addListener(function(request,sender,sendRespose){
if (request.message == "TurnON"){
	if (JSON.parse(localStorage.getItem('urlArray')) === null){
	var localStorageArray = ["https://www.facebook.com/*","https://www.youtube.com/*", "https://www.netflix.com/ca/", "https://twitter.com/", "https://www.instagram.com/"];
	alert("Blocked Websites: " + localStorageArray);
    //localStorage.setItem("urlArray", JSON.stringify(urlArray));
    //var localStorageArray = JSON.parse(localStorage.getItem('urlArray'));
} else {
	var localStorageArray = JSON.parse(localStorage.getItem('urlArray'));
	alert("Blocked Websites: " + localStorageArray );
}
	chrome.webRequest.onBeforeRequest.addListener(block,
   	 { urls: localStorageArray }, ["blocking"]);
   }
	else if (request.message == "TurnOFF"){
   		chrome.webRequest.onBeforeRequest.removeListener(block,
		 { urls: localStorageArray }, ["blocking"]);
	}
	});

