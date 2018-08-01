import { Component, OnInit } from '@angular/core';
// import { sideItems } from './items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
    // public items: any[];

    constructor(private router: Router) {
        // this.items = this.mapItems(router.config);
    }

    // // convert the routes to menu items.
    // private mapItems(routes: any[], path?: string): any[] {
    //     return routes.map(item => {
    //         const result: any = {
    //             text: item.text,
    //             path: (path ? `${ path }/` : '') + item.path
    //         };

    //         if (item.children) {
    //             result.items = this.mapItems(item.children, item.path);
    //         }

    //         return result;
    //     });
    // }

  ngOnInit() {
  }

}
