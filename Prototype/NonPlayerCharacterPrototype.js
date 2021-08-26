import Character2 from "./CharacterPrototype";

function NonPlayerCharacter2(){
    Character2.call(this);
}
NonPlayerCharacter2.prototype = Object.create(Character2.prototype);
Object.defineProperty(NonPlayerCharacter2.prototype,'constructor',{
    value: NonPlayerCharacter2,
    enumerable: false,
    writable: true
});

export default NonPlayerCharacter2;