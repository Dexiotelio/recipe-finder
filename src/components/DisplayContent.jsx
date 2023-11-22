// react-router-dom
import { useNavigate, useParams } from "react-router-dom";

export default function DisplayContent({ data }) {
  if (!data) return;

  const navigate = useNavigate();
  const params = useParams();

  const existProperty = data[0]?.strCategory
    ? data[0]?.strCategory
    : params.meal;

  return (
    <section>
      <h1 className="title-meals">{existProperty}</h1>
      <ul className="meals">
        {data.map((elem) => (
          <li className="meal" key={elem.idMeal}>
            <h4>{elem.strMeal}</h4>
            <img
              src={elem.strMealThumb}
              alt={elem.strMeal}
              onClick={() => navigate(`/meal/${elem.strMeal}`)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
