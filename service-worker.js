let store = {
    title: ''
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.name === 'setData') {
        store.title = message.data.title
    }

    if (message === 'getData') {
        sendResponse(store)
    }

    if (message === 'pub') {
        chrome.tabs.create({
            url: "https://mp.csdn.net/mp_blog/creation/editor?from=mp"
        })
    }
});