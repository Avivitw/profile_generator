const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const allquestions = [`What's your name? Nicknames are also acceptable :) `,
  `What's an activity you like doing? `,
  `What do you listen to while doing that? `,
  `Which meal is your favourite (eg: dinner, brunch, etc.) `,
  `What's your favourite thing to eat for that meal? `,
  `Which sport is your absolute favourite? `,
  `What is your superpower? In a few words, tell us what you are amazing at! `
];

const arrAnswres = [];
let i = 0;



const printPargraph = function() {
  console.log(`${arrAnswres[0]} loves listening to ${arrAnswres[2]} while ${arrAnswres[1]}, devouring ${arrAnswres[4]} for ${arrAnswres[3]},\nprefers ${arrAnswres[5]} over any other sport, and is amazing at ${arrAnswres[6]}`);

};


// Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch,
// prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times

const processQuestions = function() {
  rl.question(allquestions[i], (answer) => {
    // console.log(`Thank you for your answer: ${answer}`);
    arrAnswres.push(answer);
    i ++;

    if (i < allquestions.length) {
      processQuestions();
    } else {
      //the closing part of this function happens here
      //print the paragraph
      printPargraph();
      rl.close();
    }

 
  });
};

processQuestions();

