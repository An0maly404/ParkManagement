<template>
    <div class="hotels-container">
      <header>
        <h1>Hotels</h1>
        <h2 class="story-title">Discover Defunctland's Hauntingly Beautiful Hotels</h2>
      </header>
  
      <section>
        <p class="intro-text">
          Step into the hauntingly beautiful world of abandoned hotels, where faded luxury meets eerie stories. Each hotel tells a tale that blends nostalgia with mystery.
        </p>
      </section>
  
      <section class="hotel-cards-section">
        <div class="hotel-cards">
          <div
            v-for="hotel in hotels"
            :key="hotel.id"
            class="hotel-card"
            @click="selectHotel(hotel)"
          >
            <img :src="hotel.image" :alt="hotel.name" />
            <h3>{{ hotel.name }}</h3>
          </div>
        </div>
      </section>
  
      <section v-if="selectedHotel" class="hotel-details">
        <h3>{{ selectedHotel.name }}</h3>
        <p>{{ selectedHotel.description }}</p>
        <p class="price"><strong>Price:</strong> ${{ selectedHotel.price }}</p>
  
        <div class="additional-images">
          <h4>Additional Images</h4>
          <div class="images-container">
            <img
              v-for="(img, index) in selectedHotel.additionnalimages"
              :key="index"
              :src="img"
              :alt="`Image ${index + 1} of ${selectedHotel.name}`"
            />
          </div>
        </div>
      </section>
  
      <section class="other-hotels">
        <p>
          Not interested in our hotels? Check out other options here:
        </p>
        <a href="https://www.airbnb.co.uk/">Airbnb</a>
      </section>
  
      <router-link class="book-now" to="/loginpage">BOOK NOW</router-link>
    </div>
</template>
   

<script>
export default{
    data(){
        return{
            hotels:[
                {
                    id:1,
                    name:"JADRAN HOTEL",
                    image:require('@/assets/HOTEL1.jpg'),
                    additionnalimages:[require('@/assets/HOTEL11.jpg'),require('@/assets/HOTEL12.jpg')],
                    description:"The Hotel Jadran, perched on a cliff overlooking the Adriatic Sea, was a beacon of modernist luxury when it opened in the 1930s. Designed with sleek lines and expansive terraces, it catered to elite guests seeking seaside elegance. Its decline began during the Yugoslav wars of the 1990s, when it was abandoned and left to the elements. Today, its stark, decaying facade contrasts with the sparkling sea, with graffiti-covered walls and collapsing interiors telling a story of lost grandeur. Now a silent relic, it serves as a poignant reminder of history and a compelling attraction in Defunctland’s eerie lineup.",
                    price:150,
                },
                {
                    id:2,
                    name:"WEIDMANN HOTEL",
                    image:require('@/assets/HOTEL2.jpg'),
                    additionnalimages:[require('@/assets/HOTEL21.jpg'),require('@/assets/HOTEL22.jpg')],
                    description:"The Hotel Weidmann, built in the 1920s, was once a luxurious retreat for wealthy travelers, nestled in a secluded alpine forest. Known for its grand ballroom and panoramic views, it thrived for decades until a mysterious fire in the 1970s forced its closure. Rumors of tragic accidents and unexplained disappearances added to its eerie reputation, deterring redevelopment efforts. Today, the crumbling structure is overrun by nature, with ivy-clad walls and shattered windows, attracting urban explorers and ghost hunters. Its haunting ambiance and storied past make it a chilling centerpiece in Defunctland's collection of forgotten attractions.",
                    price:150,
                },
            ],
            selectedHotel: null
        };
    },
    methods:{
        selectHotel(hotel){
            this.selectedHotel=hotel;
        }
    }
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
.hotels-container {
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

/* Hotel Cards */
.hotel-cards-section {
  margin: 30px 0;
}

.hotel-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.hotel-card {
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #f8f8f8;
}

.hotel-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
}

.hotel-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

/* Hotel Details */
.hotel-details {
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

/* Other Hotels */
.other-hotels {
  margin-top: 20px;
  text-align: center;
}

a {
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}

/* Book Now Button */
.book-now {
  display: block;
  margin: 30px auto 0;
  background-color: #112D4E;
  color: #fff;
  padding: 0.7rem 1.5rem;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s;
  max-width: 300px;
}

.book-now:hover {
  background-color: #d4b920;
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