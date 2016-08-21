/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/19/16.
 */

import db from '../utils/db';

const User = db.Model.extend({
  tableName: 'users'
});

export default User;
