<template>
    <h1>Welcome !</h1>
    <div class="carousel">
        <div class="carousel-images" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <img v-for="(image,index) in images" :key="index" :src="image.src"  :alt="image.alt" :class="{active:index===currentIndex}">
        </div>
        <div class="carousel-controls">
            <button @click="prevImage"><</button>
            <button @click="nextImage">></button>
        </div>
    </div>
    <InteractiveMap :map-src="mapSrc" :points="attractionPoints"/>
</template>  

<script>
import planImage from "@/assets/MAPPLAN1.png"
import InteractiveMap from '@/components/InteractiveMap.vue';

export default{
    components:{
        InteractiveMap,
    },
    data(){
        return{
            mapSrc:planImage,
            attractionPoints:[
                {
                    x:20,
                    y:30,
                    details:{
                        name:"Attraction 1",
                        description:"Description"
                    },
                },
            ],
            images:[
                {src:require('@/assets/NEMESIS1.jpg'), alt:"Image1"},
                {src:require('@/assets/NEMESIS2.jpg'), alt:"Image2"},
                {src:require('@/assets/NEMESIS3.jpg'), alt:"Image3"},
            ],
            currentIndex:0,
        };
    },
    methods:{
        nextImage(){
            this.currentIndex=(this.currentIndex+1)%this.images.length;
        },
        prevImage(){
            this.currentIndex=(this.currentIndex-1+this.images.length)%this.images.length;
        },
    },
    mounted(){
        this.startCarousel();
    },
    beforeUnmount(){
        clearInterval(this.carouselInterval);
    },
    methods:{
        startCarousel(){
            this.carouselInterval=setInterval(()=>{
                this.nextImage();
            },6000);
        },
        nextImage(){
            this.currentIndex=(this.currentIndex + 1)% this.images.length;
        },
        prevImage(){
            this.currentIndex = (this.currentIndex-1+this.images.length)%this.images.length;
        },
    },
};
</script>

<style scoped>
/* _________________________________________________________________AJUSTMENTS FOR THE CAROUSEL _____________________________________________________________________________*/
.carousel{
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    overflow: hidden;
}

.carousel-images{
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carousel-images img{
    border-radius: 5%;
    width: 800px;
    height: 500px;
    min-width: 100%;
    display: block;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.carousel-images img.active{
    display: block;
    opacity: 1;
}

.carousel-controls{
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
}

.carousel-controls button{
    background-color:rgba(128, 128, 128, 0.288);
    border: none;
    color: rgb(0, 0, 0);
    font-size:1.5rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
}
</style>