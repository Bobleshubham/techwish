import { LightningElement } from 'lwc';

export default class QuizComponent extends LightningElement {
myquestions=[
    {
        id:"Qusestion1",
        question:"Wchich one of the Following is Template Loop",
        answers:{
                    a:"for:each",
                    b:"itertor", 
                    c:"map loop"
        },
    correctanswes:"c"
    },
    { 
        id:"Qusestion2",
        question:"Wchich of the file is invalid in LWC components",
        answers:{ 
                a:".svg",
                b:".apex", 
                c:".js"
        },
        correctanswes:"b"
    },
    {
        id:"Qusestion3",
        question:"Which one of the following is not a directiv",
        answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
      correctanswes:"c"
    }
]
    //used for disabling the sumbmit button
      get allNotSelected(){
      return !(Object.keys(this.selected).length === this.myQuestions.length)
}

}