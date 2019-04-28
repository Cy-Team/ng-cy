import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { NgCyUiModule } from 'projects/ng-cy-ui/components/ng-cy-ui.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExcelTempComponent } from './excel-temp/excel-temp.component';
import { RouterModule } from '@angular/router';

const router = [
  {
    path: 'exceltemp',
    component: ExcelTempComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ExcelTempComponent
  ],
  imports: [
    BrowserModule,
    NgCyUiModule,
    // NgZorroAntdModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(router)
    // FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
