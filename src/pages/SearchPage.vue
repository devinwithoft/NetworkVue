<template>
  <section class="row justify-content-center">
    <div class="col-12">
      <h3 class="p-2">Search Results</h3>
    </div>
    <div v-for="p in posts" class="col-md-9 card my-2 elevation-5">
      <PostCard :post="p" />
    </div>
  </section>
  <section class="row text-center">
    <div class="col-6">
      <div class="btn btn-success" v-if="(currentPage > 1)" @click="changeSearchPage(currentPage - 1)">Previous</div>
      <div class="btn btn-danger disabled" v-else>Previous</div>
    </div>
    <div class="col-6">
      <div class="btn btn-success" v-if="(currentPage !== maxPage)" @click="changeSearchPage(currentPage + 1)">Next
      </div>
      <div class="btn btn-danger disabled" v-else disabled>Next</div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import { postsService } from "../services/PostsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    const route = useRoute();
    async function searchFor() {
      try {
        await postsService.searchFor(route.params.searchQuery);
      }
      catch (error) {
        Pop.error(error);
      }
    }
    onMounted(() => {
      searchFor();
    });
    return {
      posts: computed(() => AppState.posts),
      currentPage: computed(() => AppState.page),
      maxPage: computed(() => AppState.maxPage),
      async changeSearchPage(number) {
        try {
          await postsService.changeSearchPage(route.params.searchQuery, number)
        } catch (error) {
          logger.error(error)
          Pop.error(error)
        }
      }

    }
  }
}

</script>

<style scoped lang="scss">

</style>
