/*jshint esnext: true */

async function showAllComments() {
  var s = document.querySelectorAll('span');
  s.filter = Array.prototype.filter;
  var r = s.filter((x) => { return x.innerText.trim() == 'Most relevant' })
  await r[0].click()//clickMe(r[0])
  document.querySelectorAll('span').forEach(
    (e) => { 
      if (e.innerText.trim() == 'All comments') {
        e.click()
      } 
    })
}

chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes("facebook")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: showAllComments
    });
  }
});