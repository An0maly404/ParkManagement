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
            <br>
            <p class="price"><strong>Price:</strong>${{ selectedHotel.price }}</p>
            <div class="additionnal-images">
                <h4>Additionnal Images</h4>
                <div class="images-container">
                    <img v-for="(img,index) in selectedHotel.additionnalimages" :key="index" :src="img" :alt="`Image ${index + 1} of ${selectedHotel.name}`">
                </div>
            </div>
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
                    description:"The Hotel Jadran, perched on a cliff overlooking the Adriatic Sea, was a beacon of modernist luxury when it opened in the 1930s. Designed with sleek lines and expansive terraces, it catered to elite guests seeking seaside elegance. Its decline began during the Yugoslav wars of the 1990s, when it was abandoned and left to the elements. Today, its stark, decaying facade contrasts with the sparkling sea, with graffiti-covered walls and collapsing interiors telling a story of lost grandeur. Now a silent relic, it serves as a poignant reminder of history and a compelling attraction in Defectland’s eerie lineup.",
                    price:150,
                },
                {
                    id:2,
                    name:"WEIDMANN HOTEL",
                    image:require('@/assets/HOTEL2.jpg'),
                    additionnalimages:[require('@/assets/HOTEL21.jpg'),require('@/assets/HOTEL22.jpg')],
                    description:"The Hotel Weidmann, built in the 1920s, was once a luxurious retreat for wealthy travelers, nestled in a secluded alpine forest. Known for its grand ballroom and panoramic views, it thrived for decades until a mysterious fire in the 1970s forced its closure. Rumors of tragic accidents and unexplained disappearances added to its eerie reputation, deterring redevelopment efforts. Today, the crumbling structure is overrun by nature, with ivy-clad walls and shattered windows, attracting urban explorers and ghost hunters. Its haunting ambiance and storied past make it a chilling centerpiece in Defectland's collection of forgotten attractions.",
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
    width: 600px;
    transition: transform 0.3s ease;
}

.hotel-card:hover{
    transform: scale(1.05);
}

.hotel-card img {
  width: 600px;
  height: 450px;
  object-fit: cover;
  border-radius: 8px;
}

.hotel-details {
  margin-top: 20px;
  text-align: center;
  border-top: 1px solid #ddd;
  padding-top: 20px;
  justify-content: center;
}

.hotel-details p{
    width: auto;
    width: 500px;
    margin: 0 auto;
    text-align: center;
}

.price{
    font-size: larger;
}

.additionnal-images{
    margin-top: 20px;
    text-align: center;
}

.additionnal-images h4{
    margin-bottom: 10px;
    font-size: 1.2rem;
}

.images-container{
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
}

.images-container img {
    width: 500px;
    height: auto;
    border-radius: 5px;
    border: 1px solid #ddd;
    transition: transform 0.3s ease;
}


.images-container img:hover {
    transform: scale(1.1);
}


</style>