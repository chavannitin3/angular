import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.styl']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }
  userList: User[];
  user:User;

  ngOnInit() {
  }

  onSubmit(data){
    console.info(data);
    this.user = data;
    this.userService.onSubmit(this.user);
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(data => {
      this.userList = data;
    });
  }

}
