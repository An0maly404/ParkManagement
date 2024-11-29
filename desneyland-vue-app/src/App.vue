<template>
  <div>
    <NavBar />
    
    <div style="margin-top:80px;">
      <h2>WELCOME TO DESNEYLAND !</h2>
      <p>DISCOVER OUR ATTRACTIONS</p>
    </div>
  </div>
  <div class="attractions">
    <div class="attractions-slider">
      <img :src="require('@/assets/csm_parc-asterix-attraction_58dfd74118.jpg')" alt="Parc Astérix" />
      <img :src="require('@/assets/8896-les-10-parcs-d-attraction.jpg')" alt="Attraction 2" />
      <img :src="require('@/assets/images.jpg')" alt="Attraction 3" />
      <img :src="require('@/assets/parc-bagatelle.jpg')" alt="Parc Bagatelle" />
    </div>
    <div class="attractions-slider">
      <img :src="require('@/assets/csm_parc-asterix-attraction_58dfd74118.jpg')" alt="Parc Astérix" />
      <img :src="require('@/assets/8896-les-10-parcs-d-attraction.jpg')" alt="Attraction 2" />
      <img :src="require('@/assets/images.jpg')" alt="Attraction 3" />
      <img :src="require('@/assets/parc-bagatelle.jpg')" alt="Parc Bagatelle" />
    </div>
  </div>

</template>

<script>
import NavBar from './components/NavBar.vue';

export default{
  components:{
    NavBar,
  },
};


</script>

<style>
body{
  background-image: url('https://img.freepik.com/vecteurs-libre/fond-hiver-non-localise-flocons-neige_1393-271.jpg'); /* Remplace par l'URL de ton image */
  background-size: cover; /* Ajuste pour remplir tout l'écran */
  background-position: center; /* Centre l'image */
  background-attachment: fixed; /* Laisse l'image fixe même en défilant */
  color: #333; /* Garde un bon contraste pour le texte */
  font-family: "Arial", sans-serif;
}
header{
  height: auto;
  background-color: blue;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/*ADDING THE SLIDER ATTRACTIONS*/
.attractions{
  overflow: hidden;
  padding: 0 0;
  white-space: nowrap;
}

.attractions:hover .attractions-slider{
  animation-play-state: paused;
}


.attractions-slider{
  display: inline-block;
  animation: 30s slide infinite linear;
  overflow: hidden;
  left: 0;
  right: 0;

}
.attractions-slider img{
  border-radius: 15px;
  height: 20rem;
  margin: 0 3rem;
  transition: transform 0.5s ease-in-out, border-radius 0.3s ease-in-out;
}

.attractions-slider img:hover{
  transform: scale(1.1);
  border-radius: 15px;
}

@keyframes slide{
  from{
    transform: translateX(0);
  }
  to{
    transform: translateX(-100%);
  }
}

</style>
