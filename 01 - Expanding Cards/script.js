const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    //let randNum = Math.trunc(Math.random()*1085);
    //panel.style.backgroundImage = `url(https://picsum.photos/id/${randNum}/1000/500)`;
    panel.style.backgroundImage = `url(https://picsum.photos/seed/${Math.random()}/1000/500)`;
})

panels.forEach((panel)=>{
    panel.addEventListener('click', ()=>{
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}