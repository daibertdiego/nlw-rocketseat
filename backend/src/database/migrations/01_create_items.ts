import Knex from 'knex';

export async function up(knex: Knex) {
    knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    }).then();
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('items');
}
