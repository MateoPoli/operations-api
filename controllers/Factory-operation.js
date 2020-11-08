class operation{
    constructor( one, two){
        this.one = one,
        this.two = two
    }

    getSum(){
        return this.one + this.two;
    }
    getRes(){
        return this.one - this.two;
    }
    getMul(){
        return this.one * this.two;
    }
    getDiv(){
        return this.one / this.two;
    }
}

module.exports = operation;