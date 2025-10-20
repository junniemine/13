const box = document.getElementById('dragbox')

if(box){
    box.ontouchstart = (e) => {
        box.style.transition = 'none'
        box.style.transform = 'translate(-50%, -50%) scale(1.2)'
    }
    box.ontouchmove = (e) => {
        const touch = e.touches[0]

        box.style.left = `${touch.clientX}px`
         box.style.top = `${touch.clientY}px`
    }
    box.ontouchend = (e) => {
        box.style.transition = 'all 0.3s cubic-bezier(0.175, 0.888, 0.32, 1.275);'
        box.style.left = ''
         box.style.top = ''
         box.style.transform = 'translate(-50%, -50%) scale (1)'
    }
  
}