import Company from '@salesforce/schema/Lead.Company';
import { api, LightningElement } from 'lwc';

export default class ChildLwcComponent extends LightningElement {
   @api massage;
    @api firstname;
    @api company;
    @api additionofnumbers;
}