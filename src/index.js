// Importer le composant StrictMode de la bibliothèque React
import { StrictMode } from "react";

// Importer la fonction createRoot du paquet react-dom/client
import { createRoot } from "react-dom/client";

// Importer le composant principal App depuis le fichier local App.js
import App from "./App";

// Obtenir l'élément HTML avec l'id "root" depuis le DOM
const rootElement = document.getElementById("root");

// Créer une racine pour l'application React en utilisant rootElement
const root = createRoot(rootElement);

// Rendre le composant App encapsulé dans le composant StrictMode de React dans l'élément root
// StrictMode est un outil permettant de mettre en évidence les problèmes potentiels dans une application
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
