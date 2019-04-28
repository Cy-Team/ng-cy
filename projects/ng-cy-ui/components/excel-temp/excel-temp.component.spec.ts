import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelTempComponent } from './excel-temp.component';

describe('ExcelTempComponent', () => {
  let component: ExcelTempComponent;
  let fixture: ComponentFixture<ExcelTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
