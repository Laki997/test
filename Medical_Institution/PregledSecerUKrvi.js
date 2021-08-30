import Pregled from './Pregled.js';
import {logAction} from './LogAction.js';

class PregledSecerUKrvi extends Pregled {
    constructor(datum, vreme, pacijent){
        super(datum,vreme,pacijent);
        }

    rezultatiPregleda(){
        return `Vrednost secera: ${Math.floor(Math.random() * 11)}, vreme poslednjeg obroka ${new Date().getHours()}h ${new Date().getMinutes()}min`;
    }

}

export default PregledSecerUKrvi;