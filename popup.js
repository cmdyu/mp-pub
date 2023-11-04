async function pub() {
  chrome.tabs.create({
    url: "https://mp.csdn.net/mp_blog/creation/editor"
  });

  let [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  console.log(tab)
}

const el = document.getElementById('pub-button')
el.onclick = pub