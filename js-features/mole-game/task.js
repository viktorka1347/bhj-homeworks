const dead = document.getElementById("dead")
const lost = document.getElementById("lost")
for(i = 1; i < 10; i++){
    const kill = document.getElementById(`hole${i}`)     
    kill.onclick = function(){
        if(kill.className === "hole hole_has-mole"){
            dead.textContent = +dead.textContent + 1
        } else if (kill.className !== "hole hole_has-mole"){
            lost.textContent = +lost.textContent + 1
        }
        if(+lost.textContent === 5){
            alert("Вы проиграли")
            dead.textContent = 0
            lost.textContent = 0
        } else if(+dead.textContent === 10) {
            alert("Вы победили!!!")
            dead.textContent = 0
            lost.textContent = 0
        }
    }     
}



