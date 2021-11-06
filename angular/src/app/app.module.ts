import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeepMenuComponent } from './deep-menu/deep-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubMenuComponent } from './deep-menu/sub-menu/sub-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DeepMenuComponent,
    SubMenuComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
