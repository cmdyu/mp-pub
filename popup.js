document.getElementById('pub-button-csdn').onclick = () => {
  chrome.runtime.sendMessage('pub-to-csdn', (response) => {
  })
}