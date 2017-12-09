//require file system node module
var fs = require('fs');

// var ClozeCard = function(fullText, cloze) {
//   this.fullText = fullText;
//   this.cloze = cloze;
//   this.partial = fullText.replace(cloze, "...");

//   fs.appendFile("log.txt", JSON.stringify(ClozeCard) + ",", "utf8", function(error) {
//     if (error) {
//       console.log(error);
//     }
//   })
// }

//Cloze deletion flashcard constructor
function ClozeCard(fullText, cloze) {
  this.fullText = fullText;
  this.cloze = cloze;
  this.partial = fullText.replace(cloze, "...");

  this.create = function () {
    var log = {
      type: "Cloze Card",
      fullText: this.fullText,
      cloze: this.cloze,
      partial: this.partial
    };
    
    // add card to log.txt file
    fs.appendFile("log.txt", JSON.stringify(log) + "   ,   ", "utf8", function (error) {
      if (error) {
        console.log(error);
      }
    });
  };
}
module.exports = ClozeCard;