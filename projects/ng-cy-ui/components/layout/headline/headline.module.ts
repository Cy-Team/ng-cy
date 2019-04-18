import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadlineComponent } from './headline.component';

@NgModule({
  declarations: [HeadlineComponent],
  imports: [
    CommonModule
  ],
  exports: [HeadlineComponent]
})
export class HeadlineModule { }
