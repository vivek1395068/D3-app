import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftPanelComponent } from './left.component';
import { MiddlePanelComponent } from './middle.component';
import { RightPanelComponent } from './right.component';
import { Header } from './header.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    MiddlePanelComponent,
    RightPanelComponent,
    Header
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
