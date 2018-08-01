import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  public splitButtonData: Array<any> = [{
    text: 'Option 1'
}, {
    text: 'Option 2',
}, {
    text: 'Option 3',
}];

public dropdownButtonData: Array<any> = [{
    text: 'Option 1'
}, {
    text: 'Option 2',
}, {
    text: 'Option 3',
}];
  constructor() { }

  ngOnInit() {
  }

}
