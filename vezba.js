// Variable scope

/*
const testFunction = function(numbers){
    let oddNumber = 3;
    for (let number in numbers){
        // var digit ce biti ispisana u konzoli zbog toga sto je deklarisana sa "var" 
        // dok let broj i let oddNumber nece biti ispisane u konzoli
        var digit = 5;
        let broj = 10;
    }

    console.log(digit);
    console.log(broj);
    // evenNumber ce biti ispisan na konzoli jer je definisan u globalnom scopu i zato imamo pristup i u samoj funkciji
    console.log(evenNumber);
}

var evenNumber = 4;


console.log(oddNumber);

testFunction([1,2,3,4,5]);

*/

// Map function

/*

let squareArray = function (numbers){
  const newArray = numbers.map(number => Math.pow(number,2));
  console.log(newArray);
}

squareArray([2,4,6]);

// IIFE

const multiply = ((a,b) =>{
    return a*b;
})(5,10)

console.log(multiply);

// Array function

let num = number => number*2;

console.log(num(5));




*/

// JS and JSON

/*
const personJS = {
    firstName:'Lazar',
    lastNme:'Kalajdzic',
    age:23
}



personJSON = '{"firstName":"lazar","lastName":"kalajdzic","age":"23"}';

const fromJSONToJSObject = JSON.parse(personJSON);
const fromJSToJSON = JSON.stringify(personJS)

console.log(fromJSONToJSObject);
console.log(fromJSToJSON);


let arrayJS = [1,2,3,4,5];

let arrayJSON = '["1","2","3","4","5"]';

let parsedArray = JSON.parse(arrayJSON);

for (var i =0; i < parsedArray.length;i++){
    console.log(parsedArray[i]);
}

*/


// Arrays



const colors = ['blue','yellow','red','green','gray'];

for (const color of colors){
    console.log(color);
}

colors.forEach(color => {
    console.log(color);
});


const array = [1,2,3,4,5];

const rotate = function(arr, count){
    return [...arr.slice(count,arr.length), ...arr.slice(0,count)];

} 
console.log(rotate(array,2));


function sumNumbers(arr){
  console.log(
     arr.reduce((a, b) => a + b, 50)
        )
}

sumNumbers(array);


const increase = function(n){
    let array = [];

    for (let i=0; i<=n;i++){
        array.push(i);
    }
     
    console.log([...array,...array.reverse()]);
    
}

increase(5);



var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
  ];

  
const zooInventory = (myZoo) => {
    return myZoo.map((element) => {
    const name = element[0];
    const type = element[1][0];
    const age = element[1][1];
    return `${name} the ${type} is ${age}`;
    })
}

console.log(zooInventory(myZoo));

