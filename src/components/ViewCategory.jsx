// // react-router-dom
import { useParams } from "react-router-dom";
// react
import { useState, useEffect } from "react";
// components
import DisplayContent from "./DisplayContent";

export default function ViewCategory() {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState();

  async function getCategory() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.meal}`,
      );
      const json = await response.json();
      setCategory(json.meals);
    } catch (err) {
      throw new Error("Error: ", err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCategory();
  }, [params.meal]);

  return (
    <main>
      {loading ? (
        <p className="Loading">Loading...</p>
      ) : (
        <DisplayContent data={category} />
      )}
    </main>
  );
}
