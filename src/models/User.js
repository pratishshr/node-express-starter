/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/19/16.
 */

import Sequelize from 'sequelize';
import db from '../utils/db';

let User = db.define('User', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    field: 'id',
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name'
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name'
  }
}, {
  underscored: true,
  tableName: 'users'
});

User.sync();

export default User;