chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "testpage.html";
  chrome.tabs.create({ url: newURL });
});