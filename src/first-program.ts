//Basic types
let variable:number = 1;
let word:string = 'word';
let truth:boolean = false;
let arr: number[] = [1,2,3,4,5];

/* --- */
//Tuples
let tuple: [string, number, boolean];
tuple = [word,variable,truth];

//Tuples arrays
let tupleArr: [string, number, boolean][];
tupleArr = [
    tuple,
    [word, variable, truth],
    ['word', 1, false]
]
/* --- */
let union:boolean | string;
union = true;
union = 'false';

enum isNot {
    Up = 'up',
    Right = 'right',
    Down = 'down',
    Left = 'left'
}

//Objects
const object: {
    id: number,
    name: string,
    truth: boolean
} = {
    id: 1,
    name: 'Name',
    truth: false
}
//Simplifying, we can use type definition

type Person = {
    id: number | string,
    name: string,
    truth: boolean
}

let objectWithType:Person = {
    id: 1,
    name: 'Rick',
    truth: true
}

//Type assertion
//Generally used to indicate what type is correct to use in a variable that receive value from other value with many types.

let manyTypes:any = 'w3d';
//This give one type for assertType and your value as well, like initial, but initially your type is same as initial value in manyTypes.

let assertType = <number>manyTypes; //type = 'string'
assertType = 1; //type = 'number'

//Functions
function sum(num1:number, num2:number):number{
    return num1 + num2;
}

function log(value:number | string):void{
    console.log(value);
}

//Interfaces
//set a type with primitives numbers. Don't accept union types, only primitives, one per time, except in objects.
//Inside objects, your properties can have union types

interface normalInterface{
    type1: boolean,
    type2: string,
    type3: number
}
const normal: normalInterface = {
    type1: false,
    type2: 'yes',
    type3: 1
}
type funInterface = {(num1:number, num2:number):number};
let fun:funInterface = ((num1, num2) => num1 + num2);
interface InterfaceWithFunction {
    (num1:number, num2:number):number
}

let func: InterfaceWithFunction = (num1,num2)=> num1 - num2;

//optional and readonly
interface opAndRoInterface {
    optional?: number,
    readonly id : number | string
}
const opRo: opAndRoInterface = {
    id: 1,
    optional: 2
}

//Class and subclass (extend, implements)
class className {
    propNum: number;
    protected propStr: string;

    constructor(num: number, str:string) {
        this.propNum = num;
        this.propStr = str;
    }

    meth():string {
        return `${this.propStr} is your propStr`;
    }
}

class classImplements implements opAndRoInterface {
    optional?: number
    readonly id:number;
    constructor(str:number, num:number) {
         this.optional = str;
         this.id = num;
    }
}
class classExtends extends className {
    otherParam?: string
    constructor(num:number, str: string, other:string) {
        super(num, str);
        this.otherParam = other;
    }
    meth2(num:number):string{
        return `You pass ${num} and your propNum is ${this.propNum}`
    }
}
const obWithClass = new className(1, 'string');
const obWithClassImplements = new classImplements( 2,1);
const obWithClassExtends = new classExtends(112, 'asd', 'sakhaskhsak');

//Generics

function anyFunc<Ta, A>(anyType:Ta, anyOther:A):Ta{
    return anyType;
}

// let varWithOneTypeFromAnyType: number = anyFunc<number, string>('assd', 's'); //incorrect
let otherVarWithOneTypeFromAnyType: number = anyFunc<number, number>(1, 1); //correct

console.log(otherVarWithOneTypeFromAnyType);




