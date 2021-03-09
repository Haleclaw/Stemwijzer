// Stemwijzer // // Stemwijzer // // Stemwijzer // 
// Stemwijzer // // Stemwijzer // // Stemwijzer // 


startButton.onclick = loadQuestionPage;
back.onclick = index;

var questionNumber = 0
var answers = []

index()

// main pagina // index pagina // 
// main pagina // index pagina //

function index(){
	document.getElementById('questiongText').style.display ='none'
	document.getElementById('buttons').style.display ='none'
	document.getElementById('checkbox').style.display ='none'
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

		document.getElementById('checkbox').style.display ='inline-block'

		document.getElementById("eens").innerHTML ='ga verder'

		document.getElementById("blueText").innerHTML ='Zijn er onderwerpen die u extra belangrijk vindt?'
		document.getElementById("questiongText").innerHTML ='Aangevinkte stellingen tellen extra mee bij het berekenen van het resulaat.'

		eens.onclick = takePoliticalparty;
		
		  // display checkbox // display checkbox //
  		  // display checkbox // display checkbox //

  			for(var i = 0; i < subjects.length; i++) {
				var divBlock = document.createElement("input");                
       			divBlock.className = "w3-check";
       			checkbox.appendChild(divBlock);

				var textBlock = document.createElement("p");                
       			textBlock.className = "checkbox" + i;
       			checkbox.appendChild(textBlock);

				document.getElementsByClassName("checkbox" + i).innerHTML = subjects[i].title
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

// nextQuestion // save True //
// nextQuestion // save True //

function nextQuestionTrue(){
	console.log('loadQuestionPageTrue')

    answers[questionNumber] = 'pro'

	questionNumber++

    loadQuestionPage()
}

// nextQuestion // save disagree //
// nextQuestion // save disagree //

function nextQuestionDisagree(){
	console.log('loadQuestionPageDisagree')

    answers[questionNumber] = 'contra'

	questionNumber++

	loadQuestionPage()
}

// backQuestion // Go back //
// backQuestion // Go back //

function backQuestion(){
	console.log('backQuestion')

	questionNumber--

	loadQuestionPage()
}

// noAnswer // // noAnswer //
// noAnswer // // noAnswer //

function noAnswer(){
	console.log('noAnswer')

    questionNumber++

	loadQuestionPage()
}

// answerResult // answerResult //
// answerResult // answerResult //

function takePoliticalparty(){ 
	for(b = 0; b < answers.length; b++) {
		for(a=0;a<subjects[b].parties.length;a++){
			if(answers[b] == subjects[b].parties[a].position){
				console.log("je bent het eens met " + subjects[b].parties[a].name);
				// 
			}
			else{
				console.log("je bent het niet eens met " + subjects[b].parties[a].name);
			}
		  }
		}
	  
	


}
