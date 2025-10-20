const body = document.body 

const pageColor = ['red', 'orange', 'yellow', 'green', 'blue'];
let currentPageindex = 0

let startX = 0;
let endX = 0;

body.ontouchstart = (e) => {
    const touch = e.touches[0];

    startX = touch.clientX
}

body.ontouchmove = (e) => {
    e.preventDefault();
}

body.ontouchend = (e) => {
    const endX = e.changedTouches[0].clientX;
    const move = endX-startX

    const swipe = 50;

    if (move < -swipe) {
        currentPageindex++;
    } else if (move > swipe) {
        currentPageindex--;
    }

body.style.background = pageColor[currentPageindex]
};