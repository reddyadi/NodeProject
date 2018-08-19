// var name = 'Aditya';

// console.log('Hello '+name);
// console.log(`Hello ${name}`);//node syntax
// console.log("firstnode project running");

// console.log(__dirname);//shows directory path(/vagrant/www/NodeProject)
// console.log(__filename);//shows file path(/vagrant/www/NodeProject/firstnode.js)

process.stdout.write('\n\nWhat is your name?\n\n'); //output in server

//input data into server
process.stdin.on('data', function(answer){
  process.stdout.write(`\n\n Hello ${answer} \n\n`);
  process.exit();
});
