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
