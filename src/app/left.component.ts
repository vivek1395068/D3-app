import { Component,OnInit,ViewChild,AfterViewInit,ElementRef } from '@angular/core';
import { MiddlePanelComponent } from './middle.component';
import {shareGraphData} from './services/shareGraphData.service'

@Component({
  selector: 'leftPanel',
  template:`<div class="leftPanel">
              <p>HK{{variable}}</p>
              <input type="text" [(ngModel)]="variable">
              <input type="submit" value="submit" (click)="func('HK')">
              <input [(ngModel)]="variable">
            </div>`,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class LeftPanelComponent implements OnInit,AfterViewInit {
  @ViewChild(MiddlePanelComponent) middlepanelcomponent:MiddlePanelComponent;
  constructor(private dataService:shareGraphData){

  }
  ngOnInit(){
    
  }
  ngAfterViewInit(){
    console.log(this.middlepanelcomponent)
  }
  variable="HK";
  callback(){
    
  }
  func(data){
    //alert(data);
    var entity={"id":null};
    entity.id=this.variable;
    console.log(entity);
    this.dataService.fetchGraphData(entity,this.dataService.graphGenerator);
  }
}
