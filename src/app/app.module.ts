import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WindowModule } from '@progress/kendo-angular-dialog';
// Imports the PanelBar
import { PanelBarModule } from '@progress/kendo-angular-layout';
import { APP_BASE_HREF } from '@angular/common';
// Imports the AutoComplete module
import { AutoCompleteModule } from '@progress/kendo-angular-dropdowns';

// Imports the ComboBox module
import { ComboBoxModule } from '@progress/kendo-angular-dropdowns';

import {FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuModule } from '@progress/kendo-angular-menu';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContentComponent } from './content/content.component';
import { ToDoComponent } from './content/to-do/to-do.component';
import { LatestComponent } from './content/latest/latest.component';
import { TasksComponent } from './content/tasks/tasks.component';
import { Task2Component } from './content/task2/task2.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { IntlModule } from '@progress/kendo-angular-intl';
import { RippleModule } from '@progress/kendo-angular-ripple';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ReportsComponent } from './reports/reports.component';










const routes = [

  {  // {
  //   path: '' ,
  //   component : HomeComponent ,
  //   text: 'Dashboard'
  // } ,
    path: 'addEmployee' ,
    component : AddEmployeeComponent ,
    // text: 'Add Employee'
  },
  {
    path: 'Reports' ,
    component : ReportsComponent ,
    // text: 'Reports'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    ContentComponent,
    ToDoComponent,
    LatestComponent,
    TasksComponent,
    Task2Component,
    HomeComponent,
    AddEmployeeComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    InputsModule,
    BrowserAnimationsModule,
    ButtonsModule,
    MenuModule,
    WindowModule,
    GridModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    PanelBarModule,
    DropDownsModule,
    AutoCompleteModule,
    ComboBoxModule,
    FormsModule,
    ReactiveFormsModule,
    DateInputsModule,
    IntlModule,
    RippleModule,
    ChartsModule,
    ToolBarModule,
    PopupModule
  ],
  providers: [{  provide: APP_BASE_HREF, useValue: window.location.pathname }],
  bootstrap: [AppComponent]
})
export class AppModule { }
