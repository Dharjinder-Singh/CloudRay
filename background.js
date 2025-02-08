

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url) {
        let meetingData = null;

        if (tab.url.includes("zoom.us/j/")) {
            const match = tab.url.match(/zoom\.us\/j\/(\d+)/);
            if (match) {
                meetingData = { type: "zoom", meeting_id: match[1] };
            }
        } else if (tab.url.includes("meet.google.com/")) {
            const match = tab.url.match(/meet\.google\.com\/([a-zA-Z0-9-]+)/);
            if (match) {
                meetingData = { type: "google_meet", url: tab.url };
            }
        }

        if (meetingData) {
            chrome.storage.local.set({ meetingData });
            chrome.action.openPopup();
        }
    }
});
