<template>
    <div class="map-container">
        <div class="map" ref="map" :style="mapStyle" 
        @mousedown="startPanning" 
        @mousemove="pan"
         @mouseup="stopPanning"
        @mouseleave="stopPanning">
            <img :src="mapSrc" alt="Parc Map"/>

            <div v-for="(point,index) in points" :key="index" class="map-point"
            :style="{top:`${point.y}%`, left:`${point.x}%`}"
            @click="showAttractionDetails(point)"
            ></div>
        </div>

        <div class="map-controls">
            <button @click="zoomIn">+</button>
            <button @click="zoomOut">-</button>
        </div>

        <div v-if="selectedAttraction" class="attraction-details">
            <h2>{{ selectedAttraction.name }}</h2>
            <p>{{ selectedAttraction.description }}</p>
            <button @click="closeDetails">Fermer</button>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        mapSrc:{
            type:String,
            required:true,
        },
        points:{
            type:Array,
            default:()=>[],
        },
    },
    data() {
        return {
        zoom: 1,
        offsetX: 0,
        offsetY: 0,
        isPanning: false,
        startX: 0,
        startY: 0,
        selectedAttraction: null,
        };
    },
    computed:{
        mapStyle(){
            return{
                transform: `scale(${this.zoom}) translate(${this.offsetX}px, ${this.offsetY}px)`,
                transformOrigin: 'top left',
                cursor: this.isPanning ? 'grabbing' : 'grab',
            };
        },
    },
    methods:{
        zoomIn(){
            this.zoom = Math.min(this.zoom + 0.2, 3); // Limite le zoom max
        },
        zoomOut(){
            this.zoom = Math.max(this.zoom - 0.2, 1); // Limite le zoom min
        },
        startPanning(event){
            this.isPanning=true;
            this.startX=event.clientX;
            this.startY=event.clientY;
        },
        pan(event){
            if (this.isPanning){
                this.offsetX += (event.clientX - this.startX) / this.zoom;
                this.offsetY += (event.clientY - this.startY) / this.zoom;
                this.startX = event.clientX;
                this.startY = event.clientY;
            }
        },
        stopPanning(){
            this.isPanning=false;
        },
        showAttractionDetails(point){
            this.selectedAttraction=point.details;
        },
        closeDetails(){
            this.selectedAttraction=null;
        },
    },
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');

.map-container {
  border-radius: 10px;
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  overflow: hidden;
  background-color: rgb(239, 255, 254);
}

.map {
  position: relative;
  width: 100%;
  height: 600px;
  transition: transform 0.3s ease;
  background: #f0f0f0;
  z-index: 1;
}

.map img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
}

.map-point {
  position: absolute;
  width: 20px;
  height: 20px;
  background: rgb(17, 0, 255);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.map-controls {
  position: absolute;
  margin-top: 1rem;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 2;
}

.map-controls button {
  margin: 0 0.5rem;
  background: rgba(95, 95, 95, 0.726);
  color: white;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgb(0, 0, 0);
  transition: background 0.3s ease;
}

.map-controls button:hover{
    background: rgb(174, 220, 238);
}

.attraction-details {
    font-family: "Lilita One", sans-serif;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 3;
}

.attraction-details button{
    background-color: #2646d7;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.attraction-details button:hover{
    background-color: #d4b920;
}
</style>