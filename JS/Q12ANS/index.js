const pics = [];
const pic = document.querySelectorAll('randomimg');

function showImage() {
    var a = Math.floor(Math.random() * pics.length);
    var img = pics[a];
    pic.style.backgroundImage = img;
}

setInterval(showImage, 1000);




/////////////


let inputBox = document.querySelector('typingfield');

function(){
    document.querySelector('typingfield').innerHTML = inputBox.value;
}