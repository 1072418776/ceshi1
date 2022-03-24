import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss']
})
export class AlarmComponent implements OnInit {
  alarm={
    phone:"",
    mail:""
  }
  constructor() { }

  ngOnInit(): void {
  }

}
