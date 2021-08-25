 // ES6 classes
 
 
 class Character {

    static count = 0;
    constructor(){
        if (this.constructor == Character){
            throw new Error('Abstract classes cant be instantiated!');
        }
        this.x = Math.floor(Math.random() * 10) + 1;
        this.y = Math.floor(Math.random() * 10) + 1;
        Character.count++;
        
    }
       

    setXandY(x,y){
        if (x > 10 || y > 10){
            throw new Error('Field can be 10x10 at maximum!!');
            return;
        }
        this.x = x;
        this.y = y;
    }

    getCharacterLocation(){
        console.log(`[Class] Character ${this.constructor.name} is at the location x: ${this.x} and y: ${this.y} `);
    }

    
     static getNumberOfCreatedObjects(){
        return this.count;
    }

}


class PlayerCharacter extends Character {

}

class NonPlayerCharacter extends Character {

}

playerCharacter = new PlayerCharacter();
nonPlayerCharacter = new NonPlayerCharacter();
playerCharachter2 = new PlayerCharacter();
nonPlayerCharacter2 = new NonPlayerCharacter();
nonPlayerCharacter2.getCharacterLocation();
nonPlayerCharacter2.setXandY(4,5)
nonPlayerCharacter2.getCharacterLocation();
playerCharacter.getCharacterLocation();
console.log(`[Class] Number of created characters: ${Character.getNumberOfCreatedObjects()}`);





// Prototype 



function Character2(){
    if (this.constructor === Character2){
        throw new Error('Cant instantiate abstract classs');
    }
    this.x = Math.floor(Math.random() * 10) + 1;
    this.y = Math.floor(Math.random() * 10) + 1;
    Character2.count++;
}

Character2.prototype.setXandY = function(x,y){
    if (x > 10 || y > 10){
        throw new Error('Field can be 10x10 at maximum!!');
        return;
    }
    this.x = x;
    this.y = y;
    
}

Character2.prototype.getCharacterLocation = function(){
    console.log(`[Prototype] Character ${this.constructor.name} is at the location x: ${this.x} and y: ${this.y} `);
}

function PlayerCharacter2(){
    Character2.call(this);
}

function NonPlayerCharacter2(){
    Character2.call(this);
}

PlayerCharacter2.prototype = Object.create(Character2.prototype);
NonPlayerCharacter2.prototype = Object.create(Character2.prototype);

Object.defineProperty(PlayerCharacter2.prototype,'constructor',{
    value: PlayerCharacter2,
    enumerable: false,
    writable: true
});
Object.defineProperty(NonPlayerCharacter2.prototype,'constructor',{
    value: NonPlayerCharacter2,
    enumerable: false,
    writable: true
});

Character2.count = 0;
Character2.objectCounter = function(){
    return this.count;
}

playerCharacter4 = new PlayerCharacter2();
nonPlayerCharacter4 = new NonPlayerCharacter2();
playerCharacter4.getCharacterLocation();
nonPlayerCharacter4.getCharacterLocation();
playerCharacter4.setXandY(4,2);
playerCharacter4.getCharacterLocation();
console.log(`[Prototype] Number of created characters: ${Character2.objectCounter()}`);

// Error za class sintaksu kako ne bi pucao kod gore
playerCharacter.setXandY(10,15);

// Error za prototype sintaksu
playerCharacter4.setXandY(10,15);

