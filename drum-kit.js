// bubbling: https://www.youtube.com/watch?v=F1anRyL37lE
// challenge: https://www.youtube.com/watch?v=VuN8qwZoego
const drumDiv = document.querySelector('.keys');


drumDiv.addEventListener('click', (e) => {
    const drum = e.target;
    
    drum.classList.toggle('playing');
    
    const timeoutID = setTimeout(() => {
        drum.classList.toggle('playing');
        
        clearStyle(timeoutID);
    }, 1000);
    
    
    
    //element.play();
    //element.pause();
});






function clearStyle(timerID) {
     clearTimeout(timerID);
} 



