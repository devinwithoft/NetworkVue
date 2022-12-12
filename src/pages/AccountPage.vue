<template>
  <section class="row justify-content-center">
    <div class="col-12 text-center">
      <h1>Edit account information</h1>
    </div>
    <AccountComponent />
  </section>
</template>

<script>
import { computed, reactive, onMounted, ref } from 'vue'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      myAccount: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
