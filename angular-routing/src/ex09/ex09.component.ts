import { Component } from '@angular/core';
import {Employee} from "../employee";
import EMPLOYEE_LIST from "../employee-list.json";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-ex09',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './ex09.component.html'
})
export class Ex09Component {
 employees: Employee[] = [];

  constructor() { }

  sortEmployees(type:string){
    if(type=="name")
      this.employees.sort( (a, b) => {return a.name> b.name ? 1 : a.name == b.name ? 0 : -1});
    if(type="salary")
      this.employees.sort((a, b) => {return a.salary -b.salary});
    else
      this.employees.sort( (a, b) => {return a.position> b.position ? 1 : a.position == b.position ? 0 : -1});
  }
  ngOnInit(): void {
    this.employees = EMPLOYEE_LIST;
  }
}
