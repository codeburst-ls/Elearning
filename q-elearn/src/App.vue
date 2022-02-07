<template>
  <router-view />
</template>
<script setup>
import { onMounted } from "vue";
import useAuth from "./hooks/useAuth";

const { authenticate } = useAuth();

onMounted(() => {
  authenticate();
});
</script>
