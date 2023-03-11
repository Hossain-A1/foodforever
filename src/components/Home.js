import Recipe from "./Recipe";
const Home = ({ recipes, loading, error }) => {
  return (
    <div className="home container mx-auto py-5 flex flex-wrap gap-5 justify-center">
      {!loading && !error && recipes.length === 0 ? (
        <h4 className="font-semibold text-2xl text-green-600 capitalize sm:text-4xl md:text-2xl lg:text-xl max-xl:text-lg ">
          nothing to show. please search something!
        </h4>
      ) : null}
      {loading && <p>{error ? error : "Loading...."}</p>}

      {recipes.length > 0 &&
        recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.id} />
        ))}
    </div>
  );
};
export default Home;
