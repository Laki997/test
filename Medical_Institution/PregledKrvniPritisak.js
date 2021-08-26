import Pregled from './Pregled.js';
import {logAction} from './LogAction.js';

class PregledKrvniPritisak extends Pregled {
    gornjaGranica;
    donjaGranica;
    puls;
    constructor(datum,vreme,pacijent,tip){
        super(datum,vreme,pacijent,'krvni pritisak');
     
    }

    obaviPregled(){
        
        console.log(`Pregled krvnog pritiska za pacijenta ${this.pacijent.ime} ${this.pacijent.prezime}`);
        this.gornjaGranica=135;
        this.donjaGranica=75;
        this.puls = 85;

        console.log(`Pregled: pritisak je ${this.gornjaGranica} ${this.donjaGranica} i puls je ${this.puls}`);
        logAction.logObavljanjePregleda(this);
    }
}

export default PregledKrvniPritisak;