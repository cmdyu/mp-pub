chrome.runtime.sendMessage({
    name: 'setData',
    data: {
        title: document.querySelector("#activity-name").innerText,
        content: document.querySelector("#js_content").innerHTML
    }
})