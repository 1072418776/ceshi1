import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './default.component';
import { HomeComponent } from './home/home.component';
import { AlarmComponent } from './alarm/alarm.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [{
  path:"",
  component:DefaultComponent,
  children:[
    {
      path:"home",
      component:HomeComponent
    },
    {
      path:"alarm",
      component:AlarmComponent
    },
    {
      path:"keywords",
      component:KeywordsComponent
    },
    {
      path:"report",
      component:ReportComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
