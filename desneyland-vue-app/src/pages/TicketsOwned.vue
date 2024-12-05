<template>
    <div class="centered-button-page">
      <div class="button-container">
        <a href="BuyTickets"  class="book-now-button">Book Now</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CenteredButtonPage",
    methods: {
      goToBuyTickets() {
        this.$router.push({ name: "BuyTickets" }); // Navigue vers la page nommée "BuyTickets"
      },
    },
  };
  </script>
  
  <style scoped>
  .centered-button-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f9f9f9;
  }
  
  .button-container {
    text-align: center;
  }
  
  .book-now-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    text-decoration: none;
    color: white;
    background-color: #007bff;
    border-radius: 5px;
    transition: background-color 0.3s;
    font-family: Arial, sans-serif;
  }
  
  .book-now-button:hover {
    background-color: #0056b3;
  }
  </style>
  