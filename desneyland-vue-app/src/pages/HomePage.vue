<template>
    <h1>Welcome to DEFUNCTLAND, where your dream attractions are created !</h1>
    <div class="carousel">
        <div class="carousel-images" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <img v-for="(image, index) in images" :key="index" :src="image.src" :alt="image.alt"
                :class="{ active: index === currentIndex }">
        </div>
        <div class="carousel-controls">
            <button @click="prevImage">&lt;</button>
            <button @click="nextImage">&gt;</button>
        </div>
    </div>
    <h3>DEFUNCTLAND is much more than just an amusement park.
        Discover a world of adventure, magic, and fun for the whole family.
        With thrilling attractions, captivating shows, and immersive experiences,
        your day will be unforgettable !</h3>
    <router-link class="book-now" to="/aboutpage">DISCOVER MORE !</router-link>
    <h2> Opening Hours</h2>
    <p>Monday: 9-18</p>
    <p>Tuesday: Closed</p>
    <p>Wednesday: 9-18</p>
    <p>Thursday: 9-18</p>
    <p>Friday: 9-20</p>
    <p>Saturday: 9-20</p>
    <p>Sunday: 9-20</p>
    <p></p>
    <h1>Here is our map !</h1>
    <InteractiveMap :map-src="mapSrc" :points="attractionPoints" />
    
    <button @click="downloadImage">Download Map</button>
    <br>
    <div class="attraction-wait-times">
        <h2>Queue Times</h2>
        <div v-for="(attraction, index) in attractions" :key="index" class="attraction">
            <div class="attraction-name">{{ attraction.name }}</div>
            <div class="wait-time">Waiting Time: {{ attraction.waitTime }} min</div>
        </div>
    </div>
    <br>
    <p>Join Us at Defunctland</p>
    <router-link class="book-now" to="/loginpage">BOOK NOW !</router-link>
</template>

<script>
import planImage from "@/assets/MAP1.jpg"
import InteractiveMap from '@/components/InteractiveMap.vue';

export default {
    components: {
        InteractiveMap,
    },
    data() {
        return {
            attractions: [
                { name: 'Son of beast', waitTime: 25 },
                { name: 'The Big Dipper', waitTime: 30 },
                { name: 'Journey to Atlantis', waitTime: 10 },
                { name: 'Disaster Transport', waitTime: 15 },
                { name: 'Tidal Wave', waitTime: 5 },
                { name: 'Skyride', waitTime: 35 },
                { name: 'Astrowheel', waitTime: 15 },
                { name: 'Submarine Voyage', waitTime: 40 },
            ],
            mapSrc: planImage,
            attractionPoints: [
                {
                    x: 25,
                    y: 28,
                    details: {
                        name: "SON OF BEAST",
                        description: "Son of Beast was a record-breaking wooden roller coaster, notable for being the first of its kind to include a vertical loop. Known for its intense speed and rough ride, it closed in 2012 due to safety concerns and high maintenance costs.",
                        image: require('@/assets/SONOFBEAST1.jpg'),
                    },
                },
                {
                    x: 10,
                    y: 10,
                    details: {
                        name: "THE BIG DIPPER",
                        description: "This iconic wooden roller coaster thrilled guests with its classic out-and-back design. Operating for over 80 years, it was a centerpiece of the park until Geauga Lake’s closure in 2007.",
                        image: require('@/assets/BIGDIPPER1.jpg'),
                    },
                },
                {
                    x: 64,
                    y: 10,
                    details: {
                        name: "JOURNEY TO ATLANTIS",
                        description: "A hybrid water ride and coaster, Journey to Atlantis offered a mix of thrilling drops and gentle splashes. It combined storytelling and aquatic elements, making it a fan favorite before its closure.",
                        image: require('@/assets/JOURNEYTOATLANTIS1.jpg'),
                    },
                },
                {
                    x: 86,
                    y: 5,
                    details: {
                        name: "TIDAL WAVE",
                        description: "This shoot-the-chute water ride gave riders a dramatic drop into a giant wave, soaking both passengers and onlookers. It closed in 2017 to make room for new developments.",
                        image: require('@/assets/TIDALWAVE1.jpg'),
                    },
                },
                {
                    x: 87,
                    y: 30,
                    details: {
                        name: "DISASTER TRANSPORT",
                        description: "Disaster Transport was an indoor roller coaster themed as a futuristic transport gone awry. Its mix of mild thrills and dark ride elements made it a unique experience before its demolition in 2012.",
                        image: require('@/assets/DISASTERTRANSPORT1.jpg'),
                    },
                },
                {
                    x: 76,
                    y: 62,
                    details: {
                        name: "SKYRIDE",
                        description: "A classic cable car attraction that offered scenic views of the park from above. It was a relaxing and nostalgic ride before its closure to accommodate newer attractions.",
                        image: require('@/assets/SKYRIDE1.jpg'),
                    },
                },
                {
                    x: 27,
                    y: 62,
                    details: {
                        name: "ASTROWHEEL",
                        description: "A Ferris wheel providing gentle thrills and panoramic views, it was a staple of AstroWorld until the park shut down in 2005.",
                        image: require('@/assets/ASTROWHEEL1.jpg'),
                    },
                },
                {
                    x: 10,
                    y: 55,
                    details: {
                        name: "Submarine Voyage",
                        description: "This underwater adventure immersed guests in a simulated deep-sea journey. The attraction was beloved for its creativity but closed in 1998 to make way for modern rides.",
                        image: require('@/assets/SUBMARINEVOYAGE1.jpg'),
                    },
                },
                {
                    x: 50,
                    y: 50,
                    details: {
                        name: "Jadran Hotel",
                        description: "150$ for the night",
                        image: require('@/assets/HOTEL1.jpg'),
                    },
                },
                {
                    x: 50,
                    y: 55,
                    details: {
                        name: "Weidmann Hotel",
                        description: "150$ for the night",
                        image: require('@/assets/HOTEL2.jpg'),
                    },
                },
                {
                    x: 52,
                    y: 85,
                    details: {
                        name: "Pizza Factory",
                        description: "A restaurant specialised in italian food",
                        image: require('@/assets/PIZZAFACTORY1.jpg'),
                    },
                },
                {
                    x: 65,
                    y: 85,
                    details: {
                        name: "Le bangala",
                        description: "A french crêpes restaurant",
                        image: require('@/assets/BANGALA1.jpeg'),
                    },
                },
                
                
            ],
            images: [
                { src: require('@/assets/WINTER1.jpg'), alt: "Image1" },
                { src: require('@/assets/WINTER2.jpg'), alt: "Image2" },
                { src: require('@/assets/WINTER3.jpg'), alt: "Image3" },
            ],
            currentIndex: 0,
        };
    },
    methods: {
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        prevImage() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        startCarousel() {
            this.carouselInterval = setInterval(() => {
                this.nextImage();
            }, 6000);
        },
        downloadImage(){
            const imageUrl=require('@/assets/MAP1.jpg');
            const link = document.createElement('a');
            link.href=imageUrl;
            link.download='map-image.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },
    },
    mounted() {
        this.startCarousel();
    },
    beforeUnmount() {
        clearInterval(this.carouselInterval);
    },
};
</script>

<style scoped>
/* _________________________________________________________________AJUSTMENTS FOR THE CAROUSEL _____________________________________________________________________________*/
.carousel {
    position: relative;
    width: 100%;
    max-width: 936px;
    margin: 0 auto;
    overflow: hidden;
}

.carousel-images {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carousel-images img {
    border-radius: 5%;
    width: 936px;
    height: 504px;
    min-width: 100%;
    display: block;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.carousel-images img.active {
    display: block;
    opacity: 1;
}

.carousel-controls {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
}

.carousel-controls button {
    background-color: rgba(128, 128, 128, 0.288);
    border: none;
    color: rgb(0, 0, 0);
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
}

.book-now {
    background-color: #112D4E;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    text-decoration: none;
}

.book-now:hover {
    background-color: #d4b920;
}


h1,
h2,
p,
h3 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #3F72AF ;
}

button{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-color: #112D4E;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    text-decoration: none;
    margin-bottom: 20px;
}

button:hover{
    background-color: #d4b920;
}

/*WAIT TIMES*/

.attraction-wait-times {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  background-color: transparent;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.attraction {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;
}

.attraction-name {
  font-weight: bold;
  color: #333;
}

.wait-time {
  color: #ff5733;
  font-size: 1rem;
}

.attraction:last-child {
  border-bottom: none;
}
</style>