import { Component, OnInit, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import $ from 'jquery';

@Component({
  selector: 'cy-excel-temp',
  templateUrl: './excel-temp.component.html',
  styleUrls: ['./excel-temp.component.scss']
})
export class ExcelTempComponent implements OnInit {

  // @Input() TempHTML: string; // 模版HTML，优先于模版路径
  @Input() TempData: any; // 模版数据

  @Input() IsMulti: boolean; // 是否多表
  @Input() MultiItem: Array<any> = []; // ["正面","背面"]
  @Input() IsTemplet: boolean; // 是否只显示模版

  defaultUrl: SafeResourceUrl;
  SelectorTabIndex = 0;
  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    // 预处理是否多表，不是则只取第一项
    if (!this.IsMulti) {
      this.MultiItem = [ this.MultiItem.length > 0 ? this.MultiItem[0] : {}];
    }
    this.MultiItem.map((item) => {
      item.src = this.sanitizer.bypassSecurityTrustResourceUrl(item.src);
      return item;
    });
  }

  IframeOnload(event, item) {
    // console.log(event, item);
    if (item && item['src']) {
      item.bHeight = event.currentTarget.contentDocument.body.scrollHeight + 30;
      item.bWidth = event.currentTarget.contentDocument.body.scrollWidth;
    }
  }

}
