<template>
    <nav class="navbar">
      <div class="navbar-left">
        <h1 class="park-name">DESNEYLAND</h1>
      </div>
      <div class="navbar-links">
        <a href="#attractions">Attractions</a>
        <a href="#queue-times">Queue Times</a>
        <a href="#hotels">Hotels</a>
        <a href="#connect">Connect</a>
      </div>
      <div class="navbar-right">
        <button class="book-now">BOOK NOW</button>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavBar",
  };
  </script>
  
  <style scoped>
  /* Style global de la barre de navigation */

  .navbar {

    font-family: "Arial", sans-serif;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0.1rem;
    background-color: #FAFAFA;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    overflow: hidden;
  }
  
  /* Style pour le nom du parc */
  .navbar-left .park-name {
    font-family: "Dancing Script", cursive; /* Police élégante */
    font-size: 2.5rem;
    color: #D72638;
    text-shadow: 0 0 5px #FFD700, 0 0 10px #FFD700, 0 0 20px #FFD700;
    margin: 0;
    animation: glow 1.5s ease-in-out infinite alternate;
  }

  @keyframes glow {
  from {
    text-shadow: 0 0 5px #FFD700, 0 0 10px #FFD700, 0 0 20px #FFD700;
  }
  to {
    text-shadow: 0 0 10px #FF4500, 0 0 20px #FF4500, 0 0 30px #FF4500;
  }
}
  
  /* Style des liens de navigation */
  .navbar-links a {
    margin: 0 1rem;
    text-decoration: none;
    font-size: 1rem;
    color: #333;
    transition: color 0.3s;
  }
  
  .navbar-links a:hover {
    color: #2A9D8F;
  }
  
  /* Style pour le bouton "BOOK NOW" */
  .navbar-right .book-now {
    background-color: #D72638;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-right:1rem ;
  }
  
  .navbar-right .book-now:hover {
    background-color: #2A9D8F;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .navbar {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .navbar-links {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  
    .navbar-links a {
      margin: 0.5rem 0;
    }
  
    .navbar-right {
      align-self: flex-end;
    }
  }
  </style>
  