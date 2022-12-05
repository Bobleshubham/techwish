public with sharing class StudentDataController {
    @AuraEnabled
    public static list<Students__c> fetchstudents(){        
        list<Students__c> listRes = [SELECT Id, Name, Marks__c, Email_Id__c FROM Students__c LIMIT 50];
            return listRes;            
    }
}
//    @AuraEnabled
//   public static list<Contact> fetchContacts(){        
//     list<Contact> lstContact = new list<Contact>();
//     for(Contact con : [SELECT id,name,email,phone,title FROM Contact LIMIT 5000]){
//         lstContact.add(con);
//     } 
//     return lstContact;        
// }