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

(() => {
    console.log(2+4); 

})()

*/

// JS and JSON

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
