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

Character2.count = 0;
Character2.objectCounter = function(){
    return this.count;
}

export default Character2;