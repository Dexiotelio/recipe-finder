import { useParams } from "react-router-dom";
import { useEffect } from "react";
// services
import useMeal from "../hooks/useMeal";
import DisplayContent from "./DisplayContent";

export default function DisplayMeal() {
  const params = useParams();
  const { loading, error, meal, getMeals } = useMeal();

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
      ) : meal === null ? (
        <p className="result">No hay resultados</p>
      ) : (
        <DisplayContent data={meal} />
      )}
    </main>
  );
}
