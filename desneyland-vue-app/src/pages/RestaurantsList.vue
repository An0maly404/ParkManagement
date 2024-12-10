<template>
  <div class="restaurants-container">
    <header>
      <h1>Restaurants</h1>
      <h2 class="story-title">Explore Defunctland's Unique Culinary Experiences</h2>
    </header>

    <section>
      <p class="intro-text">
        Dive into a variety of culinary delights inspired by abandoned stories, where each dish serves nostalgia with a dash of mystery.
      </p>
    </section>

    <section class="restaurant-cards-section">
      <div class="restaurant-cards">
        <div
          v-for="restaurant in restaurants"
          :key="restaurant.name"
          class="restaurant-card"
          @click="selectRestaurant(restaurant)"
        >
          <img :src="restaurant.image" :alt="restaurant.name" />
          <h3>{{ restaurant.name }}</h3>
        </div>
      </div>
    </section>

    <section v-if="selectedRestaurant" class="restaurant-details">
      <h3>{{ selectedRestaurant.name }}</h3>
      <p>{{ selectedRestaurant.description }}</p>
      <div class="additional-images">
        <h4>Additional Images</h4>
        <div class="images-container">
          <img
            v-for="(img, index) in selectedRestaurant.additionalImages"
            :key="index"
            :src="img"
            :alt="`Image ${index + 1} of ${selectedRestaurant.name}`"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "RestaurantsList",
  data() {
    return {
      selectedRestaurant: null,
      restaurants: [
        {
          name: "Pizza Factory",
          image: require("@/assets/PIZZAFACTORY1.jpg"),
          description: "La Pizza Factory Margharita pizza.",
          additionalImages: [require("@/assets/PIZZA-FACTORY2.jpeg")],
        },
        {
          name: "Le Bungalo",
          image: require("@/assets/Bangala-Resto.jpeg"),
          description: "Le Bangala is proposing you BIIIG crepes.",
          additionalImages: [require("@/assets/BANGALA1.jpeg")],
        },
      ],
    };
  },
  methods: {
    selectRestaurant(restaurant) {
      this.selectedRestaurant = restaurant;
    },
  },
};
</script>

<style scoped>
/* Import Fonts */
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Roboto:wght@300;400;700&display=swap');

/* General Reset */
body,
html {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #f9f9f9;
  color: #333;
  line-height: 1.7;
}

/* Container */
.restaurants-container {
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

.story-title {
  font-size: 2em;
  color: #34495e;
  margin-top: 10px;
}

.intro-text {
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 20px;
}

/* Restaurant Cards */
.restaurant-cards-section {
  margin: 30px 0;
}

.restaurant-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.restaurant-card {
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #f8f8f8;
}

.restaurant-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
}

.restaurant-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

/* Restaurant Details */
.restaurant-details {
  margin-top: 20px;
  text-align: center;
  border-top: 1px solid #ddd;
  padding-top: 20px;
}

.additional-images {
  margin-top: 20px;
  text-align: center;
}

.images-container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.images-container img {
  width: 200px;
  height: auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  transition: transform 0.3s ease;
}

.images-container img:hover {
  transform: scale(1.1);
}
</style>
