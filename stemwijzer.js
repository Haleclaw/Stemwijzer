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
	document.getElementById('questiongText').style.display ='none'
	document.getElementById('buttons').style.display ='none'
	document.getElementById('checkboxList').style.display ='none'
	document.getElementById('back').style.display ='none'
	document.getElementById('importantSubjects').style.display ='none'

	document.getElementById('startButton').style.display ='inline-block'
	document.getElementById('Header').style.display ='inline-block'
	document.getElementById('info').style.display ='inline-block'

	document.getElementById("blueText").innerHTML = 'Test uw politieke voorkeur aan de hand van 30 stellingen'

}

// loadQuestionPage // loadQuestionPage //
// loadQuestionPage // loadQuestionPage //

function loadQuestionPage(){
	if (questionNumber == subjects.length ){
		console.log('loadQuestionPageResult')

		document.getElementById('oneens').style.display ='none'
		document.getElementById('beide').style.display ='none'
		document.getElementById('overslaan').style.display ='none'
		document.getElementById('vindenPartijen').style.display ='none'

		document.getElementById('importantSubjects').style.display ='inline-block'

		document.getElementById('checkboxList').style.display ='inline-block'

		document.getElementById("eens").innerHTML ='ga verder'

		document.getElementById("blueText").innerHTML ='Zijn er onderwerpen die u extra belangrijk vindt?'
		document.getElementById("questiongText").innerHTML ='Aangevinkte stellingen tellen extra mee bij het berekenen van het resulaat.'

		eens.onclick = takePoliticalparty;
		
		  // display checkbox // display checkbox //
  		  // display checkbox // display checkbox //

  			 for(var i = 0; i < subjects.length; i++) {
				var checkbox = document.createElement("input");                
       			checkbox.className = "w3-check";
				checkbox.id = 'checkbox' + i;
				checkbox.type = 'checkbox';
				checkbox.setAttribute("onclick", "checkboxCheck("+i+")")
       			checkboxList.appendChild(checkbox);

				var checkboxText = document.createElement("p");                
				checkboxText.id = "checkboxText" + i;
       			checkboxList.appendChild(checkboxText);

				document.getElementById("checkboxText" + i).innerHTML = subjects[i].title
			}

	}
			else{
				document.getElementById("blueText").innerHTML = subjects[questionNumber].title
				document.getElementById("questiongText").innerHTML = subjects[questionNumber].statement


				document.getElementById('startButton').style.display ='none'
				document.getElementById('Header').style.display ='none'
				document.getElementById('info').style.display ='none'


				document.getElementById('questiongText').style.display ='inline-block'
				document.getElementById('buttons').style.display ='inline-block'
				document.getElementById('back').style.display ='inline-block'

				eens.onclick = nextQuestionTrue;
				oneens.onclick = nextQuestionDisagree;
				back.onclick = backQuestion;
				overslaan.onclick = noAnswer;
				beide.onclick = noAnswer;
				}
	}
	// checkboxCheck // // checkboxCheck //
	// checkboxCheck // // checkboxCheck //

	function checkboxCheck(i){
		var checkbox = document.getElementById('checkbox' + i)
  		if (checkbox.checked == true){
			  console.log('checkboxTrue')
			  for(c = 0; c < partijNames.length; c++) {
			  	if(document.getElementById('checkboxText' + i).innerText == subjects[c].title){
					console.log('text is gelijk')
					if(subjects[c].parties[c].position == 'pro'){
						console.log('hij is pro')
						if(subjects[c].parties.name == partijScore[c]){
							console.log('Hij is goed aangekomen!')

						}
					}

				}

			  }
		}
		if (checkbox.checked == false){
			console.log('checkboxFalse')
		}
		else{
			
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
	for(b = 0; b < answers.length; b++) {
		for(a=0;a<subjects[b].parties.length;a++){
			if(answers[b] == subjects[b].parties[a].position){
				console.log("je bent het eens met " + subjects[b].parties[a].name);
					for(c = 0; c < partijScore.length; c++){
						if(subjects[b].parties[a].name === partijScore[c]['name']){
							partijScore[a]['score']++
						}
					}
				// 
			}
			else{
				console.log("je bent het niet eens met " + subjects[b].parties[a].name);
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
