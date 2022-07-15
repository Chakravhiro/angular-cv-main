import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  phone_number = "9003861859"

  email = "schakravarthy"
  domain = "gmail.com"

 
  my_website = "paulspetprojects.net"
  linedin = "https://www.linkedin.com/in/chakravarthy-j-b3179b179/";
  show_private_details = false;

  constructor() { }

  ngOnInit(): void {

    this.show_private_details =  environment.show_private_details
  }

  formEmail(): string {
    // This is purely to confuse spambots on github :)
    return this.email + '@' + this.domain
  }

}
