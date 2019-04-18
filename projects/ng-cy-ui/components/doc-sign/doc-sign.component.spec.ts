import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSignComponent } from './doc-sign.component';

describe('DocSignComponent', () => {
  let component: DocSignComponent;
  let fixture: ComponentFixture<DocSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
