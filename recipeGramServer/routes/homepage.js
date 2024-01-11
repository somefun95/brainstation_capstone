const express = require('express');
const fs = require("node:fs");
const router = express.Router();

const RECIPES_PATH = "./seed-data/recipes.json";

function getRecipes() {
    const recipesJson = fs.readFileSync(RECIPES_PATH);
    const parsedRecipes = JSON.parse(recipesJson);
    return parsedRecipes;
}

function getOneRecipe(id) {
    const recipes = getVideos();
    const recipe = recipes.find((recipe) => recipe.id === id);
    return recipe
}

// function createVideo(video) {
//     const videos = getVideos();
//     videos.push(video);
//     fs.writeFileSync(VIDEOS_PATH, JSON.stringify(videos));
// }

router.get("/", (req, res) => {
    res.json(getRecipes());
})

router.get("/:id", (req, res) => {
    const recipe = getOneRecipe(req.params.id);
    if (recipe) {
        res.json(recipe);
    } else {
        res.status(404).send("no recipe with that id found");
    }
});

// router.post("/", (req, res ) => {

//     const imagePath = "http://localhost:8080/images/upload-video-path.jpg"

//     const video = {
//         id: v4(),
//         title: req.title,
//         description: req.description,
//         image: imagePath,
//         channel: "User",
//         views: "125",
//         likes: "17",
//         video: "https://project-2-api.herokuapp.com/stream",
//         timestamp: Date.now(),
//         duration: "4:50",
//         comments: [
//         ]
//     }
//     createVideo(video);
//     res.status(200).json(updateVideo);
// })

module.exports = router;