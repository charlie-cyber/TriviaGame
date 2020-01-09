var triviaQuestions = [
  {
    question:
      "What would Daffy inevitably mutter when bested by someone like Bugs Bunny??",
    showAnswer: [
      "What's up doc?",
      "Great horny toads!",
      "Ay carumba!",
      "Suffering Succotash"],
      answer: 0,
       
  
  },
  {
    question:
      " Known for his apparently bottomless stomach, dizzy demeanor, and guttural 'speech', what character is actually based on a quadruped of the southern hemisphere??",
    showAnswer: ["Taz", "Wild E. Coyote ", "Daffy", "Speedy Gonzalez"],
    answer: 1,
  
  },
  {
    question:
      "In which year did The Road Runner Show make its US television debut?",
    showAnswer: ["1987", "1966", "2001", "1995"],
    answer: 2,
  
  },
  {
    question:
      "What is the name of the female bunny that sometimes appears as the love interest for Bugs Bunny in Looney Tunes?",
    showAnswer: ["Penelope", "Babs", "Lola", "Petunia"],
    answer: 3,
   
  }
];
var recentQuestion;
var correctAnswer;
var incorrectAnswer;
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
$('#startBtn').on('click', function() {
  $(this).hide();
  startTrivia();
});
$('#startOverBtn').on('click', function() {
  $(this).hide();
  startTrivia();
});

function startTrivia() {
  console.log('startTrivia')
  $('#finalMessage').empty();
  $('#correctAnswers').empty();
  $('#incorrectAnswers').empty();
  $('#notanswered').empty();
  recentQuestion = 0;
  correctAnswer = 0;
  incorrectAnswer = 0;
  notAnswered = 0;
  newQuestion();
}
function newQuestion() {
  $('#message').empty();
  $('#correctAnswer').empty();
  answered = true;


// sets up new Question
  $('#recentQuestion').html('Question #'+(recentQuestion+1)+'/'+triviaQuestions.length);
  $('.question').html('<h2>' + triviaQuestions[recentQuestion].question + '</h2>');
  
for (var i = 0; i < 4; i++) {
  var options = $('<div>');
  options.text(triviaQuestions[recentQuestion].showAnswer[i]);
  options.attr({ 'data-index': i });
  options.addClass('thisOption');
  $('.showAnswer').append(options);
}
countdown();
$('.thisOption').on('click', function() {
  userPick = $(this).data('index');
  clearInterval(time);
  showAnswer();
});

}

function countdown() {
  seconds = 20;
  $('#timeLeft').html('<h3>TimeRemaining: ' + seconds + '</h3>');
  answered = true;
  time = setInterval(countdown, 1000);

}
function displayCountdown(){
  seconds--;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if(seconds < 1){
		clearInterval(time);
		answered = false;
        showAnswer();
}

}

function showAnswer() {
	$('#recentQuestion').empty();
	$('.thisOption').empty(); 
  $('.question').empty();
  
  var correctAnswerText = triviaQuestions[recentQuestion].showAnswer[triviaQuestions[recentQuestion].answer];
  var correctAnswerIndex = triviaQuestions[recentQuestion].answer;
  
if ((userPick == correctAnswerIndex) && (answered == true)){
    correctAnswer++;
    $('#message').html(messages.correct);
  } else if (userPick != correctAnswerIndex && (answered = true)) {
    incorrectAnswer++;
    $('#message').html(messages.incorrect);
    $('#correctAnswer').html('The correct answer was:' + correctAnswerText);
  } else {
    notanswered++;
    $('#message').html(messages.endTime);
    $('#correctAnswer').html('The correct answer was:'+ correctAnswerText);
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
function scoreboard(){
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();


	$('#finalMessage').html(messages.finished);
	$('#correctAnswers').html("correct Answers: " + correctAnswer);
	$('#incorrectAnswers').html("incorrectAnswers: " + incorrectAnswer);
	$('#notanswered').html("Notanswered: " + notanswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Start Over?');
}
  

