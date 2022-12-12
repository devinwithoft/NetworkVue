<template>
  <section class="row">
    <div class="col-3 ps-5 pt-3 text-center">
      <router-link :to="{ name: 'Profile', params: { profileId: post?.creatorId } }">
        <img :src="post.creator.picture" alt="{{post.creator.name}}'s photo'"
          class="img-fluid poster-img rounded-circle elevation-2">
      </router-link>
    </div>
    <div class="col-7 mt-4">
      <h5>{{ post.creator.name }}</h5>
      <p>{{ post.createdAt }}</p>
      <!-- SECTION POSTER GRADUATED? -->
    </div>
    <div v-if="myPost" class="col-2 mt-3 text-center">
      <div class="dropdown">
        <button class="btn btn-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
          aria-expanded="false" @click="setEditPost(post.id)">
          <h5 class="mdi mdi-dots-horizontal"></h5>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#" @click="deletePost(post.id)">Delete Post</a></li>
          <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">Edit Post</a></li>
        </ul>
      </div>
    </div>
    <div class="col-12">
      <p class="py-3 px-3 mx-5">{{ post.body }}</p>
    </div>
    <div v-if="post.imgUrl != ''" class="col-md-12 col-10 text-center no-margin">
      <img :src="post.imgUrl" alt="" class="img-fluid post-img rounded">
    </div>
    <div class="col-3 mt-4 s-2 text-center"></div>
    <div class="col-8 text-end pt-2">
      <p v-if:="isLiked" class=" mdi mdi-heart like-icon text-danger" @click="likePost(post.id)"> <span
          class="text-dark"> {{
              post.likeIds.length
          }}</span> </p>
      <p v-else: class="mdi mdi-heart-outline like-icon text-danger" @click="likePost(post.id)"><span class="text-dark">
          {{
    post.likeIds.length
          }}</span> </p>
    </div>
  </section>
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
      myPost: computed(() => props.post.creatorId.includes(AppState.account.id)),
      async likePost(postId) {
        try {
          console.log(postId)
          postsService.likePost(postId)
        } catch (error) {
          Pop.error(error)
        }
      },
      async deletePost(PostId) {
        if (await Pop.confirm("Delete your post?")) {
          await postsService.deletePost(PostId)
        }
      },
      setEditPost(PostId) {
        try {
          postsService.setEditPost(PostId)
        } catch (error) {
          Pop.error(error)
        }
        console.log
      },
    }
  }
}

</script>


<style lang="scss" scoped>
.poster-img {
  height: 10vh;
  width: 10vh
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