class Osoba {
    constructor(ime, prezime){
        if (this.constructor == Osoba){
            throw new Error('Osoba cant be instatinated');
        }
        this.ime = ime;
        this.prezime = prezime;
    }
}

class Doktor extends Osoba{
    pacijenti = [];
    constructor(ime,prezime,specijalizacija){
        super(ime, prezime);
        this.specijalizacija = specijalizacija;
        LogAction.logKreiranjeDoktora(this);
    }

    zakaziPregled(pregled){
        console.log(`Zakazuje se pregled ${pregled.tip} za pacijenta ${pregled.pacijent.ime} ${pregled.pacijent.prezime} kod doktora ${this.ime} ${this.prezime}`);
    }
}

class Pacijent extends Osoba {
    jmbg;
    brojZdravstvenogKartona;
    doktor;
    constructor(ime, prezime, jmbg, brojZdravstvenogKartona){
        super(ime, prezime);
        this.jmbg = jmbg;
        this.brojZdravstvenogKartona = brojZdravstvenogKartona;
        LogAction.logKreiranjePacijenta(this);
    }

    odaberiDoktora(doktor){
      this.doktor = doktor;
      LogAction.logBiranjeLekara(this, this.doktor);
    }
}

class Pregled {
   constructor(datum, vreme, pacijent, tip){
       if (this.constructor == Pregled){
           throw new Error('Pregled cant be instatinated!');
       }
       this.datum = datum;
       this.vreme = vreme;
       this.pacijent = pacijent;
       this.tip = tip;
   }

   obaviPregled(){};
}

class PregledKrvniPritisak extends Pregled {
    gornjaGranica;
    donjaGranica;
    puls;
    constructor(datum,vreme,pacijent,tip){
        super(datum,vreme,pacijent,'krvni pritisak');
    }

    obaviPregled(){
        
        console.log(`Pregled krvnog pritiska za pacijenta ${this.pacijent.ime} ${this.pacijent.prezime}`);
        this.gornjaGranica=135;
        this.donjaGranica=75;
        this.puls = 85;

        console.log(`Pregled: pritisak je ${this.gornjaGranica} ${this.donjaGranica} i puls je ${this.puls}`);
        LogAction.logObavljanjePregleda(this);
    }
}

class PregledNivoSeceraUKrvi extends Pregled {
    vrednost;
    vremePoslednjegObroka;
    constructor(datum,vreme,pacijent,tip){
        super(datum,vreme,pacijent,'nivo secera u krvi');
    }

    obaviPregled(){
        console.log(`Pregled secera za pacijenta ${this.pacijent.ime} ${this.pacijent.prezime}`);
        this.vrednost = 10;
        this.vremePoslednjegObroka = '07:00';

        console.log(`Pregled: vredonost je ${this.vrednost}, a vreme poslednjeg obroka je ${this.vremePoslednjegObroka}`);
        LogAction.logObavljanjePregleda(this);
    }
}

class PregledHolesterol extends Pregled {
    vrednost;
    vremePoslednjegObroka;
    constructor(datum,vreme,pacijent,tip){
        super(datum,vreme,pacijent,'holesterol');
    }

    obaviPregled(){
        console.log(`Pregled holestera za pacijenta ${this.this.pacijent.ime} ${this.pacijent.ime}`);

        this.vrednost = 50;
        this.vremePoslednjegObroka='07:00';

        console.log(`Pregled: vrednost: ${this.vrednost}, a vreme poslednjeg obroka ${this.vremePoslednjegObroka}`);
        LogAction.logObavljanjePregleda(this);
    }
}

class LogAction{

    static logKreiranjeDoktora(doktor){
        console.log(`[${new Date().toLocaleDateString()} ${new Date().getHours()} ${new Date().getMinutes()} ${new Date().getSeconds()}] kreiran je doktor ${doktor.ime} ${doktor.prezime}`);
    }

    static logKreiranjePacijenta(pacijent){
        console.log(`[${new Date().toLocaleDateString()} ${new Date().getHours()} ${new Date().getMinutes()} ${new Date().getSeconds()}] kreiran je pacijent ${pacijent.ime} ${pacijent.prezime}`);
    }

    static logBiranjeLekara(pacijent,doktor){
        console.log(`[${new Date().toLocaleDateString()} ${new Date().getHours()} ${new Date().getMinutes()} ${new Date().getSeconds()}] pacijent ${pacijent.ime} je izabrao lekara ${doktor.ime}`);
    }

    static logObavljanjePregleda(pregled){
        console.log(`[${new Date().toLocaleDateString()} ${new Date().getHours()} ${new Date().getMinutes()} ${new Date().getSeconds()}] pacijent ${pacijent.ime} je izvrsio pregled ${pregled.tip}`);
    }
}


 doktor = new Doktor('Milan','Kalajdzic','kardiolog');
 pacijent = new Pacijent('Dragan','Kalajdzic','0711997800161','135125');

 pacijent.odaberiDoktora(doktor);

pregled1 = new PregledNivoSeceraUKrvi('07-11-2005','09:00',pacijent);
doktor.zakaziPregled(pregled1);
pregled2 = new PregledKrvniPritisak('07-11-2005','09:00',pacijent);
doktor.zakaziPregled(pregled2);
pregled1.obaviPregled();
pregled2.obaviPregled();




fs.writeFile("Logging.txt ","Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 




