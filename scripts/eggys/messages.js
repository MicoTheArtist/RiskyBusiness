(function() {
	// variables
	var eggyFather = document.querySelector('section.eggy_wrapper article.eggy_father');
	var bubbleInsertion = document.querySelector('article.bubbleMessage div.message');
	var bubble = document.querySelector('article.bubbleMessage');

	
	var messageBubble = function() {
		var request = new XMLHttpRequest();
		request.open('GET', 'scripts/eggys/data.json');
		request.onreadystatechange = function() {
			if ((request.readyState === 4) && (request.status === 200)) {
				var data = JSON.parse(request.responseText);
				//console.log(data.speakers[0].message);				
				
				if (bubble.id === 'hide') { bubble.id = 'show'; }
				else if (bubble.id === 'show') { bubble.id = 'hide'; }
				
				bubbleInsertion = document.querySelector('article.bubbleMessage div.message');
				bubbleInsertion.innerHTML = data.speakers[0].message;
			}
		}; // request.onreadystatechange
		request.send();
	}; // messageBubble function
	
	
	// listeners
	eggyFather.addEventListener('click', messageBubble, false);
})(); // message function