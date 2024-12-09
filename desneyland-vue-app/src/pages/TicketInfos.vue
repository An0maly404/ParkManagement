<template>
  <div class="ticket-info-container">
    <header>
      <h1>Ticket Informations</h1>
      <h2 class="package-title">Choose Your Adventure</h2>
    </header>

    <section class="cards-container">
      <!-- Basic Package -->
      <div class="card">
        <div class="card-header">
          <h3>Basic</h3>
        </div>
        <ul class="card-features">
          <li>Access to Defunctland</li>
          <li>Access to all attractions</li>
          <li>All-day ticket</li>
        </ul>
        <div class="card-pricing">
          <p><span>Adult:</span> $50 - $100</p>
          <p><span>Children:</span> $25 - $35</p>
        </div>
      </div>

      <!-- Special Package -->
      <div class="card">
        <div class="card-header">
          <h3>Special</h3>
        </div>
        <ul class="card-features">
          <li>Access to Defunctland</li>
          <li>Access to all attractions and a meal</li>
          <li>All-day ticket</li>
        </ul>
        <div class="card-pricing">
          <p><span>Adult:</span> $100 - $200</p>
          <p><span>Children:</span> $50 - $100</p>
        </div>
      </div>

      <!-- Premium Package -->
      <div class="card">
        <div class="card-header">
          <h3>Premium</h3>
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
    </section>

    <!-- Book Now Button -->
    <section class="button-container">
      <a href="/loginpage" class="book-now-button">Book Now</a>
    </section>
  </div>
</template>

<script>
export default {
  name: "TicketInformation",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Roboto:wght@300;400;700&display=swap');

/* General Styles */
body,
html {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

.ticket-info-container {
  max-width: 1300px;
  margin: 40px auto;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  animation: fadeIn 1.5s ease-in-out;
}

/* Header Section */
header {
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  font-family: 'Lilita One', cursive;
  color: #2c3e50;
  font-size: 2.5em;
}

.package-title {
  font-size: 2em;
  color: #34495e;
  margin-top: 10px;
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

/* Book Now Button */
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

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
