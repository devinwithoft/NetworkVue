<template>
  <span class="navbar-text row elevation-5">
    <h3 class="mt-1" v-if="account.id">Logged in as</h3>
    <div v-if="!user.isAuthenticated">
      <button class="btn btn-primary selectable text-uppercase my-2 my-lg-0 ms-4" @click="login">
        <h3>
          Login/Sign-up
        </h3>
      </button>
      <p>Please sign in to like and create posts</p>
    </div>
    <div v-else>
      <section>

        <div class="dropdown dropstart my-2 my-lg-0 col-12 text-center">
          <div type="button" class="border-0 selectable no-select mt-5" data-bs-toggle="dropdown" aria-expanded="false">
            <div v-if="account.picture || user.picture">
              <img :src="account.picture || user.picture" alt="account photo"
                class="rounded-circle img-fluid account-pic elevation-3" />
            </div>
          </div>
          <div class="dropdown-menu dropdown-menu-lg-left p-0" aria-labelledby="authDropdown">
            <div class="list-group">
              <router-link :to="{ name: 'Account' }">
                <div class="list-group-item dropdown-item list-group-item-action">
                  Edit Account
                </div>
              </router-link>
              <div class="list-group-item dropdown-item list-group-item-action text-danger selectable" @click="logout">
                <i class="mdi mdi-logout"></i>
                logout
              </div>
            </div>
          </div>
        </div>
        <div class="col-7 text-center mt-4">
        </div>
        <div class="col-12 text-center">
          <h2>{{ account.name }}</h2>
        </div>
      </section>
    </div>
  </span>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from "vue-router"
import { AppState } from '../AppState'
import { Account } from "../models/Account.js"
import { AuthService } from '../services/AuthService'
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.account-pic {
  height: 25vh;
  width: 25vh
}

.btn {
  text-transform: unset !important;
}
</style>
