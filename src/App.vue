<script setup lang="ts">

import NavBar from './components/CustomNavBar.vue';
// import HomeView from './views/HomeView.vue';
</script>

<template>
  <header>
     <NavBar />
    </header>
    <router-view />
<!-- <HomeView /> -->

</template>

<style scoped>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';



.header {
  position:fixed; /* fixing the position takes it out of html flow - knows
                   nothing about where to locate itself except by browser
                   coordinates */
  left:0;           /* top left corner should start at leftmost spot */
  top:0;            /* top left corner should start at topmost spot */
  width:100vw;      /* take up the full browser width */
  z-index:200;  /* high z index so other content scrolls underneath */
  height:100px;     /* define height for content */

}






</style>
