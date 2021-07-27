
var timer1;
var a = 0;
var b = 0;
var c = 59;
obr();
function obr(){
	document.getElementById("timer").innerHTML = "0"+a + ":" +"0"+b + ":" + c;
	c--;
	if (c<0){
		clearTimeout(timer1);
		alert('Вы победили в конкурсе!');
	}
	else {
		timer1 = setTimeout(obr, 1000);
	}
}






