<template>
  <q-card style="width: 300px">
    <q-form
      @submit="onSubmit(!v$.$invalid)"
      class="tw-flex tw-flex-col tw-gap-3 q-pa-md"
    >
      <div class="tw-flex tw-justify-center">
        <q-avatar size="80px">
          <img src="../assets/img/loginavater.png" />
        </q-avatar>
      </div>
      <q-input
        filled
        dense
        v-model="v$.identifier.$model"
        label="Username *"
        clearable
        hint="Username must be unique"
        :error="v$.identifier.$invalid && submitted"
        :error-message="
          v$.identifier.required.$message.replace('Value', 'username')
        "
      />

      <q-input
        v-model="v$.password.$model"
        filled
        label="Password"
        dense
        :type="isPwd ? 'password' : 'text'"
        hint="Password must be atleast 8 characters long"
        error-message="Password is required"
        :error="v$.password.$invalid && submitted"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <p v-if="err" class="text-negative">Wrong credentials</p>
      <q-btn label="Login" type="submit" color="primary" class="tw-mb-3" />
    </q-form>
  </q-card>
</template>

<script>
import { reactive, ref } from "vue";
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useQuasar } from "quasar";
import useAuth from "../hooks/useAuth";

export default {
  setup() {
    const submitted = ref(false);
    const $q = useQuasar();
    const err = ref("");
    const { login } = useAuth();

    const state = reactive({
      identifier: "",
      password: "",
    });

    const rules = {
      identifier: { required },
      password: { required },
    };

    async function onSubmit(isValid) {
      submitted.value = true;
      if (!isValid) {
        return;
      }
      try {
        $q.loading.show();
        await login(state);
        $q.loading.hide();
      } catch (error) {
        err.value = error;
        $q.loading.hide();
        console.log(err.value);
      }
    }

    return {
      v$: useVuelidate(rules, state),
      submitted,
      isPwd: ref(true),
      onSubmit,
      err,
    };
  },
};
</script>
