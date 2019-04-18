import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'cy-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  @Input() title: string;
  @ContentChild('container') containerTemp: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
