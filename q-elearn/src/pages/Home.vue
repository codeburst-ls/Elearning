<template>
  <q-page class="page">
    <section class="row tw-container tw-mx-auto">
      <div class="col-md-8 md:tw-pl-8">
        <h1 class="tw-text-3xl md:tw-text-6xl tw-my-4">
          Welcome To CodeB ELearn
        </h1>

        <p
          class="tw-leading-none tw-text-xl text-center md:tw-text-left md:tw-text-2xl md:tw-my-4"
        >
          The Race For Excellence Has No Finish Line, Working collaboratively to
          ensure every student achieves academically, socially, and emotionally.
          If you think education is expensive, try ignorance.
        </p>

        <!-- <span class="text-yellow-300"
          >Click below to get started with your own school</span
        > -->
        <div
          class="tw-flex tw-justify-center md:tw-justify-start tw-align-center md:tw-align-start tw-my-4"
        >
          <router-link :to="{ name: 'create-school' }">
            <q-btn
              rounded
              size="lg"
              color="warning"
              icon-right="send"
              label="Get Started"
            />
          </router-link>
        </div>
      </div>
      <div class="col-md-4 tw-gt-sm">
        <div class="tw-flex">
          <img
            src="../assets/img/avater.png"
            alt="avater"
            class="tw-pt-8 tw-mx-auto"
          />
        </div>
      </div>
    </section>
    <svg
      viewBox="0 0 1280 200"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Rectangle"
        fill="#FFFFFF"
        fill-rule="evenodd"
        stroke="none"
        d="M7.6294e-05 98.9949C7.6294e-05 98.9949 177.734 2.98023e-06 407.859 1.42109e-12C637.984 -2.98023e-06 702.465 98.9949 920.5 98.9949C1138.54 98.9949 1280 0 1280 0L1280 98.9949C1280 98.9949 1138.54 200 920.5 200C702.465 200 637.984 98.9949 407.859 98.9949C177.734 98.9949 7.6294e-05 200 7.6294e-05 200L7.6294e-05 98.9949Z"
        transform="translate(-7.6293945E-05 0)"
      />
    </svg>
    <section
      class="tw-container tw--auto tw-flex tw-flex-column md:tw-flex-row tw-bg-white tw-my-4 tw-h-20 tw-rounded-full"
    ></section>

    <svg
      viewBox="0 0 1280 200"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Rectangle"
        fill="#FFFFFF"
        fill-rule="evenodd"
        stroke="none"
        d="M7.6294e-05 98.9949C7.6294e-05 98.9949 177.734 2.98023e-06 407.859 1.42109e-12C637.984 -2.98023e-06 702.465 98.9949 920.5 98.9949C1138.54 98.9949 1280 0 1280 0L1280 98.9949C1280 98.9949 1138.54 200 920.5 200C702.465 200 637.984 98.9949 407.859 98.9949C177.734 98.9949 7.6294e-05 200 7.6294e-05 200L7.6294e-05 98.9949Z"
        transform="translate(-7.6293945E-05 0)"
      />
    </svg>
    <!-- <LoginDialog :seamless="seamless" /> -->
  </q-page>
</template>
