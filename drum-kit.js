// bubbling: https://www.youtube.com/watch?v=F1anRyL37lE
// challenge: https://www.youtube.com/watch?v=VuN8qwZoego
const drumDiv = document.querySelector('.keys');


drumDiv.addEventListener('click', (e) => {
    e.target.classList.toggle('playing');
    
    //element.play();
    //element.pause();
});





