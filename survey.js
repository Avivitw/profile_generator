const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = '';

const questions = [`What's your name? Nicknames are also acceptable `,
`What's an activity you like doing? `,
`What do you listen to while doing that? `,
`Which meal is your favourite (eg: dinner, brunch, etc.) `,
`What\'s your favourite thing to eat for that meal? `,
`Which sport is your absolute favourite? `,
`What is your superpower? In a few words, tell us what you are amazing at! `
];

const arrAnswres = [];
const i = 0;

const processQuestions = function(questions){
  rl.question(questions[i], (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    arrAnswres.push(answer);

  rl.close();
  });

    if (i < questions.length) {
    processQuestions(questions[i]);
    i +=1;
    }
}

processQuestions(questions);

//Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch,
//prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times