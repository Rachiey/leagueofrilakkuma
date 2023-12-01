<template>
  
  <div class="centered-button">
    <router-link to="/customs">
    <button class="abyssButton">Enter the abyss...</button>
    </router-link>
</div>
</template>

<style scoped>

@font-face {
  font-family: 'BeaufortforLOLnormal'; /* Name your font */
  src: url('../assets/fonts/beaufort-for-lol/BeaufortforLOL-Bold.ttf') format('truetype'); /* Path to your font file */
  /* Add other font properties like font-weight, font-style, etc., if needed */
}
.centered-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Make the container cover the full viewport height */
}


.abyssButton {

  font-size: 25px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 5px 15px; 
  background: #1e2328;
  color: #cdbe91;
  box-shadow: inset 0 0 2px #000000;
  border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
  border-image-slice: 1;
  border-width: 2px;
  font-family: 'BeaufortforLOLnormal';
}

.abyssButton:hover {
  text-shadow: 0 0 5px #ffffff80;
  box-shadow: 0 0 8px 0 #ffffff50;
  background: linear-gradient(to bottom, #1e2328, #433d2b);
  cursor: pointer;
  transition: 0.1s;
}

.abyssButton:active {
  text-shadow: none;
  box-shadow: none;
  }
</style>