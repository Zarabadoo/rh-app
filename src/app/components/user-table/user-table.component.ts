import { Component, Input } from '@angular/core';
import { User } from '../../user';

/**
 * Define the user table component.
 *
 * @export
 * @class UserTableComponent
 */
@Component({
  selector: 'rh-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {

  /**
   * Define user data input.
   *
   * @type {User}
   * @memberof UserTableComponent
   */
  @Input() users: User;

}
