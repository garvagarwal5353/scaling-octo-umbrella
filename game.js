player1name=localStorage.getItem("Player1name")
document.getElementById("player1name").innerHTML=player1name
player2name=localStorage.getItem("Player2name")
document.getElementById("player2name").innerHTML=player2name
player1score=0
player2score=0
document.getElementById("player1_score").innerHTML=player1score
document.getElementById("player2_score").innerHTML=player2score
document.getElementById("player_que").innerHTML="Question turn: "+player1name
document.getElementById("player_ans").innerHTML="Answer turn: "+player2name

function send(){
    getword=document.getElementById("word").value
    word=getword.toLowerCase()
    console.log(word)
    first=word.charAt(1)
    console.log(first)
    lengthdivide2=Math.floor(word.length/2)
    second=word.charAt(lengthdivide2)
    console.log(second)
    lenghtminus1=word.length-1
    third=word.charAt(lenghtminus1)
    console.log(third)
    removefirst=word.replace(first,"_");
    console.log(removefirst)//a_tions
    removesecond=removefirst.replace(second,"_")
    console.log(removesecond)//a_ti_ns
    removethird=removesecond.replace(third,"_")
    console.log(removethird)//a_ti_n_
    questionword="<h4 id='word_display'>Q. "+removethird+" </h4>";
    inputbox="<br>A: <input type='text' id='inputcheckbox'>";
    check_button="<br><br><button class='btn btn-primary' onclick='check()'>Check</button>";
    row=questionword+inputbox+check_button;
    document.getElementById("output").innerHTML=row
    document.getElementById("word").value=""
}
var queturn="Player1"
var ansturn="Player2"
function check(){
getans=document.getElementById("inputcheckbox").value
ans=getans.toLowerCase()
if (word==ans) {
  if (ansturn=="Player1") {
      player1score=player1score+1
      document.getElementById("player1_score").innerHTML=player1score
      
  } 
  else{
      player2score=player2score+1
      document.getElementById("player2_score").innerHTML=player2score
  } 

}

if (queturn=="Player1") {
   queturn="Player2" 
   document.getElementById("player_que").innerHTML="Question turn : "+player2name
}
else{
    queturn="Player1"
    document.getElementById("player_que").innerHTML="Question turn : "+player1name
}

if (ansturn=="Player1") {
    ansturn="Player2" 
    document.getElementById("player_ans").innerHTML="Answer turn : "+player2name
 }
 else{
     ansturn="Player1"
     document.getElementById("player_ans").innerHTML="Answer turn : "+player1name
 }
 document.getElementById("output").innerHTML="";
}