<template>
  <h1 class="attractionstype">RESTAURANTS BY CUISINE TYPE</h1>
  <div class="categories-container">
    <div v-for="(group, cuisine) in groupedRestaurants" :key="cuisine" class="cuisine-group">
      <h2 class="cuisine-header">{{ cuisine }}</h2>
      <div class="restaurant-cards">
        <div
          v-for="restaurant in group"
          :key="restaurant.name"
          class="restaurant-wrapper"
        >
          <!-- Restaurant Card -->
          <div class="restaurant-card" @click="selectRestaurant(restaurant)">
            <img
              :src="restaurant.image"
              :alt="restaurant.name"
              class="restaurant-image"
            />
            <h3 class="restaurant-name">{{ restaurant.name }}</h3>
          </div>

          <!-- Restaurant Details -->
          <div
            v-if="selectedRestaurant && selectedRestaurant.name === restaurant.name"
            class="restaurant-details"
            :ref="'detailSection_' + restaurant.name"
          >
            <h2 class="details-header">{{ selectedRestaurant.name }}</h2>
            <p class="details-description">{{ selectedRestaurant.description }}</p>
            <div class="additional-images">
              <img
                v-for="(image, idx) in selectedRestaurant.additionalImages"
                :key="idx"
                :src="image"
                :alt="`${selectedRestaurant.name} additional image ${idx + 1}`"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PizzaFactoryMain from '@/assets/PIZZAFACTORY1.jpg';
import PizzaFactory2 from '@/assets/PIZZA-FACTORY2.jpeg';
import BangalaMain from '@/assets/Bangala-Resto.jpeg';
import BangalaAdditional from '@/assets/BANGALA1.jpeg';

export default {
  name: 'RestaurantsList',
  data() {
    return {
      selectedRestaurant: null,
      restaurants: [
        {
          name: 'Pizza Factory',
          image: PizzaFactoryMain,
          description: 'La Pizza Factory Mashallah pizza.',
          additionalImages: [PizzaFactory2],
          cuisineType: 'Italian'
        },
        {
          name: 'Le Bangala',
          image: BangalaMain,
          description: 'Le Bangala is proposing you BIIIG crepes.',
          additionalImages: [BangalaAdditional],
          cuisineType: 'Indian'
        }
      ]
    };
  },
  computed: {
    groupedRestaurants() {
      return this.restaurants.reduce((groups, restaurant) => {
        const type = restaurant.cuisineType;
        if (!groups[type]) {
          groups[type] = [];
        }
        groups[type].push(restaurant);
        return groups;
      }, {});
    }
  },
  methods: {
    selectRestaurant(restaurant) {
      if (this.selectedRestaurant && this.selectedRestaurant.name === restaurant.name) {
        this.selectedRestaurant = null;
      } else {
        this.selectedRestaurant = restaurant;
        this.$nextTick(() => {
          const refName = 'detailSection_' + restaurant.name;
          const detailEl = this.$refs[refName];
          if (detailEl instanceof Element) {
            detailEl.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  background-color: #f8f9fa;
  color: #333;
}

.attractionstype {
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin: 40px 0 20px;
  font-weight: 600;
  position: relative;
}

.attractionstype::after {
  content: '';
  width: 60px;
  height: 4px;
  background-color: #ff7e67;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.categories-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin: 0 auto;
}

.cuisine-group {
  width: 100%;
  max-width: 1200px;
}

.cuisine-header {
  font-size: 1.8rem;
  color: #555;
  text-transform: uppercase;
  border-bottom: 2px solid #ff7e67;
  padding-bottom: 10px;
  margin-bottom: 20px;
  text-align: center;
}

.restaurant-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.restaurant-wrapper {
  width: 300px;
}

.restaurant-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.restaurant-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.restaurant-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.restaurant-name {
  text-align: center;
  font-size: 1.4rem;
  padding: 15px;
  color: #333;
  font-weight: 600;
}

.restaurant-details {
  background-color: #fefefe;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  margin-top: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}

.details-header {
  font-size: 1.6rem;
  color: #ff7e67;
  margin-bottom: 10px;
}

.details-description {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.5;
}

.additional-images {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 15px;
  gap: 10px;
}

.additional-images img {
  width: 120px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
  border: 2px solid #ff7e67;
}
</style>
