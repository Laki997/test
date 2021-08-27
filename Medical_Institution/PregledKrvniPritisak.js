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

    rezultatiPregleda(){
       return `Gornja granica: ${this.gornjaGranica}, Donja Granica: ${this.donjaGranica} Puls: ${this.puls} `;
    }
}

export default PregledKrvniPritisak;