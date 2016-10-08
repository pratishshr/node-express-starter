/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 9/6/16.
 */
import _ from 'lodash';

export default function (bookshelf, options) {
  let Model = bookshelf.Model.extend({
    parse: function (attr) {
      return _.reduce(attr, function (record, val, key) {
        record[_.camelCase(key)] = val;
        return record;
      }, {});
    },
    format: function (attr) {
      return _.reduce(attr, function (record, val, key) {
        record[_.snakeCase(key)] = val;
        return record;
      }, {});
    }
  });

  bookshelf.Model = Model;
};