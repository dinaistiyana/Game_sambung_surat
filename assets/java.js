function savePlayerName() {
    var playerNameInput = document.getElementById("playerName");
    var playerName = playerNameInput.value;
    localStorage.setItem("playerName", playerName);
    window.location.href = "surat.html";
}