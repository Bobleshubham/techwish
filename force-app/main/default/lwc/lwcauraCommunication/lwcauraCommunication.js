import { api, LightningElement } from 'lwc';

export default class LwcauraCommunication extends LightningElement {
    @api title
    callAura(){
        const event = new CustomEvent('+',{detail:{"msg":"Hello Form LWC"}})
        this.dispatchEvent(event)
    }
}