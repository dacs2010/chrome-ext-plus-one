console.log("connected")

// chrome.runtime.onClicked.addListener(function (tab) {
//     chrome.tabs.query({active: true,  currentWindow: true}, function() {
//         console.log(tabs[0].url)
//     })
// })
 
chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.query({active: true, currentWindow: true}, function	(tabs) {
        let tabUrl = []
        let curTab = tabs[0]
        console.log(curTab.url)
        let newUrl = tabUrl.toString()
        chrome.tabs.update({url: newUrl})
    })
})
