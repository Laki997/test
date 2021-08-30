import Osoba from './Osoba.js';
import {logAction} from './LogAction.js';

class Pacijent extends Osoba {
    jmbg;
    brojZdravstvenogKartona;
    doktor;
    constructor(ime, prezime, jmbg, brojZdravstvenogKartona){
        super(ime, prezime);
        this.jmbg = jmbg;
        this.brojZdravstvenogKartona = brojZdravstvenogKartona;
        logAction.log(`Kreiran je pacijent ${this.ime} ${this.prezime}`);
    }

    odaberiDoktora(doktor){
      this.doktor = doktor;
      const message = `Pacijent ${this.ime} ${this.prezime} je izabrao doktora ${doktor.ime} ${doktor.prezime}`;
      logAction.log(message);
      doktor.dodeliPacijenta(this);
    }
}

export default Pacijent;
