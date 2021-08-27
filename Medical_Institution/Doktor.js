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
        console.log(`Zakazuje se pregled ${pregled.tip} za pacijenta ${pregled.pacijent.ime} ${pregled.pacijent.prezime} kod doktora ${this.ime} ${this.prezime}`);
    }

    dodeliPacijenta(pacijent){
        this.pacijenti = pacijent;
    }
}

export default Doktor;