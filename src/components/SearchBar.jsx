import { useState } from "react";
import "./SearchBar.css"; // Importer le fichier CSS pour les styles

function SearchBar() {
  // Définir les données à rechercher
  const data = ["Chocolat", "Chien", "Chat", "Café", "Caféine"];

  // Utiliser le hook useState pour gérer l'état de la valeur de recherche
  const [value, setValue] = useState("");

  // Fonction pour gérer les changements dans l'input de recherche
  function handleChange(event) {
    setValue(event.target.value); // Mettre à jour l'état avec la nouvelle valeur
  }

  return (
    <div className="searchBar">
      {/* Conteneur pour l'input de recherche et le bouton */}
      <div className="inputSearch">
        {/* Input de recherche */}
        <input type="text" value={value} onChange={handleChange} />
        {/* Bouton de recherche avec une icône */}
        <button onClick={() => console.log(value)}>
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
      {/* Liste des résultats filtrés */}
      <ul>
        {value && // Afficher la liste seulement si une valeur est saisie
          data
            .filter((element) =>
              element.toLowerCase().includes(value.toLowerCase()) // Filtrer les éléments qui incluent la valeur saisie
            )
            .map((element, index) => (
              // Mapper les éléments filtrés dans des <li>
              <li onClick={() => setValue(element)} key={index}>
                {element}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default SearchBar;
