Public with sharing class GetAccountDetails {
    @AuraEnabled(cacheable=true)
    public static List<Account> displayAccountData(Decimal minAr, Decimal maxAr){
        list<Account>acclist = [SELECT Id, Name, BillingCity, AnnualRevenue, Rating FROM Account WHERE AnnualRevenue>:minAr AND AnnualRevenue<:maxAr WITH SECURITY_ENFORCED];
        return acclist;
    }
}