score=0

function updateScore()

{
score= score+1
document.getElementById("score").innerHTML = "pontuação" + score;

}

function saveScore()
{
    localStorage.setItem("Score",score);
}

function nextPage(){

window.location = "activity_.html";

}