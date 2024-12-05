<template>
    <div>
      <h1>Information !</h1>
      <!-- Calendrier -->
      <div class="calendar-container">
        <label for="date">Choisissez une date :</label>
        <input type="date" id="date" :min="minDate" v-model="selectedDate" @change="updatePrices" />
      </div>
  
      <!-- Conteneur principal -->
      <div class="container">
        <div
          class="box"
          v-for="(ticketType, index) in ticketTypes"
          :key="index"
        >
          <h2 class="ticket-title">{{ ticketType.name }}</h2>
          <ul class="ticket-features">
            <li v-for="feature in ticketType.features" :key="feature">{{ feature }}</li>
          </ul>
          <div class="tarif">
            <p>Adulte : {{ ticketType.adultPrice }}€</p>
            <p>Enfant : {{ ticketType.childPrice }}€</p>
          </div>
          <!-- Contrôles pour les tickets -->
          <div class="quantity-controls">
            <p>Billets adulte :</p>
            <button @click="decreaseQuantity(ticketType, 'adult')" :disabled="ticketType.adultQuantity === 0">-</button>
            <span>{{ ticketType.adultQuantity }}</span>
            <button @click="increaseQuantity(ticketType, 'adult')">+</button>
  
            <p>Billets enfant :</p>
            <button @click="decreaseQuantity(ticketType, 'child')" :disabled="ticketType.childQuantity === 0">-</button>
            <span>{{ ticketType.childQuantity }}</span>
            <button @click="increaseQuantity(ticketType, 'child')">+</button>
          </div>
        </div>
      </div>
  
      <!-- Résumé -->
      <div class="summary-container" v-if="totalPrice > 0">
        <h3>Résumé de votre réservation :</h3>
        <ul>
          <li v-for="ticket in selectedTickets" :key="ticket.name">
            {{ ticket.name }} - Adulte : {{ ticket.adultQuantity }} × {{ ticket.adultPrice }}€, Enfant : {{ ticket.childQuantity }} × {{ ticket.childPrice }}€
          </li>
        </ul>
        <p><strong>Total : {{ totalPrice }} €</strong></p>
      </div>
  
      <!-- Bouton de paiement -->
      <div class="payment-container">
        <button @click="proceedToPayment" :disabled="totalPrice === 0">Payer</button>
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
        ticketTypes: [
          {
            name: "Basic",
            features: ["Accès au parc", "Accès à toutes les attractions une fois", "Billet pour toute la journée"],
            adultPrice: 50,
            childPrice: 25,
            adultQuantity: 0,
            childQuantity: 0,
          },
          {
            name: "Special",
            features: ["Accès au parc", "Attractions illimitées", "Billet pour toute la journée"],
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
      totalPrice() {
        return this.ticketTypes.reduce(
          (total, ticket) =>
            total +
            ticket.adultQuantity * ticket.adultPrice +
            ticket.childQuantity * ticket.childPrice,
          0
        );
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
      proceedToPayment() {
        alert(`Paiement de ${this.totalPrice} € en cours...`);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles basés sur l'architecture fournie */
  .container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  
  .box {
    background-color: #d3d3d3;
    border-radius: 10px;
    width: 300px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  /* Centrer les titres */
  .ticket-title {
    text-align: center;
    font-size: 1.5em;
    margin-bottom: 15px;
  }
  
  /* Aligner les descriptions et les tarifs à gauche */
  .ticket-features {
    text-align: left;
    margin: 0;
    padding-left: 20px;
  }
  
  .ticket-features li {
    margin-bottom: 5px;
  }
  
  .tarif {
    text-align: left;
    margin-top: 10px;
  }
  
  .quantity-controls {
    margin-top: 20px;
  }
  
  button {
    margin: 5px;
    padding: 5px 10px;
  }
  
  .summary-container {
    margin-top: 30px;
  }
  
  .payment-container {
    text-align: center;
    margin-top: 20px;
  }
  </style>
  