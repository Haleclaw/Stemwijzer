// Stemwijzer // // Stemwijzer // // Stemwijzer // 
// Stemwijzer // // Stemwijzer // // Stemwijzer // 


startButton.onclick = loadQuestionPage;
back.onclick = index;

var questionNumber = 0
var answers = ['empty','empty','empty']

index()

// main pagina // index pagina // 
// main pagina // index pagina //

function index(){

document.getElementById('questiongText').style.display ='none'
document.getElementById('buttons').style.display ='none'
document.getElementById('back').style.display ='none'

document.getElementById('startButton').style.display ='inline-block'
document.getElementById('Header').style.display ='inline-block'
document.getElementById('info').style.display ='inline-block'

document.getElementById("blueText").innerHTML = 'Test uw politieke voorkeur aan de hand van 30 stellingen'

}

// loadQuestionPage // loadQuestionPage //
// loadQuestionPage // loadQuestionPage //

function loadQuestionPage(){
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
}

// nextQuestion // save True //
// nextQuestion // save True //

function nextQuestionTrue(){
	console.log('loadQuestionPageTrue')

	questionNumber++

	answers[questionNumber] = 'true'

    loadQuestionPage()
}

// nextQuestion // save disagree //
// nextQuestion // save disagree //

function nextQuestionDisagree(){
	console.log('loadQuestionPageDisagree')

	questionNumber++

	answers[questionNumber] = 'Disagree'

	loadQuestionPage()
}

