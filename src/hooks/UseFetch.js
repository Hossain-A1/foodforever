
import { useEffect, useState } from "react";

export const useFetch = (id)=>{
const [data, setData] = useState({});
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

useEffect(() => {
  const fetchRecipeData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      if (!res.ok) throw new Error("something went wrong ");
      const data = await res.json();
      setData(data?.data?.recipe);
    } catch (err) {
      setError(err.message);
    }
  };
  fetchRecipeData();
}, []);
return {data, loading, error}
}


