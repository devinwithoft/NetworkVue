<template>
  <span class="navbar-text row elevation-5 rounded">
    <h3 class="mt-1" v-if="account.id">Welcome</h3>
    <div v-if="!user.isAuthenticated">
      <button class="btn btn-primary selectable text-uppercase my-2 my-lg-0 ms-2" @click="login">
        <h3>
          Login
        </h3>
      </button>
      <p>Please sign in to like and create posts</p>
      <div v-for="z in products" class="col-12 my-4">
        <ProductCard :product="z" />
      </div>

    </div>
    <div v-else>
      <section class="fulllength">

        <div class="dropdown dropstart m my-lg-0 col-12 text-cb-2enter">
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
        <div class="col-3">{{ account.email }}</div>
        <h2 class="d-flex justify-content-evenly"><i class="mdi mdi-github selectable"
            @click="openLink(`${account.github}`)"> </i>
          <i class="mdi mdi-linkedin selectable" @click="openLink(`${account.linkedin}`)"> </i><i
            class="mdi mdi-file-account selectable" @click="openLink(`${account.resume}`)"> </i>
        </h2>
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
      products: computed(() => AppState.products),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      },
      openLink(url) {
        var win = window.open(url, '_blank');
        win.focus();
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

.fulllength {
  height: 100vh;
}

.btn {
  text-transform: unset !important;
}
</style>
