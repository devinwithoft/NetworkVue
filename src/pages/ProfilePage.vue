<template>
  <section class="row justify-content-center">
    <div class="col-10 mt-3">
      <ProfileDetails :profile="profile" />
    </div>
  </section>
  <section class="row justify-content-center">
    <div class="col-10 mt-3">
      <PostForm :account="account" />
    </div>
  </section>
  <section class="row justify-content-center">
    <div v-for="p in posts" class="col-md-8 card my-2 elevation-5">
      <PostCard :post="p" />
    </div>
  </section>
  <section class="row text-center">
    <div class="col-6">
      <div class="btn btn-success" v-if="(currentPage > 1)" @click="changePage(currentPage - 1)">Previous</div>
      <div class="btn btn-danger disabled" v-else>Previous</div>
    </div>
    <div class="col-6">
      <div class="btn btn-success" v-if="(currentPage < maxPage)" @click="changePage(currentPage + 1)">Next</div>
      <div class="btn btn-danger disabled" v-else disabled>Next</div>
    </div>
  </section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { useRoute } from "vue-router";
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js";
import { profilesService } from "../services/ProfilesService.js";
import ProfileDetails from "../components/ProfileDetails.vue";
import PostForm from "../components/PostForm.vue";

export default {
  setup() {
    const route = useRoute();
    async function getProfileById() {
      try {
        await profilesService.getProfileById(route.params.profileId);
      }
      catch (error) {
        Pop.error(error);
      }
    }

    async function getPostsByProfileId() {
      try {
        await postsService.getPostsByProfileId(route.params.profileId);
      } catch (error) {
        Pop.error(error)
      }
    }
    onMounted(() => {
      getProfileById();
      getPostsByProfileId();
    });
    return {
      profile: computed(() => AppState.activeProfile),
      posts: computed(() => AppState.posts),
      account: computed(() => AppState.account)
    };
  },
  components: { ProfileDetails },
  components: { PostForm },
};
</script>


<style lang="scss" scoped>

</style>