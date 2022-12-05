import { LightningElement, wire } from 'lwc';
import samplems from "@salesforce/messagechannel/antraMessageChannel__c"
import {subscribe, MessageContext, Application_Scope, unsubscribe} from "lightning/MesssageService"; 
export default class LmcComponent2 extends LightningElement {
    @wire(MessageContext) Context
    Subscribtion 
    SubscribeMessage(){
        this.Subscribtion = Subscribe(this.Context, samplems, (empdata)=>{this.handleMessage(empdata)}, {scope:APPLICATION_SCOPE})
    }
      en;ag;
      handleMessage(empdata){
        this.en=empdata.empName.value? empData.empName.value :"No employee name found"
        this.ag=empdata.empAge.value? empData.empAge.value :"No employee age found"
      }
      unsubscribeMessage(){
        unsubscribe(this.subscription)
        this.subscription=null
      }
}