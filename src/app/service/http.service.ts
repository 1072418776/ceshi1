import { Injectable } from '@angular/core';
import  axios  from "axios";
@Injectable({
  providedIn: 'root'
})
export class HttpService {

public get(apiUrl:string) {
  return new Promise((reslove,reject)=>{
    axios.get('/user?ID=12345')
    .then(function (response) {
      // handle success
      reslove(response);
    })
    .catch(function (error) {
      // handle error
     reject(error);
    })
    .then(function () {
      // always executed
    });
  })
  
}
public post(apiUrl:string,params:any)  {
  
  return new Promise((reslove,reject)=>{
    axios.post(apiUrl,params)
  .then(function (response) {
    // handle success
    reslove(response);
  })
  .catch(function (error) {
    // handle error
   reject(error);
  })
})
}
  constructor() { }
}
