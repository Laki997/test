
class LogAction{
 
    constructor(){
        this.dataList = [];
    }
     
        makeTextFile(logs){
        console.log(logs);
        var logsConcat = logs.join("\r\n");    
        var data = new Blob([logsConcat], {type:'txt/plain'});

        if (this.textFile !== null){
            URL.revokeObjectURL(this.textFile);
        }

        this.textFile = URL.createObjectURL(data);

        var link = document.createElement('a');
        link.setAttribute('download','file1.txt');
        link.href = this.textFile;
        link.click();
        return this.textFile;
    }

     logKreiranjeDoktora(doktor){
        
        const data = `[${new Date().toLocaleDateString()} ${new Date().getHours()} ${new Date().getMinutes()} ${new Date().getSeconds()}] kreiran je doktor ${doktor.ime} ${doktor.prezime}`;
        this.dataList.push(data);
        
    }

     logKreiranjePacijenta(pacijent){
        const data = `[${new Date().toLocaleDateString()} ${new Date().getHours()} ${new Date().getMinutes()} ${new Date().getSeconds()}] kreiran je pacijent ${pacijent.ime} ${pacijent.prezime}`;
        this.dataList.push(data);
    }

     logBiranjeLekara(pacijent,doktor){
        const data = `[${new Date().toLocaleDateString()} ${new Date().getHours()} ${new Date().getMinutes()} ${new Date().getSeconds()}] pacijent ${pacijent.ime} je izabrao lekara ${doktor.ime}`;
        this.dataList.push(data);
        
    }

     logObavljanjePregleda(pregled){
        const data = `[${new Date().toLocaleDateString()} ${new Date().getHours()} ${new Date().getMinutes()} ${new Date().getSeconds()}] pacijent ${pregled.pacijent.ime} je izvrsio pregled ${pregled.tip}`;
        this.dataList.push(data);
       
       
    }

}

export const logAction = new LogAction();




