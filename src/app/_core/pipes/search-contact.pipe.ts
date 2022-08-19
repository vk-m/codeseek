import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from '../models/contact.model';

@Pipe({
  name: 'searchContact'
})
export class SearchContactPipe implements PipeTransform {

  transform(contacts: IContact[], search: string): IContact[] {
    return contacts.filter(c => c.firstName.toLowerCase().includes(search) || c.lastName.toLowerCase().includes(search) || c.number.includes(search));
  }

}
