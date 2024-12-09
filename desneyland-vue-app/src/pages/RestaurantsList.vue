<template>
    <h1 class="attractionstype">RESTAURANTS BY CUISINE TYPE</h1>
    <div class="categories-container">
      <div v-for="(group, cuisine) in groupedRestaurants" :key="cuisine" class="class-restaurant">
        <h2 class="difficulty-header">{{ cuisine }}</h2>
        <div class="attractions">
          <div
            v-for="(restaurant) in group"
            :key="restaurant.name"
            class="restaurant-wrapper"
          >
            <!-- Carte du restaurant -->
            <div class="attraction-card" @click="selectRestaurant(restaurant)">
              <img
                :src="restaurant.image"
                :alt="restaurant.name"
                class="attraction-image"
              />
              <h3>{{ restaurant.name }}</h3>
            </div>
    
            <!-- Détails du restaurant, affichés juste en dessous de la carte sélectionnée -->
            <div
              v-if="selectedRestaurant && selectedRestaurant.name === restaurant.name"
              class="attraction-details"
              :ref="'detailSection_' + restaurant.name"
            >
              <h2>{{ selectedRestaurant.name }}</h2>
              <p>{{ selectedRestaurant.description }}</p>
              <div class="additional-images">
                <img
                  v-for="(image, idx) in selectedRestaurant.additionalImages"
                  :key="idx"
                  :src="image"
                  :alt="selectedRestaurant.name + ' additional image ' + (idx + 1)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import PizzaFactoryMain from '@/assets/PIZZAFACTORY1.jpg'
  import PizzaFactory2 from '@/assets/PIZZA-FACTORY2.jpeg'
  import BangalaMain from '@/assets/Bangala-Resto.jpeg'
  import BangalaAdditional from '@/assets/BANGALA1.jpeg'
  
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
            description: 'Le Bangala is proposing you BIIIG crepes',
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
        // Toggle: si on clique sur le même restaurant, on ferme la description, sinon on l'ouvre
        if (this.selectedRestaurant && this.selectedRestaurant.name === restaurant.name) {
          this.selectedRestaurant = null;
        } else {
          this.selectedRestaurant = restaurant;
          // Après avoir mis à jour la vue, on tente de scroller
          this.$nextTick(() => {
            const refName = 'detailSection_' + restaurant.name;
            const detailEl = this.$refs[refName];
            // Vérification que detailEl est un élément DOM
            if (detailEl instanceof Element && typeof detailEl.scrollIntoView === 'function') {
              detailEl.scrollIntoView({ behavior: 'smooth' });
            }
          });
        }
      },
      closeDetails() {
        this.selectedRestaurant = null;
      }
    }
  };
  </script>
  
  <style scoped>
.class-restaurant {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  flex: 1; /* Permet de répartir l'espace également entre les colonnes */
}

.categories-container {
  display: flex;
  justify-content: center; /* Aligner au centre horizontalement */
  gap: 30px; /* Espacement entre les catégories */
  flex-wrap: wrap; /* Gérer l'affichage responsive */
}

  .difficulty-header {
    color: rgba(0, 0, 0, 0.363);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-transform: uppercase;
  }
  
  .attractionstype {
    color: #545ddd;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  
  .attractions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  /* Un wrapper autour de chaque restaurant et sa section détail */
  .restaurant-wrapper {
    width: 300px;
    margin: 15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #00000080;
  }
  
  .attraction-card {
    text-align: center;
    position: relative;
    padding: 5px;
    background-color: rgba(221, 221, 221, 0.521);
    border-radius: 3%;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .attraction-card:hover {
    background-color: #e3e3e3;
  }
  
  .attraction-image {
    border-radius: 5%;
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }
  
  .attraction-card:hover .attraction-image {
    transform: scale(1.05);
  }
  
  .attraction-details {
    margin-top: 10px;
    background: rgba(221, 221, 221, 0.521);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-size: 1.1rem;
  }
  
  .attraction-details button {
    background-color: #2646d7;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .attraction-details button:hover {
    background-color: #d4b920;
  }
  
  .additional-images {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
  }
  
  .additional-images img {
    border-radius: 2%;
    margin: 5px;
    width: 150px;
    height: 100px;
    object-fit: cover;
  }
  </style>
  