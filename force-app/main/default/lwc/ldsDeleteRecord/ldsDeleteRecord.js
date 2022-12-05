import { LightningElement } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LdsDeleteRecord extends LightningElement {
    recordId
    changeHandler(event){
        this.recordId=event.target.value;
    }
    deleteHandler(){
        deleteRecord(this.recordId).then(()=>{
            let e = new ShowToastEvent({
                title:'Success',
                message:'Record Deleted Successfully',
                variant:'success'
              });
        this.dispatchEvent(e);            
        })
        .catch(error=>{
            console.error(error)
            let err = new ShowToastEvent({
                title:'Error',
                message:'Error Occured',
                variant:'error'
              });
        this.dispatchEvent(err);
        })
    }
}