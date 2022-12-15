console.log('DownUnderMate Background is Running');

// create a function that iterates through an array of images
// returns one image
// when iteration is complete, restart at first image
chrome.action.onClicked.addListener(didTheThing);
function didTheThing(tab) {
    {
        let msg = {
            text: "Hi"
        }
        chrome.tabs.sendMessage(tab.id, msg);
    }
}