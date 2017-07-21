import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// User observables instead of promises.
import { Observable } from 'rxjs/Observable';

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

  /**
   * An array of user data.
   *
   * @type {Array<User>}
   * @memberof UserListComponent
   */
  users: Array<User>;

  /**
   * The status of the request.
   *
   * @memberof UserListComponent
   */
  loadStatus = 'loading';

  /**
   * The subscription to the request.
   *
   * @private
   * @type {*}
   * @memberof UserListComponent
   */
  private userSubscription: any;

  /**
   * Creates an instance of UserListComponent.
   *
   * @param {UsersService} usersService
   * @param {Router} router
   * @memberof UserListComponent
   */
  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  /**
   * Define the class.
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

  /**
   * Check if the request is still loading.
   *
   * @readonly
   * @memberof UserListComponent
   */
  get isLoading() {
    return this.loadStatus === 'loading';
  }

  /**
   * Check if there was an error in the request.
   *
   * @readonly
   * @memberof UserListComponent
   */
  get isError() {
    return this.loadStatus === 'error';
  }

  /**
   * Check if the request is complete.
   *
   * @readonly
   * @memberof UserListComponent
   */
  get isComplete() {
    return this.loadStatus === 'complete';
  }

  /**
   * Check if the requested dataset is empty.
   *
   * @readonly
   * @memberof UserListComponent
   */
  get isEmpty() {
    return this.users.length === 0;
  }

}
