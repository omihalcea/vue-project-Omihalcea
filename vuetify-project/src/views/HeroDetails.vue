<template>
  <div class="background">
    <h1 class="title">{{ hero.name }}</h1>
    <div class="hero-details">
      <div class="hero-container">
        <img :src="hero.portrait" :alt="hero.name" class="hero-portrait">
        <div class="hero-info">
          <h2>{{ hero.name }}</h2>
          <p>{{ hero.description }}</p>
        </div>
      </div>
      <button class="fixed-button" @click="goBack">Retorna</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  setup() {
    const hero = ref({});
    const router = useRouter();

    onMounted(() => {
      const key = router.currentRoute.value.params.key;
      axios.get(`https://overfast-api.tekrop.fr/heroes/${key}`)
        .then(response => {
          hero.value = response.data;
        })
        .catch(error => {
          console.error('Error fetching hero details:', error);
        });
    });

    const goBack = () => {
      router.go(-1); // Navegar a la página anterior
    };

    return { hero, goBack };
  }
};
</script>

<style scoped>
.background {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/af4e86fb-ee6c-4911-8ab9-aa937441081b/da8jty5-4890ce26-b613-4a3d-8337-c8462c3797a5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmNGU4NmZiLWVlNmMtNDkxMS04YWI5LWFhOTM3NDQxMDgxYlwvZGE4anR5NS00ODkwY2UyNi1iNjEzLTRhM2QtODMzNy1jODQ2MmMzNzk3YTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.I0l6alIABVSRbN7ZjJj6i1orWWMgFq0MZAOVcKWPb7A');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.title {
  position: absolute;
  top: 10px;
  left: 40px;
  font-size: 5vw;
  color: whitesmoke; /* Color del texto */
  -webkit-text-stroke-width: 2px; /* Ancho del borde */
  -webkit-text-stroke-color: grey; /* Color del borde */
  font-style: italic;
  text-transform: uppercase;
}

.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-portrait {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: whitesmoke;
  box-shadow: 0 0 10px white, 0 0 20px white, 0 0 30px white;
}

.hero-info {
  text-align: center;
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
  transition: transform 0.2s ease; /* Añade una transición para la transformación */
}

.fixed-button:hover {
  transform: scale(1.1); /* Agrandar el botón un poco al pasar el mouse por encima */
}
</style>
