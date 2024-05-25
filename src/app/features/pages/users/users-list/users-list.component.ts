import { Component, OnInit } from '@angular/core';
import { Users } from '../../../../shared/interfaces/users/users';
import { UsersService } from '../../../../shared/services/users/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users: Users[] = [];

  constructor(
    private usersService: UsersService,
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers() {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    })
  }


}
