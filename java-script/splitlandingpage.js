const leftDiv = document.querySelector('.left');
const rightDiv = document.querySelector('.right');

// Hovering over the LEFT div
leftDiv.addEventListener('mouseenter', () => {
    document.body.classList.add('left-hovered');
});

leftDiv.addEventListener('mouseleave', () => {
    document.body.classList.remove('left-hovered');
});

// Hovering over the RIGHT div
rightDiv.addEventListener('mouseenter', () => {
    document.body.classList.add('right-hovered');
});

rightDiv.addEventListener('mouseleave', () => {
    document.body.classList.remove('right-hovered');
});
