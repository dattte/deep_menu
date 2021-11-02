import {Component, OnInit} from '@angular/core';
import {MenuService} from '../core/service/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'deep-menu-angular';
  deepMenu: any;

  constructor(
    private menuService: MenuService,
  ) {
  }
  ngOnInit() {
    this.deepMenu = this.menuService.getMenu();
  }
}
