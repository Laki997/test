import PlayerCharacter from  './Class/PlayerCharacter.js'
import Character from './Class/Character.js';
import NonPlayerCharacter from './Class/NonPlayerCharacter.js';

import PlayerCharacter2 from './Prototype/PlayerCharacterPrototype.js';
import NonPlayerCharacter2 from './Prototype/NonPlayerCharacterPrototype.js';
import Character2 from './Prototype/CharacterPrototype.js';



const playerCharacter = new PlayerCharacter();
const nonPlayerCharacter2 = new NonPlayerCharacter();
nonPlayerCharacter2.getCharacterLocation();
nonPlayerCharacter2.setXandY(4,5)
nonPlayerCharacter2.getCharacterLocation();
playerCharacter.getCharacterLocation();
console.log(`[Class] Number of created characters: ${Character.getNumberOfCreatedObjects()}`);
// playerCharacter.setXandY(-2,5);


const playerCharacter4 = new PlayerCharacter2();
const nonPlayerCharacter4 = new NonPlayerCharacter2();
playerCharacter4.getCharacterLocation();
nonPlayerCharacter4.getCharacterLocation();
playerCharacter4.setXandY(4,2);
playerCharacter4.getCharacterLocation();
console.log(`[Prototype] Number of created characters: ${Character2.objectCounter()}`);
// playerCharacter4.setXandY(10,15);