document.getElementById('pub-button').onclick = () => {
  chrome.runtime.sendMessage('pub', (response) => {
  })
}