import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public imgPath: string = environment.imagePath;
  public footerMenu: string[] = [
    "HOME",
    "OUR SERVICES",
    "ABOUT US",
    "TESTIMONIALS",
    "BLOG",
    "CONTACT US"
  ];
  constructor() { }

  ngOnInit(): void { }
}
