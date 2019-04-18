import {
  Component,
  OnInit, Input,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';

import $ from 'jquery';
import { CyTempData, CyOtherData } from './TempData';

@Component({
  selector: 'cy-doc-sign',
  templateUrl: './doc-sign.component.html',
  styleUrls: ['./doc-sign.component.css']
})
export class DocSignComponent implements OnInit {

  @Input() TempHTML: string; // 模版HTML，优先于模版路径
  @Input() TempData: CyTempData; // 模版数据
  @Output() TempDataChange: EventEmitter<CyTempData> = new EventEmitter();

  // 标记正则表达式
  SignRegex = /\[[@!]([^\]!@]+)\]/g;

  @ViewChild('DocSign', { read: ElementRef }) docSign: ElementRef;

  // jQuery文档对象
  private $doc: any;
  private $TableList: [];

  SelectTag: CyOtherData = {} as CyOtherData;
  OtherElList = [];

  constructor() { }

  ngOnInit() {
    const _doc = this.docSign.nativeElement;
    this.$doc = $(_doc);
  }

  // html内容渲染在视图中调用
  // tslint:disable-next-line:use-life-cycle-interface
  private ngAfterViewChecked(): void {
    if (this.$doc && this.$doc.children().length > 0) {
      this._buildSignContainer();
    }
  }

  /*
   * 构建标记内容
   */
  private _buildSignContainer() {
    // 查询除table意外所有匹配的标记
    // const $signs_all = this.$doc.find('*:not(:has(*)):contains("[@")');

    const $signs_str = this.$doc.find('*:not("table *"):not(:has(*)):contains("[@")');
    $signs_str.css('background-color', 'blue');
    $signs_str
      .css({
        'background-color': 'yellow',
        'cursor': 'help'
      })
      .on('click', evt => {
        // this.SelectTag.data = $(evt.target).text();
        const _tag = evt.target.getAttribute('tag');
        this.SelectTag = this.findOfProp(this.TempData.OtherData, 'tag', _tag) || {
          tag: _tag
        } as CyOtherData;
      });

    $.each($signs_str, (index, el) => {
      const $el = $(el);
      const text = $el.text().replace(this.SignRegex, (match, key) => key);
      this.OtherElList.push({
        tag: text,
        $el: $el
      });
      $el.attr('tag', text);
    });

    // const $signs_tbl = this.$doc.find('table *:not(:has(*)):contains("[@")');
    // $signs_tbl
    //   .css('background-color', 'slateblue');

    this.$TableList = this.$doc.find('table');
    this.bindTempData(this.TempData);
  }

  private bindTempData(data: CyTempData) {
    if (Array.isArray(data.OtherData)) {
      data.OtherData.forEach((item: CyOtherData) => {
        const selectObj = this.findOfProp(this.OtherElList, 'tag', item.tag);
        selectObj.$el.text(item.text);
      });
    }

    if (Array.isArray(data.TableData)) {
      $.each(this.$TableList, (index, el) => {
        const $el = $(el);

        // $el.append($format_tr);
        const tmpTblData = data.TableData[index] || [];
        if (Array.isArray(tmpTblData)) {
          tmpTblData.forEach((item, iNum) => {
            const $tags = $el.find(':not(:has(*)):contains("[@")');
            const $tr = $tags.closest('tr');
            const $format_tr = $tr.clone();
            $.each($tags, (i, e) => {
              const $e = $(e);
              const text = $e.text().replace(this.SignRegex, (match, key) => key);
              $e
                .attr('tag', text)
                .text(item[text]);
            });
            if (iNum < tmpTblData.length - 1) {
              $el.append($format_tr);
            }
          });
        }
      });
    }
  }

  // 替换内容
  private _reSimpleStr(text, obj) {
    return text.replace(this.SignRegex, (match, key) => obj[key] || '');
  }

  EditTageChange(v) {
    const selectObj = this.findOfProp(this.OtherElList, 'tag', this.SelectTag.tag);
    if (selectObj) {
      selectObj.$el.text(v);
      const _tempData: CyOtherData = this.findOfProp(this.TempData.OtherData, 'tag', this.SelectTag.tag);
      if (_tempData) {
        _tempData.text = v;
      } else {
        this.TempData.OtherData.push({
          tag: this.SelectTag.tag,
          text: v,
          records: []
        } as CyOtherData);
      }
      this.TempDataChange.emit(this.TempData);
    }
  }

  /**
   *查找数组对象键对应的对象
   *
   * @param arr 数组
   * @param propName 键
   * @param value 值
   * @returns 对象
   */
  findOfProp(arr, propName, value) {
    const index = this.indexOfProp(arr, propName, value);
    return index >= 0 ? arr[index] : null;
  }

  /**
   * 查询数组对象键值对应的索引
   * @param arr 数组
   * @param propName 键
   * @param v 值
   * @returns 索引
   */
  private indexOfProp(arr, propName, v) {
    // tslint:disable-next-line:curly
    for (let i = arr.length - 1; i >= 0; i--)
      // tslint:disable-next-line:curly
      if (arr[i] && arr[i][propName] === v) return i;
    return -1;
  }

}
