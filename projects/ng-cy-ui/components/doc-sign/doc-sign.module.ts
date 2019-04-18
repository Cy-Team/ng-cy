import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DocSignComponent } from './doc-sign.component';
import { HtmlStylePipe } from './../util/html-style.pipe';
// import { HtmlStylePipe } from './../util'; // 错误导入方式
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    DocSignComponent,
    HtmlStylePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule
  ],
  exports: [ DocSignComponent ]
})
export class DocSignModule { }
