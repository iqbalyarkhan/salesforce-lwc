import { LightningElement, api, wire } from 'lwc';
import getAccountContracts from '@salesforce/apex/ContractController.getAccountContracts';

const COLUMNS = [
    { label: 'Contract Number', fieldName: 'ContractUrl__c', type: 'url', typeAttributes: { label: { fieldName: 'ContractNumber' }, target: '_blank' } },
    { label: 'Status', fieldName: 'Status', type: 'text' },
    { label: 'Contract Start Date', fieldName: 'StartDate', type: 'date' },
    { label: 'Contract End Date', fieldName: 'EndDate', type: 'date' }
];

export default class ContractsList extends LightningElement {
    @api recordId; // This will automatically receive the Account Id from the record page
    columns = COLUMNS;

    @wire(getAccountContracts, { accountId: '$recordId' })
    contracts;

    connectedCallback() {
        console.log('2:35 am: Component initialized - recordId:', this.recordId);
    }

    renderedCallback() {
        console.log('2:35 am: Component rendered - recordId:', this.recordId);
    }

    get hasContracts() {
        return this.contracts.data && this.contracts.data.length > 0;
    }
}