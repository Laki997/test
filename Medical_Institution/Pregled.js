class Pregled {
    constructor(datum, vreme, pacijent){
        if (this.constructor == Pregled){
            throw new Error('Pregled cant be instatinated!');
        }
        this.datum = datum;
        this.vreme = vreme;
        this.pacijent = pacijent;
    }
 
 }

 export default Pregled;