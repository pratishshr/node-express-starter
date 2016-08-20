/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/19/16.
 */

import Sequelize from 'sequelize';

//config
import config from '../config/config.json';

const dbConfig = config.db;
const db = new  Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  timezone: dbConfig.timezone,
  pool: dbConfig.pool
});

export default db;