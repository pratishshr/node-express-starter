/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/16/16.
 */

import express from 'express';

//controller
import controllers from './controllers';

//middleware
import bodyParser from 'body-parser';

//utils
import * as errorHandler from './utils/errorHandler';

const app = express();

//configuration
app.set('port', process.env.PORT || '4444');
app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);

app.use(bodyParser.json());

app.use(controllers);

//500 Internal Server Error
app.use(errorHandler.internalServerError);

//404 Not Found
app.use(errorHandler.pageNotFoundError);

app.listen(app.get('port'), () => {
  console.log('Server started at http://localhost:' + app.get('port'));
});