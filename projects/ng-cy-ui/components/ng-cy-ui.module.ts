import { NgModule, ModuleWithProviders } from '@angular/core';

import { DocSignModule } from './doc-sign/doc-sign.module';
import { UpDownModule } from './layout/up-down/up-down.module';
import { LeftRightModule } from './layout/left-right/left-right.module';
import { HeadlineModule } from './layout/headline/headline.module';
import { StepModule } from './step/step.module';

export * from './doc-sign';
export * from './layout';
export * from './step';
export * from './util';

@NgModule({
  exports: [
    // 标记组件
    DocSignModule,

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
