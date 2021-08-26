import Pregled from './Pregled.js';
import {logAction} from './LogAction.js';

class PregledHolesterol extends Pregled {
    vrednost;
    vremePoslednjegObroka;
    constructor(datum,vreme,pacijent,tip){
        super(datum,vreme,pacijent,'holesterol');
       
    }

    obaviPregled(){
        console.log(`Pregled holestera za pacijenta ${this.this.pacijent.ime} ${this.pacijent.ime}`);

        this.vrednost = 50;
        this.vremePoslednjegObroka='07:00';

        console.log(`Pregled: vrednost: ${this.vrednost}, a vreme poslednjeg obroka ${this.vremePoslednjegObroka}`);
        logAction.logObavljanjePregleda(this);
    }
}

export default PregledHolesterol;