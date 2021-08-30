import Pregled from './Pregled.js';
import {logAction} from './LogAction.js';

class PregledHolesterol extends Pregled {
    
    constructor(datum,vreme,pacijent){
        super(datum,vreme,pacijent);
    }

    rezultatiPregleda(){
        return `Vrednost holesterola: ${Math.floor(Math.random() * 10) + 1}, vreme poslednjeg obroka ${new Date().getHours()}h ${new Date().getMinutes()}min`;
    }

}

export default PregledHolesterol;