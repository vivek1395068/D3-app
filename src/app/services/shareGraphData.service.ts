import {Injectable} from '@angular/core';

@Injectable()

export class shareGraphData{
    constructor(){

    }
    graphData=null;

    graphGenerator:null;

    updateFunction(data){
      this.graphGenerator=data
    }

    fetchGraphData(data,callback){
      var params = typeof data == 'string' ? data : Object.keys(data).map(
        function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
    ).join('&');
        var that=this
        var xhttp= new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
          if(this.readyState==4 && this.status==200){
            that.graphData=JSON.parse(this.responseText);
            console.log(that.graphData);
            callback()
          }
        }
        xhttp.open("POST","/getgraphData",true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
        xhttp.send(params);
    }
}