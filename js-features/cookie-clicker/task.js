const link = document.getElementById("cookie"),
 counter = document.getElementById("clicker__counter");
 count = 0;
 let a = 9/10;

link.onclick = function () {
 count++;
 link.width *=a;
 link.height *=a;
 a = 1/a;
 counter.textContent = count;
}
