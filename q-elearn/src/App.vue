<script setup>
import { onMounted } from "vue";
import useAuth from "./hooks/useAuth";
import io from "socket.io-client";

const socket = io("http://localhost:1337");
const { authenticate } = useAuth();

onMounted(() => {
  authenticate();
});
</script>
<template>
  <router-view />
</template>
