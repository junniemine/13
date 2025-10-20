const 배경 = document.getElementById('dragbox')
const word = ["stop", "help","save me"]
const 책 = document.getElementById('book')

배경.ontouchstart = (e) => {
  배경.style.transform = 'scale(1.1)'
};

배경.ontouchmove = (e) => {
      const touch = e.touches[0];

    배경.style.left = `${touch.clientX-60}px`
    배경.style.top = `${touch.clientY-40}px`
    배경.style.backgroundColor = 'red'

const ratio = touch.clientX / window.innerWidth;
    let index = Math.floor(ratio * 3);

    배경.innerText = word[index];
};

배경.ontouchend = (e) => {
  배경.style.transform = 'scale(1)'
배경.style.backgroundColor = 'black'
  배경.innerText = 'drag me!'
};