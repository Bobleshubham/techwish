public with sharing class AccountDataImparative {
    @auraEnabled(cacheable=true)
    public static list<Account> accDetails(decimal minar, decimal maxar){
        list<Account>acclist=[select Id, Name, AnnualRevenue, BillingCity, Rating from Account where AnnualRevenue>=:minar and AnnualRevenue<:maxar WITH SECURITY_ENFORCED];
        return acclist;       

    }
}