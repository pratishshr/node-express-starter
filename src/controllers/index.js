/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/17/16.
 */

import express from 'express';

//controllers
import userController from './userController';

let router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {title: 'node-express-starter'});
});

router.use('/users', userController);

export default router;