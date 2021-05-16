import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  onSubmit(data){
    this.http.post('http://localhost:9002/user/',data).subscribe((result) => {
      console.info(result.toString);
    });
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:9002/user/getUsers');
  }
}
