<template>
  <q-form @submit.prevent="onSubmit(!v$.$invalid)">
    <div class="tw-flex tw-flex-col tw-gap-3">
      <q-input
        filled
        dense
        v-model="v$.username.$model"
        label="Username *"
        clearable
        hint="Username must be unique"
        :error="v$.username.$invalid && submitted"
        :error-message="
          v$.username.required.$message.replace('Value', 'username')
        "
      />

      <q-input
        filled
        dense
        clearable
        v-model="v$.firstName.$model"
        label="First Name *"
        hint="Fist name"
        :error-message="
          v$.firstName.required.$message.replace('Value', 'First Name')
        "
        :error="v$.firstName.$invalid && submitted"
      />
      <q-input
        filled
        dense
        clearable
        v-model="v$.lastName.$model"
        label="Last Name *"
        hint="Last Name"
        :error-message="
          v$.lastName.required.$message.replace('Value', 'Last Name')
        "
        :error="v$.lastName.$invalid && submitted"
      />
      <q-input
        filled
        v-model="v$.email.$model"
        label-slot
        dense
        clearable
        hint="Email address"
        :error="
          ((v$.email.$invalid || v$.email.$error) && submitted) ||
          v$.email.$pending.$response
        "
      >
        <template v-slot:label>
          <div class="row items-center all-pointer-events">
            <q-icon class="q-mr-xs" color="primary" size="24px" name="mail" />
            Email (hover for more info)

            <q-tooltip
              class="bg-grey-8"
              anchor="top left"
              self="bottom left"
              :offset="[0, 8]"
              >Email address</q-tooltip
            >
          </div>
        </template>
        <template v-slot:error>
          <span v-if="v$.email.$error && submitted">
            <span
              id="email-error"
              v-for="(error, index) of v$.email.$errors"
              :key="index"
            >
              <small class="p-error">{{ error.$message }}</small>
            </span>
          </span>
          <small
            v-else-if="
              (v$.email.$invalid && submitted) || v$.email.$pending.$response
            "
            class="p-error"
            >{{ v$.email.required.$message.replace("Value", "Email") }}</small
          >
        </template>
      </q-input>
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
    </div>
    <q-stepper-navigation>
      <q-btn type="submit" color="primary" label="Continue" />
    </q-stepper-navigation>
  </q-form>
</template>

<script>
import { reactive, ref } from "vue";
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useStore } from "vuex";

export default {
  setup(_, { emit }) {
    const submitted = ref(false);
    const store = useStore();

    const state = reactive({
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });

    const rules = {
      username: { required },
      firstName: { required },
      lastName: { required },
      email: { required, email },
      password: { required },
    };

    async function onSubmit(isValid) {
      submitted.value = true;
      if (!isValid) {
        return;
      }
      store.commit("set_user", state);
      emit("next");
    }

    return {
      v$: useVuelidate(rules, state),
      submitted,
      isPwd: ref(true),
      onSubmit,
    };
  },
};
</script>
