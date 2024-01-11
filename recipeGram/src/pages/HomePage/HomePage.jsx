import './HomePage.scss';
import {useState} from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([
    { id: 1, image: 'https://spoonacular.com/recipeImages/633858-556x370.jpg', caption: 'Baked Tortellini In Red Sauce' },
    { id: 2, image: 'https://spoonacular.com/recipeImages/633068-556x370.jpg', caption: 'Authentic Bolognese Sauce' },
    { id: 3, image: 'https://spoonacular.com/recipeImages/658808-556x370.jpg', caption: 'Rosemary Thyme Marinated Mushrooms' },
    { id: 3, image: 'https://spoonacular.com/recipeImages/651767-556x370.jpg', caption: 'Meyer Lemon Scented Farro and Asparagus Salad' }
  ])
  return(
    <>
      <div className="recipe">
        <div className="recipe-container">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.caption} />
              <p>{recipe.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default HomePage