import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcelTempComponent } from './excel-temp.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    ExcelTempComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [ExcelTempComponent ]
})
export class ExcelTempModule { }
