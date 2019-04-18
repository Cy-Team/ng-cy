import { Component, OnInit, Input, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'cy-left-right',
  templateUrl: './left-right.component.html',
  styleUrls: ['./left-right.component.css']
})
export class LeftRightComponent implements OnInit {

  @Input() leftwidth: number;
  // tslint:disable-next-line:no-input-rename
  @Input('rightbgcolor') bgcolor = '';
  @ContentChild('left') leftTmp: ElementRef;
  @ContentChild('right') rightTmp: ElementRef;

  swtchState: boolean;
  oldleftwidth: number;
  constructor() { }

  ngOnInit() {
    this.oldleftwidth = this.leftwidth;
  }

  switchTip() {
    this.leftwidth = this.swtchState ? this.oldleftwidth : 0;
    this.swtchState = !this.swtchState;
  }

}
