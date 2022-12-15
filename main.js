
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
    "kangaroo.jpeg",
    "echina.png",
    "kookaburra.png",
    "possum.png",
    "toad.png"
]

chrome.runtime.onMessage.addListener(replaceImage)
function replaceImage() {

    // retrieve images from webpage as an array (webImgs)
    let webImg = document.getElementsByTagName('img');
    console.log(webImg);
    //open a fun link in new tab
    // const emuPage = 'https://www.researchgate.net/profile/Srdan-Jovanovic-2/publication/334614967_The_Emu_Strikes_Back_An_Inquiry_into_Australia%27s_Peculiar_Military_Action_of_1932/links/5d360c20a6fdcc370a576b69/The-Emu-Strikes-Back-An-Inquiry-into-Australias-Peculiar-Military-Action-of-1932.pdf'
    // chrome.tabs.create({ url: emuPage });
    
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