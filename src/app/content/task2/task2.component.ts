import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component implements OnInit {
  public opened = true;
    public dataSaved = false;
    public windowTop = 280;
    public windowLeft = 500;
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

     // Legend Chart
     // tslint:disable-next-line:member-ordering
     public seriesData: number[] = [1, 2, 3, 5];
     // tslint:disable-next-line:member-ordering
     public seriesVisible = true;

     public onLegendItemClick(e): void {
         /* Do not hide the series on legend click */
         e.preventDefault();
        /* Hide the series manually */
         this.seriesVisible = !this.seriesVisible;
     }
  constructor() { }

  ngOnInit() {
  }

}
