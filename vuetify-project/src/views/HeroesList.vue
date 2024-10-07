<template>
  <div class="background">
  <h1 class="title">HEROES</h1>
      <div class="heroes-list">
      <v-col class="hero" v-for="hero in heroes" :key="hero.key" @click="showHeroDetails(hero.key)">
        <img :src="hero.portrait" alt="Hero icon" class="hero-icon">
        <p class="hero-name" :class="{ 'junker-queen': hero.name === 'Junker Queen' }">{{ hero.name }}</p>
      </v-col>
      <button class="fixed-button" @click="goBack">Retorna</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      heroes: []
    };
  },
  created() {
    axios.get('https://overfast-api.tekrop.fr/heroes')
      .then(response => {
        this.heroes = response.data;
      })
      .catch(error => {
        console.error('Error fetching heroes:', error);
      });
  },
  methods: {
    showHeroDetails(key) {
      const router = this.$router;
      router.push({ name: 'HeroDetails', params: { key } });
    },
    goBack() {
      this.$router.go(-1); // Navegar a la página anterior
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

.heroes-list {
  padding-top: 5%;
  display: inline-flex; /* Convertimos el contenedor en un elemento flex */
  flex-flow: row wrap;
  vertical-align: middle;
  max-width: 90%; /* 100% - 10% - 10% */
  margin: 20px 20%; /* Margen lateral del 10% */
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

.hero {
  border: 3px solid whitesmoke;
  max-width: 89px;
  margin: 0.7%;
  padding: 0;
  transition: transform 0.12s ease;
  background-color: whitesmoke;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5); /* Añade un contorno difuminado de color blanco */
  border-radius: 10px;
}

.hero:hover {
  transform: scale(1.25);
  box-shadow: 10px 10px 250px rgba(255, 255, 255, 0.5); /* Añade un contorno difuminado de color blanco */
}

.hero-icon {
  width: 83px; /* Calculado como 17px / 1920px * 100 */
  height: 106px; /* Calculado como 25px / 1080px * 100 */
  object-fit: cover; /* Recorta la imagen para ajustarla al contenedor sin distorsionarla */
  border-radius: 10px; /* Redondea las esquinas */
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: 0;
}

.hero-name {
  font-weight: bold;
  background-color: whitesmoke;
  color: black;
  margin: 0;
  text-align: center;
  width: 83px;
  border-radius: 6px;
  border-top: 0;
}

.hero-name.junker-queen {
  font-size: 80%;
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

</style>
