//require file system node module
var fs = require('fs');

//Cloze deletion flashcard constructor
function ClozeCard(text, cloze) {
  this.fullText = fullText;
    this.cloze = cloze;
    this.partial = fullText.replace(cloze, '...');
    
    this.create = function() {

    }
}

module.exports = ClozeCard;