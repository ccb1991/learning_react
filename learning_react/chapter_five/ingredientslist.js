import Ingredient from "./ingredient";

const IngredientsList=({list})=>
    <ul className="Ingredients">
        {list.map((ingredient,i)=>
        <Ingredient key={i} {...ingredient}/>)}
    </ul>;

export default IngredientsList