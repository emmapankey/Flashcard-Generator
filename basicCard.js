//require file system node module
var fs = require('fs');

//Basic flaschard constructor
function BasicCard(front, back) {
    this.front = front;
    this.back = back;
    this.create = function() {

    }
}

module.exports = BasicCard;