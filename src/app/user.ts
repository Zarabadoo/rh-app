/**
 * Set up a data model for geographic data.
 *
 * @class Geo
 */
class Geo {
  lat: string;
  lng: string;
}

/**
 * Set up a data model for Addresses.
 *
 * @class Address
 */
class Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

/**
 * Set up a data model for company information.
 *
 * @class Company
 */
class Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

/**
 * Set up a data model for a user.
 *
 * @export
 * @class User
 */
export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
