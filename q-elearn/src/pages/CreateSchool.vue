<script setup>
import { ref, reactive } from "vue";
import {
  PersonalForm,
  PaymentForm,
  SchoolForm,
} from "../components/create-school";
const step = ref(1);
</script>

<template>
  <q-page class="page">
    <div
      class="tw-container tw-mx-auto md:tw-w-1/2 text-primary tw-align-center tw-justify-center tw-pt-2"
    >
      <q-stepper
        keep-alive
        v-model="step"
        ref="stepper"
        alternative-labels
        color="primary"
        animated
      >
        <q-step :name="1" title="Personel Info" icon="user" :done="step > 1">
          <PersonalForm @next="step = 2" />
        </q-step>

        <q-step :name="2" title="School Info" icon="school" :done="step > 2">
          <SchoolForm @next="step = 3" @back="step = 1" />
        </q-step>

        <q-step :name="3" title="Payment Info" icon="payment">
          <PaymentForm @back="step = 2" />
        </q-step>
      </q-stepper>
    </div>
  </q-page>
</template>
