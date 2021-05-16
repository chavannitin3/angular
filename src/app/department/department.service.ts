import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Department } from './department.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }
  onSubmit(data){
    this.http.post('http://localhost:9001/department/',data).subscribe((result) => {
      console.info(result.toString);
    });
  }

  getDepartment(): Observable<Department[]>{
    return this.http.get<Department[]>('http://localhost:9001/department/getDepartment');
  }
}
