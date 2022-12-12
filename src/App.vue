<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-md-2">
        <section class="row sticky-top">
          <div class="col-12 bg-light">
            <Login />
          </div>
        </section>
      </div>
      <div class="col-md-10">

        <section class="row">
          <div class="col-12 bg-dark">
            <Navbar />
          </div>
          <div class="col-md-9">
            <router-view />
          </div>
          <div class="col-md-3">
            <section class="row">
              <div v-for="p in products" class="col-12 my-4">
                <ProductCard :product="p" />
              </div>
            </section>
          </div>
        </section>
      </div>
    </section>
  </div>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
    v-if="activePost.id">
    <div class="modal-dialog">
      <div class="modal-content">
        <PostEdit />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import Login from './components/Login.vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue';
import ProductCard from './components/ProductCard.vue';
import Pop from "./utils/Pop.js";
import { productsService } from "./services/ProductsService.js";
import PostEdit from "./components/PostEdit.vue";

export default {
  setup() {
    async function getProducts() {
      try {
        await productsService.getProducts()
      } catch (error) {
        Pop.error(error)
      }
    }
    onMounted(() => {
      getProducts()
    })
    return {
      account: computed(() => AppState.account),
      products: computed(() => AppState.products),
      appState: computed(() => AppState),
      activePost: computed(() => AppState.activePost)
    }
  },
  components: { Login },
  components: { Navbar },
  components: { ProductCard, PostEdit },
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
