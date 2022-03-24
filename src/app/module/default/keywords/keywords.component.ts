import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss']
})
export class KeywordsComponent implements OnInit {
  isVisible:boolean=false;
  isOKLoading:boolean=false;
  value?:string
  showModal(){
    this.isVisible=true
  }
  handleOk(): void {
    this.isOKLoading=true;
    setTimeout(() => {
      this.isOKLoading=false;
      this.isVisible = false;
    }, 2000);
   
  }

  handleCancel(): void {

    this.isVisible = false;
  }
  inputData={
    keyword:"",
    may_keyword:"",
    nokeyword:"",
    frequency:""
  }
  listData = [
    {
      keyword: '大庆油田',
      may_keyword: '中国石油',
      nokeyword: "延长石油",
      frequency: '100'
    },
    {
      keyword: '数字人民币',
      may_keyword: 'dec',
      nokeyword: "",
      frequency: '100'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
