// list of all questions, choices, and answers
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
var timeVar = document.querySelector(".timer-count")
var secondsLeft = 75;
var timer;
var countRight;
var countWrong;
var quizContainer = document.createElement('div');
var startQuizEl = document.createElement('button')
startQuizEl.textContent = "start quiz"
quizContainer.appendChild(startQuizEl)
document.querySelector('main').appendChild(quizContainer)



  startQuizEl.addEventListener("click", function(event){
    secondsLeft = 75
    timer = setInterval(function (){
        secondsLeft--;
        console.log(secondsLeft);
        timeVar.textContent = secondsLeft;
        if (secondsLeft === 0){
            clearInterval(timer)
            document.querySelector('main').innerHTML = '';
            var over = document.createElement('h1')
            over.textContent = "Game Over"


        }
    },1000)
  })



