yar
<template>
  <div>
    <P>
      Lets explain what happens here. We declare our local state with data, then
      we declare our validation rules with validations. Lastly, we activate
      Vuelidate inside setup by calling useVuelidate. Internally it will take
      the validations returned object and treat it as the validation rules. It
      will also take the whole component instance local state (including data,
      but also computed).
    </P>
    <q-stepper-navigation>
      <q-btn color="primary" label="Finish" @click="addSchool" />
      <q-btn
        flat
        color="primary"
        @click="$emit('back')"
        label="Back"
        class="q-ml-sm"
      />
    </q-stepper-navigation>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import useAuth from "../../hooks/useAuth";

const $q = useQuasar();
const { registerSchool } = useAuth();
const addSchool = async () => {
  try {
    $q.loading.show();
    await registerSchool();
    $q.loading.hide();
    $q.notify({
      color: "green-4",
      textColor: "white",
      icon: "cloud_done",
      message: "Submitted",
    });
  } catch (error) {
    console.error(error);
  }
};
</script>
