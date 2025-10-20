const container = document.querySelector('#container')
const fill = document.querySelector('#container-fill')

function fillHeight(e){
    e.preventDefault();

    const touch = e.touches[0];

    const rect = container.getBoundingClientRect();
    const trackTop = rect.top;
    const containerHeight = rect.height;

    let y = touch.clientY -trackTop;

    let fillRatio = 1-(y/containerHeight)
    let fillPercent = fillRatio * 100;

    if (fillPercent < 0) fillPercent = 0;
    if (fillPercent > 100) fillPercent = 100;

    fill.style.height = `${fillPercent}%`;
} 

if (container && fill){
    container.ontouchstart = fillHeight;
    container.ontouchmove = fillHeight;
}