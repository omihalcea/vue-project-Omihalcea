<template>
  <div class="background">
    <h1 class="title">MAPAS</h1>
    <div class="maps-list">
      <v-col class="map" v-for="(map, index) in maps" :key="map.name" @click="showMapModal(map.screenshot)">
        <div class="map-icon-container">
          <img :src="map.screenshot" alt="Map icon" class="map-icon">
        </div>
        <p class="map-name">{{ map.name }}</p>
      </v-col>
      <button class="fixed-button" @click="goBack">Retorna</button>
    </div>

    <!-- Modal para mostrar la imagen ampliada -->
    <v-dialog v-model="isModalVisible" max-width="800px">
      <v-card class="modal-card">
        <img :src="currentImage" alt="Map Image" class="modal-image" border-radius="10px" />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      maps: [],
      isModalVisible: false,
      currentImage: ''
    };
  },
  created() {
    axios.get('https://overfast-api.tekrop.fr/maps')
      .then(response => {
        this.maps = response.data;
      })
      .catch(error => {
        console.error('Error fetching maps:', error);
      });
  },
  methods: {
    showMapDetails(index) {
      this.$router.push({ name: 'MapDetails', params: { index } });
    },
    goBack() {
      this.$router.go(-1);
    },
    showMapModal(image) {
      this.currentImage = image;
      this.isModalVisible = true;
    }
  }
};
</script>

<style scoped>
.background {
  background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/af4e86fb-ee6c-4911-8ab9-aa937441081b/da8jty5-4890ce26-b613-4a3d-8337-c8462c3797a5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmNGU4NmZiLWVlNmMtNDkxMS04YWI5LWFhOTM3NDQxMDgxYlwvZGE4anR5NS00ODkwY2UyNi1iNjEzLTRhM2QtODMzNy1jODQ2MmMzNzk3YTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.I0l6alIABVSRbN7ZjJj6i1orWWMgFq0MZAOVcKWPb7A');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
}

.title {
  position: fixed;
  top: 10px;
  left: 40px;
  font-size: 4vw;
  color: whitesmoke;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: grey;
  font-style: italic;
}

.maps-list {
  padding-top: 5%;
  display: inline-flex;
  flex-flow: row wrap;
  vertical-align: middle;
  max-width: 80%;
  margin: 20px 15%;
}

.map {
  border: 3px solid whitesmoke;
  max-width: 306px;
  margin: 0.7%;
  padding: 0;
  transition: transform 0.12s ease;
  background-color: whitesmoke;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}

.map:hover {
  transform: scale(1.25);
  box-shadow: 10px 10px 250px rgba(255, 255, 255, 0.5);
}

.map-icon-container {
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 10px; /* Redondea el contenedor */
}

.map-icon {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Recorta la imagen para ajustarla al contenedor */
  border-radius: 10px; /* Redondea las esquinas de la imagen */
}

.map-name {
  font-weight: bold;
  background-color: whitesmoke;
  color: black;
  margin: 0;
  text-align: center;
  font-size: x-large;
  border-radius: 6px;
  border-top: 0;
}

.fixed-button {
  font-weight: bold;
  position: fixed;
  bottom: 30px;
  left: 40px;
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
}

.fixed-button:hover {
  transform: scale(1.1);
}

.modal-card {
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  overflow: hidden;

}

.modal-image {
  border: 6px solid whitesmoke;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
}
</style>
