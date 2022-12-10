<template>
  <section class="row">
    <div class="col-9">

      <img :src="product.tall" :title="product.title" :alt="product.title" class="img-fluid rounded">
    </div>
  </section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Product } from "../models/Product.js";
export default {
  props: {
    product: {
      type: Product,
      required: true
    }
  },
  setup() {
    return {}
  }
};
</script>


<style lang="scss" scoped>

</style>