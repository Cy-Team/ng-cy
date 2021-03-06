import { Component, OnInit, Input, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'cy-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  @Input() StepSource: any[];
  @Input() SelectorStepIndex: number;
  @Input() MaxWidth: number;
  @ContentChild('container') containerTemp: ElementRef;


  // TimeOpen: boolean;
  date = null; // new Date();
  constructor() { }
  ngOnInit() {
  }

  /**
   * 步骤选中项
   * @param index 选中索引
   */
  selectorStep(index) {
    this.SelectorStepIndex = index;
  }

  showDatePicker(item) {
    this.StepSource = this.StepSource.map(v => {
      if (v !== item) {
        v.TimeOpen = false;
      }
      return v;
    });
    item.TimeOpen = !item.TimeOpen;
  }

  onChange(e, item) {
    item.TimeOpen = false;
  }
}
