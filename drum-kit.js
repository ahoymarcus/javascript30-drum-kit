// bubbling: https://www.youtube.com/watch?v=F1anRyL37lE
// challenge: https://www.youtube.com/watch?v=VuN8qwZoego
const drumDiv = document.querySelector('.keys');


drumDiv.addEventListener('click', (e) => {
    const drum = e.target;
    
    playDrum(drum);
//     drum.classList.toggle('playing');
//     
//     const timeoutID = setTimeout(() => {
//         drum.classList.toggle('playing');
//         
//         clearStyle(timeoutID);
//     }, 500);
    
    
    
    //element.play();
    //element.pause();
});



drumDiv.addEventListener('keydown', (e) => {
    const drum = e.target;
    
    playDrum(drum);
    
    //element.play();
    //element.pause();
});


function clearStyle(timerID) {
     clearTimeout(timerID);
} 

const playDrum = (drum) => {
    drum.classList.toggle('playing');
    
    const timeoutID = setTimeout(() => {
        drum.classList.toggle('playing');
        
        clearStyle(timeoutID);
    }, 500);
};



