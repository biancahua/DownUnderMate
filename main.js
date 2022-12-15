
document.addEventListener('DOMContentLoaded', () => {
    console.log('here')

    //const animalArray = document.getElementsByTagName('img');
    //console.log(animalArray);    
    // fetch all images on the page
        // parse array (hopefully)
        // result will be passed into our replaceImage function 

    // consider using onLoad to access web page url

// event calls on backgournd image request function to return random image and save 
  
});

// const animalArray = index.html.getElementsByTagName('img');

// console.log(animalArray);

const animalArr = [
    "cassowary.png",
    "croc.jpg",
    "emu.jpeg",
    "koala.png",
    "perry.jpeg",
    "quokka.png",
    "tarantula.png",
    "taz.png",
    "kangaroo.jpeg"
]

chrome.runtime.onMessage.addListener(replaceImage)
function replaceImage() {

    // retrieve images from webpage as an array (webImgs)
    let webImg = document.getElementsByTagName('img');
    console.log(webImg);
    
    // iterate through argument array using while loop and reassign each index image to random image
    for (imgSrc of webImg) {
        let randomIndex = Math.floor(Math.random() * (animalArr.length - 1));
        console.log(`randomIndex: ${randomIndex}`);
        let file = 'sources/animals/' + animalArr[randomIndex];
        let url = chrome.runtime.getURL(file);
        imgSrc.src = url;
        imgSrc.currentSrc = url;
        console.log(chrome.runtime.getURL(file));
    }
}