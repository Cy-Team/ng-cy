import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-cy';
  filename = 'assets/1.html';
  TempHTML = '';
  SelectorStepIndex = 1;
  StepSource = [{
    date: '2019-02-02',
    content: '内容1',
    disabled: true
  }, {
    date: '2019-02-04',
    content: '内容2'
  }, {
    date: '2019-02-05',
    content: '内容2'
    }, {
      date: '2019-02-05',
      content: '内容2'
    }, {
      date: '2019-02-05',
      content: '内容2'
    }, {
      date: '2019-02-05',
      content: '内容2'
    }, {
      date: '2019-02-05',
      content: '内容2'
    }];

  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 2'
    },
    {
      active: false,
      disabled: true,
      name: 'This is panel header 3'
    }
  ];

  TempData = {
    OtherData: [{
      tag: '单位',
      text: '测试单位',
      records: [{
        name: '2019-02-01 交互：',
        content: '测试1',
      },
      {
        name: '2019-02-02 交互：',
        content: '测试2',
      },
      {
        name: '2019-02-03 交互：',
        content: '测试3',
      },
      {
        name: '2019-02-03 交互：',
        content: '测试3',
      },
      {
        name: '2019-02-03 交互：',
        content: '测试3',
      },
      {
        name: '2019-02-03 交互：',
        content: '测试3',
      }]
    }, {
      tag: '时间',
      text: '2019年4月8日 15:04:14',
      records: [{
        name: '2019-02-04 交互：',
        content: '测试1',
      }, {
        name: '2019-02-05 交互：',
        content: '测试2',
      }]
    }],
    TableData: [
      [{
        '招聘单位': '测试单位1',
        '核定岗位总数': 2,
        '实有数': 3,
        '空缺数': 4
      }, {
        '招聘单位': '测试单位2',
        '核定岗位总数': 22,
        '实有数': 33,
        '空缺数': 44
      }, {
        '招聘单位': '测试单位3',
        '核定岗位总数': 222,
        '实有数': 333,
        '空缺数': 444
      }],
      [{
        '招聘单位': '测试单位11',
        '核定岗位总数': 21,
        '实有数': 31,
        '空缺数': 41
      }, {
        '招聘单位': '测试单位22',
        '核定岗位总数': 221,
        '实有数': 331,
        '空缺数': 441
      }]
    ]
  };
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.SelectorStepIndex = 3;
    }, 2000);
    this.http.get(this.filename, { responseType: 'text' })
      .subscribe(data => this.TempHTML = data);

    // console.log(this.excel1.findOfProp([{ name: 'zhangsan' }, { name: 'lisi' }], 'name', 'lisi'));
  }

  getTempData() {
    console.log(this.TempData);
  }

  print() {
    console.log(this.StepSource);
  }
}
