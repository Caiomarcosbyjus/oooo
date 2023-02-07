player1Name = localStorage.getItem("player1Name");
player2Name = localStorage.getItem("player2Name"); 

player1Score= 0;
player2Score= 0;


document.getElementById("player1Name").innerHTML = player1Name + " ; ";
document.getElementById("player2Name").innerHTML = player2Name + " ; ";

document.getElementById("player1Score").innerHTML = player1Score ;
document.getElementById("player2Score").innerHTML = player2Score ;

document.getElementById("playerQuestion").innerHTML = "turno de resposta -" + player1Name;
document.getElementById("playerAnswer").innerHTML = "turno de resposta -" + player2Name; 



function send(){

getWord = document.getElementById("word").value;
word = getword.Tolowercase();
console.log("palavra em caixa baixa")

charAt1 = word.chart(1);
console.log(chartAt1)

lengthDivide2 = Math.floor(word.length/2);
charAt2=word.charAt(lengthDivide2)
console.log(charAt2)

lengthMinus = word.length-1 ;
charAt3=word.charAt(lengthMinus)
console.log(charAt3)


removeCharAt1 = word.replace(charAt1,"_");
removeCharAt2 = removeCharAt1.replace(charAt2,"_")
removeCharAt3 = removeCharAt2.replace(charAt3,"_")
console.log(removeCharAt3);

question_word= "<h4 id='word display'> P."+ removeCharAt1+"<h4>";
InputBox = "<br>Resposta : <iput type='text' id= inputCheckBox > " ;
checkbutton = "<br><br><button class='btn btn-info' onclick='check()'> Checar </button> "
row = question_word+InputBox+checkbutton;

document.getElementById("output").innerHTML = row ;
document.getElementById("word").value = "";
}

questionTurn="player1"
AnswerTurn="player2"

function check(){

getAnswer = document.getElementById("inputCheckBox").value;
answer = getanswer.toLowerCase();
console.log(answer);

if (answer==word){

if (AnswerTurn=="player1"){

player1Score = player1Score + 1 ;
document.getElementById("player1Score").innerHTML.player1Score;
}
else{

    player2Score = player2Score + 1 ;
    document.getElementById("player2Score").innerHTML.player2Score;
}
}
if (questionTurn=="player1"){
    questionTurn=="player2"
    document.getElementById("playerQuestion").innerHTML="Turno de pergunta"+ player2Name
    }
    else{
    questionTurn="player1"
        
        document.getElementById("playerQuestion").innerHTML="Turno de pergunta"+ player1Name
    }
    
    if (AnswerTurn=="player1"){
        AnswerTurn=="player2"
        document.getElementById("playerAnswer").innerHTML="Turno de resposta"+ player2Name
        }
        else{
        AsnwerTurn="player1"
            
            document.getElementById("playerAnswer").innerHTML="Turno de resposta"+ player1Name
        }




document.getElementById("output").innerHTML="";

}

