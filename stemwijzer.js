// Stemwijzer // // Stemwijzer // // Stemwijzer // 


startButton.onclick = load;

document.getElementById('vraagText').style.display ='none'
document.getElementById('eens').style.display ='none'
document.getElementById('oneens').style.display ='none'
document.getElementById('beide').style.display ='none'

function load(){
	document.getElementById("blueText").innerHTML = 'onderwerp vraag'

	document.getElementById('startButton').style.display ='none'

	document.getElementById('vraagText').style.display ='inline-block'
	document.getElementById('stemWijzerHeader').style.display ='none'
	document.getElementById('logo').style.display ='none'
	document.getElementById('beperking').style.display ='none'
	document.getElementById('cookies').style.display ='none'
	document.getElementById('info').style.display ='none'

	document.getElementById('eens').style.display ='inline-block'
	document.getElementById('oneens').style.display ='inline-block'
	document.getElementById('beide').style.display ='inline-block'



}
