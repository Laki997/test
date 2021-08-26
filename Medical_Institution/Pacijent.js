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
        logAction.logKreiranjePacijenta(this);
    }

    odaberiDoktora(doktor){
      this.doktor = doktor;
      logAction.logBiranjeLekara(this, this.doktor);
    }
}

export default Pacijent;
