<template>
  <form @submit.prevent="createPost()" class="row justify-content-between">
    <img>
    <div class="col-3">
      <img :src="account.picture" alt="account picture" class="img-fluid mt-4 ms-2 rounded-circle accpic">
    </div>
    <div class="mb-4 col-9">

      <label for="" class="form-label"></label>
      <textarea type="text" class="form-control" name="" id="" aria-describedby="helpId" rows="3"
        Placeholder="Whats on your mind?" v-model="editable.body"></textarea>
      <small id=" helpId" class="form-text text-muted"></small>
    </div>
    <section class="d-flex align-items-center justify-content-end">

      <div class="mb-3 col-6">
        <input type="url" class="form-control ms-1" v-model="editable.imgUrl" name="" id="" aria-describedby="helpId"
          placeholder="Share an image Url">
      </div>
      <div class="col-3 text-end"><button class="btn btn-success mb-3">Submit</button></div>
    </section>
  </form>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { Account } from "../models/Account.js";
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js";
import { Post } from "../models/Post.js";
export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      account: computed(() => AppState.account),
      async createPost() {
        try {
          await postsService.createPost(editable.value)
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.accpic {
  height: 15vh;
  width: 15vh;
}
</style>