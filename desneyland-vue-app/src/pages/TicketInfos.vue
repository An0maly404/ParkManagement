<template>
  <div class="info-page">
    <h1 class="page-title">Ticket Informations</h1>

    <!-- Information Cards -->
    <div class="cards-container">
      <!-- Basic Package -->
      <div class="card">
        <div class="card-header">
          <h2>Basic</h2>
        </div>
        <ul class="card-features">
          <li>Access to the Defunctland</li>
          <li>Access to all attractions</li>
          <li>All day ticket</li>
        </ul>
        <div class="card-pricing">
          <p><span>Adult:</span> $50 - $100</p>
          <p><span>Children:</span> $25 - $35</p>
        </div>
      </div>

      <!-- Special Package -->
      <div class="card">
        <div class="card-header">
          <h2>Special</h2>
        </div>
        <ul class="card-features">
          <li>Access to the Defunctland</li>
          <li>Access to all attractions and a meal</li>
          <li>All day ticket</li>
        </ul>
        <div class="card-pricing">
          <p><span>Adult:</span> $100 - $200</p>
          <p><span>Children:</span> $50 - $100</p>
        </div>
      </div>

      <!-- Premium Package -->
      <div class="card">
        <div class="card-header">
          <h2>Premium</h2>
        </div>
        <ul class="card-features">
          <li>Access to Defunctland</li>
          <li>Unlimited food</li>
          <li>No-queue tickets</li>
        </ul>
        <div class="card-pricing">
          <p><span>Adult:</span> $500 - $1000</p>
          <p><span>Children:</span> $250 - $350</p>
        </div>
      </div>
    </div>

    <!-- Book Now Button -->
    <div class="button-container">
      <a href="/loginpage" class="book-now-button">Book Now</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformationBoxes",
};
</script>

<style scoped>
/* General Styles */

h2 {
  color: #545ddd;
}

body {
  margin: 0;
  font-family: 'Poppins', Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

.page-title {
  text-align: center;
  font-size: 2.5rem;
  color: #2b2d42;
  font-weight: 700;
  margin-bottom: 40px;
}

/* Cards Container */
.cards-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  padding: 20px;
}

/* Card Styles */
.card {
  background-color: #ececec;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 320px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-header {
  padding: 15px 0;
  color: #9b8e8e;
  font-size: 1.5rem;
  font-weight: 600;
}

.card-features {
  padding: 20px 0;
  list-style: none;
  margin: 0;
  color: #555;
}

.card-features li {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.card-features li:last-child {
  border-bottom: none;
}

.card-pricing {
  background-color: #f8f9fa;
  padding: 15px;
  font-size: 1rem;
  color: #333;
}

.card-pricing p {
  margin: 5px 0;
}

.card-pricing span {
  font-weight: 600;
  color: #2b2d42;
}

/* Hover Effect */
.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

/* Button Container */
.button-container {
  text-align: center;
  margin: 40px 0;
}

.book-now-button {
  display: inline-block;
  background-color: #545ddd;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 12px 25px;
  text-decoration: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.book-now-button:hover {
  background-color: #1e38a1;
  transform: translateY(-3px);
}
</style>
