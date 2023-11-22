// // react-router-dom
import { useParams } from "react-router-dom";
// react
import { useEffect } from "react";
// components
import Table from "./Table";
// hooks
import GetData from "../hooks/GetData";
import useMeal from "../hooks/useMeal";

export default function ViewMeal() {
  const params = useParams();
  const { loading, error, meal, getMeals } = useMeal();
  const ingredients = GetData({ meal });

  useEffect(() => {
    const getMeal = async () => {
      const search = params.meal;
      getMeals({ search });
    };

    getMeal();
  }, [params.meal]);

  return (
    <main>
      {loading ? (
        <p className="Loading">Loading...</p>
      ) : (
        <Table meal={meal} ingredients={ingredients} />
      )}
    </main>
  );
}
