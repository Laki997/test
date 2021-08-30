
class LogAction{
 
    constructor(){
        this.dataList = [];
    }
     
        makeTextFile(){
        var logsConcat = this.dataList.join("\r\n");    
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

    log(message){
        const data = `[${new Date().toLocaleDateString()} ${new Date().getHours()} ${new Date().getMinutes()} ${new Date().getSeconds()}] ${message}`;
        this.dataList.push(data);
    }

}

export const logAction = new LogAction();




