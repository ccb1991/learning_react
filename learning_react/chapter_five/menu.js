import recipe from './recipe'

const Menu=({recipes})=>
    <article>
        <hearder>
            <h1>Delicous Recipes</h1>
        </hearder>
        <div className="recipes">
            {recipes.map((recipe,i)=>
            <recipe key={i} {...recipe}/>)}
        </div>
    </article>;

export default Menu