import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/_core/services/contact.service';
import { IContact } from './../../_core/models/contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: IContact[] = [];
  search = "";
  contactChange!: IContact;

  constructor(
      private contactService: ContactService,
    ) { }

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

  loadContacts() { 
    this.contactService.createContacts();
    this.contacts = this.contactService.getContacts();
  }

  deleteContact(id: number) {
    this.contactService.deleteContact(id);
    this.contacts = this.contactService.getContacts();
  }

  updateContact(id: number) {
    this.contactChange = this.contactService.getContact(id);
  }

  addContact(){
    this.contactChange = {
      id: 0,
      firstName: "",
      lastName: "",
      number: "",
      age: 0,
      email: ""
    }
  }
}
