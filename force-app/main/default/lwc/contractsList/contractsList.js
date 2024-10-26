// import { LightningElement, api } from 'lwc';

// export default class ContractsList extends LightningElement {
//     @api recordId;

//     connectedCallback() {
//         console.log('2:29am: Component initialized - recordId:', this.recordId);
//     }

//     renderedCallback() {
//         console.log('2:29am: Component rendered - recordId:', this.recordId);
//     }
// }

// contractsList.js
import { LightningElement, api, wire } from 'lwc';
import getAccountContracts from '@salesforce/apex/ContractController.getAccountContracts';

const COLUMNS = [
    { label: 'Contract Number', fieldName: 'ContractNumber', type: 'text' },
    { label: 'Contract Name', fieldName: 'Name', type: 'text' },
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