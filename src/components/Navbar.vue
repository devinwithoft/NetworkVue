<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3 row justify-content-start">
    <router-link class="navbar-brand col-6 " :to="{ name: 'Home' }">
      <h1>NETWORK.vue</h1>
    </router-link>

    <div class="col-5 text-start">

      <form @submit.prevent="searchFor()">
        <input type="text" v-model="search.query" placeholder="Search posts">
        <button class=" mdi mdi-magnify"></button>
      </form>
    </div>
  </nav>
</template>

<script>
import { postsService } from "../services/PostsService.js"
import { computed, reactive, onMounted } from 'vue';
import Pop from "../utils/Pop.js"
import Login from './Login.vue'
import { router } from "../router.js";
export default {
  setup() {
    const search = reactive({
      query: ''
    })
    return {
      search,
      async searchFor() {
        try {
          await postsService.searchFor(search.query)
          router.push(`/Search/${search.query}`)
        } catch (error) {
          Pop
        }
      }
    }
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
