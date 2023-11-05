setTimeout(() => {
    chrome.runtime.sendMessage('getData', res => {
        const titleInput = document.querySelector("#txtTitle")

        titleInput.value = res.title
        // 触发字数校验
        titleInput.dispatchEvent(new Event('input'))
    })
}, 3000)