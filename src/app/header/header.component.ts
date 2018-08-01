import { Component, OnInit } from '@angular/core';
import { items } from './items';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
  public items: any[] = items;
  public date;

  constructor() { }

  ngOnInit() {
    this.postDate();
  }
// To Get Current Date

  postDate() {
    let today: any = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
];

    today = dd + '-' + monthNames[mm - 1] + '-' + yyyy;
    this.date = today;
  }

}
