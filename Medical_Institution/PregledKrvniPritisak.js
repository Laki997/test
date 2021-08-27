import Pregled from './Pregled.js';
import {logAction} from './LogAction.js';

class PregledKrvniPritisak extends Pregled {

   
    constructor(datum,vreme,pacijent,gornjaGranica,donjaGranica,puls){
        super(datum,vreme,pacijent,);
        this.tip = 'Krvni pritisak';
        this.gornjaGranica = gornjaGranica;
        this.donjaGranica = donjaGranica;
        this.puls = puls;
     
    }

    obaviPregled(){
       logAction.log(`Pregled ${this.tip} za pacijenta ${this.pacijent.ime} ${this.pacijent.prezime}: pritisak je ${this.gornjaGranica} ${this.donjaGranica} i puls je ${this.puls}`);
    }
}

export default PregledKrvniPritisak;