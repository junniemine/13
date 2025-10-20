const container = document.getElementById('container')

function createSparkle(x,y){
    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle'

    sparkle.style.left = `${x-5}px`
    sparkle.style.top = `${y-5}px`

    container.appendChild(sparkle);

setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

if (container) {
    container.ontouchstart = (e) => {
    const touch = e.touches[0];
    createSparkle(touch.clientX,touch.clientY);
    }

    container.ontouchmove = (e) => {
        const touch = e.touches[0];
        createSparkle(touch.clientX,touch.clientY);

    }
    container.ontouchend = (e) => {

    }
}