import { Component, OnInit } from '@angular/core';

// User observables instead of promises.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

// Load the user service and data model.
import { UsersService } from '../../users.service';
import { User } from '../../user';

/**
 * Output a list of users formatted in a table.
 *
 * @export
 * @class UserListComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'rh-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UsersService]
})
export class UserListComponent implements OnInit {

  users: Array<User>;

  loadStatus = 'loading';

  private userSubscription: any;

  /**
   * Creates an instance of UserListComponent.
   *
   * @param {UsersService} usersService
   * @memberof UserListComponent
   */
  constructor(private usersService: UsersService) { }

  /**
   * Initialize the class.
   *
   * @memberof UserListComponent
   */
  ngOnInit(): void {

    this.userSubscription = this.usersService.getUsers()
      .subscribe(
        (response) => {
          this.users = response;
        },
        (error) => {
          this.loadStatus = 'error';

          // TODO: Make some better error handling.
          console.log('There was a problem.', error);
        },
        () => {
          this.loadStatus = 'complete';
        }
      );

  }

  get isLoading() {
    return this.loadStatus === 'loading';
  }

  get isError() {
    return this.loadStatus === 'error';
  }

  get isComplete() {
    return this.loadStatus === 'complete';
  }

  get isEmpty() {
    return this.users.length === 0;
  }

}
