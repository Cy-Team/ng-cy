import {
  Component,
  OnInit,
  Input,
  ContentChild,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'cy-up-down',
  templateUrl: './up-down.component.html',
  styleUrls: ['./up-down.component.css']
})
export class UpDownComponent implements OnInit, AfterViewInit {

  top: number;
  @Input() padding: number;
  @Input() setTop: boolean;

  @ContentChild('top') topTmp: ElementRef;
  @ContentChild('bottom') bottomTmp: ElementRef;

  @ViewChild('topEl') topEl: ElementRef;
  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    if (this.topEl) {
      const el: HTMLElement = <HTMLElement>this.topEl.nativeElement;
      this.top = el.clientHeight + (this.setTop ? 0 : 10);
      this.cdr.detectChanges();
    }
  }

}
