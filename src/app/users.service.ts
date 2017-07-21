import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// Use the more flexible observible in place of promises.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Get the user data model to map to.
import { User } from './user';

/**
 * A service to pull in user data from an API.
 *
 * @export
 * @class UsersService
 */
@Injectable()
export class UsersService {

  /**
   * The root url for the JSON Placeholder API.
   *
   * @private
   * @memberof UsersService
   */
  private basePath = 'http://jsonplaceholder.typicode.com/';

  /**
   * Creates an instance of UsersService.
   *
   * @param {Http} http
   * @memberof UsersService
   */
  constructor(private http: Http) { }

  /**
   * Get a full list of users.
   *
   * @returns {Observable<User[]>}
   * @memberof UsersService
   */
  getUsers(): Observable<User[]> {

    return this.http.get(`${this.basePath}users`)
      .map(response => response.json() as User[]);

  }

  /**
   * Get a single user's data by id.
   *
   * @param {any} id
   *    The id of the user.
   * @returns {Observable<User>}
   * @memberof UsersService
   */
  getUser(id): Observable<User> {

    return this.http.get(`${this.basePath}users/${id}`)
      .map(response => response.json() as User);

  }

}
