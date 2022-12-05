import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ToastDemo extends LightningElement {
    clickButton(event){                 //creating a button event
        var btn = event.target.name;        //assigning a button to variable
        switch(btn){                     
            case "successbt":    
                let sev = new ShowToastEvent({
                    title: 'Toast message',
                    message: 'Success Message',
                    variant: 'success',
                    mode: 'dismissable'
                });
                this.dispatchEvent(sev);
                break;
                 
                case "errorbt":
                    let erb = new ShowToastEvent({
                        title:'Toast message',
                        message:'error message',
                        varient:'error',
                        mode:'dismissable'
                    });
                    this.dispatchEvent(erb);
                    break;
                    
                    case "warningbt":
                        let wrb = new ShowToastEvent({
                            title:'Toast Message',
                            message:'warning message',
                            varient:'Warning',
                            mode:'dismissable'
                        });
                        this.dispatchEvent(wrb);
                        break;

                 case "infobt":
                    let inb = new ShowToastEvent({
                        title:'Toast message',
                        varient:'Information message',
                        varient:'info',
                        
                    })  
}
    }
}