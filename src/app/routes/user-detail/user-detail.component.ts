import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

// User observables instead of promises.
import { Observable } from 'rxjs/Observable';

// Load the user service and data model.
import { UsersService } from '../../users.service';
import { User } from '../../user';

/**
 * Define the class.
 *
 * @export
 * @class UserDetailComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'rh-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  providers: [UsersService]
})
export class UserDetailComponent implements OnInit {

  /**
   * The user data.
   *
   * @type {User}
   * @memberof UserDetailComponent
   */
  user: User;

  /**
   * The status of the request.
   *
   * @memberof UserDetailComponent
   */
  loadStatus = 'loading';

  /**
   * The subscription to the request.
   *
   * @private
   * @type {*}
   * @memberof UserDetailComponent
   */
  private userSubscription: any;

  /**
   * Creates an instance of UserDetailComponent.
   *
   * @param {UsersService} usersService
   * @param {ActivatedRoute} route
   * @memberof UserDetailComponent
   */
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) { }

  /**
   * Initialize the class.
   *
   * @memberof UserDetailComponent
   */
  ngOnInit() {

    this.userSubscription = this.route.paramMap
      .switchMap((params: ParamMap) => this.usersService.getUser(+params.get('id')))
      .subscribe(
        (response) => {
          this.user = response;
          this.loadStatus = 'complete';
        },
        (error) => {
          this.loadStatus = 'error';

          // TODO: Make some better error handling.
          console.log('There was a problem.', error);
        }
      );

  }

  /**
   * Check if the request is still loading.
   *
   * @readonly
   * @memberof UserDetailComponent
   */
  get isLoading() {
    return this.loadStatus === 'loading';
  }

  /**
   * Check if there was an error with the request.
   *
   * @readonly
   * @memberof UserDetailComponent
   */
  get isError() {
    return this.loadStatus === 'error';
  }

  /**
   * Check if the request is complete.
   *
   * @readonly
   * @memberof UserDetailComponent
   */
  get isComplete() {
    return this.loadStatus === 'complete';
  }

  /**
   * Check if the dataset from the request is empty.
   *
   * @readonly
   * @memberof UserDetailComponent
   */
  get isEmpty() {
    return !this.user;
  }

}
