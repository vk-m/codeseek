import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './main/contacts/contacts.component';
import { ContactComponent } from './main/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent
  },
  {
    path: 'contact/:id',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
