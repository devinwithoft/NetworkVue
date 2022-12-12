<template>

  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Edit Post</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <form @submit.prevent="editActivePost(editPost.id)" class="row justify-content-between">
      <img>
      <div class="col-3">
        <img :src="account.picture" alt="account picture" class="img-fluid mt-4 ms-2 rounded-circle accpic">
      </div>
      <div class="mb-4 col-9">

        <label for="" class="form-label"></label>
        <textarea type="text" class="form-control" name="" id="" aria-describedby="helpId" rows="3"
          v-model="editPost.body"></textarea>
        <small id=" helpId" class="form-text text-muted"></small>
      </div>
      <section class="d-flex align-items-center justify-content-end">

        <div class="mb-3 col-6">
          <input type="url" class="form-control ms-1" name="" id="" aria-describedby="helpId"
            placeholder="Share an image Url" v-model="editPost.imgUrl">
        </div>
        <div class="col-3 text-end"><button class="btn btn-success mb-3" data-bs-dismiss="modal">Submit</button></div>
      </section>
    </form>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { postsService } from "../services/PostsService.js";
export default {
  setup() {

    onMounted(() => {
      editPost.value = AppState.activePost
    })
    const editPost = ref({})
    return {
      editPost,
      account: computed(() => AppState.account),
      async editActivePost() {
        await postsService.editActivePost(editPost.value)
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


