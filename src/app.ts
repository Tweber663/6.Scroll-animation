const boxes = document.querySelectorAll('.box'); 

const triggerButton = window.innerHeight / 5.2 * 4;

window.addEventListener('scroll', () => {
    
    Array.from(boxes).forEach((b) => {
        const boxTop = b.getBoundingClientRect().top;

        if(boxTop < triggerButton) {
            b.classList.add('active'); 
        } else {
            b.classList.remove('active')
        }
    })
})
