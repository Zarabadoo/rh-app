import { Component, Input } from '@angular/core';
import { User } from '../../user';

/**
 * Define the user component.
 *
 * @export
 * @class UserComponent
 */
@Component({
  selector: 'rh-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  /**
   * Set the input for user data.
   *
   * @type {User}
   * @memberof UserComponent
   */
  @Input() user: User;

}
