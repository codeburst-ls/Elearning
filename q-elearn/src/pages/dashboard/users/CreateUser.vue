<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      name,
      age,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
};
</script>

<template>
  <q-page class="q-pa-md tw-bg-gray-200">
    <section class="tw-grid tw-grid-cols-3 tw-gap-2">
      <q-uploader
        flat
        square
        url="http://localhost:4444/upload"
        class="tw-my-2 tw-mx-0"
      >
        <template v-slot:list="scope">
          <q-list separator>
            <q-item v-for="file in scope.files" :key="file.__key">
              <q-item-section>
                <q-item-label class="full-width ellipsis">
                  {{ file.name }}
                </q-item-label>

                <q-item-label caption>
                  Status: {{ file.__status }}
                </q-item-label>

                <q-item-label caption>
                  {{ file.__sizeLabel }} / {{ file.__progressLabel }}
                </q-item-label>
              </q-item-section>

              <q-item-section v-if="file.__img" thumbnail class="gt-xs">
                <img :src="file.__img.src" />
              </q-item-section>

              <q-item-section top side>
                <q-btn
                  class="gt-xs"
                  size="12px"
                  flat
                  dense
                  round
                  icon="delete"
                  @click="scope.removeFile(file)"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </template>
      </q-uploader>

      <q-card flat square class="tw-col-span-2 tw-my-2 tw-mx-0">
        <q-card-section class="bg-primary text-white">
          User Information
        </q-card-section>
        <q-separator />
        <q-card-section class="tw-grid tw-grid-cols-3 tw-gap-4">
          <q-input
            filled
            v-model="name"
            label="Your name *"
            hint="Name and surname"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            filled
            v-model="name"
            label="Your name *"
            hint="Name and surname"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            filled
            v-model="name"
            label="Your name *"
            hint="Name and surname"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            filled
            v-model="name"
            label="Your name *"
            hint="Name and surname"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </q-card-section>
      </q-card>
      <q-card flat square class="tw-col-span-3">
        <q-card-section class="bg-primary text-white">
          User Information
        </q-card-section>
        <q-separator />
        <q-card-section class="tw-grid tw-grid-cols-3 tw-gap-4">
          <q-input
            filled
            v-model="name"
            label="Your name *"
            hint="Name and surname"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            filled
            v-model="name"
            label="Your name *"
            hint="Name and surname"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            filled
            v-model="name"
            label="Your name *"
            hint="Name and surname"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            filled
            v-model="name"
            label="Your name *"
            hint="Name and surname"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </q-card-section>
      </q-card>
    </section>
  </q-page>
</template>
