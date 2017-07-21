import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { UsersService } from '../../users.service';
import { User } from '../../user';

@Component({
  selector: 'rh-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UsersService]
})
export class UserListComponent implements OnInit {

  users: Observable<User[]>;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();

    console.log(this.users);
  }

}
