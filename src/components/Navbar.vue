<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3 row justify-content-start">
    <router-link class="navbar-brand col-6 " :to="{ name: 'Home' }">
      <H1>NETWORK.vue</H1>
    </router-link>

    <div class="col-3 text-start">


      <form>
        <input>
        <button class=" mdi mdi-magnify"></button>
      </form>
    </div>
  </nav>
</template>

<script>
import Login from './Login.vue'
export default {
  setup() {
    return {}
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>
