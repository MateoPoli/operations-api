const operation = require("./Factory-operation");

class division extends operation{
    constructor(r1, r2){
        super(r1,r2);
    }
}

module.exports = division;