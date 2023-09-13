const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

//loveMe.addEventListener('dblclick', e => {

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener('click', e => {   // custom dblclick
    if (clickTime === 0) {
        clickTime = new Date().getTime();
        console.log(clickTime);
    } else {
        if (new Date().getTime() - clickTime < 800) {
            createHeart(e);
        } else {
            clickTime = new Date().getTime();
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    heart.style.left = `${xInside}px`;
    heart.style.top = `${yInside}px`;

    loveMe.appendChild(heart);

    times.innerHTML = ++timesClicked;

    setTimeout(() => heart.remove(), 1000);
}