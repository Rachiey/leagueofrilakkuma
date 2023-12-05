<template>
  <div class="bodyPage">
    <div class="customsPage">

      <div class="championBox" v-if="championInfo.name">
        <div class="championDetails">
          <div class="frameOverlay" v-if="championInfo.iconUrl"></div>
          <img
            v-if="championInfo.iconUrl"
            :src="championInfo.iconUrl"
            :alt="`Icon for ${championInfo.name}`"
          />
          <div class ="champ__image__overlay">
            <p  class="image__description">
              {{ championInfo.name }}
            </p>
          </div>
      
        </div>
      </div>
<!--    
      <button  @click="fetchRandomChampion" class="randomChampButton">Randomise Champion</button> -->
      <button v-if="showChampionButton" @click="fetchRandomChampion" class="randomChampButton">Randomise Champion</button>

              <!-- Summoner Spells -->
      <!-- <div class="summonerSpellsBox hidden"> -->
        <div v-if="showSummonerSpellsBox" class="summonerSpellsBox">
        <div class="summonerSpells" v-if="summonerSpells.length">
          <div v-for="(spell, index) in summonerSpells" :key="index" class="spellItem">
            <div class="spellDetails">
              <img v-if="spell.imageUrl" :src="spell.imageUrl" :alt="spell.name" :title="spell.name" />
              <div class="image__overlay">
                <p class="image__description">{{ spell.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <button @click="fetchRandomSummonerSpells" class="randomSpellButton">Randomise Summoner Spells</button>
      <!-- <button v-if="showSpellButton" @click="fetchRandomSummonerSpells" class="randomSpellButton">Randomise Summoner Spells</button>
 -->

 <div v-if="showChampionBuildBox" class="championBuildBox">
 

    <div class="championBuild" v-if="championBuild.length">
      <div class="buildGrid">
        <div v-for="(item, index) in championBuild.slice(0, 9)" :key="index" class="buildItem">
          <div class="buildDetails">
            <img v-if="item.image" :src="item.image" :alt="item.name" :title="item.name" />
            <div :class="{ 'image__overlay': showBuildOverlay }">
              <p class="image__description">{{ item.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="showChampionBuildBox">
  <div>
    <label class="switch">
      <input type="checkbox" v-model="showBuildOverlay" @click="toggleShow">
      <span class="slider round"></span>
    </label>
  </div>
</div>


        <button @click="fetchRandomChampionBuild" class="randomBuildButton">Randomise Champion Build</button>
        <!-- <button v-if="showBuildButton" @click="fetchRandomChampionBuild" class="randomBuildButton">Randomise Champion Build</button> -->
      
        <button class="refreshButton" @click="refreshPage">
   Refresh Page <font-awesome-icon :icon="['fas', 'arrows-rotate']" />
  </button>

    </div>
  </div>
</template>
  
  <style>

.image__description {
  color: white;
  font-size: 10px;
}

  .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color:  rgb(243, 201, 33);
}

input:focus + .slider {
  box-shadow: 0 0 1px rgb(243, 201, 33);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

    .championBuildBox {
    /* Add styles for the container of the 3x3 grid */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #132221;
    padding: 10px;
    border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
    border-image-slice: 1;
    border-width: 6px;
    outline: 2px solid linear-gradient(to bottom, #1d4144, #162523);
    outline-offset: -8px;
    margin: 10px;

  }

  .buildGrid {
    /* Define grid layout styles */
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columns with equal width */
    gap: 10px; /* Gap between items */
    justify-content: center; /* Center items horizontally */
    justify-items:center;
    font-family: 'BeaufortforLOLnormal';
    color: black;
  }

  /* Add any other necessary styling for buildItem, img, and p elements */
  .buildItem {
    /* Additional styles for each item in the grid */
    text-align: center;
    position: relative; 
  }

  /* Define styles for img and p elements within .buildItem if needed */
  .buildItem img {
    /* Style for images */
    max-width: 200px; /* Adjust size as needed */
    height: auto;
  }


  .buildItem p {
    /* Style for text */
    margin: 5px 0;
  }

  .buildDetails {
  position: relative; /* Ensure relative positioning */
}

  .championBox {
  font-family: 'BeaufortforLOLnormal';
  color:black;
  align-items: center;
  z-index: 0;
  margin: 50px;
  position: relative;
  
}


.championBox img {
  height: auto; /* Maintain aspect ratio */
  position: relative; 
  margin-top:15px;
}

.championDetails {
  position: relative; /* Set the position to relative */
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 0; /* Set z-index if needed */
}

.frameOverlay {
  margin-top: 15px;
  position: absolute;
  width: 200px; /* Adjust the width as needed */
  height: 210px; /* Adjust the height as needed */
  background-image: url('../assets/images/frame.png'); /* Replace 'path/to/frame.png' with your image path */
  background-size:contain;
  background-position: center;
  z-index: 1; /* Ensure it's above the champion icon */
  top: 50%; /* Adjust top and left to center the overlay */
  left: 50%; /* Adjust top and left to center the overlay */
  transform: translate(-50%, -50%); /* Center the overlay */
}
.champ__image__overlay {
  position: absolute; /* Set the position to absolute */
  top: 0;
  left: 0;
  width: 98%; /* Cover the entire parent */
  height: 92%; /* Cover the entire parent */
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  font-family: 'BeaufortforLOLnormal';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s;
  z-index:1;
  margin-top:15px;
  
}

.champ__image__overlay > * {
  transform: translateY(20px);
  transition: transform 0.25s;
}

.champ__image__overlay:hover {
  opacity: 1;
}

.champ__image__overlay:hover > * {
  transform: translateY(0);
}


.image__overlay {
  position: absolute; /* Set the position to absolute */
  top: 0;
  left: 0;
  width: 100%; /* Cover the entire parent */
  height: 100%; /* Cover the entire parent */
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  font-family: 'BeaufortforLOLnormal';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s;
  z-index:1;
  
}

.image__overlay > * {
  transform: translateY(20px);
  transition: transform 0.25s;
}

.image__overlay:hover {
  opacity: 1;
}

.image__overlay:hover > * {
  transform: translateY(0);
}

.summonerSpellsBox{
  background-color: #132221;
    padding: 10px;
    border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
    border-image-slice: 1;
    border-width: 6px;
    outline: 2px solid linear-gradient(to bottom, #1d4144, #162523);
    outline-offset: -8px;
    margin: 10px;

}

.summonerSpells {
  display:flex;
  font-family: 'BeaufortforLOLnormal';
  color: black;
  
}
.spellItem {
  display:flex;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.spellDetails {
  position: relative; /* Ensure relative positioning */
}

  @media (min-width: 670px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
    .bodyPage {
      display: flex;
  justify-content: center;
  align-items: center;
    }
    .customsPage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:  rgba(221, 221, 221, 0.3) ;
    height: 100vh;
    width: 600px;
  }

.refreshButton {
  position: relative;
  z-index: 1;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 5px 15px; 
  margin: 10px;
  margin-bottom: 20px;
  width: 180px;
  background: #1e2328;
  color: #cdbe91;
  box-shadow: inset 0 0 2px #000000;
  border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
  border-image-slice: 1;
  border-width: 2px;
  font-family: 'BeaufortforLOLnormal';

}

.refreshButton:hover {
  text-shadow: 0 0 5px #ffffff80;
  box-shadow: 0 0 8px 0 #ffffff50;
  background: linear-gradient(to bottom, #1e2328, #433d2b);
  cursor: pointer;
  transition: 0.1s;
}

.refreshButton:active {
  text-shadow: none;
  box-shadow: none;
}
  

.randomChampButton {
  position: relative;
  z-index: 1;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 5px 15px; 
  margin: 10px;
  width: 350px;
  background: #1e2328;
  color: #cdbe91;
  box-shadow: inset 0 0 2px #000000;
  border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
  border-image-slice: 1;
  border-width: 2px;
  font-family: 'BeaufortforLOLnormal';
}

.randomChampButton:hover {
text-shadow: 0 0 5px #ffffff80;
box-shadow: 0 0 8px 0 #ffffff50;
background: linear-gradient(to bottom, #1e2328, #433d2b);
cursor: pointer;
transition: 0.1s;
}

.randomChampButton:active {
text-shadow: none;
box-shadow: none;
}
  
  }
  
.randomSpellButton {
position: relative;
z-index: 1;
font-size: 20px;
font-weight: bold;
letter-spacing: 1px;
padding: 5px 15px; 
margin: 10px;
width: 350px;
background: #1e2328;
color: #cdbe91;
box-shadow: inset 0 0 2px #000000;
border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
border-image-slice: 1;
border-width: 2px;
font-family: 'BeaufortforLOLnormal';
}

.randomSpellButton:hover {
text-shadow: 0 0 5px #ffffff80;
box-shadow: 0 0 8px 0 #ffffff50;
background: linear-gradient(to bottom, #1e2328, #433d2b);
cursor: pointer;
transition: 0.1s;
}

.randomSpellButton:active {
text-shadow: none;
box-shadow: none;
}


  .randomBuildButton {
  position: relative;
  z-index: 1;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 5px 15px; 
  margin: 10px;
  width: 350px;
  background: #1e2328;
  color: #cdbe91;
  box-shadow: inset 0 0 2px #000000;
  border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
  border-image-slice: 1;
  border-width: 2px;
  font-family: 'BeaufortforLOLnormal';
  }


.randomBuildButton:hover {
text-shadow: 0 0 5px #ffffff80;
box-shadow: 0 0 8px 0 #ffffff50;
background: linear-gradient(to bottom, #1e2328, #433d2b);
cursor: pointer;
transition: 0.1s;
}

.randomBuildButton:active {
text-shadow: none;
box-shadow: none;
}


@media (max-width: 769px) {
  .bodyPage {
    display: flex;
    justify-content: center;
    align-items: center;
  }

.customsPage {
  /* Adjust styles for smaller screens */
  width: 90%; /* Adjust the width to fit smaller screens */
  padding: 20px; /* Add padding to give space around the button */
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  height: 800px;
  text-align: center; /* Center-align the button */
  background-color:  rgba(221, 221, 221, 0.3) ;
}

.randomChampButton {
  position: relative;
  z-index: 1;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 5px 15px; 
  margin: 10px;
  width: 300px;
  background: #1e2328;
  color: #cdbe91;
  box-shadow: inset 0 0 2px #000000;
  border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
  border-image-slice: 1;
  border-width: 2px;
  font-family: 'BeaufortforLOLnormal';
  }

.randomChampButton:hover {
  text-shadow: 0 0 5px #ffffff80;
  box-shadow: 0 0 8px 0 #ffffff50;
  background: linear-gradient(to bottom, #1e2328, #433d2b);
  cursor: pointer;
  transition: 0.1s;
  }

.randomChampButton:active {
  text-shadow: none;
  box-shadow: none;
}
  

.randomSpellButton {
  position: relative;
  z-index: 1;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 5px 15px; 
  margin: 8px;
  width: 300px;
  background: #1e2328;
  color: #cdbe91;
  box-shadow: inset 0 0 2px #000000;
  border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
  border-image-slice: 1;
  border-width: 2px;
  font-family: 'BeaufortforLOLnormal';
}

.randomSpellButton:hover {
text-shadow: 0 0 5px #ffffff80;
box-shadow: 0 0 8px 0 #ffffff50;
background: linear-gradient(to bottom, #1e2328, #433d2b);
cursor: pointer;
transition: 0.1s;
}

.randomSpellButton:active {
text-shadow: none;
box-shadow: none;
}

.randomBuildButton {
position: relative;
z-index: 1;
font-size: 15px;
font-weight: bold;
letter-spacing: 1px;
padding: 5px 15px; 
margin: 8px;
width: 300px;
background: #1e2328;
color: #cdbe91;
box-shadow: inset 0 0 2px #000000;
border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
border-image-slice: 1;
border-width: 2px;
font-family: 'BeaufortforLOLnormal';
}

.randomBuildButton:hover {
text-shadow: 0 0 5px #ffffff80;
box-shadow: 0 0 8px 0 #ffffff50;
background: linear-gradient(to bottom, #1e2328, #433d2b);
cursor: pointer;
transition: 0.1s;
}

.randomBuildButton:active {
text-shadow: none;
box-shadow: none;
}

.refreshButton {
  position: relative;
  z-index: 1;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 5px 15px; 
  margin: 8px;
  width: 180px;
  background: #1e2328;
  color: #cdbe91;
  box-shadow: inset 0 0 2px #000000;
  border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
  border-image-slice: 1;
  border-width: 2px;
  font-family: 'BeaufortforLOLnormal';
}

.refreshButton:hover {
  text-shadow: 0 0 5px #ffffff80;
  box-shadow: 0 0 8px 0 #ffffff50;
  background: linear-gradient(to bottom, #1e2328, #433d2b);
  cursor: pointer;
  transition: 0.1s;
}

.refreshButton:active {
  text-shadow: none;
  box-shadow: none;
}
  
  
}

  </style>
  

<script lang="ts">

import { ref } from 'vue';


  import { onMounted, reactive } from 'vue';


  interface ChampionInfo {
    name: string | null;
    iconUrl: string | null;
  }
  
  interface SummonerSpell {
    name: string;
    imageUrl: string;
  }
  
  interface ChampionItem {
    name: string;
    image: string;
  }
  
  export default {
    setup() {
      
      const championInfo = reactive<ChampionInfo>({ name: null, iconUrl: null });
      const summonerSpells = reactive<SummonerSpell[]>([]);
      const championBuild = reactive<ChampionItem[]>([]);
      const isFetchingChampion = ref(false);
      const showChampionButton = ref(true);
      // const showSpellButton = ref(true);
      // const showBuildButton = ref(true);
      
      const showBuildOverlay =ref(true);
      const showSummonerSpellsBox = ref(false);
      const showChampionBuildBox =ref(false)

      const refreshPage = () => {
      window.location.reload();


    };
      
    const toggleShow = () => {
      showBuildOverlay.value = !showBuildOverlay.value;
    };

      const fetchRandomChampion = async () => {
        showChampionButton.value = false;
      if (isFetchingChampion.value) return; // If a fetch is already in progress, don't initiate another

    isFetchingChampion.value = true; // Set the fetching flag to true

    try {
      const championResponse = await fetch('https://rilakkuma.onrender.com/random-champion-details');
      const championData = await championResponse.json();

      championInfo.name = championData.name;
      championInfo.iconUrl = championData.imageUrl;
    } catch (error) {
      console.error('Error fetching random champion:', error);
    } finally {
        isFetchingChampion.value = false; 
    }
  };

  const fetchRandomSummonerSpells = async () => {
    // showSpellButton.value = false;
   
    try {
      const summonerSpellsResponse = await fetch('https://rilakkuma.onrender.com/random-summoner-spells');
      summonerSpells.splice(0, summonerSpells.length); // Clear the array
      summonerSpells.push(...(await summonerSpellsResponse.json()));
      showSummonerSpellsBox.value = true;
    } catch (error) {
      console.error('Error fetching random summoner spells:', error);
    }
  };

  

  const fetchRandomChampionBuild = async () => {
    // showBuildButton.value = false;
    try {
      const championBuildResponse = await fetch('https://rilakkuma.onrender.com/random-build');
      const buildData = await championBuildResponse.json();

      championBuild.splice(0, championBuild.length); // Clear the array
      

      // Ensure buildData is an array before spreading it
      if (Array.isArray(buildData)) {
        championBuild.push(...buildData);
        showChampionBuildBox.value = true;
   
      } else {
        console.error('Invalid champion build data:', buildData);
      }
    } catch (error) {
      console.error('Error fetching random champion build:', error);
    }
  };

  
      onMounted(() => {
   
        // Bind the click events of buttons to the respective functions
        const championButton = document.querySelector('.randomButton:nth-child(1)');
        if (championButton) {
          championButton.addEventListener('click', fetchRandomChampion);
        }
  
        const summonerSpellsButton = document.querySelector('.randomButton:nth-child(2)');
        if (summonerSpellsButton) {
          summonerSpellsButton.addEventListener('click', fetchRandomSummonerSpells);
        }
  
        const championBuildButton = document.querySelector('.randomButton:nth-child(3)');
        if (championBuildButton) {
          championBuildButton.addEventListener('click', fetchRandomChampionBuild);
        }

        
      });
  
      return {
        championInfo,
        isFetchingChampion,
        summonerSpells,
        championBuild,
        fetchRandomChampion,
        fetchRandomSummonerSpells,
        fetchRandomChampionBuild,
        showChampionButton,
        // showSpellButton,
        // showBuildButton,
        refreshPage,
        showSummonerSpellsBox,
        showChampionBuildBox,
        toggleShow,
        showBuildOverlay
      };
    },
  };
  </script>