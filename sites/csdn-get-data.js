setTimeout(() => {
    chrome.runtime.sendMessage('getData', res => {
        const titleInput = document.querySelector("#txtTitle")

        titleInput.value = res.title
        // 触发字数校验
        titleInput.dispatchEvent(new Event('input'))

        document.querySelector("#cke_1_contents > iframe").contentWindow.document.body.innerHTML = res.content
    })
}, 6000)