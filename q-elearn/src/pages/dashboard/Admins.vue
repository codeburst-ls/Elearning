<script setup>
//import Card from "../../components/Card.vue";
import Table from "../../components/Table.vue";
</script>

<template>
  <q-page class="tw-bg-slate-200">
    <Table />
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab
        icon="person_add"
        direction="left"
        color="primary"
        label="Add Admin"
        label-position="right"
        @click="$router.push({ name: 'createUser' })"
        padding="sm"
      />
    </q-page-sticky>
  </q-page>
</template>
