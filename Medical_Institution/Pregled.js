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

 export default Pregled;