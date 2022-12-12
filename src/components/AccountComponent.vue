<template>
  <div class="col-10 card elevation-5">
    <form class="row justify-content-between" @submit.prevent="editAccount()">
      <div class="mb-3 col-8 p-1">
        <label for="exampleInputEmail1" class="form-label">Name</label>
        <input type="name" class="form-control" aria-describedby="name" v-model="editable.name">
      </div>
      <div class="mb-3 col-8 p-1">
        <label for="exampleInputEmail1" class="form-label">Profile Picture</label>
        <input type="url" class="form-control" v-model="editable.picture">
      </div>
      <div class="mb-3 col-5 p-1">
        <label for="exampleInputEmail1" class="form-label">Cover Image</label>
        <input type="url" class="form-control" aria-describedby="name" v-model="editable.coverImg">
      </div>
      <div class="mb-3 col-8 p-1">
        <label for="exampleInputEmail1" class="form-label">Github</label>
        <input type="url" class="form-control" aria-describedby="name" v-model="editable.github">
      </div>
      <div class="mb-3 col-8 p-1">
        <label for="exampleInputEmail1" class="form-label">Linkedin</label>
        <input type="url" class="form-control" aria-describedby="name" v-model="editable.linkedin">
      </div>
      <div class="mb-3 col-8 p-1">
        <label for="exampleInputEmail1" class="form-label">Resume</label>
        <input type="url" class="form-control" aria-describedby="name" v-model="editable.resume">
      </div>
      <div class="mb-3 col-8 p-1">
        <label for="exampleInputEmail1" class="form-label">Codeworks Class</label>
        <input type="name" class="form-control" aria-describedby="name" v-model="editable.class">
      </div>
      <div class="mb-3 ms-1 col-5 form-check">
        <input type="checkbox" class="form-check-input" v-model="editable.graduated">
        <label class="form-check-label" for="exampleCheck1">Have you graduated?</label>
      </div>

      <div class="mb-3 col-12">
        <label class="form-label">Bio</label>
        <textarea type="password" class="form-control" id="exampleInputPassword1" v-model="editable.bio"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { Account } from "../models/Account.js";
import { profilesService } from "../services/ProfilesService.js";
import Pop from "../utils/Pop.js";
import { accountService } from "../services/AccountService.js";
export default {
  setup() {

    onMounted(() => {
      editable.value = AppState.account
    })
    const editable = ref({})
    return {
      editable,
      async editAccount() {
        try {
          await accountService.editAccount(editable.value)
        } catch (error) {
          Pop.error
        }
      }
    }
  }
};
</script>


<style lang="scss" scoped>

</style>