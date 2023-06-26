const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart() {
    this.className += ' hold';
    // 0 gives enough time to grab 
    setTimeout(() => this.className = 'invisible', 0);  // or just '' for className
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    // 'dragover' default action: Reset the current drag operation to "none"
    e.preventDefault();
}

function dragEnter(e) {
    // 'dragenter' default action: Regect the immediate user selection as potential target
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'empty';
}

function dragDrop() {
    this.className ='empty';
    this.append(fill);

}
