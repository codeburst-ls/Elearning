<script setup>
const contacts = [
  {
    id: 1,
    name: "Ruddy Jedrzej",
    email: "rjedrzej0@discuz.net",
    letter: "R",
  },
  {
    id: 2,
    name: "Mallorie Alessandrini",
    email: "malessandrini1@marketwatch.com",
    letter: "M",
  },
  {
    id: 3,
    name: "Elisabetta Wicklen",
    email: "ewicklen2@microsoft.com",
    letter: "E",
  },
  {
    id: 4,
    name: "Seka Fawdrey",
    email: "sfawdrey3@wired.com",
    letter: "S",
  },
];
</script>

<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-toolbar class="text-white tw-text-emerald-400">
      <q-toolbar-title class="tw-text-2xl">Courses</q-toolbar-title>
    </q-toolbar>
    <q-list>
      <q-card
        flat
        square
        class="q-my-sm tw-border-l-8 tw-border-l-yellow-500"
        v-for="contact in contacts"
        :key="contact.id"
      >
        <q-item clickable v-ripple class="text-primary">
          <q-item-section>
            <q-item-label>{{ contact.name }}</q-item-label>
            <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
    </q-list>
  </div>
</template>
