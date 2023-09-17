const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach(toggle => toggle.addEventListener('change', e => doTheTrick(e.target)));

function doTheTrick(theClickedOnes){
    if (good.checked && cheap.checked && fast.checked) {
        if (good === theClickedOnes){
            fast.checked = false;
        }
        if (cheap === theClickedOnes){
            good.checked = false;
        }
        if (fast === theClickedOnes){
            cheap.checked = false;
        }
    }
}