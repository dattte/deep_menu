import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../core/service/menu.service";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-deep-menu',
  templateUrl: './deep-menu.component.html',
  styleUrls: ['./deep-menu.component.scss']
})
export class DeepMenuComponent implements OnInit {
  faSearch = faSearch;
  deepMenu: any;
  constructor(
    private menuService: MenuService,
  ) { }

  ngOnInit() {
    this.deepMenu = this.menuService.getMenu();
  }

}
