<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-md-2">
        <section class="row">
          <div class="col-12 bg-light">

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
            <h6></h6>
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

</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue';
import ProductCard from './components/ProductCard.vue';
import Pop from "./utils/Pop.js";
import { productsService } from "./services/ProductsService.js";

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
      products: computed(() => AppState.products),
      appState: computed(() => AppState)
    }
  },
  components: { Navbar },
  components: { ProductCard },
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
