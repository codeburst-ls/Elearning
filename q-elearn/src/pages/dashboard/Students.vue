<script setup>
import Table from "../../components/Table.vue";
</script>

<template>
  <q-page class="tw-bg-gray-200">
    <Table />
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab
        icon="person_add"
        direction="left"
        color="primary"
        label="Add Student"
        label-position="right"
        @click="$router.push({ name: 'createUser' })"
        padding="sm"
      />
    </q-page-sticky>
  </q-page>
</template>
