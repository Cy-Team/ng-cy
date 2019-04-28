import { Component, OnInit, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import $ from 'jquery';

@Component({
  selector: 'cy-excel-temp',
  templateUrl: './excel-temp.component.html',
  styleUrls: ['./excel-temp.component.scss']
})
export class ExcelTempComponent implements OnInit {

  @Input() TempHTML: string; // 模版HTML，优先于模版路径
  @Input() TempData: any; // 模版数据

  @Input() IsMulti: boolean; // 是否多表
  @Input() MultiItem: Array<any> = []; // ["正面","背面"]
  @Input() IsTemplet: boolean; // 是否只显示模版

  defaultUrl: SafeResourceUrl;

  TempIndex = [];
  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.MultiItem.map(item => {
      item.src = this.sanitizer.bypassSecurityTrustResourceUrl(item.src);
      return item;
    });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  private ngAfterViewChecked(): void {
    // if (this.MultiItem.length > 0 && this.MultiItem[0].TempHTML) {
    //   this.MultiItem.forEach((item, index) => {
    //     $('#ifr_' + index).contentDocument.body.innerHTML = item.TempHTML;
    //   });
    // }
  }

  IframeOnload(event, i) {
    // console.log(event, item);
    this.TempIndex.push({
      index: i,
      el: $(event.currentTarget.contentDocument.body)
    });
  }

}
