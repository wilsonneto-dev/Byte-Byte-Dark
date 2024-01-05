chrome.tabs.onUpdated.addListener((tabId, tab) => {
    try {
        if (tab.url) {
            chrome.tabs.sendMessage(tabId, {
                type: "NAVIGATION",
                page: tab.url,
            });
        }
    } catch (error) { }
});
