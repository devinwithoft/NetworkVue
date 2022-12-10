<template>
  <section class="row">
    <div class="col-3 ps-5 pt-3 text-center">
      <router-link :to="{ name: 'Profile', params: { profileId: post?.creatorId } }">
        <img :src="post.creator.picture" alt="{{post.creator.name}}'s photo'"
          class="img-fluid poster-img rounded-circle elevation-2">
      </router-link>
    </div>
    <div class="col-8 mt-4 me-2">
      <h6>{{ post.creator.name }}</h6>
      <p>{{ post.createdAt }}</p>
      <!-- SECTION POSTER GRADUATED? -->
    </div>
    <div class="col-12">
      <p class="py-3 mx-5">{{ post.body }}</p>
    </div>
    <div v-if="post.imgUrl != ''" class="col-md-12 col-10 text-center no-margin">
      <img :src="post.imgUrl" alt="" class="img-fluid post-img rounded">
    </div>
    <div class="col-3 mt-4 s-2 text-center">Likes: {{ post.likeIds.length }}</div>
    <div class="col-8 text-end pt-2">
      <p v-if:="isLiked" class=" mdi mdi-heart like-icon text-danger" @click="likePost(post.id)"></p>
      <p v-else: class="mdi mdi-heart-outline like-icon text-danger" @click="likePost(post.id)"></p>
    </div>
  </section>
  <section class="row"></section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { Post } from "../models/Post.js";
import { useRoute } from "vue-router";
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js";
export default {
  props: { post: { type: Post, required: true, } },
  setup(props) {
    const route = useRoute();
    return {
      isLiked: computed(() => props.post.likeIds.includes(AppState.account.id)),
      async likePost(postId) {
        try {
          console.log(postId)
          postsService.likePost(postId)
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.poster-img {
  height: 6vh;
  width: 6vh
}

.post-img {
  max-height: 45vh;
}

.no-margin {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.like-icon {
  font-size: 4vh;
}
</style>