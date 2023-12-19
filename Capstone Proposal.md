# Project Title
RecipeGram

## Overview

A place for eager foodies to find appetizing new recipes to try.

### Problem

A lot of recipe sites are boring. They aren't visually engaging enough and can be a chores to read and use sometimes. This project is going to attempt to fix that by using the same visual model as instagram to first let the viewers see an image of the food and then allow them to see the recipes to makes these deliciouus recipes

### User Profile

- Food Lovers:
    - looking to try new recipes 
    - Unsure what foods they want to try but open to new ideas
	- Want a platform to suggest new foods to them based on their previous preferences.

### Features

- As a user, I want to be able to find new delicious recipes that fit me
- As a user, I want to be able to search for recipes I've heard of and want to try

- As a user, I want to be able to create an account to keep track of my tried recipes
- As a user, I want to be able to login to my account to manage my recipes

- As a logged in user, I want to be able to rate a recipe on 1 to 5 stars
- As a logged in user, I want to be able to update a rating of a recipe out of 5 stars
- As a logged in user, I want to be able to see my previous recipes

## Implementation

### Tech Stack

- React
- JavaScript
- MySQL
- Express
- Client libraries: 
    - react
    - react-router
    - axios
- Server libraries:
    - knex
    - express
    - bcrypt for password hashing

### APIs

- I will be using the external spoonacular API.

### Sitemap

- Home page
- Recipe modals
- User pages
- Register
- Login

### Mockups

- No mockups yet

### Data


### Endpoints

**Stil figuring out design of endpoints with integration with external API**

### Auth

- JWT auth
    - Before adding auth, all API requests will be using a fake user with id 1
    - Added after core features have first been implemented
    - Store JWT in localStorage, remove when a user logs out
    - Add states for logged in showing different UI in places listed in mockups

## Roadmap

- Create client
    - react project with routes and boilerplate pages

- Create server
    - express project with routing, with placeholder 200 responses

- Create migrations

- Gather 50 sample recipes for different user profiles

- Create seeds with sample data

- Deploy client and server projects so all commits will be reflected in production

- Feature: Setup and deploy backend

- Feature: Home page

- Feature: Create account
    - Implement register page + form
    - Create POST /users/register endpoint

- Feature: Login
    - Implement login page + form
    - Create POST /users/login endpoint

- Feature: Implement JWT tokens
    - Server: Update expected requests / responses on protected endpoints
    - Client: Store JWT in local storage, include JWT on axios calls

- Bug fixes

- DEMO DAY

## Nice-to-haves

- Forgot password functionality
- Ability to add personal recipes 
- Elite status badging for users and cafés: Gamify user ratings
- Expand rating system
    - Coffee
    - Ambiance
    - Staff
- Expanded user information: full name, favorite café
- Unit and Integration Tests