import { Injectable } from "@angular/core";
import { Observable, filter, map, of } from "rxjs";
import { IMenu } from "./models";
import { menus } from "./stub";

@Injectable({ providedIn: 'root' })
export class MovieService {
 
  public getAll(): Observable<IMenu[]> {
    return of(menus);
  }
}