<template>
  <div class="q-pa-md">
    <q-table
      grid
      class="text-primary tw-mb-12"
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      hide-header
    >
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-4 col-md-3">
          <UserCard :userProps="props" />
        </div>
      </template>
    </q-table>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import UserCard from "./UserCard.vue";

const deserts = [
  "Frozen Yogurt",
  "Ice cream sandwich",
  "Eclair",
  "Cupcake",
  "Gingerbread",
  "Jelly bean",
  "Lollipop",
  "Honeycomb",
  "Donut",
  "KitKat",
];

const rows = [];

deserts.forEach((name) => {
  for (let i = 0; i < 24; i++) {
    rows.push({
      name: name + " (" + i + ")",
      calories: 20 + Math.ceil(50 * Math.random()),
    });
  }
});

rows.sort(() => -1 + Math.floor(3 * Math.random()));

export default {
  components: {
    UserCard,
  },
  setup() {
    const $q = useQuasar();

    const filter = ref("");

    return {
      rows,

      filter,

      columns: [
        { name: "name", label: "Name", field: "name" },
        { name: "calories", label: "Calories (g)", field: "calories" },
      ],
    };
  },
};
</script>
