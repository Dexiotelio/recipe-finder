export default function Table({ meal, ingredients }) {
  if (!meal && !ingredients) return;

  function Separador(text) {
    const regex = /\w+(\w|\s|\,|\-|\/|\")+\.\s/gi;
    let id = 0;
    // buscamos en las cadenas de texto las oraciones
    // separamos las oraciones y le agregamos el id correspondiente
    const texts = text.match(regex).map((elem) => ({ id: id++, text: elem }));
    const result = texts.map((elem) => <li key={elem.id}>{elem.text}</li>);
    return result;
  }

  return (
    <section>
      <div className="container-table">
        <h3>
          {meal[0]?.strArea}, {meal[0]?.strCategory}
        </h3>
        <table>
          <thead>
            <tr>
              <th>{meal[0]?.strMeal}</th>
              <th>Ingredients</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={meal[0]?.strMealThumb} alt={meal[0]?.strMeal} />
              </td>
              <td>
                <ul>
                  {ingredients?.map((elem) => (
                    <li key={elem.id}>
                      {elem.Measure} {elem.Ingredient}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="Instructions-meal">
          <h4>Instructions</h4>
          <ul>{Separador(meal[0]?.strInstructions)}</ul>
        </div>
      </div>
    </section>
  );
}
