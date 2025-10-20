const 배경 = document.getElementById('dragbox')

const middle = 25

배경.ontouchstart = (e) => {
  배경.style.transform = 'scale(1)';
};

배경.ontouchmove = (e) => {
      const touch = e.touches[0];

    배경.style.left = `${touch.clientX-25}px`
    배경.style.top = `${touch.clientY-25}px`
  배경.style.transform = 'scale(3)';
};

배경.ontouchend = (e) => {
  배경.style.transform = 'scale(1)'
};