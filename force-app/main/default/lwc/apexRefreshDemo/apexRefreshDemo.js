import { LightningElement, wire, track } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';

import getAccounts from '@salesforce/apex/ApexRefresh.fetchAccountRecords';


const COLO = [{label:"name", fieldName:"name", type:"text"},
              {label:"AnnualRevenue", fieldName:"AnnualRevenue", type:"text"},
              {label:"Amount", fieldName:"Amount", type:"text"},
              {label:"LastName", fieldName:"LastName",type:"text"},
              {label:"BillingCity", fieldName:"BillingCity",type:"text"},
              {label:"Industry", fieldName:"Industry",type:"picklist"}];

 export default class DeleteAccountRecord extends LightningElement {
   clm  =COLO;
   @track selectedRecord;
   @track wiredAccounts= [];
   @track accountList= [];
   @track error;
   
   @wire(getAccounts) accList(result) {
      this.wiredAccountList = result;

      if (result.data) {
        this.accountList = result.data;
        this.error = undefined;
      } else if (result.error) {
        this.error = result.error;
        this.accountList = [];
      }
    }

    handelSelection(event) {
      if (event.detail.selectedRows.length > 0) {
        this.selectedRecord = event.detail.selectedRows[0].Id;
      }
    }

    deleteRecord() {
      deleteRecord(this.selectedRecord)
        .then(() => {
          refreshApex(this.wiredAccountList);
        })
        .catch(error => {
        })
    }
}