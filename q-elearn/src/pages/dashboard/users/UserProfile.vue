<script setup>
import CourseList from "../../../components/CourseList.vue";
import { ref } from "vue";
const label = ref("Qomo-Qomong, P.O.Box 708, Quthing 700");
</script>
<template>
  <q-page class="tw-bg-slate-200">
    <section
      class="tw-h-36 tw-bg-[url('../assets/img/slide1.jpg')] tw-bg-cover tw-bg-center tw-bg-no-repeat"
    >
      <q-card square class="tw-h-full tw-flex tw-bg-slate-900/70 text-warning">
        <q-card-section horizontal class="tw-w-[140px]">
          <div class="tw-h-full tw-w-full tw-relative">
            <h1
              class="md:tw-hidden tw-text-lg tw-text-emerald-200 tw-mx-10 tw-mt-4"
            >
              Teacher
            </h1>
            <q-avatar
              size="100px"
              font-size="52px"
              class="tw-absolute tw-bottom-0 tw-mx-[20px] tw-translate-y-[30%]"
            >
              <img src="../../../assets/img/student.png" />
            </q-avatar>
          </div>
        </q-card-section>
        <q-card-section horizontal class="tw-flex-1 tw-gap-x-1">
          <div class="tw-h-full tw-w-full tw-flex tw-items-center">
            <div class="tw-flex-1 tw-flex tw-justify-evenly">
              <div class="tw-flex-col">
                <div class="tw-flex tw-flex-col sm:tw-flex-row">
                  <span class="tw-text-md tw-text-emerald-200 sm:tw-mx-1.5"
                    >Username:
                  </span>
                  <span class="tw-text-emerald-400"> Bonga </span>
                </div>
                <div class="tw-flex tw-flex-col sm:tw-flex-row">
                  <span class="tw-text-md tw-text-emerald-200 sm:tw-mx-1.5"
                    >First Name:
                  </span>
                  <span class="tw-text-emerald-400"> Bongani</span>
                </div>
                <div class="tw-flex tw-flex-col sm:tw-flex-row">
                  <span class="tw-text-md tw-text-emerald-200 sm:tw-mx-1.5"
                    >Last Name:
                  </span>
                  <span class="tw-text-emerald-400"> Blom </span>
                </div>
              </div>
              <q-separator dark vertical class="sm:tw-hidden" />

              <div class="tw-flex-col">
                <p class="tw-flex tw-flex-col sm:tw-flex-row">
                  <span class="tw-text- tw-text-emerald-200 sm:tw-mx-1.5"
                    >Email:
                  </span>
                  <span class="tw-text-emerald-400"> bonga@gmail.com </span>
                </p>
                <p class="tw-flex tw-flex-col sm:tw-flex-row">
                  <span class="tw-text- tw-text-emerald-200 sm:tw-mx-1.5"
                    >Phone:
                  </span>
                  <span class="tw-text-emerald-400"> +266 56794665 </span>
                </p>
              </div>
            </div>
            <div class="tw-hidden md:tw-inline tw-flex-1 tw-text-center">
              <span class="tw-text-4xl tw-text-emerald-200">Admin</span>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </section>

    <section class="tw-mt-8 tw-p-1 tw-flex tw-flex-col sm:tw-flex-row">
      <q-card
        flat
        class="q-pa-md tw-mx-6 tw-flex-1 tw-bg-slate-200"
        style="max-width: 350px"
      >
        <q-toolbar class="text-white tw-text-emerald-400">
          <q-toolbar-title class="tw-text-2xl"
            >Personal Details</q-toolbar-title
          >
        </q-toolbar>
        <div class="tw-flex tw-flex-col tw-px-6">
          <p class="tw-flex tw-flex-col">
            <span class="tw-text-xl tw-text-emerald-500"> Gender: </span>
            <span class="tw-text-emerald-400 tw-text-lg"> Male </span>
          </p>
          <p class="tw-flex tw-flex-col">
            <span class="tw-text-xl tw-text-emerald-500"> Birth Date:</span>
            <span class="tw-text-emerald-400 tw-text-lg"> Male </span>
          </p>
          <p class="tw-flex tw-flex-col">
            <span class="tw-text-xl tw-text-emerald-500">
              Adress:
              <span>
                <q-icon name="edit" />
                <q-popup-edit v-model="label" auto-save v-slot="scope">
                  <q-input
                    v-model="scope.value"
                    autofocus
                    counter
                    @keyup.enter="scope.set"
                  />
                </q-popup-edit>
              </span>
            </span>

            <span class="tw-text-emerald-400">
              {{ label }}
            </span>
          </p>
        </div>
      </q-card>
      <q-card
        flat
        class="q-pa-md tw-mx-6 tw-flex-1 tw-bg-slate-200"
        style="max-width: 350px"
      >
        <q-toolbar class="text-white tw-text-emerald-400">
          <q-toolbar-title class="tw-text-2xl">Class Details</q-toolbar-title>
        </q-toolbar>
        <div class="tw-flex tw-flex-col tw-px-6">
          <p class="tw-flex tw-flex-col">
            <span class="tw-text-xl tw-text-emerald-500"> Classroom:</span>
            <span class="tw-text-emerald-400 tw-text-lg"> Grade 8 </span>
          </p>
          <p class="tw-flex tw-flex-col">
            <span class="tw-text-xl tw-text-emerald-500"> Birth Date:</span>
            <span class="tw-text-emerald-400 tw-text-lg"> Male </span>
          </p>
        </div>
      </q-card>

      <CourseList />
    </section>
  </q-page>
</template>
