import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MovieService } from 'src/app/data.service';
import { IMenu } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  public imgPath: string = environment.imagePath;

  constructor(public movieService: MovieService) {}

  public menus: Observable<IMenu[]> = this.movieService.getAll().pipe(
    map(values => values)
  );
}
