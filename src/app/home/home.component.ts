import { Component, OnInit } from '@angular/core';
import { Department } from '../department/department.model';
import { Search } from './search.model';
import { SearchService } from './search.service';
import { User } from './user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  search: Search;
  public user: User;
  public department: Department;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onSubmit(userId){
    this.searchService.onSubmit(userId.userId).subscribe( data => {
      this.search = data;
      this.user = data.user;
      this.department = data.department;
    });
  }

}
