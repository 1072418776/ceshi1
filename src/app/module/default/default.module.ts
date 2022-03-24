import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { DefaultRoutingModule } from './default-routing.module';

import { DefaultComponent } from './default.component';
import { HomeComponent } from './home/home.component';
import { AlarmComponent } from './alarm/alarm.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { ReportComponent } from './report/report.component';


import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
//布局组件需要引入的模块
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';

import { HighchartsChartModule } from 'highcharts-angular';
registerLocaleData(zh);
@NgModule({
  declarations: [
    HomeComponent,
    AlarmComponent,
    KeywordsComponent,
    ReportComponent,DefaultComponent,
    
 
     
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    NzLayoutModule,
    NzButtonModule,
    NzIconModule,
    NzMenuModule,
    NzBreadCrumbModule,
    HighchartsChartModule,
    NzDatePickerModule,
    FormsModule, NzTableModule,
    NzDividerModule,
    NzModalModule,
    NzInputModule

  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class DefaultModule { }
