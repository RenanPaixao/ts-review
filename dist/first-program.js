"use strict";
//Basic types
let variable = 1;
let word = 'word';
let truth = false;
let arr = [1, 2, 3, 4, 5];
/* --- */
//Tuples
let tuple;
tuple = [word, variable, truth];
//Tuples arrays
let tupleArr;
tupleArr = [
    tuple,
    [word, variable, truth],
    ['word', 1, false]
];
/* --- */
let union;
union = true;
union = 'false';
var isNot;
(function (isNot) {
    isNot["Up"] = "up";
    isNot["Right"] = "right";
    isNot["Down"] = "down";
    isNot["Left"] = "left";
})(isNot || (isNot = {}));
//Objects
const object = {
    id: 1,
    name: 'Name',
    truth: false
};
let objectWithType = {
    id: 1,
    name: 'Rick',
    truth: true
};
//Type assertion
//Generally used to indicate what type is correct to use in a variable that receive value from other value with many types.
let manyTypes = 'w3d';
//This give one type for assertType and your value as well, like initial, but initially your type is same as initial value in manyTypes.
let assertType = manyTypes; //type = 'string'
assertType = 1; //type = 'number'
//Functions
function sum(num1, num2) {
    return num1 + num2;
}
function log(value) {
    console.log(value);
}
const normal = {
    type1: false,
    type2: 'yes',
    type3: 1
};
let fun = ((num1, num2) => num1 + num2);
let func = (num1, num2) => num1 - num2;
const opRo = {
    id: 1,
    optional: 2
};
//Class and subclass (extend, implements)
class className {
    constructor(num, str) {
        this.propNum = num;
        this.propStr = str;
    }
    meth() {
        return `${this.propStr} is your propStr`;
    }
}
class classImplements {
    constructor(str, num) {
        this.optional = str;
        this.id = num;
    }
}
class classExtends extends className {
    constructor(num, str, other) {
        super(num, str);
        this.otherParam = other;
    }
    meth2(num) {
        return `You pass ${num} and your propNum is ${this.propNum}`;
    }
}
const obWithClass = new className(1, 'string');
const obWithClassImplements = new classImplements(2, 1);
const obWithClassExtends = new classExtends(112, 'asd', 'sakhaskhsak');
//Generics
function anyFunc(anyType, anyOther) {
    return anyType;
}
// let varWithOneTypeFromAnyType: number = anyFunc<number, string>('assd', 's'); //incorrect
let otherVarWithOneTypeFromAnyType = anyFunc(1, 1); //correct
console.log(otherVarWithOneTypeFromAnyType);
