/* `Operador de reposo` ...all */
const obj = {
    name: 'Franks',
    age: '23',
    country: 'Peru',
};

let { name, ...all } = obj;
console.log(name, ' -> ', all); //Franks -> { age: '23', country: 'Peru' }

/* `operador de reposo` ... in objects */
const obj = {
    name: 'Franks',
    age: 23,
}
const obj2 = {
    ...obj,
    country: 'Peru',
}
console.log(obj2);

/* Promise.finally */
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout( () => resolve('Hello, World'), 3000 )
            : reject( new Error('Test error'))
    });
};
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizo!'));

/* regex -> blocks */
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
//console.log(match);
console.log(year, month, day);
