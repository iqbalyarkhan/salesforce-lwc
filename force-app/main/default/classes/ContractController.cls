public with sharing class ContractController {
    @AuraEnabled(cacheable=true)
    public static List<Contract> getAccountContracts(Id accountId) {
        return [
            SELECT Id, ContractNumber, Name, Status, StartDate, EndDate
            FROM Contract
            WHERE AccountId = :accountId
            ORDER BY CreatedDate DESC
            LIMIT 100
        ];
    }
}