<template>
  <div v-if="profile" class="row bg-white rounded elevation-5 justify-content-center">
    <div class="col-12 bg-img">
      <img :src="profile.picture" alt="" class="rounded-circle poster-img img-fluid elevation-2">
    </div>
    <div class="col-7 text-nowrap">
      <h2>{{ profile.name }}
        <i v-if="profile.graduated" class="mdi mdi-school fs-3"></i>
      </h2>
    </div>
    <div class="col-4">
      <h5 class="text-end">{{ profile.class }}</h5>
    </div>
    <div class="col-12">
      <h4 class="text-center">{{ profile.bio }}</h4>
    </div>
    <div class="col-12 text-center">
      <ul class="row justify-content-center">
        <li class="mdi mdi-github no-bullets"><span class="selectable"
            @click="openLink(`${profile.github}`)">Github</span></li>
        <li class="mdi mdi-linkedin no-bullets"> <span class="selectable"
            @click="openLink(`${profile.linkedin}`)">LinkedIn</span></li>
        <li class="mdi mdi-file-account no-bullets"><span class="selectable"
            @click="openLink(`${profile.resume}`)">Resume</span></li>
      </ul>
    </div>
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
      required: true,
    }
  },
  setup() {
    const route = useRoute()
    return {
      backgroundImg: computed(() => `url(${AppState.activeProfile?.coverImg})`),
      openLink(url) {
        var win = window.open(url, '_blank');
        win.focus();
      }

    }
  }
};
</script>


<style lang="scss" scoped>
.no-bullets {
  list-style-type: none;
  /* Remove bullets */
  padding: 0;
  /* Remove padding */
  margin: 0;
  /* Remove margins */
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

.bigName {
  top: 60px;
  left: 20px
}
</style>