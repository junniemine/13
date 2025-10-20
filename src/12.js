const 배경 = document.getElementById('dragbox')
const feel = document.getElementById('feel')
const book = document.getElementById('book')
const sport = document.getElementById('sport')

function check(re1,re2){
    const rect1 = re1.getBoundingClientRect();
     const rect2 = re2.getBoundingClientRect();

     return (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top)
}

배경.ontouchstart = (e) => {
  배경.style.transform = 'scale(1)';
};

배경.ontouchmove = (e) => {
      const touch = e.touches[0];

    배경.style.left = `${touch.clientX-25}px`
    배경.style.top = `${touch.clientY-25}px`
  배경.style.transform = 'scale(1.2)';

  if (check(배경,feel)){
feel.innerText = '😊'} else{
    feel.innerText = '😢'
}


};

배경.ontouchend = (e) => {
배경.style.transform = 'scale(1)'
  feel.innerText = '😢'
};

book.ontouchstart = (e) => {
  book.style.transform = 'scale(1.2)'
};

book.ontouchmove = (e) => {
      const touch = e.touches[0];

    book.style.left = `${touch.clientX-25}px`
    book.style.top = `${touch.clientY-25}px`
 
};

book.ontouchend = (e) => {
    book.style.transform = 'scale(1)'  
}

sport.ontouchstart = (e) => {
sport.style.transform = 'scale(1.2)'  
};

sport.ontouchmove = (e) => {
      const touch = e.touches[0];

    sport.style.left = `${touch.clientX-25}px`
    sport.style.top = `${touch.clientY-25}px`
 
};

sport.ontouchend = (e) => {
    sport.style.transform = 'scale(1)'  
}