import { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const data = ["Chocolat", "Chien", "Chat", "Café", "Caféine"];

  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className="searchBar">
      <div className="inputSearch">
        <input type="text" value={value} onChange={handleChange} />
        <button onClick={() => console.log(value)}>
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
      <ul>
        {value &&
          data
            .filter((element) =>
              element.toLowerCase().includes(value.toLowerCase())
            )
            .map((element, index) => (
              <li onClick={() => setValue(element)} key={index}>
                {element}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default SearchBar;