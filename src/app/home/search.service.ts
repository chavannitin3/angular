import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from './search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  onSubmit(userId): Observable<Search>{
    return this.http.get<Search>('http://localhost:9002/user/'+userId);
  }
}
