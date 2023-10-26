import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const inputRef = useRef("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const search = inputRef.current?.value;

    // controlamos las busquedas
    if (search === "") {
      setError("No se puede buscar una comida vacía");
      setTimeout(() => {
        setError(null);
      }, 2000);
      return;
    } else if (search.match(/\d+/)) {
      setError("No se puede buscar una comida con un número");
      setTimeout(() => {
        setError(null);
      }, 2000);
      inputRef.current.value = "";
      return;
    } else if (search.match(/[¿¡'?=)(/&\.,%$#";:!_\\°*\-+¨}@{\][~`^<>¬]+/)) {
      setError("No se puede buscar una comida con un cáracter especial");
      setTimeout(() => {
        setError(null);
      }, 2000);
      inputRef.current.value = "";
      return;
    } else {
      setError(null);
      navigate(`/search/${search}`);
      inputRef.current.value = "";
    }
  }

  const errorIsTrue = {
    border: { border: error ? "3px solid #dc2f2f" : "3px solid white" },
  };

  return (
    <search>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          placeholder="beef, sushi..."
          style={errorIsTrue.border}
        />
        <button className="search">Search</button>
      </form>
      {error && <p className="error">{error}</p>}
    </search>
  );
}
