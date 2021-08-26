import Character2 from "./CharacterPrototype"; 

function PlayerCharacter2(){
    Character2.call(this);
}

PlayerCharacter2.prototype = Object.create(Character2.prototype);

Object.defineProperty(PlayerCharacter2.prototype,'constructor',{
    value: PlayerCharacter2,
    enumerable: false,
    writable: true
});

export default PlayerCharacter2;