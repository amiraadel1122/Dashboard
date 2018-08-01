import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  public opened = true;
    public dataSaved = false;

    public windowTop = 280;
    public windowLeft = 65 ;
    public close() {
      this.opened = false;
    }

    public open() {
      this.opened = true;
    }

    public submit() {
        this.dataSaved = true;
        this.close();
    }

    // circular chart
    // tslint:disable-next-line:member-ordering
    public data: any[] = [{
      kind: 'Hydroelectric', share: 0.175
    }, {
      kind: 'Nuclear', share: 0.238
    }, {
      kind: 'Coal', share: 0.118
    }, {
      kind: 'Solar', share: 0.052
    }, {
      kind: 'Wind', share: 0.225
    }, {
      kind: 'Other', share: 0.192
    }];

    public labelContent(e: any): string {
      return e.category;
    }

  constructor() { }

  ngOnInit() {
  }

}
