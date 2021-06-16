
/* Object.entries */
const data = {
    frontend: 'Franks',
    backend: 'Jerson',
    design: 'Sharom'
}

const entries = Object.entries(data); //entries as array, all array
console.log(entries);
console.log(entries.length);

/* Object.values */
const data = {
    frontend: 'Franks',
    backend: 'Jerson',
    design: 'Sharom'
}

const values = Object.values(data);//only values as array
console.log(values);
console.log(values.length);

/* padding */
const str = 'hello';
console.log(str.padStart(7,'hi'));
console.log(str.padEnd(20,'^*'));

/* trailing comma */
const obj = {
    name: 'Franks', //comma here, without errors!!
}

/* async and await */
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello, World!'), 3000)
            : reject(new Error('Test Error!'))
    });
};

const helloAsync = async () => {
    const hello = await helloWorld();
    //const hello2 = await helloWorld2(); //more promises 
    console.log(hello);
};
helloAsync(); //response in 3000 miliseconds

/* async and await - another way ( handling errors ) */
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error){
        console.log(error);
    }
}
anotherFunction();