import Pregled from './Pregled.js';
import {logAction} from './LogAction.js';

class PregledSecerUKrvi extends Pregled {

    constructor(datum, vreme, pacijent, vrednost, vremePoslednjegObroka){
        super(datum,vreme,pacijent);
        this.tip = 'Secer u krvi';
        this.vrednost = vrednost;
        this.vremePoslednjegObroka = vremePoslednjegObroka;
      
    }


    rezultatiPregleda(){
        return `Vrednost secera: ${this.vrednost}, vreme poslednjeg obroka ${this.vremePoslednjegObroka}`;
    }

}

export default PregledSecerUKrvi;