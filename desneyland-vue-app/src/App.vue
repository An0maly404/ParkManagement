<template>
  <nav class="navbar">
    <div class="navbar-left">
      <h1 class="park-name">DESNEYLAND</h1>
    </div>
    <div class="navbar-links">
      <router-link to="/attractionslist">Attractions</router-link>
      <router-link to="/hotelslist">Hotels</router-link><br>
    </div>
    <div class="navbar-right">
      <button class="book-now">BOOK NOW !</button>
    </div>
  </nav>
  
  <div class="routerview">
    <router-view></router-view>
  </div>
</template>

<script>
export default{
  name:'App',
};

</script>

<style scoped>

.routerview{
  margin-top: 200px; /*HELP TO SEE THE ROUTER NAV*/
}

.navbar { /*DEFINE THE STYLE OF THE NAVBAR*/
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    font-family: "Arial", sans-serif;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0.1rem;
    background-color: #FAFAFA;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    overflow: hidden;
  }
.navbar-left .park-name { /*DEFINE THE STYLE FOR THE PARK NAME*/
    font-family: "Dancing Script", cursive; 
    font-size: 2.5rem;
    color: #D72638;
    text-shadow: 0 0 5px #FFD700, 0 0 10px #FFD700, 0 0 20px #FFD700;
    margin: 1rem;
    animation: glow 1.5s ease-in-out infinite alternate;
}

@keyframes glow { /*ANIMATION OF THE NAME OF THE PARK*/
  from {
    text-shadow: 0 0 5px #FFD700, 0 0 10px #FFD700, 0 0 20px #FFD700;
  }
  to {
    text-shadow: 0 0 10px #FF4500, 0 0 20px #FF4500, 0 0 30px #FF4500;
  }
}

.navbar-links{ /*STYLE POUR LES LIENS DANS LA BARRE DE NAVIGATION*/
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8rem;
  }

.navbar-links a { /*STYLE FOR THE NAVIGATION LINKS IN THE NAVBAR*/
    margin: 0 1rem;
    text-decoration: none;
    font-size: 1rem;
    color: #333;
    transition: color 0.3s;
    line-height: 1;
  }

.navbar-links a:hover { /*STYLE WHEN YOU HOVER ON THE LINKS IN THE NAVBAR*/
    color: #dd5454;
  }

.navbar-right .book-now {
    background-color: #D72638;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

.navbar-right .book-now:hover {
    background-color: #d4b920;
  }

  
a { /*GENERAL STYLE FOR THE NAV LINKS */
    display: inline-block;
    border-radius: 10%;
    color: rgb(211, 87, 87);
    padding: 5px;
    margin: 10px;
  }
a:hover, /*STYLE WHEN YOU HOVER THE LINKS AND WHEN YOU'RE ON A ROUTER PAGE */
a.router-link-active {
    background-color: rgba(192, 192, 192, 0.24);
  }

div {
    border: dashed black 1px;
    padding: 20px;
    margin: 10px;
    display: inline-block;
  }
</style>   