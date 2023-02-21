import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {
 
  setData(dataId:string,data:any){
localStorage.setItem(dataId,JSON.stringify(data));
  }


  getData(sendDataId:string){
    if(localStorage.getItem(sendDataId)!==null){
      return localStorage.getItem(sendDataId);
   
  }
  else 
  return -1;
  }
 
  constructor() { }
 
}
