console.log('This is a popup!');
async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    console.log(tab)

    chrome.tabs.create({
        url: "https://mp.csdn.net/mp_blog/creation/editor"
      });

      
    return tab;
  }

const el = document.getElementById('b')
el.onclick = getCurrentTab