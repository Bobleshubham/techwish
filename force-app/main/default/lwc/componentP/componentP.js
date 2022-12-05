import { LightningElement } from 'lwc';

export default class ComponentP extends LightningElement {
    message;
    showModal=false;
    cickHandler(){
       this.showModal=true; 
    }
    closeHandler(event){
     this.message = event.detail.message; 
     this.showModal=false;
    }
}
