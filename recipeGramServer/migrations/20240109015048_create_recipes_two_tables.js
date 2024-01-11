/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('recipes_two', (table) => {
    table.string('vegetarian');
    table.boolean('vegan');
    table.boolean('glutenFree');
    table.boolean('dairyFree');
    table.boolean('veryHealthy');
    table.boolean('cheap');
    table.boolean('veryPopular');
    table.boolean('sustainable');
    table.boolean('lowFodmap');
    table.integer('weightWatcherSmartPoints');
    table.string('gaps');
    table.integer('preparationMinutes');
    table.integer('cookingMinutes');
    table.integer('aggregateLikes');
    table.integer('healthScore');
    table.string('creditsText');
    table.string('license');
    table.string('sourceName');
    table.integer('pricePerServing');
    table.json('extendedIngredients');
    table.integer('id').primary();
    table.string('title');
    table.integer('readyInMinutes');
    table.integer('servings');
    table.string('sourceUrl');
    table.string('image');
    table.string('imageType');
    table.string('summary');
    table.json('cuisines');
    table.json('dishTypes');
    table.json('diets');
    table.json('occasions');
    table.string('instructions');
    table.json('analyzedInstructions');
    table.integer('originalId');
    table.integer('spoonacularScore');
    table.string('spoonacularSourceUrl')
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
  });
};
  
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('recipes_two');
};