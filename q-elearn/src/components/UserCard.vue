<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    userProps: Object,
  },
});
</script>

<template>
  <q-card>
    <q-item
      :to="{ name: 'userProfile' }"
      clickable
      v-ripple
      class="text-primary"
    >
      <q-item-section avatar>
        <q-avatar>
          <img src="../assets/img/students.png" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <div class="tw-flex tw-justify-between">
          <q-item-label overline class="text-warning">Bonga</q-item-label>
          <q-item-label caption>Admin</q-item-label>
        </div>
        <q-item-label>Bongani Blom</q-item-label>
        <q-item-label caption>+266 56 794 665</q-item-label>
      </q-item-section>
    </q-item>
  </q-card>
</template>
