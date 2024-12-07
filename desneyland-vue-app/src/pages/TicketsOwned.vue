<template>
  <div>
    <h1>Vos billets</h1>
    <div v-if="tickets.length === 0">
      <p>Aucun billet acheté.</p>
    </div>
    <div v-else>
      <div v-for="(ticket, index) in tickets" :key="index" class="ticket">
        <h3>Billet {{ index + 1 }}</h3>
        <p><strong>Utilisateur :</strong> {{ ticket.username }}</p>
        <p><strong>Nombre de jours :</strong> {{ ticket.numberOfDays }}</p>
        <p><strong>Hôtel choisi :</strong> {{ ticket.hotelChoice || 'Aucun' }}</p>
        <h4>Détails des billets :</h4>
        <ul>
          <li v-for="(detail, i) in ticket.ticketDetails" :key="i">
            {{ detail.name }} - Adultes : {{ detail.adultQuantity }} × {{ detail.adultPrice }}€, Enfants : {{
              detail.childQuantity }} × {{ detail.childPrice }}€
          </li>
        </ul>
        <p><strong>Prix total :</strong> {{ ticket.totalPrice }} €</p>
        <p><strong>Date d'achat :</strong> {{ new Date(ticket.createdAt).toLocaleString() }}</p>
      </div>
    </div>
    <!-- Book Now Button -->
    <div class="button-container">
      <a href="BuyTickets" class="book-now-button">Book Now</a>
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
  },
  methods: {
    goToBuyTickets() {
      this.$router.push({ name: "BuyTickets" }); // Adjust this if your route name is different
    },
  },
};
</script>

<style scoped>
.ticket {
  background-color: #f9f9f9;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.book-now-container {
  text-align: center;
  margin-top: 20px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
