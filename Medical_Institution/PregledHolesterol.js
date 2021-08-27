import Pregled from './Pregled.js';
import {logAction} from './LogAction.js';

class PregledHolesterol extends Pregled {
    
    constructor(datum,vreme,pacijent,vrednost){
        super(datum,vreme,pacijent);
        this.tip='Holesterol';
        this.vrednost = vrednost;
        this.vremePoslednjegObroka = this.vremePoslednjegObroka;
       
    }

    obaviPregled(){
        logAction.log(`Pregled holestera za pacijenta ${this.this.pacijent.ime} ${this.pacijent.ime}: vrednost: ${this.vrednost}, a vreme poslednjeg obroka ${this.vremePoslednjegObroka}`);
    }
}

export default PregledHolesterol;