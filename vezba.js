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

const num = number => number*2;

console.log(num(5));

*/





// Arrays

/*

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

*/


// Classes



class Person {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.getName;
    }

    getGender(){
        return this.gender;
    }
}

class Teacher extends Person {
    constructor(name,age,gender,subject){
        super(name,age,gender);
        this.subject = subject;
    }

    getSubject(){
        return this.subject;
    }
}

class Student extends Person{
    constructor(name, age, gender, marks){
        super(name,age,gender);
        this.marks = marks;
    }

    getMarks(){
        return this.marks;
    }
}

const teacher = new Teacher('Biljana Sijakov',55,'female','Maths');
const student = new Student('Lazar Kalajdzic',23,'male',95);

console.log(teacher.getSubject());
console.log(student.getMarks());


function PersonP(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

PersonP.prototype.getName = function(){
    return this.name;
}

PersonP.prototype.getAge = function(){
    return this.age;
}

PersonP.prototype.getGender = function(){
    return this.gender;
}


function TeacherP(name, age, gender, subject){
    PersonP.call(this, name, age, gender);
    this.subject = subject;
}

TeacherP.prototype = Object.create(PersonP.prototype);

TeacherP.prototype.getSubject = function(){
    return this.subject;
}

function StudentP(name, age, gender, marks){
    PersonP.call(this, name, age, gender);
    this.marks = marks;
}

StudentP.prototype = Object.create(PersonP.prototype);


const teacher2 = new TeacherP('Dusica Copic',52,'female','History');
const student2 = new StudentP('Milos Bakmaz',24,'male',95);

console.log(teacher2);
console.log(student2);




// arrow vs es5 functions


var cars = {
    models:['mercedes','volvo','renault'],
    owner:'Petar',
    description: function(){
        return this.models.map(function(model){
           return  `${this.owner} has car named ${model} `
        });
    }
};

console.log(cars.description());

// Ovo nece raditi zato sto se this odnosi na samu funkciju koja ja pozvala,
// a ona ne zna ko je "owner. Ovo se moze resiti pomocu bind(this)
// kreiranja pomocne variable, ali je mnogo bolje u ovom slucaju
// koristiti arrow function


var cars = {
    models:['mercedes','volvo','renault'],
    owner:'Petar',
    description: function(){
        return this.models.map((model) =>{
           return  `${this.owner} has car named ${model} `
        });
    }
};

console.log(cars.description());

// arrow funkcije ne menjaju svoj this context za razliku od klasicnih funkcija
// koje ga menjaju u odnosu na kontekst u kom je funkcija pozvana.


// Promises and async/await

const checkNum = (num) => {
    return new Promise((res, rej) => {
        if (num > 5){
            res(`${num} je vece od 5`);
        } else {
            rej(`${num} je manje od 5`);
        }
    });
};

checkNum(2).then((res) => {
    console.log(res);
}).catch((rej) => {console.log(rej)});



const testAsyncFunction = async (num) => {
    try {
        const result = await checkNum(num);
        console.log(result);
    } catch(e){

        console.log(e);
    }

}


testAsyncFunction(4);

// async/await je mozda bolje korsititi kada imamo ugnjezdene promise kako izbegli
// mnogo povezanih .then() komandi gde mozemo pomoci await da storujemo podatke u promenljivu.
// kada koristimo await on mora biti u okviru asinhrone funkcije




