import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news-blog',
  templateUrl: './news-blog.component.html',
  styleUrls: ['./news-blog.component.scss']
})
export class NewsBlogComponent {
  public title: string = 'News & Blog';
  public imgPath: string = environment.imagePath;
  public items: string[] = [
    "KiwiSaver HomeStart grant explained",
    "What's happening in the property market",
    "Trust law reform",
    "Tax update - Simplification of taxes, foreign",
    "What do the new lending rules mean?",
    "How will the Reserve bank respond to"
  ];

  public onRoute(): void {
    alert('Not implemented')
  }
}
