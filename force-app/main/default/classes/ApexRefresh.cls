public  class ApexRefresh {
    @AuraEnabled(cacheable=true)
    public static  list<Account> fetchAccountRecords(){
        list<Account> acclist = [SELECT Id, Name, LastName, BillingCity, Industry, Rating, Phone, AnnualRevenue FROM Account LIMIT 10 ];
        return acclist;
    }
}
