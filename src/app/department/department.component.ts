import { Component, OnInit } from '@angular/core';
import { Department } from './department.model';
import { DepartmentService } from './department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.styl']
})
export class DepartmentComponent implements OnInit {

  constructor(private departmentService: DepartmentService) { }

  departmentDetails: Department[];
  department: Department;
  ngOnInit() {
    this.getDepartment();
  }

  onSubmit(data){
    console.info(data);
    this.department = data;
    this.departmentService.onSubmit(this.department);
    this.getDepartment();
  }

  getDepartment(){
    this.departmentService.getDepartment().subscribe(data => {
      this.departmentDetails = data;
    });
  }

}
