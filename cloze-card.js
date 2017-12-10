//require file system node module for appending cards to the log.txt file
var fs = require('fs');

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

        // add card object to log.txt file
        fs.appendFile("log.txt", JSON.stringify(log) + "   ,   ", "utf8", function (error) {
            if (error) {
            console.log(error);
            }
        });
    };
}

module.exports = ClozeCard;