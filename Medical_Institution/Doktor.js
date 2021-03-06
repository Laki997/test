import Osoba from './Osoba.js';
import {logAction} from './LogAction.js';
import PregledSecerUKrvi from './PregledSecerUKrvi.js';
import PregledHolesterol from './PregledHolesterol.js';
import PregledKrvniPritisak from './PregledKrvniPritisak.js';
import {PREGLED_TYPES} from './constants.js';

class Doktor extends Osoba{
   
    constructor(ime,prezime,specijalizacija){
        super(ime, prezime);
        this.specijalizacija = specijalizacija;
        logAction.log(`Kreiran je doktor ${this.ime} ${this.prezime}`);
        this.pacijenti = [];
    }
    
    
    zakaziPregled(datum,vreme,type,pacijent){
        if (type === PREGLED_TYPES.SECER){
            return new PregledSecerUKrvi(datum,vreme,pacijent);
        } else if (type === PREGLED_TYPES.PRITISAK){
            return  new PregledKrvniPritisak(datum,vreme,pacijent);
        } else if(type === PREGLED_TYPES.HOLESTEROL){
            return new PregledHolesterol(datum,vreme,pacijent);
        } else {
            throw new Error('Nazalost pregled ne postoji!');
            return;
        }
    
    }
    
    obaviPregled(pregled){
        logAction.log(`Obavljen pregled ${pregled.constructor.name}  za pacijenta ${pregled.pacijent.ime} ${pregled.pacijent.prezime}. Rezultat pregleda: ${pregled.rezultatiPregleda()} `);
     }

    dodeliPacijenta(pacijent){
        this.pacijenti.push(pacijent);
    }
}

export default Doktor;