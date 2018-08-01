import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  public opened = true;
  public windowTop = 40;
  public windowLeft = 50;

    public dataSaved = false;


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
  constructor() { }

  ngOnInit() {
  }

}
