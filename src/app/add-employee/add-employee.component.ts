import { Component, OnInit , ElementRef, ViewChild } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { addDays, addWeeks, addMonths, addYears, addDecades, addCenturies } from '@progress/kendo-date-math';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  public allowCustom = true;
    public listItems: Array<string> = ['HRD',
      'IT',
      'Financial management',
      'ITC',
      'Business',
     ' Development',
   ];
   public decimals = 0;
   public value = 5;
   public format = '#';
   public min = 0;
  //  public max = 99;
  public autoCorrect = true;
  public dateValue: Date = new Date;

  public op = 'add';
  public days = 1;
  public weeks = 0;
  public months = 0;
  public years = 0;
  public decades = 0;
  public centuries = 0;
  public result: Date;

  AlertShown = false;

    public gridView: GridDataResult;
    public items: any[] ;
    public mySelection: number[] = [];
    public pageSize = 10;
    public skip = 0;

    // 6start of add employee reactive form
    FormG: FormGroup;
    FormSearch: FormGroup;
    public DateValue: Date = new Date();
   constructor(private fb: FormBuilder) {

    }

    ngOnInit() {
      this.FormG = this.fb.group({
        Name: [ null, [Validators.required]],
        Department: [ null, [Validators.required]],
        Code: [ null, [Validators.required, Validators.min(0)]],
        DateOfBirth: [ this.DateValue , [Validators.required]],
        Gender: [null]
      });

      this.FormSearch = this.fb.group({
        searchName : [null, Validators.required],
        searchDepartment : [null, Validators.required]
      });
   }

    submitFun(e) {

      if (localStorage.getItem('Employees') !== null) { // if local storage is not empty
        const Employees = JSON.parse(localStorage.getItem('Employees'));
        Employees.push(e);
        localStorage.setItem('Employees', JSON.stringify(Employees));
      } else {
        const arr = [];
        arr.push(e);
        localStorage.setItem('Employees', JSON.stringify(arr));
      }

      this.FormG.get('Name').reset();
      this.FormG.get('Department').reset();
      this.FormG.get('DateOfBirth').reset();
      this.FormG.get('Code').reset();

    }
    searchFunc(e) {
      const Nam = e.searchName;
      const Dep = e.searchDepartment;
      const Employees = JSON.parse(localStorage.getItem('Employees'));

       const result = Employees.filter(a => a.Name === Nam && a.Department === Dep );
       console.log(result);
       const EditedResult = result.map( a => { const obj = {
        Name: a.Name,
        Department: a.Department,
        Code: a.Code,
        DateOfBirth: a.DateOfBirth.substring(0, 10)},
        Gender: a.Gender
        ; return obj;
      });
       this.gridView = EditedResult;
    }

  private loadItems(): void {
      this.gridView = {
          data: this.items,
          total: this.items.length
      };
  }


  public calc(): void {
    const sign = this.op === 'add' ? 1 : -1;
    let value = this.dateValue;

    value = addDays(value, sign * this.days);
    value = addWeeks(value, sign * this.weeks);
    value = addMonths(value, sign * this.months);
    value = addYears(value, sign * this.years);
    value = addDecades(value, sign * this.decades);
    value = addCenturies(value, sign * this.centuries);

    this.result = value;
  }

  public setOp(value: string): void {
    this.op = value;
    this.calc();


  }

  ShowAlert () {
    this.AlertShown = true;
    setTimeout( ()  => { this.AlertShown = false;
    }, 3000);
  }

}
