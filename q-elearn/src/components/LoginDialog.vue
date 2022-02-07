<template>
  <q-dialog v-model="login" seamless position="bottom">
    <q-card style="width: 350px">
      <q-linear-progress :value="0.6" color="pink" />

      <q-card-section class="row items-center no-wrap">
        <div>
          <div class="text-weight-bold">The Walker</div>
          <div class="text-grey">Fitz & The Tantrums</div>
        </div>

        <q-space />

        <q-btn flat round icon="play_arrow" />
        <q-btn flat round icon="pause" />
        <q-btn flat round icon="close" v-close-popup />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Login",
  // props: {
  //   login: Boolean,
  // },
  setup(props) {
    return {
      login: ref(false),
    };
  },
});
</script>
