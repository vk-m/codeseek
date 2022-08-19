import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NUMBER_REGEXP, PHONE_REGEXP } from 'src/app/_core/constants/constants';
import { ContactService } from 'src/app/_core/services/contact.service';
import { IContact } from './../../_core/models/contact.model';
import { ModalService } from 'src/app/_core/services/modal.service';

@Component({
  selector: 'app-change-contact',
  templateUrl: './change-contact.component.html',
  styleUrls: ['./change-contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ChangeContactComponent {

  @Input() contact!: IContact;
  
  constructor(
    private contactService: ContactService, 
    public modalService: ModalService) {
   }

   ngOnChanges(changes: any){
    this.setValue(changes.contact.currentValue)
   }

  form = new FormGroup(
    {
      firstName: new FormControl(
        "",
        [
          Validators.required,
          Validators.minLength(3),
        ],
      ),
      lastName: new FormControl(
        "",
        [
          Validators.required,
          Validators.minLength(3),
        ],
      ),
      email: new FormControl(
        "",
        [
          Validators.email,
        ],
      ),
      number: new FormControl(
        "",
        [Validators.required, Validators.pattern(PHONE_REGEXP)],
      ),
      age: new FormControl(
        0,
        [Validators.pattern(NUMBER_REGEXP)],
      ),
      id: new FormControl(
        0,
        [Validators.pattern(NUMBER_REGEXP)],
      )
    }
  );

  get formControls() {
    return this.form.controls;
  }

  onSubmit(){
    let res = this.form.value;
    this.contactService.changeContact(res);
    this.modalService.close();
  }

  setValue(value: IContact){
    this.form.setValue(value)
  }

}
