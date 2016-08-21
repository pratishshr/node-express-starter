/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/19/16.
 */

import User from '../models/User';

export function fetchAll() {
  return User.fetchAll();
}
