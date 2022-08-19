import { Injectable } from '@angular/core';
import { IContact } from '../models/contact.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
    constructor(private storageService: StorageService) {}

    createContacts() {
        let contacts = [];
        for (let i = 1; i < 11; i++) {
            contacts.push({
                id: i,
                firstName: `FirstName_${i}`,
                lastName: `LastName_${i}`,
                number: `+380${Math.round(Math.floor(Math.random() * (99999999 - 10000000) + 10000000))}`,
                age: Math.round(Math.floor(Math.random() * (99 - 10) + 10)),
                email: `email_${i}@example.com`
            })
            this.storageService.setLocalItem('contacts', contacts);
        }
    }
    getContacts() {
        return this.storageService.getItem('contacts')
    }
    getContact(id: number) {
        return this.storageService.getItem('contacts').find((c: IContact) => c.id == id)
    }
    deleteContact(id: number) {
        let contacts = this.getContacts();
        return this.storageService.setLocalItem('contacts', contacts.filter((c: IContact) => c.id != id))
    }
    updateContact(contact: IContact) {
        let contacts = this.getContacts();
        let contactIndex = contacts.findIndex(((obj: IContact) => obj.id == contact.id));
            contacts[contactIndex].firstName = contact.firstName;
            contacts[contactIndex].lastName = contact.lastName;
            contacts[contactIndex].number = contact.number;
            contacts[contactIndex].age = contact.age;
            contacts[contactIndex].email = contact.email;
        return this.storageService.setLocalItem('contacts', contacts)
    }
    addContact(contact: IContact) {
        
    }
}