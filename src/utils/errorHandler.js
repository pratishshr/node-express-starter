/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/21/16.
 */

export function pageNotFoundError(req, res, next) {
  res.status(404).json({
    error: {
      errorCode: 404,
      message: '404 - Not Found'
    }
  });
}

export function internalServerError(err, req, res, next) {
  res.status(500).json({
    error: {
      errorCode: 500,
      message: 'Internal server error'
    }
  });
}
