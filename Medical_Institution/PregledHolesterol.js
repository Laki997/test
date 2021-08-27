import Pregled from './Pregled.js';
import {logAction} from './LogAction.js';

class PregledHolesterol extends Pregled {
    
    constructor(datum,vreme,pacijent,vrednost){
        super(datum,vreme,pacijent);
        this.tip='Holesterol';
        this.vrednost = vrednost;
        this.vremePoslednjegObroka = this.vremePoslednjegObroka;
       
    }

    rezultatiPregleda(){
        console.log(`Vrednost holesterola: ${this.vrednost}, vreme poslednjeg obroka ${this.vremePoslednjegObroka}`);
    }

}

export default PregledHolesterol;