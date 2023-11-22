// react
import { useEffect, useState, useCallback } from "react";
// // react-router-dom
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getCategories = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php",
      );
      const json = await response.json();
      setCategories(json.categories);
    } catch (err) {
      throw new Error("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <main className="HomePage">
      {loading ? (
        <p className="Loading">Loading...</p>
      ) : (
        <section>
          <h1 className="title-category">Categories</h1>
          <ul className="categories">
            {categories?.map((elem) => (
              <li className="category" key={elem.idCategory}>
                <h4>{elem.strCategory}</h4>
                <img
                  src={elem.strCategoryThumb}
                  alt={elem.strCategory}
                  onClick={() => navigate(`/category/${elem.strCategory}`)}
                />
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
