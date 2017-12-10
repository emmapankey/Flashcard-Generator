//require file system node module for appending cards to the log.txt file
var fs = require('fs');

//Basic flaschard constructor
function BasicCard (front, back) {
    this.front = front;
    this.back = back;
    
    this.create = function() {
        var log = {
            type: "Basic Card",
            front: this.front,
            back: this.back
        };

        // add card object to log.txt file
        fs.appendFile("log.txt", JSON.stringify(log) + "   ,   ", "utf8", function (error) {
            if (error) {
                console.log(error);
            }
        });
    };
};

module.exports = BasicCard;