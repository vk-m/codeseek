import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NUMBER_REGEXP, PHONE_REGEXP } from 'src/app/_core/constants/constants';
import { ContactService } from 'src/app/_core/services/contact.service';
import { IContact } from './../../_core/models/contact.model';

@Component({
  selector: 'app-change-contact',
  templateUrl: './change-contact.component.html',
  styleUrls: ['./change-contact.component.scss']
})

export class ChangeContactComponent implements OnInit {
  form!: FormGroup;

  @Input() contact!: IContact;
  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.initializeForm();
    console.log(this.contact)
   }

  get formControls() {
    return this.form.controls;
  }

  private initializeForm(): void {
    this.form = this.fb.group(
      {
        firstNameControl: [
          null,
          [
            Validators.required,
            Validators.minLength(3),
          ],
        ],
        lastNameControl: [
          null,
          [
            Validators.required,
            Validators.minLength(3),
          ],
        ],
        emailControl: [
          null,
          [
            Validators.email,
          ],
        ],
        numberControl: [
          null,
          [Validators.required, Validators.pattern(PHONE_REGEXP)],
        ],
        ageControl: [
          null,
          [Validators.pattern(NUMBER_REGEXP)],
        ],
      }
    );
  }


  onSubmit(){
    this.contactService.addContact(this.form.value)
  }


  ngOnInit(): void {
  }

}
