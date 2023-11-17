let store = {
    title: '',
    content: ''
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.name === 'setData') {
        store.title = message.data.title
        store.content = message.data.content
    }

    if (message === 'getData') {
        sendResponse(store)
    }

    if (message === 'pub-to-csdn') {
        chrome.tabs.create({
            url: "https://mp.csdn.net/mp_blog/creation/editor?from=mp"
        })
    }
});