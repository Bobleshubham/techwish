import { LightningElement ,api} from 'lwc';

export default class SetterChild extends LightningElement {
    userDetails
    @api
    get Detail(){
        return this.userDetails
    }
    set Detail(data){
        let newage = data.age*2
        this.userDetail= {...data, age:newage, "location":"Maldives"}
    }

}