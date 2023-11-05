setTimeout(() => {
    console.log(8)

    chrome.runtime.sendMessage('getData', res => {
        console.log(7,res)
        document.querySelector("#txtTitle").value = res.title
    })
}, 3000)