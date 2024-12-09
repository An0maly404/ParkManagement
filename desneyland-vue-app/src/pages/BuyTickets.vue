<template>
  <div class="tickets-page">
    <h1 class="page-title">Informations</h1>

    <!-- Calendar -->
    <div class="calendar-container input-container">
      <label for="date">Choose a date :</label>
      <input
        type="date"
        id="date"
        :min="minDate"
        v-model="selectedDate"
        @change="updatePrices"
        class="input-date"
      />
    </div>

    <!-- Number of Days Selection -->
    <div class="days-container input-container">
      <label for="numberOfDays">Number of Days (1-4) :</label>
      <select
        v-model="numberOfDays"
        id="numberOfDays"
        @change="updateTotal"
        class="input-select"
      >
        <option v-for="day in 4" :key="day" :value="day">{{ day }}</option>
      </select>
    </div>

    <!-- Hotel Selection -->
    <div class="hotel-container input-container" v-if="numberOfDays > 1">
      <label for="hotelChoice">Choose your hotel :</label>
      <select
        v-model="hotelChoice"
        id="hotelChoice"
        @change="updateTotal"
        class="input-select"
      >
        <option v-for="hotel in hotels" :key="hotel.name" :value="hotel">
          {{ hotel.name }} ({{ hotel.pricePerDay }}€ per Days)
        </option>
      </select>
    </div>

    <!-- Tickets Display -->
    <div class="tickets-grid">
      <div class="ticket-card" v-for="(ticketType, index) in ticketTypes" :key="index">
        <h2 class="ticket-title">{{ ticketType.name }}</h2>
        <ul class="ticket-features">
          <li v-for="feature in ticketType.features" :key="feature">{{ feature }}</li>
        </ul>

        <!-- Prices -->
        <div class="ticket-prices">
          <p>Adults : <strong>{{ ticketType.adultPrice }}€</strong></p>
          <p>Childs : <strong>{{ ticketType.childPrice }}€</strong></p>
        </div>

        <!-- Ticket Quantity Controls -->
        <div class="quantity-controls">
          <div class="quantity-group">
            <p>Adults Tickets:</p>
            <button @click="decreaseQuantity(ticketType, 'adult')" :disabled="ticketType.adultQuantity === 0">-</button>
            <span>{{ ticketType.adultQuantity }}</span>
            <button @click="increaseQuantity(ticketType, 'adult')">+</button>
          </div>

          <div class="quantity-group">
            <p>Childs Tickets:</p>
            <button @click="decreaseQuantity(ticketType, 'child')" :disabled="ticketType.childQuantity === 0">-</button>
            <span>{{ ticketType.childQuantity }}</span>
            <button @click="increaseQuantity(ticketType, 'child')">+</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Summary Section -->
    <div class="summary-container" v-if="totalPrice > 0">
      <h3>Summary:</h3>
      <ul class="summary-list">
        <ol v-for="ticket in selectedTickets" :key="ticket.name">
          {{ ticket.name }} - Adults : {{ ticket.adultQuantity }} × {{ ticket.adultPrice }}€, Childs :
          {{ ticket.childQuantity }} × {{ ticket.childPrice }}€
        </ol>
        <ol v-if="hotelChoice">
          Hotel Room Cost ({{ hotelChoice.name }} - {{ hotelChoice.pricePerDay }}€ par jour) : {{ hotelTotalPrice }}€
        </ol>
      </ul>
      <p class="total-price"><strong>Total : {{ totalPrice }} €</strong></p>
    </div>

    <!-- Payment Button -->
    <div class="payment-container">
      <button @click="proceedToPayment" :disabled="totalPrice === 0" class="pay-button">Buy</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuyTickets",
  data() {
    const today = new Date();
    const minDate = today.toISOString().split("T")[0];

    return {
      minDate,
      selectedDate: minDate,
      numberOfDays: 1,
      hotelChoice: null,
      hotels: [
        { name: "Jadran Hotel", pricePerDay: 50 },
        { name: "Weidmann Hotel", pricePerDay: 75 },
      ],
      ticketTypes: [
        {
          name: "Basic",
          features: ["Accès au parc", "Attractions une fois", "Billet pour la journée"],
          adultPrice: 50,
          childPrice: 25,
          adultQuantity: 0,
          childQuantity: 0,
        },
        {
          name: "Special",
          features: ["Accès au parc", "Attractions illimitées", "Billet pour la journée"],
          adultPrice: 100,
          childPrice: 50,
          adultQuantity: 0,
          childQuantity: 0,
        },
        {
          name: "Premium",
          features: ["Accès au parc", "Repas inclus", "Billets coupe-file"],
          adultPrice: 500,
          childPrice: 250,
          adultQuantity: 0,
          childQuantity: 0,
        },
      ],
    };
  },
  computed: {
    selectedTickets() {
      return this.ticketTypes.filter(ticket => ticket.adultQuantity > 0 || ticket.childQuantity > 0);
    },
    hotelTotalPrice() {
      if (!this.hotelChoice) return 0;
      return Math.max(this.numberOfDays - 1, 0) * this.hotelChoice.pricePerDay;
    },
    totalPrice() {
      return this.ticketTypes.reduce(
        (total, ticket) =>
          total +
          ticket.adultQuantity * ticket.adultPrice +
          ticket.childQuantity * ticket.childPrice,
        0
      ) + this.hotelTotalPrice;
    },
  },
  methods: {
    updatePrices() {
      const selectedDate = new Date(this.selectedDate);
      const isWeekend = selectedDate.getDay() === 0 || selectedDate.getDay() === 6;

      this.ticketTypes = this.ticketTypes.map(ticket => ({
        ...ticket,
        adultPrice: isWeekend ? ticket.adultPrice + 50 : ticket.adultPrice - 50,
        childPrice: isWeekend ? ticket.childPrice + 25 : ticket.childPrice - 25,
      }));
    },
    increaseQuantity(ticketType, category) {
      if (category === "adult") ticketType.adultQuantity++;
      if (category === "child") ticketType.childQuantity++;
    },
    decreaseQuantity(ticketType, category) {
      if (category === "adult" && ticketType.adultQuantity > 0) ticketType.adultQuantity--;
      if (category === "child" && ticketType.childQuantity > 0) ticketType.childQuantity--;
    },
    async proceedToPayment() {
      const currentUser = localStorage.getItem("loggedInUser");
      if (!currentUser) {
        alert("You must be logged in to buy tickets!");
        return;
      }

      const payload = {
        username: currentUser,
        numberOfDays: this.numberOfDays,
        hotelChoice: this.hotelChoice ? this.hotelChoice.name : "None",
        ticketDetails: this.selectedTickets,
        totalPrice: this.totalPrice,
        usableDate: this.selectedDate,
      };

      try {
        const response = await fetch("http://localhost:3000/tickets", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          alert("Ticket purchased successfully!");
          this.$router.push("/TicketsOwned");
        } else {
          alert("Error purchasing ticket.");
        }
      } catch (error) {
        console.error("Payment Error:", error);
        alert("Failed to proceed with payment.");
      }
    },
  },
};
</script>

<style scoped>
.tickets-page {
  font-family: "Poppins", sans-serif;
  color: #333;
  margin: 20px;
}

.page-title {
  text-align: center;
  color: #007bff;
  margin-bottom: 20px;
}

.calendar-container,
.days-container,
.hotel-container {
  margin-bottom: 20px;
}

.input-date,
.input-select {
  display: block;
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.tickets-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.ticket-card {
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.ticket-title {
  color: #0056b3;
  text-align: center;
}

.ticket-features {
  margin: 10px 0;
  padding-left: 20px;
}

.quantity-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
}

.summary-container {
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.total-price {
  font-size: 1.2em;
  text-align: right;
}

.payment-container {
  text-align: center;
  margin-top: 20px;
}

.pay-button {
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  font-size: 1.1em;
  border-radius: 5px;
}

/* Centered container for inputs */
.input-container {
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  margin: 10px 0; /* Add spacing around containers */
}

/* Smaller inputs and selects */
.input-date,
.input-select {
  width: 180px; /* Adjust width as needed */
  padding: 5px;
  font-size: 0.9em;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  text-align: center; /* Align text inside the input center */
}

.input-date:focus,
.input-select:focus {
  outline: none;
  box-shadow: 0 3px 6px rgba(0, 123, 255, 0.4);
}

</style>
