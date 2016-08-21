const TABLE_NAME = 'users';

exports.up = function (knex, Promise) {
  return knex.raw('create extension if not exists "uuid-ossp"').then(function () {
    return knex.schema.createTable(TABLE_NAME, function (table) {
      table.uuid('id').primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
      table.string('first_name');
      table.string('last_name');
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable(TABLE_NAME).then(function() {
    return knex.raw('drop extension if exists "uuid-ossp"');
  });
};
