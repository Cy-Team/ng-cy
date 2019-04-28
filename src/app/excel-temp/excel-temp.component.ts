import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-excel-temp',
  templateUrl: './excel-temp.component.html',
  styleUrls: ['./excel-temp.component.css']
})
export class ExcelTempComponent implements OnInit {
  filename1 = 'assets/干部任免审批表_0_v1.htm';
  filename2 = 'assets/干部任免审批表_1_v1.htm';
  // MultiItem = [];
  MultiItem = [
    { src: 'assets/干部任免审批表_0_v1.htm' },
    { src: 'assets/干部任免审批表_1_v1.htm' }
  ];
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get(this.filename1, { responseType: 'text' })
      .subscribe(data1 => {
        this.http.get(this.filename2, { responseType: 'text' })
          .subscribe(data2 => {
            // this.MultiItem = [{
            //   TempHTML: data1
            // }, {
            //     TempHTML: data2
            //   }];
          });

      });
  }

}
