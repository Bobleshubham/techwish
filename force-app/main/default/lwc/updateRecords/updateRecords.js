import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import { updateRecord } from 'lightning/uiRecordApi';
const COLS =[
{label:'Id', fieldName:'Id'},
{label:'Name',fieldName:'Name'},
{label:'Title', fieldName:'Title'},
{label:'Phone', fieldName:'Phone', editable:true},
{label:'Email', fieldName:'Email',type:'email',editable:true}]

export default class UpdateRecordLDS extends LightningElement {
  contacts=[]
  columns=COLS
  draftValues=[]
  @wire(getListUi,{objectApiName:CONTACT_OBJECT,listViewApiName:'AllContacts'})
  listViewHandler({data,error}){
    if(data){
        this.contacts= data.records.records.map(item=>{
            return{
                "Id":this.getValue(item,'Id'),
                "Name":this.getValue(item,'Name'),
                "Title":this.getValue(item,'Title'),
                "Phone":this.getValue(item,'Phone'),
                "Email":this.getValue(item,'Email')
            }
        })
    }
    if(error){
        console.error(error)
    }
  }
  getValue(data, field){
    return data.fields[field].value
  }
  
 handleSave(event){
    console.log(JSON.stringify(event.detail.draftValues))
    const recordInputs = event.detail.draftValues.map(draft=>{const fields = {...draft}; 
        return{fields:fields};
    })
    const promises= recordInputs.map(recordInput => updateRecord(recordInput))
    promises.all(promises).then(() =>{
        console.log('Contact Updated Successfully')
        this.draftvalues=[]
    }).catch(error=>{
        console.error("Error Updating the record",error)
    })
  }
}