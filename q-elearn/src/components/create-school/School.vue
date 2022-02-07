<template>
  <q-form @submit.prevent="onSubmit(!v$.$invalid)">
    <div class="tw-flex tw-flex-col tw-gap-3">
      <q-input
        filled
        dense
        v-model="v$.name.$model"
        label="School Name *"
        clearable
        hint="School Name must be unique"
        :error="v$.name.$invalid && submitted"
        :error-message="
          v$.name.required.$message.replace('Value', 'School Name')
        "
      />

      <q-input
        filled
        dense
        clearable
        v-model="v$.location.$model"
        label="Location *"
        hint="Location"
        :error-message="
          v$.location.required.$message.replace('Value', 'Location')
        "
        :error="v$.location.$invalid && submitted"
      />
      <q-select
        filled
        dense
        v-model="v$.type.$model"
        :options="schools"
        label="School Category"
        hint="Category"
        :error-message="v$.type.required.$message.replace('Value', 'Category')"
        :error="v$.type.$invalid && submitted"
      />
    </div>
    <q-stepper-navigation>
      <q-btn type="submit" color="primary" label="Continue" />
      <q-btn
        flat
        color="primary"
        label="Back"
        class="q-ml-sm"
        @click="$emit('back')"
      />
    </q-stepper-navigation>
  </q-form>
</template>

<script>
import { reactive, ref } from "vue";
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useStore } from "vuex";

export default {
  setup(_, { emit }) {
    const submitted = ref(false);
    const store = useStore();

    const state = reactive({
      name: "",
      location: "",
      type: "",
    });
    const rules = {
      name: { required },
      location: { required },
      type: { required },
    };

    async function onSubmit(isValid) {
      submitted.value = true;
      if (!isValid) {
        return;
      }
      store.commit("set_school", { ...state, type: state.type.value });
      emit("next");
    }

    return {
      v$: useVuelidate(rules, state),
      submitted,
      onSubmit,
      schools: [
        {
          label: "Primary School",
          value: "primary",
        },
        {
          label: "High School",
          value: "high",
        },
        {
          label: "Tertiary School",
          value: "tertiary",
        },
        {
          label: "Private School",
          value: "private",
        },
      ],
    };
  },
};
</script>
