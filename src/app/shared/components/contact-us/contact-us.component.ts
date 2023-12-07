import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  public title: string = 'Contact Us';
  public imgPath: string = environment.imagePath;
  public items: Array<{ name: string; image: string }> = [
    { name: "Find an Adviser", image: "location.jpg" },
    { name: "Talk to an accountant", image: "talk.jpg" },
    { name: "Talk to a mortgage broker", image: "house.jpg" },
    { name: "0800 700 699", image: "phone.jpg" },
    { name: "reception@havenadvisers.co.nz", image: "mail.jpg" },
    { name: "Be a part of our Facebook community", image: "facebook.jpg" }
  ];

  constructor() { }

  ngOnInit(): void { }
}
