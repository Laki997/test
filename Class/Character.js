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

        if (x < 0 || y < 0){
            throw new Error('Field minimum and start position is 0x0!');
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

export default Character;