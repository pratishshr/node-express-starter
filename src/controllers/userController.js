/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/18/16.
 */

import express from 'express';

//services
import * as userService from '../services/userService';

let router = express.Router();

router.get('/', (req, res, next) => {
  userService.fetchAll().then((response) => {
    res.json({rows: response.toJSON()});
  }).catch((err) => {
    next(err);
  })
});

export default router;
