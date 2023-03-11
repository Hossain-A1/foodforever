import { Route, Routes } from "react-router-dom";
import {useRef, useState } from "react";
import Home from "./components/Home";
import Navber from "./components/Navber";
import Footer from "./components/Footer";
import Favourites from "./components/Favourites";
import NotFoundPage from "./components/NotFoundPage";
import RecipeItem from './components/RecipeItem'

const App = () => {
  //  searchQuery is here
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  // onSubmit is here
  const searchHandler = (e) => {
    e.preventDefault();

    fetchData(searchQuery);
    setSearchQuery("");
    inputRef.current.blur();
    setRecipes([])
  };

  const fetchData = async (searchQuery) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchQuery}`
      );
      if (!response.ok) throw new Error("Somting went wrong!");
      const data = await response.json();
      if(data.results === 0) throw new Error("no food menu found")
      setRecipes(data?.data?.recipes);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="app min-h-screen bg-gray-300 text-gray-700 text-lg">
        <Navber
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          inputRef={inputRef}
          searchHandler={searchHandler}
        />
        <Routes>
          <Route path="/" element={<Home  recipes={recipes} loading={loading} error={error} />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/recipe-item/:id" element={<RecipeItem/>} />
          <Route path="*" element={<NotFoundPage />} />          
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;