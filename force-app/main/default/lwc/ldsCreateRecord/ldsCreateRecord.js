import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class LdsCreateRecord extends LightningElement {
    formFields={}
    changeHandler(event){
        const {name, value}=event.target
        this.formFields[name]=value

    }
    createContact(){
        const recordInput={apiName:CONTACT_OBJECT.objectApiName, fields:this.formFields}
        createRecord(recordInput).then(result=>{
        //    this.ShowToast('Success!!',`contact created with is ${result.id}`),'success')
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'contact created',
                variant: 'success'
            }),
        );
        })
        .catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: 'error occured',
                    variant: 'error',
                }),
            );
    
    })
    }
    

}
