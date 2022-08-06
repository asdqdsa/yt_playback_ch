let speedUp = document.getElementById("speedUp");
let speedDown = document.getElementById("slowDown");
let currentSpeed = document.getElementById("currentSpeed");

/* chrome.storage.sync.get("color", ({ color }) => {
	speedUp.style.backgroundColor = color;
}); */



/* chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });
}); */

// When the button is clicked, inject increasePlayBackSpeed into current page
speedUp.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: increasePlayBackSpeed,
  });
});
speedDown.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: decreasePlayBackSpeed,
  });
});

// document.addEventListener("keypress", function onPress(event) {
// 	if (event.key === event.shiftKey + "Quote") {
// 		document.getElementsByTagName("video")[0].playbackRate = 3 ;
// 	}
// 	if (event.key === event.shiftKey + "z") {
// 		document.getElementsByTagName("video")[0].playbackRate -= 0.5 ;
// 	}
// });

// The body of this function will be executed as a content script inside the
// current page
/* x */
function increasePlayBackSpeed() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.getElementsByTagName("video")[0].playbackRate += 0.5;
		console.log(document.getElementsByTagName("video")[0].playbackRate);
  });
/*   chrome.runtime.sendMessage({mes: document.getElementsByTagName("video")[0].playbackRate.toString()}); */

}

function decreasePlayBackSpeed() {
  chrome.storage.sync.get("color", ({ color }) => {

    document.getElementsByTagName("video")[0].playbackRate -= 0.5;
		console.log(document.getElementsByTagName("video")[0].playbackRate);
  });
}

chrome.scripting.executeScript({
  target: { tabId: tab.id },
  function: ()=> window.addEventListener('keydown', e => console.log(e)),
});
