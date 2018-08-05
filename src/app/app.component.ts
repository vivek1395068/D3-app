import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(){
    var left= document.getElementById("leftPanel"),
        middle=document.getElementById("middlePanel"),
        right=document.getElementById("rightPanel"),
        body=document.getElementById("body"),
        drag1=document.getElementById("drag1"),
        drag2=document.getElementById("drag2");

        var isResizing1=false,
            isResizing2=false;
            
        (function(){
            drag2.onmousedown = function(e){
                isResizing1=true
            }

            drag1.onmousedown=function(e){
                isResizing2=true
            }

            body.onmousemove=function(e){
                if(!isResizing1 && !isResizing2){
                    return;
                }
                if(isResizing1){
                    let offsetright = body.clientWidth -(e.clientX-body.offsetLeft);
                    middle.style.right= offsetright+"px";
                    right.style.width=offsetright+"px";
                }

                if(isResizing2){
                    let leftPanelWidth = e.clientX;
                    left.style.width= leftPanelWidth+"px";
                    middle.style.left=leftPanelWidth+"px";
                }
            }

            body.onmouseup=function(e){
                // stop resizing
                isResizing1=false;
                isResizing2=false;
            }
        })();
  }
}
