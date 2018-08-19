process.stdout.write('\n\nHello and Welcome to Quiz\n\n');

var questions = [
  "Who is the captain of Manchester United?",
  "Who is the captain of Manchester City?"
];
var answers = [
  "Paul Pogba",
  "David Silva"
];
var userAnswers = [

];

function askQuestion(i){
  process.stdout.write(`\n\n${questions[i]}\n\n`);
};

process.stdin.on('data', function(answer){
  // process.stdout.write(`${answer}`);
  // process.exit();
  var questionNumber = userAnswers.length;
  var inputAnswer = answer.toString().trim();
  if(inputAnswer == answers[questionNumber]){
    process.stdout.write(`\n\nCorrect\n\n`);
    userAnswers.push(inputAnswer);

    if(userAnswers.length < answers.length){
      askQuestion(userAnswers.length);
    } else {
      process.exit();
    }
  } else {
    process.stdout.write(`\n\n${inputAnswer} is incorrect, please try again\n\n`);
  }


});

askQuestion(0);

process.on('exit', function(){
  process.stdout.write(`\n\n\n Congrats you have completed the quiz\n\n\n`);
});
