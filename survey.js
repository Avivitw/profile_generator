const readline = require('readline');
const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = '';

const allquestions = [`What's your name? Nicknames are also acceptable :) `,
`What's an activity you like doing? `,
`What do you listen to while doing that? `,
`Which meal is your favourite (eg: dinner, brunch, etc.) `,
`What\'s your favourite thing to eat for that meal? `,
`Which sport is your absolute favourite?` ,
`What is your superpower? In a few words, tell us what you are amazing at! `
];

const arrAnswres = [];
let i = 0;

const processQuestions = function(question){
  rl.question(question, (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    arrAnswres.push(answer);
    i += 1;

    if (i < question.length) {
    processQuestions(question);
    } else {
      //print the paragraph
    }

  rl.close();
  });
}

processQuestions(allquestions);

//Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch,
//prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times

// stdin.on('data', (key) => {
//   process.stdout.write('.');
//   // \u0003 maps to ctrl+c input
// if (key === '\u0003') {
//   process.exit();
// }
// });