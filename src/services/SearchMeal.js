export default async function SearchMeal({ search }) {
  if (
    search === "" &&
    search === " " &&
    search === undefined &&
    search === null
  ) {
    return null;
  }

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
    );
    const json = await response.json();
    const meal = json.meals;
    return meal;
  } catch (err) {
    throw new Error("Error searching Meals: " + err.message);
  }
}
