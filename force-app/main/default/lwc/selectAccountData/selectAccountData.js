import { LightningElement, wire } from 'lwc';
import acdata from '@salesforce/apex/GetAccountDetails.displayAccountData';

export default class SelectAccountData extends LightningElement {
       minArv;
    changeMinArv(event){
        this.minArv = event.target.value;
    }
    maxArv;
    changeMaxArv(event){
        this.maxArv = event.target.value;
    }
    @wire(acdata,{minar:'$minArv',maxar:'$maxArv'}) gard;
}