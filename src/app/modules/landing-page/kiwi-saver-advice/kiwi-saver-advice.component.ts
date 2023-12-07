import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-kiwi-saver-advice',
  templateUrl: './kiwi-saver-advice.component.html',
  styleUrls: ['./kiwi-saver-advice.component.scss']
})
export class KiwiSaverAdviceComponent {
  public imgPath: string = environment.imagePath;

  public onRoute(): void {
    alert('Not implemented')
  }
}
