// bubbling: https://www.youtube.com/watch?v=F1anRyL37lE
// challenge: https://www.youtube.com/watch?v=VuN8qwZoego
const drumDiv = document.querySelector('.keys');


drumDiv.addEventListener('click', (e) => {
    // The 'click' event object does not have
	// the matching keyCode to the audio.
	console.log(e);

	const drumKey = e.target;
	console.log(drumKey);
	
	// Retrieve the matching data-key direct from
	// the node.
	const drumKeyDatasetKey = drumKey.dataset.key;
	console.log(drumKeyDatasetKey);
	
	highlightDrum(drumKey);
    

});



drumDiv.addEventListener('keydown', (e) => {
    // The 'keydown' event object has many 
	// properties, including keyCode.
	console.log(e);
	
	const drumKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	console.log(drumKey);
	
	highlightDrum(drumKey);
    
    
});


function clearStyle(timerID) {
     clearTimeout(timerID);
} 

const highlightDrum = (drumKey) => {
    drumKey.classList.toggle('playing');
    
    const timeoutID = setTimeout(() => {
        drumKey.classList.toggle('playing');
        
        clearStyle(timeoutID);
    }, 500);
};



