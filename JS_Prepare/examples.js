// let and const

firstName = 'Test';

console.log(firstName);

// arrow functions

let duplicate = function(value) {
    return value * 2;
}

let duplicate_arrow = value => value * 2

// console.log(duplicate_arrow(2))

let printSomething = () => console.log('something')

let addition = (value1, value2) => value1 + value2;

let complexFuntion = () => {
    // line 1 
    // line 2
}

const obj = {
    traditionalFunction: function () {
        console.log('traditional function', this)
    },
    arrowfuntcion: () => {
        console.log("arrow funtcion", this)
    },
    lastName: 'Gavilan'
}

console.log('this enviroment', this)
obj.traditionalFunction();
obj.arrowfuntcion();