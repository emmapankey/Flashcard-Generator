// require basic flashcard module
var BasicCard = require('./basic-card');

// require cloze deletion flashcard module
var ClozeCard = require('./cloze-card');

// require file system module
var fs = require('fs');

// require inquirer module for user prompt
var inquirer = require('inquirer');

function start() {
    count = 0;
    inquirer.prompt(
        {
            name: "userChoice",
            type: "rawlist",
            message: "What would you like to do?",
            choices: ["MAKE A NEW BASIC CARD", "MAKE A NEW CLOZE CARD", "STUDY CARDS"]
        }).then(function (answer) {
            if (answer.userChoice == "MAKE A NEW BASIC CARD") {
                makeBasicCard();
            }
            else if (answer.userChoice == "MAKE A NEW CLOZE CARD") {
                makeClozeCard();
            }
            else if (answer.userChoice == "STUDY CARDS") {
                studyFlashcards();
            }
        })
}

function makeBasicCard() {
    inquirer.prompt([{
        name: "front",
        message: "What is this card's question?",
        validate: function (input) {
            if (input === " ") {
                console.log("Flashcard requires a question");
                return false;
            }
            else {
                return true;
            }
        }
    }, {
        name: "back",
        message: "What is this card's answer?",
        validate: function (input) {
            if (input === " ") {
                console.log("Flashcard requires an answer");
                return false;
            }
            else {
                return true;
            }
        }
    }]).then(function (answer) {
        console.log(answer);
        var newBasic = new BasicCard(answer.front, answer.back);
        newBasic.create();
        start();
    })
}

function makeClozeCard() {
    inquirer.prompt([{
        name: "fullText",
        message: "What is the full text for this card?",
        validate: function (input) {
            if (input == " ") {
                console.log("Flashcard text is required");
                return false;
            }
            else {
                return true;
            }
        }
    }, {
        name: "cloze",
        message: "What is the cloze portion for this card?",
        validate: function (input) {
            if (input == " ") {
                console.log("Please enter the cloze portion");
                return false;
            }
            else {
                return true;
            }
        }
    }]).then(function (answer) {
        var fullText = answer.fullText;
        var cloze = answer.cloze;
        if (fullText.includes(cloze)) {
            var newClozeCard = new ClozeCard(fullText, cloze);
            newClozeCard.create();
            start();
        }
        else {
            console.log("The cloze portion entered does not match the full card text");
            start();
        }
    })
}

var count = 0;

function studyFlashcards() {
     // read the log.txt file
     fs.readFile('./log.txt', 'utf8', function(error, data) {
        if (error) {
            console.log(error);
        }
        var questions = data.split('   ,   ');
        var question = questions[count];
        // console.log(question);
        var parsedQuestion = JSON.parse(question);
        // console.log(parsedQuestion);
        
        if (parsedQuestion.type === "Basic Card") {
            questionText = parsedQuestion.front;
            questionAnswer = parsedQuestion.back;
         }
         else if (parsedQuestion.type === "Cloze Card") {
            questionText = parsedQuestion.partial;
            questionAnswer = parsedQuestion.cloze;
         }

         inquirer.prompt([{
             name: "userGuess",
             message: questionText
         }]).then(function(answer) {
             if (answer.userGuess === questionAnswer) {
                 console.log("Correct!")
                 count++;
                 if (count < questions.length - 1) {
                 studyFlashcards();
                 }
                 else {
                     console.log("You have answered all of your Flashcards.");
                         start()
                 }
             }
             else {
                 console.log("Incorrect answer. Please try again.");
                 studyFlashcards();
             }
         })
    });
}

start();