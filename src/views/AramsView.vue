<template>
  <div class="championContainer">
    <div>
      <div class="champTitle">Select a champion:</div>
      <!-- Searchable dropdown menu -->
      <div class="dropdown">
        <input
          v-model="searchText"
          @input="filterChampions"
          @click="toggleDropdown"
          placeholder="Search Champions"
          class="inputChamp"
        />
        <div v-show="isDropdownOpen" class="dropdown-content">
          <option
            v-for="champion in filteredChampions"
            :key="champion.id"
            :value="champion.id"
            @click="selectChampion(champion.id)"
          >
            {{ champion.name }}
          </option>
        </div>
      </div>

      <!-- Display selected champion's information -->
      <div v-if="selectedChampion" class="selectedChampion">
        <div class="championName">{{ selectedChampion.name }}</div>
        <img :src="selectedChampion.image" alt="Champion Image" v-if="selectedChampion.image" />
      </div>
    </div>
  </div>
</template>

  
  <style>
  .body {
    display:flex;
    align-content:center;
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
    .aramsPage {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color:  rgba(221, 221, 221, 0.3) ;
      height: 700px;
      width: 600px;
  }
  }
 .inputChamp{
  padding-left:10px;
  color: rgb(224, 163, 29);
 }
  .champTitle {
    font-family: "BeaufortforLOLnormal";
    color: white;
  
  }

  .dropdown {
  
  position: relative;
  display: inline-block;
  font-family: 'BeaufortforLOLnormal'
}
.championContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  background-color: rgb(8, 51, 61);
  width: 50%;
  margin: 20px auto; 

}

.dropdown-content {
  /* display: none; */
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100%;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  z-index: 1;
  color: black;
  font-family: 'BeaufortforLOLnormal'
}

.dropdown-content option {
  padding: 10px;
  cursor: pointer;
}

.dropdown-content option:hover {
  background-color: #f1f1f1;
}

.show {
  display: block;
}

.championName {
  font-family: "beaufortforLOLnormal";
  color: white;
}
 
  </style>

<script lang="ts">
export default {
  data() {
    return {
      champions: [] as { id: string; name: string; image: string }[],
      searchText: '',
      selectedChampion: null as null | { id: string; name: string; image: string },
      isDropdownOpen: false,
    };
  },
  computed: {
    filteredChampions() {
      return this.champions.filter((champion) =>
        champion.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
  },
  methods: {
    async fetchChampions() {
      try {
        const response = await fetch(
          'https://ddragon.leagueoflegends.com/cdn/13.23.1/data/en_US/champion.json'
        );
        const data = await response.json();

        // Assuming data.data contains champion information
        const championData = data.data;

        this.champions = Object.values(championData).map((champion: any) => ({
          id: champion.key,
          name: champion.name,
          image: `https://ddragon.leagueoflegends.com/cdn/13.23.1/img/champion/${champion.image.full}`,
        }));
      } catch (error) {
        console.error('Error fetching champions:', error);
      }
    },
    filterChampions() {
      // Implement filtering logic if needed
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectChampion(championId: string) {
      const selectedChampion = this.champions.find((champion) => champion.id === championId);

      if (selectedChampion) {
        this.selectedChampion = { ...selectedChampion };
      } else {
        this.selectedChampion = null;
      }

      this.isDropdownOpen = false;
    },
  },
  created() {
    this.fetchChampions();
  },
};
</script>