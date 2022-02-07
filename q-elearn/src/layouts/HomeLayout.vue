<template>
  <q-layout view="hHh lpR fFf">
    <q-dialog v-model="card">
      <Login />
    </q-dialog>

    <q-header>
      <q-toolbar class="tw-bg-white text-primary">
        <div
          class="tw-container tw-mx-auto tw-flex tw-flex-col md:tw-flex-row tw-align-center tw-justify-center"
        >
          <router-link to="/" class="tw-flex tw-mx-auto tw-cursor-pointer">
            <q-avatar class="self-center">
              <img src="../assets/img/e-learn.png" />
            </q-avatar>
            <q-toolbar-title class="tw-self-center">Elearning</q-toolbar-title>
          </router-link>
          <!-- <q-btn flat round dense icon="whatshot" />
        <q-btn flat round dense icon="menu" class="q-mr-sm" /> -->
          <q-space />
          <ul
            class="tw-flex tw-text-lg tw-text-center tw-font-bold tw-align-center tw-justify-center tw-space-x-1 md:tw-space-x-4 tw-self-center"
          >
            <li class="hover:tw-text-yellow-300 tw-cursor-pointer">Home</li>
            <li class="hover:tw-text-yellow-300 tw-cursor-pointer">Schools</li>
            <li class="hover:tw-text-yellow-300 tw-cursor-pointer">Contact</li>
            <li class="hover:tw-text-yellow-300 tw-cursor-pointer">About</li>
          </ul>
          <q-space />
          <q-btn
            outline
            rounded
            color="warning"
            label="Login"
            class="tw-m-2 md:tw-m-0"
            @click="card = true"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import Login from "../components/Login.vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Login,
  },
  setup() {
    return {
      card: ref(false),
    };
  },
});
</script>
