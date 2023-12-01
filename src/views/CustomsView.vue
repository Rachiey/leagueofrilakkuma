<template>
  <div class="bodyPage">
    <div class="customsPage">

      <button class="randomButton" @click="fetchRandomChampion" title="Click to randomize champion">Randomise Champion</button>
      <button class="randomButton" @click="fetchRandomSummonerSpells" title="Click to randomize summoner spells">Randomise Summoner Spells</button>
      <button class="randomButton" @click="fetchRandomChampionBuild" title="Click to randomize champion build">Randomise Champion Build</button>
  



      <div class="championBox" v-if="championInfo.name">
  <div class="championDetails">
    <p ref="championName">
      {{ championInfo.name }}
    </p>
    <img
      v-if="championInfo.iconUrl"
      :src="championInfo.iconUrl"
      :alt="`Icon for ${championInfo.name}`"
    />
  </div>
</div>

        <!-- Summoner Spells -->
      <div class ="summonerSpellsBox">
        <div class="summonerSpells" v-if="summonerSpells.length">
          <div v-for="(spell, index) in summonerSpells" :key="index" class="spellItem">
            <img v-if="spell.imageUrl" :src="spell.imageUrl" :alt="spell.name" :title="spell.name" />
            <p :title="spell.name">{{ spell.name }}</p>
          </div>
        </div>
      </div>

  <!-- Champion Build Box in 3x3 Grid -->
  <div class="championBuildBox">
      <div class="championBuild" v-if="championBuild.length">
        <div class="buildGrid">
          <div
            v-for="(item, index) in championBuild.slice(0, 9)"
            :key="index"
            class="buildItem"
          >
            <img v-if="item.image" :src="item.image" :alt="item.name" :title="item.name" />
            <p :title="item.name">{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
  
  <style>
    .championBuildBox {
    /* Add styles for the container of the 3x3 grid */
    display: flex;
    justify-content: center;
    align-items: center;

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
  }

  /* Define styles for img and p elements within .buildItem if needed */
  .buildItem img {
    /* Style for images */
    max-width: 150px; /* Adjust size as needed */
    height: auto;
  }

  .buildItem p {
    /* Style for text */
    margin: 5px 0;
  }

  .championBox {
  border: 2px solid #1e2328;
  border-radius: 5px;
  font-family: 'BeaufortforLOLnormal';
  color:black;
  align-items: center;
}

.championBox img {
  width: 100px; /* Adjust the size of the champion icon */
  height: auto; /* Maintain aspect ratio */
}

.championDetails {
  display:flex;
  align-items: center;
  flex-direction: column;

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
}

  @media (min-width: 770px) {
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
    height: 700px;
    width: 600px;
  }

.randomButton {
position: relative;
z-index: 1;
font-size: 23px;
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

.randomButton:hover {
text-shadow: 0 0 5px #ffffff80;
box-shadow: 0 0 8px 0 #ffffff50;
background: linear-gradient(to bottom, #1e2328, #433d2b);
cursor: pointer;
transition: 0.1s;
}

.randomButton:active {
text-shadow: none;
box-shadow: none;
}
  }

  @media (max-width: 769px) {
    .bodyPage {
      display: flex;
  justify-content: center;
  align-items: center;
    }

  .customsPage {
    /* Adjust styles for smaller screens */
    height: auto;
    width: 90%; /* Adjust the width to fit smaller screens */
    padding: 20px; /* Add padding to give space around the button */
    display: flex;
    flex-direction:column;
  justify-content: center;
  align-items: center;
  height: 700px;
    text-align: center; /* Center-align the button */
    background-color:  rgba(221, 221, 221, 0.3) ;
  }

  .randomButton {
position: relative;
z-index: 1;
font-size: 23px;
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

.randomButton:hover {
text-shadow: 0 0 5px #ffffff80;
box-shadow: 0 0 8px 0 #ffffff50;
background: linear-gradient(to bottom, #1e2328, #433d2b);
cursor: pointer;
transition: 0.1s;
}

.randomButton:active {
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
  
      const fetchRandomChampion = async () => {
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
    try {
      const summonerSpellsResponse = await fetch('https://rilakkuma.onrender.com/random-summoner-spells');
      summonerSpells.splice(0, summonerSpells.length); // Clear the array
      summonerSpells.push(...(await summonerSpellsResponse.json()));
    } catch (error) {
      console.error('Error fetching random summoner spells:', error);
    }
  };

  

  const fetchRandomChampionBuild = async () => {
    try {
      const championBuildResponse = await fetch('https://rilakkuma.onrender.com/random-build');
      const buildData = await championBuildResponse.json();

      championBuild.splice(0, championBuild.length); // Clear the array

      // Ensure buildData is an array before spreading it
      if (Array.isArray(buildData)) {
        championBuild.push(...buildData);
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
      };
    },
  };
  </script>