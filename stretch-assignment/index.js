const boxes = document.querySelectorAll('.block');

console.log(boxes);
boxes.forEach(el => {
    el.addEventListener('click', event => {

        event.target.style.transform = 'translateY(-1000px)';
        event.target.style.transition = 'transform 1s';
        
    })

    el.addEventListener('mousedown', event => {

        event.target.style.transform = `translateX(` + event. + 1000`px)';
        event.target.style.transition = 'transform 10s';
    })
})