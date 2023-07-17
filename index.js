let tabStates = {}

chrome.action.onClicked.addListener((tab) => {
    if (!tabStates[tab.id]) {
        tabStates[tab.id] = {}
    }

    if (tabStates[tab.id]['injected']) {
        if (tabStates[tab.id]['injectedAll']) {
            tabStates[tab.id] = {}

            chrome.scripting
                .executeScript({
                    target: { tabId: tab.id },
                    files: ["js/close-vid.js"]
                })
        } else {
            tabStates[tab.id]['injectedAll'] = true

            chrome.scripting
                .executeScript({
                    target: { tabId: tab.id },
                    files: ["js/another-vid.js"]
                })
        }
    } else {
        tabStates[tab.id]['injected'] = true

        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            files: ["js/inject.js"]
        });
    }
})