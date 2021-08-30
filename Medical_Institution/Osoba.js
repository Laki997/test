class Osoba {
    constructor(ime, prezime){
        if (this.constructor == Osoba){
            throw new Error('Osoba cant be instatinated');
        }
        this.ime = ime;
        this.prezime = prezime;
    }
}

export default Osoba;