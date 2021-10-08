function login(){
    player1name=document.getElementById("player1_input").value
   player2name=document.getElementById("player2_input").value 
   localStorage.setItem("Player1name", player1name)
   localStorage.setItem("Player2name", player2name)
   window.location="game_page.html"
}