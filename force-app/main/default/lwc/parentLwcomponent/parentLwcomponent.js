import { LightningElement } from 'lwc';

export default class ParentLwcomponent extends LightningElement {
    firstname;
    company;
    additionofnumbers;
    addno=[];
    get additionofnumbers(){
        return this.additionofnumbers;
    }


    fname(event){
        this.firstname=event.target.value;
    }

    cname(event){
        this.company=event.target.value;
    }


}