
/* Default params */
function newFunction(name, age, country)
{
    var name = name || 'franks';
    var age = age || '26';

    console.log(name, age);
}

//es6
function newFunction2(name = 'franks', age = '26')
{
    console.log(name, age);
}

newFunction2();
newFunction2('jhon', '27');

/* concatenation */
let hello = 'hello';
let world = 'world';
let phrase = hello + ' ' + world;
console.log(phrase);

//es6
let phrase2 = `${hello} ${world}`
console.log(phrase2);

/* multiline */
let lorem = 'No le temo a un hombre que dio 10000 patadas \n' +
            'le temo a el hombre que dio una patada 10000 veces';
//es6
let lorem2 = `No le temo a un hombre que dio 10000 patadas 
le temo a el hombre que dio una patada 10000 veces`;
console.log(lorem2);

/* en: Destructuring, es: Desestructuracion */
let person = {
    'name': 'franks',
    'age': 26,
    'country': 'Peru'
}
console.log(person.name, person.age, person.country);

//es6
let {myname, age, country} = person;
console.log(myname, age, country);
//https://carlosescorche.com/blog/desestructuracion-de-objetos-en-javascript#:~:text=La%20desestructuraci%C3%B3n%20es%20una%20caracter%C3%ADstica,y%20crear%20c%C3%B3digo%20m%C3%A1s%20legible.

/* en: Spread Operator es: Operador de propagacion (...)*/
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

//es6
let education = ['David', ...team1, ...team2];
console.log(education);

/* var, let, const */
{
    var globalVar = 'var';
}

{
    var globalLet = 'let';
    console.log(globalLet)
}
console.log(globalVar);

const a = 'b';
//a = 'c'; //error
console.log(a);

/* Objects */
let name = 'franks';
let age = '25';

obj = {name: name, age: age};

//es6
obj2 = {name, age};
console.log(obj2);

/* arrow functions */
const names = [
    {name: 'franks', age: 25},
    {name: 'Oscar', age: 22},
    {name: 'Pedro', age: 21},
];

let listOfNames = names.map(function (item){
    console.log(item.name);
});

//es6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age) => {
    console.log(name);
}
listOfNames3('franks', 23);

const listOfNames4 = names => {
    console.log(names.name);
}
listOfNames4(names[0]);

const square = num => num * num;
console.log(square(4));

/* promise - asynchronism */
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('hey');
        } else {
            reject('Ups!!');
        }
    });
};

helloPromise()
    .then( response => console.log(response) )
    .then( () => console.log('hola') ) // then nested is possible!
    .catch( error => console.log(error) );

/* Class */
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(2,3));

/* Module */
import hello from './module.js';

console.log( hello() );

/* Generator */
function * helloWorld() {
    if (true){
        yield 'Hello, ';
    }
    if (true){
        yield 'World';
    }
}
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

/* fibonacci generator */
function * fibonacci() {
    var a = 0, b = 1, c;
    yield 0;
    while (true){
        c = a + b;
        a = b;
        b = c;
        yield c;
    }
}
const fibonacciGenerator = fibonacci();
console.log(fibonacciGenerator.next().value); //0
console.log(fibonacciGenerator.next().value); //1
console.log(fibonacciGenerator.next().value); //2
console.log(fibonacciGenerator.next().value); //3
console.log(fibonacciGenerator.next().value); //5
console.log(fibonacciGenerator.next().value); //8

/*  */