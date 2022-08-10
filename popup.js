let speedUp = document.getElementById("speedUp");
let slowDown = document.getElementById("slowDown");
let currentSpeed = document.getElementById("currentSpeed");

// Updates currentSpeed when popup is opened
window.onload = async function() {
  console.log('Popup opened');
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => chrome.storage.sync.set({actaulSpeed: document.getElementsByTagName("video")[0].playbackRate}),
  });
  let { actaulSpeed }  = await chrome.storage.sync.get(['actaulSpeed']);
  currentSpeed.textContent = actaulSpeed;
}

// When the button is clicked, inject +/-0.5 into current page
speedUp.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      console.log(document.getElementsByTagName("video")[0].playbackRate += 0.5);
      chrome.storage.sync.set({actaulSpeed: document.getElementsByTagName("video")[0].playbackRate});
    },
  });
  let { actaulSpeed }  = await chrome.storage.sync.get(['actaulSpeed'])
  currentSpeed.textContent = actaulSpeed + 0.5;
});

slowDown.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      console.log(document.getElementsByTagName("video")[0].playbackRate -= 0.5);
      chrome.storage.sync.set({actaulSpeed: document.getElementsByTagName("video")[0].playbackRate});
    },
  });
  let { actaulSpeed }  = await chrome.storage.sync.get(['actaulSpeed'])
  currentSpeed.textContent = actaulSpeed - 0.5;
});
