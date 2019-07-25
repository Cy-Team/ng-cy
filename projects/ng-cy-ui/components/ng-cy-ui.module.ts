import { NgModule, ModuleWithProviders } from '@angular/core';

import { UpDownModule } from './layout/up-down/up-down.module';
import { LeftRightModule } from './layout/left-right/left-right.module';
import { HeadlineModule } from './layout/headline/headline.module';
import { StepModule } from './step/step.module';

export * from './layout';
export * from './step';

@NgModule({
  exports: [
    // 布局组件
    UpDownModule,
    LeftRightModule,
    HeadlineModule,
    StepModule
  ]
})
export class NgCyUiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgCyUiModule
    };
  }
}
