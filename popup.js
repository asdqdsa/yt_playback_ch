let speedUp = document.getElementById("speedUp");
let speedDown = document.getElementById("speedDown");
let currentSpeed = document.getElementById("currentSpeed");

chrome.storage.sync.get("color", ({ color }) => {
	speedUp.style.backgroundColor = color;
});


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
function increasePlayBackSpeed() {
  chrome.storage.sync.get("color", ({ color }) => {

		document.getElementsByTagName("video")[0].playbackRate += 0.5;
		console.log(document.getElementsByTagName("video")[0].playbackRate);
		currentSpeed.textContent = document.getElementsByTagName("video")[0].playbackRate;
  });
}
function decreasePlayBackSpeed() {
  chrome.storage.sync.get("color", ({ color }) => {

		document.getElementsByTagName("video")[0].playbackRate -= 0.5;
		console.log(document.getElementsByTagName("video")[0].playbackRate);

  });
}
