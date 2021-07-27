var link = document.getElementById("cookie"),
 counter = document.getElementById("clicker__counter"),
 count = 0;
link.onclick = function() {
 count++;
 counter.textContent = count;
};