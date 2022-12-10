<template>
  <form @submit.prevent="createPost()" class="row justify-content-end card">
    <img>
    <div class="mb-3 col-3">

      <label for="" class="form-label">Post</label>
      <input type="text" class="form-control" v-model="editable.body" name="" id="" aria-describedby="helpId"
        placeholder="">
      <small id="helpId" class="form-text text-muted"></small>
    </div>
    <div class="mb-3 col-12">
      <label for="" class="form-label">ImgUrl</label>
      <input type="url" class="form-control" v-model="editable.imgUrl" name="" id="" aria-describedby="helpId"
        placeholder="">
      <img class=" img-fluid" alt="">
    </div>
    <button>hey</button>
  </form>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { Account } from "../models/Account.js";
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js";
export default {
  props: {
    account: {
      type: Account,
      required: true
    }
  },
  setup() {
    const editable = ref({})

    return {
      editable,
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

</style>