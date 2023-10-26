export default function GetData({ meal }) {
  if (meal !== undefined && meal !== null) {
    let id = 0;
    const Ingredients = [];
    const Measure = [];
    const regex = /^strIngredient\d*/;
    const regex2 = /^strMeasure\d*/;

    // pasamos a unos nuevos arreglos los ingredientes y la cantidad correspondiente
    for (const [key, value] of Object.entries(meal[0])) {
      if (regex.test(key)) {
        if (
          value !== "" &&
          value !== " " &&
          value !== undefined &&
          value !== null
        )
          Ingredients.push({ id: id++, Ingredient: value });
      } else if (regex2.test(key)) {
        if (
          value !== "" &&
          value !== " " &&
          value !== undefined &&
          value !== null
        )
          Measure.push({ Measure: value });
      } else {
        continue;
      }
    }

    // a Ingredient le agregamos las cantidades
    Measure.forEach((elem, index) =>
      Object.keys(elem).forEach((key) => (Ingredients[index][key] = elem[key])),
    );

    return Ingredients;
  }
}
