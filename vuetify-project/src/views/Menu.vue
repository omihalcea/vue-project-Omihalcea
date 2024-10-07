<template>
  <div>
    <h1 class="title">OVERWATCH API</h1>
  <div class="menu">
    <router-link class="menu-link" to="/heroes">Heroes</router-link>
    <router-link class="menu-link" to="/maps">Mapas</router-link>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style scoped>

.title {
  position: absolute;
  top: 10px;
  left: 40px;
  font-size: 5vw;
  color: whitesmoke; /* Color del texto */
  -webkit-text-stroke-width: 2px; /* Ancho del borde */
  -webkit-text-stroke-color: grey; /* Color del borde */
  font-style: italic;
}

.menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/af4e86fb-ee6c-4911-8ab9-aa937441081b/da8jty5-4890ce26-b613-4a3d-8337-c8462c3797a5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmNGU4NmZiLWVlNmMtNDkxMS04YWI5LWFhOTM3NDQxMDgxYlwvZGE4anR5NS00ODkwY2UyNi1iNjEzLTRhM2QtODMzNy1jODQ2MmMzNzk3YTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.I0l6alIABVSRbN7ZjJj6i1orWWMgFq0MZAOVcKWPb7A');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  justify-content: center;
  color: white;
  font-size: 24px;
  text-shadow: 1px 1px 2px black;
}

.menu-link {
  text-decoration: none;
  color: inherit;
  padding: 10px 20px;
  margin-bottom: 20px;
  //background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

.menu-link:hover {
  background-color: rgba(255, 165, 0, 0.8);
}
</style>
