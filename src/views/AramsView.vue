<template>
  <div class = "championContainer">
  <div>
    <div class ="champTitle">Select a champion:</div>
    <!-- Searchable dropdown menu -->
    <div class="dropdown">
      <input
        v-model="searchText"
        @input="filterChampions"
        @click="toggleDropdown"
        placeholder="Search Champions"
        class ="inputChamp"
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
  height: 100vh;
  background-color: rgb(8, 51, 61);
  width: 50%;
  margin: 0 auto; 
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
 
  </style>
  
<script lang="ts">
export default {
  data() {
    return {
      champions: [] as { id: string; name: string }[],
      searchText: '', // Text input for search
      selectedChampion: '', // Holds the selected champion ID
      isDropdownOpen: false // Tracks dropdown visibility
    };
  },
  computed: {
    filteredChampions() {
      // Filter champions based on search input
      return this.champions.filter(champion =>
        champion.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  },
  methods: {
    async fetchChampions() {
      try {
        // Fetch champions data from the API
        const response = await fetch('https://rilakkuma.onrender.com/fetch-champion');
        this.champions = await response.json();
      } catch (error) {
        console.error('Error fetching champions:', error);
      }
    },
    filterChampions() {
      // This method is triggered whenever the search text changes
      // It updates the filtered list of champions based on the search input
      // You can handle additional logic here if needed
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectChampion(championId:string) {
      this.selectedChampion = championId;
      this.isDropdownOpen = false;
    }
  },
  created() {
    this.fetchChampions(); // Fetch champions data when the component is created
  }
};
</script>