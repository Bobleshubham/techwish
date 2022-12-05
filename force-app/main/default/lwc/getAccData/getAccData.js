import { LightningElement,track,wire } from 'lwc';
import acdata from '@salesforce/apex/AccountDataImparative.accDetails'
export default class GetAccData extends LightningElement {
    minArv;
    changeMinArv(event){
        this.minArv = event.target.value;
    }
    maxArv;
    changeMaxArv(event){
        this.maxArv = event.target.value;
    }
    @track result;
    dataStatus = false;    // to get the data 
    errorStatus = false;   // used to show the error 
    clickHandler(event){
        dars({minar:this.minArv,maxar:this.maxArv})
            .then(data => {       //promiceses
                this.result = data;
                this.dataStatus = true
            })
            .catch(error => {
                this.errorStatus = true;
            });
    }
}