import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  getUsers(): Observable<User[]> {

    console.log(this.http.get('http://jsonplaceholder.typicode.com/users'));

    return this.http.get('http://jsonplaceholder.typicode.com/users')
      .map(response => response.json() as User[]);

  }

}
