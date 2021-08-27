import Doktor from './Medical_Institution/Doktor.js';
import Pacijent from './Medical_Institution/Pacijent.js';
import PregledSecerUKrvi from './Medical_Institution/PregledSecerUKrvi.js'
import PregledKrvniPritisak from './Medical_Institution/PregledKrvniPritisak.js';
import {logAction}  from './Medical_Institution/LogAction.js';

const doktor = new Doktor('Milan','Kalajdzic','kardiolog');
const pacijent = new Pacijent('Dragan','Kalajdzic','0711997800161','135125');

pacijent.odaberiDoktora(doktor);

const pregled1 = new PregledSecerUKrvi('07-11-2005','09:00',pacijent,'10','07:00');
doktor.zakaziPregled(pregled1);
const pregled2 = new PregledKrvniPritisak('07-11-2005','09:00',pacijent,'120','60',70);
doktor.zakaziPregled(pregled2);
pregled1.obaviPregled();
pregled2.obaviPregled();

console.log(logAction.dataList);
logAction.makeTextFile();