/*jshint esnext: true */

async function showAllComments() {
  const clickMe = async function(element) {
    await(element.click())
  }
  var s = document.querySelectorAll('span');
  s.filter = Array.prototype.filter;
  var r = s.filter((x) => { return x.innerText.trim() == 'Most relevant' })
  console.log(r[0])
  await clickMe(r[0])
  document.querySelectorAll('span').forEach(
    (e) => { 
      if (e.innerText.trim() == 'All comments') {
        console.log('here')
        e.click()
      } 
    })
  console.log("ran");
}

chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes("facebook")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: showAllComments
    });
  }
});