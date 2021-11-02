import { Injectable } from '@angular/core';
import {deepMenu} from '../deep-menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor() { }

  getMenu() {
    return deepMenu;
  }
}
