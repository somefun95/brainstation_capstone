// import seed data files, arrays of objects
const recipeOneData = require('../seed-data/01_recipes');
const recipeTwoData = require('../seed-data/02_recipes');

exports.seed = async function(knex) {
  await knex('recipes_one').del();
  await knex('recipes_two').del();
  await knex('recipes_one').insert(recipeOneData);
  await knex('recipes_two').insert(recipeTwoData);
};