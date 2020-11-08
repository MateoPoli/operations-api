const operation = require("./Factory-operation");

class multiplicacion extends operation{
    constructor(m1, m2){
        super(m1,m2);
    }
}

module.exports = multiplicacion;