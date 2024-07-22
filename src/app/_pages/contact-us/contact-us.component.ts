import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


class ContactModel {
  name: string
  email: string
  message: string
  constructor(name: string = '', email: string = '', message: string = '') {
    this.name = name
    this.email = email
    this.message = message
  }
}


@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contactUsModel: ContactModel = new ContactModel()

  constructor() {
    console.log(this.contactUsModel)
  }

  submit() {
    console.log(this.contactUsModel)
  }
}
