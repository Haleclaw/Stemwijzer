// Stemwijzer // // Stemwijzer // // Stemwijzer // 
// Stemwijzer // // Stemwijzer // // Stemwijzer // 


startButton.onclick = loadQuestionPage;
back.onclick = index;

var questionNumber = 0
var answers = []
var partijNames = []
var partijScore = []

for (let index = 0; index < parties.length; index++){
	partijNames.push (parties[index].name)
}

for (let index = 0; index < parties.length; index++){
	partijScore[index] = {
		name: partijNames[index],
		score: 0
	}
}

index()

// main pagina // index pagina // 
// main pagina // index pagina //

function index(){

	document.getElementById("questiongText").classList.add('invisible');
	document.getElementById("buttons").classList.add('invisible');
	document.getElementById("checkboxlist").classList.add('invisible');
	document.getElementById("back").classList.add('invisible');
	document.getElementById("importantSubjects").classList.add('invisible');

	document.getElementById("blueText").innerHTML = 'Test uw politieke voorkeur aan de hand van 30 stellingen'

}

// loadQuestionPage // loadQuestionPage //
// loadQuestionPage // loadQuestionPage //

function loadQuestionPage(){
	if (questionNumber == subjects.length ){
		console.log('loadQuestionPageResult')

		document.getElementById("oneens").classList.add('invisible');
		document.getElementById("beide").classList.add('invisible');
		document.getElementById("overslaan").classList.add('invisible');
		document.getElementById("vindenPartijen").classList.add('invisible');

		document.getElementById("importantSubjects").classList.remove('invisible');
		document.getElementById("checkboxList").classList.remove('invisible');

		document.getElementById("eens").innerHTML ='ga verder'

		document.getElementById("blueText").innerHTML ='Zijn er onderwerpen die u extra belangrijk vindt?'
		document.getElementById("questiongText").innerHTML ='Aangevinkte stellingen tellen extra mee bij het berekenen van het resulaat.'

		eens.onclick = takePoliticalparty;
		
		  // display checkbox // display checkbox //
  		  // display checkbox // display checkbox //

  			 for(var checkboxNumber = 0; checkboxNumber < subjects.length; checkboxNumber++) {
				var div = document.createElement('div');
				checkboxList.appendChild(div);

				div.className = 'checkboxDiv' 
				var checkbox = document.createElement("input");                
       			checkbox.className = "w3-check";
				checkbox.id = 'checkbox' + checkboxNumber;
				checkbox.type = 'checkbox';
				checkbox.setAttribute("onclick", "checkboxCheck("+checkboxNumber+")")
       			div.appendChild(checkbox);

				var checkboxText = document.createElement("p");                
				checkboxText.id = "checkboxText" + checkboxNumber;
       			div.appendChild(checkboxText);

				document.getElementById("checkboxText" + checkboxNumber).innerHTML = subjects[checkboxNumber].title
			}

	}
			else{
				document.getElementById("blueText").innerHTML = subjects[questionNumber].title
				document.getElementById("questiongText").innerHTML = subjects[questionNumber].statement

				document.getElementById("startButton").classList.add('invisible');
				document.getElementById("Header").classList.add('invisible');
				document.getElementById("info").classList.add('invisible');

				document.getElementById("questiongText").classList.remove('invisible');
				document.getElementById("buttons").classList.remove('invisible');
				document.getElementById("back").classList.remove('invisible');

				eens.onclick = nextQuestionTrue;
				oneens.onclick = nextQuestionDisagree;
				back.onclick = backQuestion;
				overslaan.onclick = noAnswer;
				beide.onclick = noAnswer;
				}
	}
	// checkboxCheck // // checkboxCheck //
	// checkboxCheck // // checkboxCheck //

	function checkboxCheck(checkboxNumber){
		var checkbox = document.getElementById('checkbox' + checkboxNumber)
		var checkboxText = document.getElementById('checkboxText' + checkboxNumber).innerText
		
  		if (checkbox.checked == true){
			  console.log('checkboxTrue')

			  // checks if text == data.js // 
			  for(c = 0; c < subjects.length; c++) {
				var currentSubject = subjects[c];
				var myAnswer = answers[c]

			  	if( checkboxText == currentSubject.title){
					// checks all pro in data.js //
					for(d = 0; d < currentSubject.parties.length; d++) {
						var currentParty = currentSubject.parties[d]			
						
						// checks if partijName == partijScore //
						for(e = 0; e < partijScore.length; e++){
							var partyScore = partijScore[e];

								if(currentParty.name == partyScore.name){
									if(currentParty.position == myAnswer){
										console.log('extra points to ' + partyScore.name )
										partyScore.score++
									}
								}	
						}
					}
				}
			  }
		}

		// checkbox false // checkbox false //
		// checkbox false // checkbox false //

		if (checkbox.checked == false){
			console.log('checkboxFalse')

				  // checks if text == data.js // 
				  for(c = 0; c < subjects.length; c++) {
					var currentSubject = subjects[c];
					var myAnswer = answers[c]
	
					  if( checkboxText == currentSubject.title){
						// checks all pro in data.js //
						for(d = 0; d < currentSubject.parties.length; d++) {
							var currentParty = currentSubject.parties[d]			
							
							// checks if partijName == partijScore //
							for(e = 0; e < partijScore.length; e++){
								var partyScore = partijScore[e];
								
									if(currentParty.name == partyScore.name){
										if(currentParty.position == myAnswer){
											console.log('remove extra points from ' + partyScore.name )
											partyScore.score--
										}
									}	
							}
						}
					}
				  }
		}
	}

// nextQuestion // save True //
// nextQuestion // save True //

function nextQuestionTrue(){
	console.log('loadQuestionPageTrue');

    answers[questionNumber] = 'pro';

	questionNumber++;

    loadQuestionPage();
}

// nextQuestion // save disagree //
// nextQuestion // save disagree //

function nextQuestionDisagree(){
	console.log('loadQuestionPageDisagree');

    answers[questionNumber] = 'contra';

	questionNumber++;

	loadQuestionPage();
}

// backQuestion // Go back //
// backQuestion // Go back //

function backQuestion(){
	console.log('backQuestion');

	questionNumber--;

	loadQuestionPage();
}

// noAnswer // // noAnswer //
// noAnswer // // noAnswer //

function noAnswer(){
	console.log('noAnswer');

	answers[questionNumber] = 'none';

    questionNumber++;

	loadQuestionPage();
}

// answerResult // answerResult //
// answerResult // answerResult //

function takePoliticalparty(){ 
	for(b = 0; b < answers.length; b++){
		for(a= 0;a<subjects[b].parties.length;a++){
			var partyPosition = subjects[b].parties[a].position
			var partyName = subjects[b].parties[a].name

			// checks if answers == party position //
			if(answers[b] == partyPosition){
				console.log("je bent het eens met " + partyPosition );

					// checks if partyName == partijscore // 
					for(c = 0; c < partijScore.length; c++){
						if(partyName === partijScore[c]['name']){
							partijScore[a]['score']++
						}
					}
			}
			else{
				console.log("je bent het niet eens met " + partyName);
			}
		  }
		}
	  
	console.log(partijScore)
	answerDisplay()
}

// answerDisplay // // answerDisplay //
// answerDisplay // // answerDisplay //

function answerDisplay() {
	document.getElementById('questiongText').style.display ='none'
	document.getElementById('buttons').style.display ='none'
	document.getElementById('back').style.display ='none'

	document.getElementById('checkboxList').style.display ='none'
	document.getElementById("blueText").innerHTML = 'Resultaten'

	for(var index = 0; index < partijScore.length; index++){
		document.getElementById("namePrint").innerHTML += partijScore[index]['name'] + ' ' + partijScore[index]['score'] + '<br>' ;
}

	
	
}
