import {Injectable} from '@angular/core';

@Injectable()

export class shareGraphData{
    constructor(){

    }
    graphData=null;

    soi="null";

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
            if(that.graphData.soi[0]!==undefined && that.graphData.soi[0]!==null){
              that.soi=that.graphData.soi[0].id
            }else{
              that.soi=null
            }
            console.log(that.graphData);
            console.log(that.soi);
            callback()
          }
        }
        xhttp.open("POST","/getgraphData",true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
        xhttp.send(params);
    }
}