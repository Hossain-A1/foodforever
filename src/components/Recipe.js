import { Link } from "react-router-dom";
const Recipe = ({ recipe }) => {
  return (
    <div className="recipe w-80 overflow-hidden bg-gray-50/80 rounded-xl shadow-xl shadow-gray-400 p-3 border-2 border-gray-400/60 flex flex-col gap-5">
      <div className="img h-40 overflow-hidden flex justify-center items-center rounded-md">
        <img
          className="block w-full "
          src={recipe.image_url}
          alt={recipe.title}
        />
      </div>
      <div className="img-description">
        <span className="publisher  text-xs  uppercase text-rose-600 font-bold tracking-widest">{recipe.publisher}</span>
        <h2 className="title text-2xl font-semibold truncate">{recipe.title}</h2>
        <Link to={`/recipe-item/${recipe.id}`} className="bg-green-600 text-gray-50 font-medium py-2 px-4 rounded-md text-sm uppercase tracking-wider hover:bg-green-700 duration-300 mt-3  inline-block">view this menu</Link>
      </div>
    </div>
  );
}; 

export default Recipe;
 