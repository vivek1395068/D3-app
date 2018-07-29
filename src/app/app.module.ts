import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LeftPanelComponent } from './left.component';
import { MiddlePanelComponent } from './middle.component';
import { RightPanelComponent } from './right.component';
import { Header } from './header.component';
import {shareGraphData} from './services/shareGraphData.service'

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    MiddlePanelComponent,
    RightPanelComponent,
    Header
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [shareGraphData],
  bootstrap: [AppComponent]
})
export class AppModule { }
