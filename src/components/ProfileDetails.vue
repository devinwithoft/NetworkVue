<template>
  <div v-if="profile" class="row">
    <div class="col-12 bg-img">
      <img :src="profile.picture" alt="" class="rounded-circle poster-img img-fluid elevation-2">
    </div>
    <div class="col-12 bg-dark">Icons</div>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Account } from "../models/Account.js";
import { useRoute } from "vue-router";
export default {
  props: {
    profile: {
      type: Account,
      required: true
    }
  },
  setup() {
    const route = useRoute()
    return {
      backgroundImg: computed(() => `url(${AppState.activeProfile?.coverImg})`)
    }
  }
};
</script>


<style lang="scss" scoped>
.card {
  // position: relative;
}

.bg-img {
  background-size: cover;
  background-position: center;
  height: 18vh;

  background-image: v-bind(backgroundImg)
}


.poster-img {
  height: 16vh;
  width: 16vh;
  // position: absolute;
  top: 55px;
  left: 20px
}
</style>