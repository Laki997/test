import Osoba from './Osoba.js';
import {logAction} from './LogAction.js';

class Doktor extends Osoba{
   
    constructor(ime,prezime,specijalizacija){
        super(ime, prezime);
        this.specijalizacija = specijalizacija;
        logAction.log(`Kreiran je doktor ${this.ime} ${this.prezime}`);
        this.pacijenti = [];
    }
    
    
    zakaziPregled(pregled){

        console.log(`Zakazan je pregled ${pregled.tip} za pacijenta ${pregled.pacijent.ime} ${pregled.pacijent.prezime}`);

        this.obaviPregled(pregled);
    
    }
    
    obaviPregled(pregled){
        logAction.log(`Obavljen pregled ${pregled.tip} za pacijenta ${pregled.pacijent.ime} ${pregled.pacijent.prezime}. Rezultat pregleda: ${pregled.rezultatiPregleda()} `);
     }

    dodeliPacijenta(pacijent){
        this.pacijenti.push(pacijent);
    }
}

export default Doktor;