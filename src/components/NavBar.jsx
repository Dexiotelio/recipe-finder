import Search from "./Search";
// // react-router-dom
import { Link } from "react-router-dom";
// components
import { DropDown } from "./DropDown";

export default function NavBar() {
  const categoryList = [
    { name: "Beef" },
    { name: "Chicken" },
    { name: "Dessert" },
    { name: "Lamb" },
    { name: "Miscellaneous" },
    { name: "Pasta" },
    { name: "Pork" },
    { name: "Seafood" },
    { name: "Side" },
    { name: "Starter" },
    { name: "Vegan" },
    { name: "Vegetarian" },
    { name: "Breakfast" },
    { name: "Goat" },
  ];

  return (
    <header>
      <nav className="menu">
        <ul className="group-1">
          <li className="pageTitle">
            <Link to="/" className="link">
              Home-Meals
            </Link>
          </li>
          <li className="github">
            <Link
              to="https://github.com/Dexiotelio/recipe-finder/tree/main"
              className="link"
            >
              Github
            </Link>
          </li>
          <DropDown list={categoryList} />
        </ul>
        <Search />
      </nav>
    </header>
  );
}
