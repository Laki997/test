import Pregled from './Pregled.js';
import {logAction} from './LogAction.js';

class PregledSecerUKrvi extends Pregled {

    constructor(datum, vreme, pacijent, vrednost, vremePoslednjegObroka){
        super(datum,vreme,pacijent);
        this.tip = 'Secer u krvi';
        this.vrednost = vrednost;
        this.vremePoslednjegObroka = vremePoslednjegObroka;
      
    }

    obaviPregled(){  
          logAction.log(`Pregled secera za pacijenta ${this.pacijent.ime} ${this.pacijent.prezime}: vredonost je ${this.vrednost}, a vreme poslednjeg obroka je ${this.vremePoslednjegObroka} `);
    }
}

export default PregledSecerUKrvi;