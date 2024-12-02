<template>
    <div>
      <h1>Information !</h1>
      <div class="container">
        <div class="box">
          <h2>Basic</h2>
          <ul>
            <li>Accès au parc</li>
            <li>Acces à toutes les attractions une fois</li>
            <li>Billet pour toute la journée</li>
          </ul>
          <div class="tarif">
            <p>Adulte : 50-100$</p>
            <li>Accès à toutes les attractions autant de fois que possible</li>
            <li>Billet pour toute la journée</li>
          </ul>
          <div class="tarif">
            <p>Adulte : 100-200$</p>
            <p>Enfant : 50-100$</p>
          </div>
        </div>
        <div class="box">
          <h2>Premium</h2>
          <ul>
            <li>Accès au parc</li>
            <li>Repas inclus</li>
            <li>Billets coupe file</li>
          </ul>
          <div class="tarif">
            <p>Adulte : 500-1000$</p>
            <p>Enfant : 250-350$</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "InformationBoxes",
  };
  </script>
  
  <style scoped>
  /* Conteneur principal */
  .container {
    display: flex;
    justify-content: space-between; /* Espace égal entre les blocs */
    align-items: flex-start; /* Alignement vertical en haut */
    gap: 20px; /* Espacement uniforme entre les blocs */
    width: 100%; /* Utiliser toute la largeur disponible */
  }
  
  /* Style des blocs individuels */
  .box {
    background-color: #d3d3d3; /* Gris clair */
    border-radius: 10px; /* Bords arrondis */
    width: 300px; /* Largeur fixe */
    padding: 20px; /* Espacement interne */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Ombre douce */
    display: flex;
    flex-direction: column; /* Alignement vertical du contenu */
    justify-content: flex-start; /* Alignement des éléments au début */
    align-items: flex-start; /* Alignement des éléments à gauche */
    text-align: left; /* Alignement du texte à gauche */
    box-sizing: border-box; /* Inclure le padding dans la largeur/hauteur */
  }
  
  /* Style pour les listes */
  ul {
    margin: 10px 0 0; /* Espacement au-dessus de la liste */
    padding-left: 20px; /* Indentation des puces */
    list-style-type: disc; /* Type de puce */
  }
  
  li {
    margin-bottom: 5px; /* Espacement entre les éléments de la liste */
  }
  
  /* Style pour la section tarif */
  .tarif {
    background-color: #a9a9a9; /* Gris plus foncé */
    border-radius: 10px; /* Bords arrondis */
    padding: 10px; /* Espacement interne */
    margin-top: 20px; /* Espacement au-dessus */
    width: 100%; /* Occuper toute la largeur disponible */
    box-sizing: border-box; /* Assurer que le padding est inclus dans la largeur */
  }
  </style>
  
  