browser.browserAction.onClicked.addListener(newTab);

function newTab(){
    browser.tabs.create({url : "./index.html"});
}
