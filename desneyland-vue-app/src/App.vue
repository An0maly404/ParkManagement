<template>
  <nav class="navbar">
    <div class="navbar-left">
      <router-link to="/">
        <img class="park-logo" :src="require('@/assets/LOGO.png')" alt="Defunctland Logo">
      </router-link>
    </div>
    <div class="navbar-links" v-if="!isMobileMenu">
      <router-link to="/attractionslist">Attractions</router-link>
      <router-link to="/hotelslist">Hotels</router-link>
      <router-link to="/restaurantslist">Restaurants</router-link>
      <router-link to="/ticketinfos">Tickets</router-link>
      <router-link to="/aboutpage">About</router-link>
    </div>
    <div class="navbar-right" v-if="!isMobileMenu">
      <router-link class="book-now" to="/loginpage">BOOK NOW !</router-link>
    </div>
    <button class="mobile-menu-button" @click="toggleMenu" v-show="isMobileMenu" ref="menuButton">
      ☰
    </button>
    <div class="mobile-menu" v-show="showMobileMenu" ref="mobileMenu">
      <router-link to="/aboutpage">About</router-link>
      <router-link to="/attractionslist">Attractions</router-link>
      <router-link to="/hotelslist">Hotels</router-link>
      <router-link to="/restaurantslist">Restaurants</router-link>
      <router-link to="/ticketinfos">Tickets</router-link>
    </div>
  </nav>
  <div class="routerview">
    <router-view></router-view>
  </div>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>DEFUNCTLAND</h3>
        <p>123 Imagination Lane, Nostalgia Hills, NY 12804, USA</p>
        <p>Phone: +1 (800) 555-1234</p>
        <p>Email: <a href="mailto:contact@defunctland.com">contact@defunctland.com</a></p>
      </div>
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/aboutpage">About Us</router-link></li>
          <li><router-link to="/attractionslist">Attractions</router-link></li>
          <li><router-link to="/hotelslist">Hotels</router-link></li>
          <li><router-link to="/restaurantslist">Restaurants</router-link></li>
          <li><router-link to="/ticketinfos">Tickets & Pricing</router-link></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Follow Us</h3>
        <div class="social-links">
          <a href="https://facebook.com" target="_blank">Facebook</a>
          <a href="https://twitter.com" target="_blank">Twitter</a>
          <a href="https://instagram.com" target="_blank">Instagram</a>
          <a href="https://tiktok.com" target="_blank">TikTok</a>
        </div>
      </div>
      <div class="footer-section">
        <h3>Stay Updated</h3>
        <p>Subscribe to our newsletter</p>
        <form @submit.prevent="subscribeNewsletter">
          <input type="email" v-model="newsletterEmail" placeholder="Enter your email" required/>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2024 DEFUNCTLAND. All Rights Reserved.</p>
      <p>
        <a href="">Legal</a>
        <a href="">Privacy</a>
        <a href="">Terms of Use</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default{
  data(){
    return{
      isMobileMenu:false,
      showMobileMenu:false,
      newsletterEmail:"",
    };
  },
  methods:{
    toggleMenu(){
      this.showMobileMenu=!this.showMobileMenu;
    },
    updateMenuVisibility(){
      this.isMobileMenu=window.innerWidth<=1000;
    },
    closeMenu(event){
      const menu=this.$refs.mobileMenu;
      const button=this.$refs.menuButton;
      if(menu && !menu.contains(event.target) && !button.contains(event.target)){
        this.showMobileMenu=false;
      }
    },
    /*________________FOOTER______________*/
    subscribeNewsletter(){
      alert(`Thank you for subscribing, ${this.newsletterEmail}!`);
      this.newsletterEmail="";
    },
  },
  mounted(){
    this.updateMenuVisibility();
    window.addEventListener("resize",this.updateMenuVisibility);
    document.addEventListener("click",this.closeMenu);
  },
  beforeUnmount(){
    window.removeEventListener("resize",this.updateMenuVisibility);
    document.removeEventListener("click",this.closeMenu);
  },
};

</script>

<style scoped>
.routerview{
  margin: 50px;
  margin-top: 200px; /*HELP TO SEE THE ROUTER NAV*/
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color:#dbe2ef27 ;
  border-radius: 10px;
}

.navbar { /*DEFINE THE STYLE OF THE NAVBAR*/
    height: 155px;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0.1rem;
    background-color: #DBE2EF;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    overflow: visible;
  }

.park-logo{
  height: 190px;
  width: 380px;
  margin-left: -30px;
}

.navbar-left a{
  text-decoration: none;
}

@keyframes glow { /*ANIMATION OF THE NAME OF THE PARK*/
  from {
    text-shadow: 0 0 6px #1900ff, 0 0 7px #1900ff, 0 0 6px #1900ff;
  }
  to {
    text-shadow: 0 0 7px #0059ff, 0 0 6px #0059ff, 0 0 7px #0059ff;
  }
}

.navbar-links{ /*STYLE POUR LES LIENS DANS LA BARRE DE NAVIGATION*/
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8rem;
  }

.navbar-links,.navbar-right{
  display: flex;
}

.mobile-menu-button{
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  margin-right: 2rem;
}

.mobile-menu{
  display: none;
  position:absolute;
  top: 80px;
  right: 10px;
  background-color: #DBE2EF;
  width: 40%;
  box-shadow:0 4px 6px black ;
  z-index: 1000;
  flex-direction: column;
}

.mobile-menu[v-show="true"]{
  display: block;
}

.mobile-menu a{
  display: block;
  padding: 1rem;
  text-align: center;
  color: #333;
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.mobile-menu a:hover{
  background-color: #eaf8fc;
}

@media(max-width: 1000px){
  .navbar-links,.navbar-right{
    display: none;
  }

  .mobile-menu-button{
    display: block;
  }

  .mobile-menu{
    display: flex;
  }


}
.navbar-links a,.mobile-menu a { /*STYLE FOR THE NAVIGATION LINKS IN THE NAVBAR*/
    margin: 0 1rem;
    text-decoration: none;
    font-size: 1.5rem;
    color: #3F72AF;
    transition: color 0.3s;
    line-height: 1;
  }

.navbar-links a:hover,.mobile-menu a:hover { /*STYLE WHEN YOU HOVER ON THE LINKS IN THE NAVBAR*/
    color: #112D4E;
  }

.navbar-right .book-now {
    background-color: #112D4E;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    text-decoration: none;
  }

.navbar-right .book-now:hover {
    background-color: #3F72AF;
  }

  
a { /*GENERAL STYLE FOR THE NAV LINKS */
    display: inline-block;
    border-radius: 10%;
    color: #2646d7;
    padding: 5px;
    margin: 10px;
  }
  
.navbar-links a:hover, /*STYLE WHEN YOU HOVER THE LINKS AND WHEN YOU'RE ON A ROUTER PAGE */
.navbar-links a.router-link-active {
    background-color: rgba(192, 192, 192, 0.24);
  }

div {
    padding: 20px;
    margin: 10px;
    display: inline-block;
  }

/*__________________________________________FOOTER____________________________________*/
.footer {
  background-color: #d8f4fc;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 1rem;
}

.footer-section {
  flex: 1 1 200px;
  margin: 0.5rem;
}

.footer-section h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #3F72AF;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin: 0.5rem 0;
}

.footer-section a {
  color: #b2c9f5;
  text-decoration: none;
}

.footer-section a:hover {
  color: #3F72AF;
}

.social-links a {
  display: inline-block;
  margin-right: 1rem;
}

footer form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

footer input {
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
}

footer button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #112D4E;
  color: #ecf0f1;
  border-radius: 4px;
  cursor: pointer;
}

footer button:hover {
  background-color: #d4b920;
}

.footer-bottom {
  text-align: center;
  font-size: 0.9rem;
  border-top: 1px solid #7f8c8d;
  padding-top: 1rem;
  width: 100%;
}

.footer-bottom p {
  margin: 0.5rem 0;
}
</style>   