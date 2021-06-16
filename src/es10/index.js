/* flat array */
let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat()); // 1 level
console.log(array.flat(2)); // 2 levels

/* flat map */
let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));
//[1, 2]   [2, 4]  [3, 6]   [4, 8]   [5, 10] => then flat to deep 1
//result => [1, 2,   2, 4,  3, 6,   4, 8,   5, 10]

/* trim.Start, trim.End*/
let hello = '        hello, World!       ';
console.log(hello);          
console.log(hello.trimStart()); //'hello, World!       '
console.log(hello.trimEnd());   //'        hello, World!'

/* error in catch by default*/
try {

} catch{ //same as catch (error)
    error ;
}

/* from array entries:  (key,value) to object */
let entries = [['name', 'Franks'], ['age', 23]];
console.log(Object.fromEntries(entries));
//{ name: 'Franks', age: 23 }

/* symbol.description*/
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);
