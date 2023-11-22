// react
import { useState } from "react";
// services
import SearchMeal from "../services/SearchMeal";

export default function useMeal() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [meal, setMeal] = useState();

  const getMeals = async ({ search }) => {
    try {
      setLoading(true);
      setError(null);
      const result = await SearchMeal({ search });
      setMeal(result);
    } catch (err) {
      setError("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, meal, getMeals };
}
