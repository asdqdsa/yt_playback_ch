/* let color = '#1b3dd8';

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({ color });
	console.log('Default background color set to %cblack', `color: ${color}`);
});
 */

/* window.postMessage({
	type: "FROM_PAGE_TO_POPUP",
	text: document.getElementsByTagName("video")[0].playbackRate,
}, "*"); */

/* chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting === "hello")
      sendResponse({farewell: "goodbye"});
  }
) */

/* let currentSpeed = document.getElementById("currentSpeed"); */

/* chrome.storage.sync.set("speed", ({speed}) => {
	currentSpeed.textContent = "???";
}); */

/* chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log(request, sender, sendResponse('111'), '!!');
	}); */

/* 	chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
		const {speed} = request;
		chrome.storage.sync.set(request);

	}); */

/* 	window.addEventListener("message", function(event) {
		document.getElementById("currentSpeed").textContent = event.data.type;
	});
 */
/* 	chrome.runtime.onInstalled.addListener((tab) => {
		console.log('installed');
	}); */

/* 	chrome.runtime.onMessage.addListener((request, sender, response) => {
		console.log(request);
	});

chrome.tabs.onUpdated.addListener((tabId, tab) => {
	if ( tab.url && tab.url.includes("youtube.com/watch")) {
		const queryParams = tab.url.split("?")[1];
		const urlParams = new URLSearchParams(queryParams);
		console.lpg(urlParams);

		chrome.tabs.sendMessage(tabId, {
			type: "NEW",
			videoId: urlParams.get("v"),
			text: "backend says hi",
		});
	}
});
 */
