setTimeout(() => {
    chrome.runtime.sendMessage('getData', res => {
        const titleInput = document.querySelector("#txtTitle")

        titleInput.value = res.title
        // 触发字数校验
        titleInput.dispatchEvent(new Event('input'))

        const contentInput = document.querySelector("#cke_1_contents > iframe").contentWindow.document.body
        contentInput.innerHTML = res.content
    })
}, 5000)