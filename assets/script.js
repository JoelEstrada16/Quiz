var questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: [
        'numbers and strings',
        'other arrays',
        'booleans',
        'all of the above',
      ],
      answer: 'all of the above',
    },
    {
      title:
        'String values must be enclosed within ____ when being assigned to variables.',
      choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      answer: 'quotes',
    },
    {
      title:
        'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
      answer: 'console.log',
    },
  ]; 
var currentQuestioni = 0;
var chosenBtn = [];
var timeVar = document.querySelector(".timer-count")
var correct = document.querySelector(".right-wrong")
var done = document.querySelector(".over")
var ini = document.querySelector(".initials")
var initialInput = document.querySelector(".initialInput")
var highScoreList = document.querySelector(".highScoreList")
var finalScores = document.querySelector(".finalScore")
var submit = document.querySelector("#submitButton")
var view = document.querySelector(".view")
var secondsLeft = 75;
var timer;
var countRight = 0;
var finalScore;
var content = document.querySelector('.here')
var quizContainer = document.createElement('div');
var startQuizEl = document.createElement('button')
startQuizEl.textContent = "start quiz"
quizContainer.appendChild(startQuizEl)
document.querySelector('main').appendChild(quizContainer)




function nextQuestion(){
    document.querySelector('main').innerHTML = '';
    initialInput.textContent = ""
    var currentQuestions = questions[currentQuestioni]
    var titleEl = document.createElement('h2');
    titleEl.textContent = currentQuestions.title;
    content.appendChild(titleEl);
    for (var i = 0; i < currentQuestions.choices.length; i++){
        var optionEl = document.createElement('button')
        optionEl.setAttribute('id','button')
        optionEl.textContent = currentQuestions.choices[i];
        content.appendChild(optionEl);

    }
  }


content.addEventListener("click", function(event){
  event.preventDefault()
  var currentQuestions = questions[currentQuestioni]
  if (event.target.matches('#button')){
      console.log(event.target.textContent)
      console.log(currentQuestions.answer)
      if(event.target.textContent === currentQuestions.answer){
        content.innerHTML = '';
        countRight++
        currentQuestioni++
        console.log('got it')
        correct.textContent = 'correct'
      }
      else {
        content.innerHTML = '';
        correct.textContent = 'wrong'
        console.log('wrong')
        secondsLeft -= 10
        timeVar.textContent = secondsLeft
        currentQuestioni++
      }
      if(currentQuestioni < questions.length){
        console.log('works')
        nextQuestion()
    } else {
      end()
    }
  }
  })


function end(){
    document.querySelector('main').innerHTML = '';
    document.querySelector('section').innerHTML = '';
    document.querySelector('header').innerHTML = '';
    correct.innerHTML = '';
    clearInterval(timer)
    var over = document.createElement('h1')
    over.textContent = "All Done"
    var score = document.createElement('p')
    score.textContent = "Your final score is: " + countRight;
    over.appendChild(score)
    highScoreList.appendChild(over)
    
}

function highScores(event){
  event.preventDefault();
  if(!initialInput.value){
    alert("Enter your initials")
    return;
  }
 
  var savedHighSchores = localStorage.getItem("high scores");
  var scoresArr;

  if(savedHighSchores === null){
    scoresArr = [];
  } else {
    scoresArr = JSON.parse(savedHighSchores)
  }

  var user = {
    initials: initialInput.value,
    score: highScoreList.textContent = countRight
  };

  console.log(user);
  scoresArr.push(user)

  var string = JSON.stringify(scoresArr);
  window.localStorage.setItem("high scores", string);

displayScore ()
}   

var i = 0
function displayScore(){
  var storedScores = localStorage.getItem("high scores")

  if (storedScores === null){
    return;
  }
  var savedScores = JSON.parse(storedScores)

  for (;i < savedScores.length; i++){
    var eachScore = document.createElement("p");
    eachScore.innerHTML = savedScores[i].initials + ": " + savedScores[i].score;
    highScoreList.appendChild(eachScore);
  }
}
startQuizEl.addEventListener("click",function(event){
  event.preventDefault()
  nextQuestion(questions[0])
    secondsLeft = 75
    timer = setInterval(function (){
        secondsLeft--;
        console.log(secondsLeft);
        timeVar.textContent = secondsLeft; 
        if (secondsLeft === 0){
            clearInterval(timer)
            end()
        }
    },1000)
})
view.addEventListener("click", function(evet){
  displayScore()

})
submit.addEventListener("click", function(event){
  highScores(event)
})