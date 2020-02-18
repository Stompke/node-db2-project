
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments(); //primary key id incrementing
        tbl.string('vin', 128).notNullable().index();
        tbl.string('make', 128).notNullable();
        tbl.string('model', 128).notNullable();
        tbl.string('mileage', 128).notNullable();
        tbl.string('transmission', 128);
        tbl.string('title_status', 128);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
