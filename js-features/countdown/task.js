
let timer1;
let a = 0;
let b = 0;
let c = 59;
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






