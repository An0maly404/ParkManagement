<template>
  <div class="tickets-page">
    <h1 class="page-title">Your Tickets For Defunctland</h1>

    <div v-if="tickets.length === 0" class="empty-state">
      <p>No tickets bought</p>
    </div>

    <div v-else class="tickets-grid">
      <div v-for="(ticket, index) in tickets" :key="index" class="ticket-card">
        <div class="ticket-header">
          <h3>Ticket {{ index + 1 }}</h3>
        </div>

        <div class="ticket-content">
          <p><strong>Username :</strong> {{ ticket.username }}</p>
          <p><strong>Number of Days :</strong> {{ ticket.numberOfDays }}</p>
          <p><strong>Hotel Choosen:</strong> {{ ticket.hotelChoice || 'Aucun' }}</p>
          <h4>Ticket Details:</h4>
          <ul class="ticket-details-list">
            <li v-for="(detail, i) in ticket.ticketDetails" :key="i">
              <span class="detail-name">{{ detail.name }}</span>
              <span class="detail-quantity">
                Adults: {{ detail.adultQuantity }} × {{ detail.adultPrice }}€, 
                Kids: {{ detail.childQuantity }} × {{ detail.childPrice }}€
              </span>
            </li>
          </ul>
        </div>

        <div class="ticket-footer">
          <p><strong>Total Price :</strong> <span class="total-price">{{ ticket.totalPrice }} €</span></p>
          <p><strong>Date of Purchase :</strong> {{ new Date(ticket.createdAt).toLocaleString() }}</p>
        </div>
      </div>
    </div>

    <div class="button-container">
      <a href="BuyTickets" class="book-now-button">Buy Tickets</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tickets: [],
    };
  },
  async created() {
    const currentUser = localStorage.getItem("loggedInUser"); // Get the logged-in user
    if (!currentUser) {
      alert("You need to be logged in to view your tickets.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/tickets/${currentUser}`);
      if (response.ok) {
        this.tickets = await response.json();
      } else {
        alert("Error fetching tickets.");
      }
    } catch (error) {
      console.error("Error fetching tickets:", error);
      alert("Failed to fetch tickets. Please try again.");
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

/* General Styles */
.tickets-page {
  font-family: 'Poppins', sans-serif;
  background-color: #f4f6f9;
  color: #333;
  padding: 20px;
}

.page-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 30px;
}

/* Empty State */
.empty-state {
  text-align: center;
  font-size: 1.2rem;
  color: #777;
}

.empty-state .book-now-button {
  margin-top: 10px;
}

/* Tickets Grid */
.tickets-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 20px; /* Space between tickets */
  margin-top: 20px;
}

.ticket-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.ticket-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.ticket-header h3 {
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 10px;
}

/* Ticket Details */
.ticket-details-list {
  list-style: none;
  padding: 0;
  margin: 10px 0;
}

.ticket-details-list li {
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  margin: 5px 0;
}

.detail-name {
  font-weight: 600;
}

.detail-quantity {
  color: #555;
}

/* Footer */
.ticket-footer {
  margin-top: 15px;
}

.total-price {
  color: #e74c3c;
  font-weight: 600;
  font-size: 1.1rem;
}

/* Book Now Button */
.button-container {
  text-align: center;
  margin-top: 30px;
}

.book-now-button {
  display: inline-block;
  background-color: #28a745;
  color: white;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.book-now-button:hover {
  background-color: #218838;
}
</style>
