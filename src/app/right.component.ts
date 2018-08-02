import { Component } from '@angular/core';
import {shareGraphData} from './services/shareGraphData.service'

@Component({
  selector: 'rightPanel',
  template:`<div class="rightPanel">
              <button (click)="getData()">getData</button>
              <p id="p"></p>
              {{dataService.soi}}
            </div>`,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class RightPanelComponent {
  //title = 'app';
  constructor(public dataService:shareGraphData){
    console.log(this.dataService.soi)
  }

  getData(){
    document.getElementById("p").innerHTML=this.dataService.soi
  }

  soi=this.dataService.soi
}
