// FIREFOX VERSION

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Message received:", request);
  sendResponse({ status: "Message processed successfully" });
});

browser.browserAction.onClicked.addListener(tab => { 
  console.log("Extension icon clicked");
  browser.scripting.executeScript(
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

browser.runtime.onInstalled.addListener((details) => {
  console.log("Extension Babelio Anti-Quanti installée ou mise à jour.");

  if (details.reason === "install") {
      // Étapes spécifiques pour une nouvelle installation
      console.log("Première installation de l'extension.");
      
      // Exemple : ouvrir une page de bienvenue
      browser.tabs.create({ url: "welcome.html" });
  } else if (details.reason === "update") {
      // Étapes spécifiques pour une mise à jour
      console.log("Extension mise à jour vers la version", browser.runtime.getManifest().version);
  }

  // Configuration initiale ou injection de scripts sur des onglets existants
  browser.tabs.query({}, (tabs) => {
      for (let tab of tabs) {
          if (tab.url && tab.url.includes("babelio.com")) {
              browser.scripting.executeScript({
                  target: { tabId: tab.id },
                  files: ["dist/content.bundle.js"]
              }).catch((error) => {
                  console.error("Erreur d'injection de script :", error);
              });
          }
      }
  });
});
