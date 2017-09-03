
// Saves options to chrome.storage
function save_options() {
    var msg = document.getElementById('textBox');
    var status = document.getElementById('status');
    status.textContent = msg.value + ' added to block list';
}
var urlArray = ["https://www.facebook.com/*","https://www.youtube.com/*", "https://www.netflix.com/ca/", "https://twitter.com/", "https://www.instagram.com/"];
localStorage.setItem("urlArray", JSON.stringify(urlArray));
var localStorageArray;

function save_msg(){
var msg = document.getElementById('textBox');
urlArray.push(msg.value);
localStorage.setItem("urlArray", JSON.stringify(urlArray));
JSON.parse(localStorage.getItem('urlArray'));
document.getElementById("textBox").value = "";
chrome.runtime.sendMessage({message: "TurnON"});
}

function clear_list(){
  //var urlArray = ["https://www.facebook.com/*","https://www.youtube.com/*", "https://www.netflix.com/ca/", "https://twitter.com/", "https://www.instagram.com/"];
  //var status = document.getElementById('status');
  status.textContent = "List Cleared!";
  localStorage.clear();
  //urlArray = ["https://www.facebook.com/*","https://www.youtube.com/*", "https://www.netflix.com/ca/", "https://twitter.com/", "https://www.instagram.com/"];
  //localStorage.setItem("urlArray", JSON.stringify(urlArray))
  chrome.runtime.sendMessage({message: "TurnON"});
}

document.getElementById('save').addEventListener('click', save_options);
document.getElementById("save").addEventListener("click", save_msg);
document.getElementById("clear").addEventListener("click", clear_list);