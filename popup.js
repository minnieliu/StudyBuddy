
function onHandler(){
  chrome.runtime.sendMessage({message: "TurnON"});
   	//function(response) {
  //console.log(response.farewell)});
   //alert("Study Buddy is now enabled");
   window.close();
    };

function offHandler(){
	chrome.runtime.sendMessage({message: "TurnOFF"});
	//chrome.extension.sendRequest({redirect: "https://www.facebook.com/"});
    // alert("Study Buddy is now disabled");
      window.close();
};

document.getElementById("TurnON").addEventListener("click", onHandler);
document.getElementById("TurnOFF").addEventListener("click", offHandler);
