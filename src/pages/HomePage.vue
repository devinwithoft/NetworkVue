<template>
  <section class="row justify-content-center" v-if="account.id">
    <div class="col-md-9 card my-2 elevation-5">
      <PostForm />
    </div>
  </section>
  <section class="row justify-content-center">
    <div v-for="p in posts" class="col-md-9 card my-2 elevation-5">
      <PostCard :post="p" />
    </div>
  </section>
  <section class="row text-center">
    <div class="col-6">
      <div class="btn btn-success" v-if="(currentPage > 1)" @click="changePage(currentPage - 1)">Previous</div>
      <div class="btn btn-danger disabled" v-else>Previous</div>
    </div>
    <div class="col-6">
      <div class="btn btn-success" v-if="(currentPage !== maxPage)" @click="changePage(currentPage + 1)">Next</div>
      <div class="btn btn-danger disabled" v-else disabled>Next</div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
import { postsService } from "../services/PostsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    async function getPosts() {
      try {
        await postsService.getPosts()
      } catch (error) {
        Pop.error(error)
        logger.log(Error)
      }
    }
    onMounted(() => {
      getPosts();
    })
    return {
      posts: computed(() => AppState.posts),
      currentPage: computed(() => AppState.page),
      maxPage: computed(() => AppState.maxPage),
      account: computed(() => AppState.account),
      async changePage(number) {
        try {
          console.log(number)
          await postsService.changePage(number)
        } catch (error) {
          logger.error(error)
          Pop.error(error)
        }
      }
    };
  },
}

</script>

<style scoped lang="scss">

</style>
