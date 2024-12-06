chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Message received:", request);
  sendResponse({ status: "Message processed successfully" });
});

chrome.action.onClicked.addListener(tab => {
  console.log("Extension icon clicked");
  chrome.scripting.executeScript(
      {
          target: { tabId: tab.id },
          func: () => {
              console.log("Script executed in the active tab.");
          }
      },
      () => {
          console.log("Execution completed.");
      }
  );
});
