/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/20/16.
 */

import * as userDao from '../daos/userDao';

export function fetchAll() {
  return userDao.fetchAll();
}
