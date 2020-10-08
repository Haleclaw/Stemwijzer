// Stemwijzer // // Stemwijzer // // Stemwijzer // 
// Stemwijzer // // Stemwijzer // // Stemwijzer // 


startButton.onclick = load;
back.onclick = index;

var getal = 0


index()

// main pagina // index pagina // 
// main pagina // index pagina //

function index(){


document.getElementById('vraagText').style.display ='none'
document.getElementById('buttons').style.display ='none'
document.getElementById('back').style.display ='none'

document.getElementById('startButton').style.display ='inline-block'
document.getElementById('Header').style.display ='inline-block'
document.getElementById('beperking').style.display ='inline-block'
document.getElementById('cookies').style.display ='inline-block'
document.getElementById('info').style.display ='inline-block'

document.getElementById("blueText").innerHTML = 'Test uw politieke voorkeur aan de hand van 30 stellingen'

}

// vragen pagina // inladen vragen pagina //
// vragen pagina // inladen vragen pagina //

function load(){
	document.getElementById("blueText").innerHTML = subjects[getal].title
	document.getElementById("vraagText").innerHTML = subjects[getal].statement
	console.log('load')


	document.getElementById('startButton').style.display ='none'
	document.getElementById('Header').style.display ='none'
	document.getElementById('beperking').style.display ='none'
	document.getElementById('cookies').style.display ='none'
	document.getElementById('info').style.display ='none'


	document.getElementById('vraagText').style.display ='inline-block'
	document.getElementById('buttons').style.display ='inline-block'
	document.getElementById('back').style.display ='inline-block'

	eens.onclick = questions;
	oneens.onclick = questions;
	beide.onclick = questions;
	overslaan.onclick = questions;
	back.onclick = terug;
}

// vragen display // // vragen display //
// vragen display // // vragen display //

function questions(){

   getal++

   if( back == true ){
   		console.log('back')
   }

   load()
}

// back functie // // back functie //
// back functie // // back functie //

function terug(){
	console.log('terug')
	var back = true
	questions()
}