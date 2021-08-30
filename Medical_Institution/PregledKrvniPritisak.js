import Pregled from './Pregled.js';
import {logAction} from './LogAction.js';

class PregledKrvniPritisak extends Pregled {
    constructor(datum,vreme,pacijent){
        super(datum,vreme,pacijent,);   
    }

    rezultatiPregleda(){
       return `Gornja granica: ${Math.floor(Math.random() * 80) + 140}, Donja Granica: ${Math.floor(Math.random()* 50)+100} Puls: ${Math.floor(Math.random() * 50 ) + 90} `;
    }
}

export default PregledKrvniPritisak;