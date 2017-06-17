browser.browserAction.onClicked.addListener(newTab);

function newTab(){
    browser.tabs.create({url : "https://pv2k.github.io/"});
}
