import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../service/http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpService) { }

  ngOnInit(): void {
  }
  getCat(){
    var api="http://yuqing.itying.com/api/captcha"
    this.http.get(api).then((res)=>{console.log(res);
    })
  }
}
