const container = document.getElementById('container')
const box = document.getElementById('dragbox')

if (box) {
    box.ontouchstart = (e) => {
    box.style.transform = 'scale(1.5)';
};

box.ontouchmove = (e) => {
    const touch = e.touches[0];

    box.style.left = `${touch.clientX}px`
    box.style.top = `${touch.clientY}px`
    const rotation = (touch.clientX - (window.innerWidth / 2)) * 0.5;
    box.style.transform = `scale(1.5) rotate(${rotation}deg)`
}

box.ontouchend = (e) => {
    box.style.transform = 'scale(1) rotate(0deg)'
}};