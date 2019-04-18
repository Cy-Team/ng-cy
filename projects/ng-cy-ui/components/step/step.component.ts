import { Component, OnInit, Input, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'cy-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  @Input() StepSource: any[];
  @ContentChild('container') containerTemp: ElementRef;

  selectorStepIndex: number;
  constructor() { }

  ngOnInit() {
  }

  /**
   * 步骤选中项
   * @param index 选中索引
   */
  selectorStep(index) {
    this.selectorStepIndex = index;
  }
}
