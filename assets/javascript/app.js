var score = 0;
var recentQuestion = 0;
var questions = [
  {
    question:
      "What would Daffy inevitably mutter when bested by someone like Bugs Bunny??",
    showAnswer: [
      "What's up doc?",
      "Great horny toads!",
      "Ay carumba!",
      "Suffering Succotash"
    ],
    correct: 0
  },
  {
    question:
      " Known for his apparently bottomless stomach, dizzy demeanor, and guttural 'speech', what character is actually based on a quadruped of the southern hemisphere??",
    showAnswer: ["Taz", "Wild E. Coyote ", "Daffy", "Speedy Gonzalez"],
    correct: 1
  },
  {
    question:
      "In which year did The Road Runner Show make its US television debut?",
    showAnswer: ["1987", "1966", "2001", "1995"],
    correct: 2
  },
  {
    question:
      "What is the name of the female bunny that sometimes appears as the love interest for Bugs Bunny in Looney Tunes?",
    showAnswer: ["Penelope", "Babs", "Lola", "Petunia"],
    correct: 3
  }
];
var rightAnswer;
var wrongAnswer;
var notanswered;
var time;
var seconds;
var answered;
var userPick;

var messages = {
  correct: "Why you wascawwy wabbit!",
  incorrect: "Say your prayers, Varmint!",
  timeEnd: "That's All Folks",
  finished: "Woo-hoo!"
};
$("#startOBtn").on("click", function() {
  $(this).hide();
  startTrivia();
});
$("#startOverBtn").on("click", function() {
  $(this).hide();
  startTrivia();
});

function startTrivia() {
  $("#finalMessage").empty();
  $("#correctAnswers").empty();
  $("#incorrectAnswers").empty();
  $("#notanswered").empty();
  currentQuestion = 0;
  rightAnswer = 0;
  wrongAnswer = 0;
  notAnswered = 0;
  newQuestion();
}
function newQuestion() {
  $("#message").empty();
  $("#rightAnswer").empty();
  answered = true;
}

$("recentQuestion").html(
  "Question #" + (recentQuestion + 1) + "/" + triviaQuestions.length
);
$(".question").html(
  "<h2>" + triviaQuestions[recentQuestions].question + "</h2>"
);
for (var i = 0; i < 4; i++) {
  var options = $("<div>");
  options.text(triviaQuestions[recentQuestions].showAnswer[i]);
  options.attr({ "data-index": i });
  options.addClass("thisOption");
  $(".answerList").append(options);
}
countdown();
$(".thisOption").on("click", function() {
  userPick = $(this).data("index");
  clearInterval(time);
  answerPage();
});
function countdown() {
  seconds = 20;
  $("#timeLeft").html("<h3>TimeRemaining: " + seconds + "</h3>");
  answered = true;
  time = setInterval(showCountdown, 1000);
}

function displayCountdown() {
  seconds--;
  $("#timeLeft").html("<h3>Time Remaining: " + seconds + "</h3>");
  if (seconds < 1) {
    clearInterval(time);
    answered = false;
    answerPage();
  }
}
function checkAnswer() {
  $("#recentQuestion").empty();
  $(".thisOption").empty();
  $(".question").empty();
  var correctAnswerText =
    triviaQuestions[recentQuestions].showAnswer[
      triviaQuestions[recentQuestions].answer
    ];
  var correctAnswerIndex = triviaQuestions[recentQuestion].answer;

  if (userPick == correctAnswerIndex && answered == true) {
    rightAnswer++;
    $("#message").html(messages.right);
  } else if (userPick != correctAnswerIndex && (answered = true)) {
    wrongAnswer++;
    $("#message").html(messages.wrong);
    $("#rightAnswer").html("The right answer was:" + rightAnswerText);
  } else {
    notanswered++;
    $("#message").html(messages.endTime);
    $("#rightAnswer").html("The right answer was:" + rightAnswerText);
    answered = true;
  }
  if (recentQuestion == triviaQuestions.length - 1) {
    setTimeout(scoreboard, 4000);
  } else {
    recentQuestion++;
    setTimeout(newQuestion, 4000);
    clearTimeout(recentQuestion);
  }
}
