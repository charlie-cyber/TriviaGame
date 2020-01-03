var score = 0
var recentQuestion = 0;
var questions = [
  {
    name: 'q1',
    title: "What type of pokemon is Charmander?",
    answer: ['water', 'fire', 'grass','electric'],
    correct: 0
  },
  {
    name:'q2',
    title: "What type of pokemon is Bulbasaur?",
    answer: ['water', 'fire', 'grass', 'electric'],
    correct: 1
  },
  {
      name:'q3',
     title: "What type of pokemon is Venasaur?",
     answer:['water', 'fire','grass', 'electric'],
     correct:2 
    },
    {
      name:'q4',
     title: "What type of pokemon is Pikachu?",
     answer:['water', 'fire','grass', 'electric'],
     correct: 3
    },
    ];
    $(document).ready(function(){
        $('start a').click(function(e){
        e.preventDefault();
        $('.start').hide();
        $('.trivia').show();
        showQuestion();
       
    });
$(.trivia)



    });

    function startTrivia(){

    }

    function showQuestion(){
        var question = question[recentQuestion];
        $('.trivia h2').text(question.title);
        $('.trivia ul').html('');
        for(var i=0; i<question.answers.length; i++){
          $('.trivia ul').append(<li id="+i+">${question.answers[i]}')"</li>);


          )
        }

    }

    function checkAnswer(){

    }
    function showResults(){

    }