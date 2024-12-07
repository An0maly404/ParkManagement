<template>
  <div class="centered-button-page">
    <div class="welcome-message">
      <h1>Welcome, {{ username }}!</h1>
    </div>
    <div class="button-container">
      <a href="BuyTickets" class="book-now-button">Book Now</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TicketOwned",
  data() {
    return {
      username: "", // To store the logged-in user's username
    };
  },
  mounted() {
    // Retrieve the logged-in user's username from localStorage
    this.username = localStorage.getItem("loggedInUser") || "Guest";
  },
};
</script>

<style scoped>
.centered-button-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
}

.welcome-message {
  margin-bottom: 20px;
  text-align: center;
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
