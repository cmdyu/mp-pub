chrome.runtime.sendMessage({
    name: 'setData',
    data: {
        title: document.querySelector("#activity-name").innerText
    }
})