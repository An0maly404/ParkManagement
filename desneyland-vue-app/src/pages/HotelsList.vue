<template>
    <div class="hotels-container">
        <div class="hotel-cards">
            <div v-for="hotel in hotels" :key="hotel.id" class="hotel-card" @click="selectHotel(hotel)">
                <img :src="hotel.image" alt="hotel.name">
                <h3>{{ hotel.name }}</h3>
            </div>
        </div>

        <div v-if="selectedHotel" class="hotel-details">
            <h2>{{ selectedHotel.name }}</h2>
            <p>{{ selectedHotel.description }}</p>
            <p><strong>Price:</strong>${{ selectedHotel.price }}</p>
        </div>
    </div>
</template>  

<script>
export default{
    data(){
        return{
            hotels:[
                {
                    id:1,
                    name:"HAUNTED HOTEL",
                    image:require('@/assets/HOTEL1.jpg'),
                    additionnalimages:[require('@/assets/HOTEL11.jpg'),require('@/assets/HOTEL12.jpg')],
                    description:"Description Hotel 1",
                    price:150,
                },
                {
                    id:2,
                    name:"CLOWN HOTEL",
                    image:require('@/assets/ASTROWHEEL1.jpg'),
                    description:"Description Hotel 1",
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

<style>
.hotels-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.hotel-cards {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100%;
  width: 100%;
}

.hotel-card {
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
    width: 400px;
    transition: transform 0.3s ease;
}

.hotel-card:hover{
    transform: scale(1.05);
}

.hotel-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.hotel-details {
  margin-top: 20px;
  text-align: center;
  border-top: 1px solid #ddd;
  padding-top: 20px;
}
</style>