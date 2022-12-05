import { LightningElement } from 'lwc';

export default class ComponentC extends LightningElement {
    closemethod(){
        const myEvent = new CustomEvent('close',{detail:{message:"model closed successfully"}}) 
    this.dispatchEvent(myEvent)
    }
}

// here we are creating custom event in child component
