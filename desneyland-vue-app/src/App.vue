<template>
  <div>
    <NavBar />
    <div style="margin-top:80px;">
      <h2>WELCOME TO DESNEYLAND !</h2>
      <p>DISCOVER OUR ATTRACTIONS</p>
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
</style>
