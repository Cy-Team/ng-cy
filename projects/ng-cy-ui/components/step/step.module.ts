import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepComponent } from './step.component';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

@NgModule({
  declarations: [StepComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule
  ],
  exports: [StepComponent],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ]
})
export class StepModule { }
