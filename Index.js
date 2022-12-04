
		





document.getElementById('text1').style.visibility = 'hidden';
document.getElementById('text2').style.visibility = 'hidden';
document.getElementById('text3').style.visibility = 'hidden';
document.getElementById('text4').style.visibility = 'hidden';
document.getElementById('text5').style.visibility = 'hidden';
document.getElementById('text6').style.visibility = 'hidden';
document.getElementById('text7').style.visibility = 'hidden';
document.getElementById('text8').style.visibility = 'hidden';








alert ('Prezentacja multimedialna Beniamin Frankilin ( Js Html Css ) zrobiona przez Krystiana Popiołka klasa 8a szkóła 57');
function button1() {
	document.getElementById('text1').style.visibility = 'visible';
	document.getElementById('text2').style.visibility = 'visible';
}
function button2() {
	document.getElementById('text3').style.visibility = 'visible';
	document.getElementById('text5').style.visibility = 'visible';

}
function button3() {
	document.getElementById('text4').style.visibility = 'visible';
	document.getElementById('text6').style.visibility = 'visible';
	document.getElementById('text8').style.visibility = 'visible';


}
function button4() {
	document.getElementById('text7').style.visibility = 'visible';

}




const context = document.querySelector("canvas").getContext("2d")
const context2 = document.querySelector("canvas").getContext("2d")

context.canvas.height = 400;
context.canvas.width = 600;
context2.canvas.height = 400;
context2.canvas.width = 600;

function draw(){;

context.font = "30px Arial";
context.fillText
('Zad 1 wymień 2 rzeczy' , 10, 50);
context.fillText
('które wynalazł Ben.Franklin' , 10, 80);
} 
function draw2(){
	context2.font = "10px Arial";
context2.fillText
('<  odp.piorunochron,Dzwoneczki Franklina > ' , 10, 110);
context2.fillText('Zad 2 co dowiódł Benjamin na temat Pioruna ' , 10, 140);
}
function draw3(){
context2.fillText('<  odp.dowiódł że piorun zawiera elektryczność > ' , 10, 170);
context2.fillText('Zad 3 zapisz wszystkie wynalazki i jego dokonania w ' , 10, 200);
context2.fillText('Zeszycie!!! ' , 10, 230);
}
