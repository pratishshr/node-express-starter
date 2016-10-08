/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/16/16.
 */

import express from 'express';

import controllers from './controllers';

import bodyParser from 'body-parser';
import * as handler from './middlewares/errorHandler';

const app = express();

// Configuration
app.set('port', process.env.PORT || '4444');
app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);

app.use(bodyParser.json());

app.use(controllers);

// Error handler
app.use(handler.errorHandler);

// 404 Not Found
app.use(handler.notFoundHandler);

app.listen(app.get('port'), () => {
  console.log('Server started at http://localhost:' + app.get('port'));
});