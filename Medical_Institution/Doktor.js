import Osoba from './Osoba.js';
import {logAction} from './LogAction.js';

class Doktor extends Osoba{
    pacijenti = [];
    constructor(ime,prezime,specijalizacija){
        super(ime, prezime);
        this.specijalizacija = specijalizacija;
        logAction.logKreiranjeDoktora(this);
    }

    zakaziPregled(pregled){
        console.log(`Zakazuje se pregled ${pregled.tip} za pacijenta ${pregled.pacijent.ime} ${pregled.pacijent.prezime} kod doktora ${this.ime} ${this.prezime}`);
    }
}

export default Doktor;