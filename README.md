# Flashcard-Generator

Node application which generates flashcards through user prompts and allows a user to study their created flashcard set.

## Getting Started

First clone this repository:

```
https://github.com/emmapankey/Flashcard-Generator
```

## Installing

#### Node.js and npm
Go to the Node.js site: https://nodejs.org/en. Click the download button, and run through the installation file.
When you install node.js, npm is automatically installed.
To check if you have Node.js installed, run this command in your terminal:
```
node -v
```
To confirm that you have npm installed you can run this command in your terminal:
```
npm -v
```

Execute the following commands for installing the filesystem and inquirer packages:

```
npm install fs
```

```
npm install inquirer
```

## Run

To run the application execute the following command:

```
node app.js
```
The user is first prompted with a list of choices; ```MAKE A NEW BASIC CARD```, ```MAKE A NEW CLOZE CARD```, ```STUDY CARDS```.

### Basic Flashcard

Basic flashcards have a front (question) and a back (answer). Example - Front: What is the fourth planet from the sun?
Back: Mars. User is prompted to provide the question and answer to create a basic flashcard through a ```BasicCard``` constructor function.
Each ```BasicCard``` created is appended to the ```log.txt``` file.

### Cloze Flashcard

Cloze-Deleted, or cloze, sentences have text that has been partially removed. A user must guess the missing part of the sentence.
Example - ". . . is the fourth planet from the sun. The ". . ." is the missing portion (cloze) of the sentence.

User is prompted to provide the full sentence text with no portion removed as well as just the cloze portion to create a cloze flashcard through a ```ClozeCard```
constructor function. Each ```ClozeCard``` created is appended to the ```log.txt``` file.

### Study Cards

This option allows a user to quiz themselves with all of the flashcards they have previously created. For ```BasicCards``` the card front
is displayed as a question and for ```ClozeCards``` the partial question text is displayed. The user's response is compared to the card back
and cloze portion respectively and the user is notified if their guess is correct or not. When all the existing flashcards have been
used the user is returned to the starting prompt.

## Author

**Emma Pankey** (https://github.com/emmapankey)

