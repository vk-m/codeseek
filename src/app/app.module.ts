import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { ContactsComponent } from './main/contacts/contacts.component';
import { ContactComponent } from './main/contact/contact.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { SearchContactPipe } from './_core/pipes/search-contact.pipe';
import { ChangeContactComponent } from './_shared/change-contact/change-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactComponent,
    SearchContactPipe,
    ChangeContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
