public with sharing class ContractController {
    @AuraEnabled(cacheable=true)
    public static List<Contract> getAccountContracts(Id accountId) {
        List<Contract> contracts = [
            SELECT Id, ContractNumber, Name, Status, StartDate, EndDate, ContractUrl__c
            FROM Contract
            WHERE AccountId = :accountId
            ORDER BY CreatedDate DESC
            LIMIT 100
        ];

        for (Contract contract: contracts){
            contract.ContractUrl__c = URL.getSalesForceBaseUrl().toExternalForm() + '/' + contract.Id;
            System.debug('contractUrl: ' + contract.ContractUrl__c);
        }

        return contracts;
    }
}