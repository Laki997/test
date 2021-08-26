import Pregled from './Pregled.js';
import {logAction} from './LogAction.js';

class PregledSecerUKrvi extends Pregled {
    vrednost;
    vremePoslednjegObroka;
    constructor(datum,vreme,pacijent,tip){
        super(datum,vreme,pacijent,'nivo secera u krvi');
      
    }

    obaviPregled(){
        console.log(`Pregled secera za pacijenta ${this.pacijent.ime} ${this.pacijent.prezime}`);
        this.vrednost = 10;
        this.vremePoslednjegObroka = '07:00';

        console.log(`Pregled: vredonost je ${this.vrednost}, a vreme poslednjeg obroka je ${this.vremePoslednjegObroka}`);
        logAction.logObavljanjePregleda(this);
    }
}

export default PregledSecerUKrvi;