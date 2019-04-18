import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftRightComponent } from './left-right.component';

@NgModule({
  declarations: [LeftRightComponent],
  imports: [
    CommonModule
  ],
  exports: [LeftRightComponent]
})
export class LeftRightModule { }
