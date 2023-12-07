import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IMenu } from 'src/app/models';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() public menus: IMenu[] = [];
  public selectedIndex: number = 2;

  constructor(private router: Router) {}

  public onRoute(menu: IMenu, selectedIndex: number): void {
    this.selectedIndex = selectedIndex;
    this.router.navigateByUrl(menu.route);
  }
}
