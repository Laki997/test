import Doktor from './Medical_Institution/Doktor.js';
import Pacijent from './Medical_Institution/Pacijent.js';
import {logAction}  from './Medical_Institution/LogAction.js';
import {PREGLED_TYPES}from './Medical_Institution/constants.js';


const doktor = new Doktor('Milan','Kalajdzic','kardiolog');
const pacijent = new Pacijent('Dragan','Kalajdzic','0711997800161','135125');
const pacijent2 = new Pacijent('Dragan','Kalajdzic','0711997dsd800161','135125');

pacijent.odaberiDoktora(doktor);
pacijent2.odaberiDoktora(doktor);

const pregled = doktor.zakaziPregled(new Date('07-11-2021'), '08:00', PREGLED_TYPES.SECER, pacijent);
doktor.obaviPregled(pregled);
const pregled2 = doktor.zakaziPregled(new Date('05-22-2021'),'07:15',PREGLED_TYPES.HOLESTEROL,pacijent2);
doktor.obaviPregled(pregled2);

logAction.makeTextFile();