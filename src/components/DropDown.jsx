// react
import { useState } from "react";
// react-router-dom
import { useNavigate } from "react-router-dom";

export function DropDown({ list }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const styles = { visibility: { visibility: isOpen ? "visible" : "hidden" } };

  return (
    <ul className="drop-container">
      <li className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        Categories
      </li>
      <div className="dropdown" style={styles.visibility}>
        {isOpen && (
          <ul>
            {list.map((elem) => (
              <li
                onClick={() => {
                  navigate(`/category/${elem.name}`);
                  setIsOpen(!isOpen);
                }}
              >
                {elem.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </ul>
  );
}
