import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/UseFetch";

const RecipeItem = () => {
  const { id } = useParams();
  const { data: recipe, loading, error } = useFetch(id);

  const durationCalc = (duration) => {
    if (!duration) return;

    if (!String(duration).includes(".")) {
      return duration + "h";
    }

    if (String(duration).includes(".")) {
      return String(duration).replace(".", "h") + "min";
    }
  };
  return (
    <div className="recipe-item-section container mx-auto p-14 grid grid-cols-1 lg:grid-cols-2 gap-7">
      <div className="left">
        <div className="img">
          <img src={recipe?.image_url} alt={recipe?.title} />
        </div>
        <div className="ingd">
          <span className="img-title">ingredients</span>
          <ul>
            {recipe?.ingredients?.map((ing, i) => (
              <li key={i}>
                <span className="font-bold">✓</span> {ing.Quantity}{ing.unit} {ing.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right">
        <span className="pub">{recipe?.publisher}</span>
        <h2>{recipe?.title}</h2>
        <div className="sarvings-cooking-time">
          <div className="sarving">Surving : {recipe?.servings} </div>
          <div className="cooking-time">
            Cooking time:
            {recipe?.cooking_time < 60
              ? String(recipe?.cooking_time) + "min"
              : durationCalc(recipe?.cooking_time / 60)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
