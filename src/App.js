import "./styles.css";
// components
import DisplayMeal from "./components/DisplayMeal";
import ViewMeal from "./components/ViewMeal";
import HomePage from "./components/HomePage";
import ViewCategory from "./components/ViewCategory";
import NavBar from "./components/NavBar";
import ErrorPage from "./components/ErrorPage";
// react router doom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/search/:meal" element={<DisplayMeal />} />
          <Route path="/category/:meal" element={<ViewCategory />} />
          <Route path="/meal/:meal" element={<ViewMeal />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}
