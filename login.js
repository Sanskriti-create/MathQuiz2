function addUser()
{
    player1_input = document.getElementById("player1_name").value;
    player2_input = document.getElementById("player2_name").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "game.html";
}