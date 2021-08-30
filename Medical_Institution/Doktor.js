import Osoba from './Osoba.js';
import {logAction} from './LogAction.js';
import PregledSecerUKrvi from './PregledSecerUKrvi.js';
import PregledHolesterol from './PregledHolesterol.js';
import PregledKrvniPritisak from './PregledKrvniPritisak.js';

class Doktor extends Osoba{
   
    constructor(ime,prezime,specijalizacija){
        super(ime, prezime);
        this.specijalizacija = specijalizacija;
        logAction.log(`Kreiran je doktor ${this.ime} ${this.prezime}`);
        this.pacijenti = [];
    }
    
    
    zakaziPregled(type,pacijent){
        let pregled;
        if (type === 'secer'){
            pregled = new PregledSecerUKrvi('07-11-2005','09:00',pacijent);
        } else if (type === 'pritisak'){
            pregled = new PregledKrvniPritisak('07-11-2005','09:00',pacijent);
        } else if(type === 'holesterol'){
            pregled = new PregledHolesterol('07-11-2005','09:00',pacijent);
        } else {
            throw new Error('Nazalost pregled ne postoji!');
            return;
        }

        return pregled;
    
    }
    
    obaviPregled(pregled){
        logAction.log(`Obavljen pregled ${pregled.constructor.name}  za pacijenta ${pregled.pacijent.ime} ${pregled.pacijent.prezime}. Rezultat pregleda: ${pregled.rezultatiPregleda()} `);
     }

    dodeliPacijenta(pacijent){
        this.pacijenti.push(pacijent);
    }
}

export default Doktor;