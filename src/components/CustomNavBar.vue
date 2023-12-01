<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
// import { Slide } from 'vue3-burger-menu';

// import CustomNavbar from './CustomNavBar.vue'; 

const isMenuOpen = ref(false);

const toggleMenu = () => {
    setTimeout(() => {
    isMenuOpen.value = !isMenuOpen.value;
  }, 150); 
};

// Expose the variables and functions
defineExpose({
  isMenuOpen,
  toggleMenu,
});

const isDesktop = ref(window.innerWidth > 768); // Adjust breakpoint as needed

const handleResize = () => {
  let timeout: ReturnType<typeof setTimeout> | undefined;

  if (timeout) {
    clearTimeout(timeout); // Clear existing timeout if it exists
  }

  timeout = setTimeout(() => {
    isDesktop.value = window.innerWidth > 768;
  }, 200); // Example debounce time: 200ms
};
// Listen for window resize
onMounted(() => {
  window.addEventListener('resize', handleResize);
});

// Cleanup resize listener on component unmount
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

</script>

<template>
    <nav class="custom-navbar">
      <img v-if="isDesktop" src="../assets/images/logo.png" alt="Desktop Logo" class="rilakkuma"/>
      <img v-else src="../assets/images/logo1.png" alt="Mobile Logo" class="rilakkuma2" />
  
      <div v-if="isDesktop" class="navbar-links">
        <router-link to="/" class="navbar-link">Home</router-link>
      <router-link to="/customs" class="navbar-link">Customs</router-link>
      <router-link to="/arams" class="navbar-link">Arams</router-link>
      </div>
      
      <div class = 'burger-background' v-if="!isDesktop">
      <div class="burger" @click="toggleMenu" v-if="!isDesktop">
        <div :class="{ 'open': isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <transition name="slide">
        <div class="mobile-menu" v-show="isMenuOpen && !isDesktop">
        <div class="close-icon" @click="toggleMenu"><div class=xIcon>x</div></div> <!-- Add the close icon -->
      <!-- <div class="mobile-navbar-links" v-show="isMenuOpen && !isDesktop"> -->
        <div class="mobile-navbar-links">
        <ul>
       <router-link to="/" class="navbar-link">Home</router-link>
      <router-link to="/customs" class="navbar-link">Customs</router-link>
      <router-link to="/arams" class="navbar-link">Arams</router-link>
        </ul>
        </div>
      </div>
    </transition>
    </nav>
  </template>
  
  
  <style scoped>
.header {
  background-image: url('../assets/images/background.png');
  background-size: cover; /* Adjust the background size as needed */
  background-position: center; 
}

@font-face {
  font-family: 'BeaufortforLOL'; /* Name your font */
  src: url('../assets/fonts/beaufort-for-lol/BeaufortforLOL-Heavy.ttf') format('truetype'); /* Path to your font file */
  /* Add other font properties like font-weight, font-style, etc., if needed */
}
/* Add styles for sliding menu */

.xIcon {
    font-size: 20px;
    font-weight: 700;
    margin-bottom:2px;
    font-family: 'BeaufortforLOL';
}
.close-icon {
  position: absolute;
  right: 10px;
  cursor: pointer;
  font-size: 1.5em;
  height: 40px;
  width: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(35, 34, 34);
    height: 48px;
    width: 48px;
    border-radius: 18px;
    padding: 10px;
    top: 15px;
}
.slide-enter-active, .slide-leave-active {
  transition: transform ;
}
.slide-enter{
    transform: translateX(-200px);
    transition: transform 0.8s;
}

.slide-leave-to {
  transform: translateX(200px);
  transition: transform 0.8s;
}
  .custom-navbar {
  background-color: #111;
  display: flex;
  justify-content: space-between; /* Align items horizontally */
  align-items: center; /* Vertically center items */
  padding: 10px;

}
  /* Your custom navbar styles */
  .rilakkuma{
    padding: 15px;
    height: 80px;

    
  }
  .rilakkuma2{
    padding: 15px;
    height: 80px;

  }
  .navbar-links{
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    font-weight: bold;
    font-family: 'BeaufortforLOL';
    color: white;
    font-size: 20px;
  }
  .navbar-link:hover{
    color: #D0A85C;
  }
  
  .mobile-navbar-links {
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align items to the start of the container */
  align-items: flex-start; /* Align items to the start of the container */
  /* Other styles */
}

.mobile-navbar-links ul {
    font-family: 'BeaufortforLOL';
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column; 
  font-size: 20px;
  line-height: 50px;/* Display links as a column */
}
  .custom-navbar {
    /* Add your navbar styles */
    background-color: #111;
    /* Other styles */
  }
  .slide-icon {
  display: flex;
  align-items: center;
}

.burger {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  

}

.burger div {
  width: 18px;
  height: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  color:white;
}

.burger div span {
  width: 100%;
  height: 2.3px;
  background-color: #ffffff;
  
}


/* Styling for the menu */
.menu {
  display: none;
  position: absolute;
  top: 40px;
  right: 0;
  background-color: #fff;
  border: 1px solid #333;
  padding: 10px;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  margin-bottom: 10px;
}

.menu a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
.burger-background {
    display: flex;
  justify-content: center;
  align-items: center;
    background-color: rgb(35, 34, 34);
    height: 48px;
    width: 48px;
    border-radius: 18px;
    padding: 10px;

}
.mobile-menu {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #111; /* Adjust background color */
  width: 200px; /* Adjust width */
  height: 100vh; /* Adjust height */
  padding: 20px;
  z-index: 999; /* Ensure it appears on top */
  color: white;
  
}
</style>

