import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContactService } from './../../_core/services/contact.service';
import { IContact } from './../../_core/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  subscription: Subscription = new Subscription();
  contact!: IContact;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService
    ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.route.params.subscribe(params => {
        this.contact = this.contactService.getContact(params['id'])
        console.log(this.contact)
      })
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
