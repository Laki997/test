import Doktor from './Medical_Institution/Doktor.js';
import Pacijent from './Medical_Institution/Pacijent.js';
import {logAction}  from './Medical_Institution/LogAction.js';
import Pregled_types from './Medical_Institution/Pregled_types.js';


const doktor = new Doktor('Milan','Kalajdzic','kardiolog');
const pacijent = new Pacijent('Dragan','Kalajdzic','0711997800161','135125');
const pacijent2 = new Pacijent('Dragan','Kalajdzic','0711997dsd800161','135125');

pacijent.odaberiDoktora(doktor);
pacijent2.odaberiDoktora(doktor);

const pregled = doktor.zakaziPregled(Pregled_types.SECER, pacijent);
doktor.obaviPregled(pregled);
const pregled2 = doktor.zakaziPregled(Pregled_types.HOLESTEROL,pacijent2);
doktor.obaviPregled(pregled2);

logAction.makeTextFile();