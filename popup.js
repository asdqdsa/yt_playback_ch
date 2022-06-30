let changeColor = document.getElementById("changeColor");
let changePre = document.getElementById("changePre");

chrome.storage.sync.get("color", ({ color }) => {
	changeColor.style.backgroundColor = color;
});


// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});
changePre.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor2,
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
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {

		document.getElementsByTagName("video")[0].playbackRate += 0.5;
		console.log(document.getElementsByTagName("video")[0].playbackRate);
		changeColor.textContent = document.getElementsByTagName("video")[0].playbackRate;
  });
}
function setPageBackgroundColor2() {
  chrome.storage.sync.get("color", ({ color }) => {

		document.getElementsByTagName("video")[0].playbackRate = 1;
		console.log(document.getElementsByTagName("video")[0].playbackRate);
		changePre.innerHTML = document.getElementsByTagName("video")[0].playbackRate;
  });
}
