var playerNameElement = document.getElementById("playerName");
        var playerName = localStorage.getItem("playerName");
        playerNameElement.textContent = playerName;

// Menyembunyikan elemen "result-container" saat game dimulai
document.querySelector(".result-container").style.display = "none";

var gameFinished = false;
// Array dengan ayat-ayat 
var questions = [
    "images4/gambar1.png",
    "images4/gambar2.png",
    "images4/gambar3.png",
    "images4/gambar4.png",
  ];
  
  // Set variabel gameFinished menjadi true
gameFinished = true;

  // Array dengan jawaban yang tepat
  var answers = [
    "images4/gambar2.png",
    "images4/gambar3.png",
    "images4/gambar4.png",
    "images4/gambar5.png",
  ];
  
  var currentQuestionIndex = 0;
  
  var totalQuestions = questions.length;
  
  var currentQuestionElement = document.getElementById("current-question");
  var answerInputElements = document.querySelectorAll(".answer-option");
  var resultElement = document.getElementById("result");
  var score = 0;
  
  // Variabel untuk menyimpan skor benar dan salah
  var correctCount = 0;
  var incorrectCount = 0;
  
    // Fungsi untuk memeriksa jawaban pemain
    function displayAnswer(answerId) {
      var playerAnswer = document.querySelector('label[for="' + answerId + '"] img').getAttribute('src');
      var correctAnswer = answers[currentQuestionIndex];
    
      if (playerAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
          document.getElementById('answer-status').textContent = "\uD83D\uDE00 Maasyaaallahh!";
          document.getElementById('answer-status').style.color = "green";
          score++;
          correctCount++; // Menambah skor benar
      } else {
          document.getElementById('answer-status').textContent = "\uD83D\uDE41 Astaagfirullahh!";
          document.getElementById('answer-status').style.color = "red";
          score--;
          incorrectCount++; // Menambah skor salah
      }
    
      // Menampilkan poin saat ini
    
      if (currentQuestionIndex < totalQuestions - 1) {
          document.getElementById("next-button").disabled = false; // Mengaktifkan tombol "Selanjutnya"
      } else {
    
      // Menentukan apakah pemain menang atau kalah
    if (score >= 0) {
      document.getElementById("result").classList.add("win");
      document.getElementById("result").innerHTML += "Selamat! Anda menang!<br>";
    } else {
      document.getElementById("result").classList.add("lose");
      document.getElementById("result").innerHTML += "Maaf, Anda kalah!<br>";
    }
    
    // Menambahkan informasi Benar dan Salah dengan kelas CSS
    document.getElementById("result").innerHTML +=
      "<span class='score-info'>Benar: <span class='score-count'>" +
      correctCount +
      "</span></span><br>" +
      "<span class='score-info'>Salah: <span class='score-count'>" +
      incorrectCount +
      "</span></span><br>" +
      "Poin Anda: " + score;    
    
      document.querySelector(".result-container").style.display = "block";// Menampilkan elemen "result-container" setelah game selesai
      document.getElementById("game-container").classList.add("finished"); // Menyembunyikan container game setelah selesai
      }
    }
    
    // Fungsi untuk memuat pertanyaan berikutnya
    function nextQuestion() {
      if (document.getElementById('answer-status').textContent === "") {
        return; // Tidak melakukan apa-apa jika answer-status belum dijawab
      }
      currentQuestionIndex++;
      document.getElementById("current-question-img").src = questions[currentQuestionIndex];
      answerInputElements.forEach(element => element.checked = false);
      document.getElementById("answer-status").textContent = ""; // Menghapus status jawaban
      document.getElementById("next-button").disabled = true; // Menonaktifkan tombol "Selanjutnya"
    }
    
    // Memuat pertanyaan pertama saat halaman dimuat
    document.getElementById("current-question-img").src = questions[currentQuestionIndex];
    
    function resetGame() {
    currentQuestionIndex = 0;
    score = 0;
    correctCount = 0;
    incorrectCount = 0;
    
    document.getElementById("result").textContent = "";
    document.getElementById("result").classList.remove("win", "lose");
    document.getElementById("game-container").classList.remove("finished");
    document.getElementById('answer-status').textContent = "";
    
    
      document.getElementById("current-question-img").src = questions[currentQuestionIndex];
    
      answerInputElements.forEach(element => element.checked = false);
      document.getElementById("next-button").disabled = true;
    }
    
    // Function to reset the game when the "Reset" button is clicked
    function resetButtonClicked() {
      resetGame();
    }
    
    // Event listener for the "Reset" button
    document.getElementById("reset-button").addEventListener("click", resetButtonClicked);
    