<template>
  <Header />
  <Letter />
  <Scroll />
</template>

<script>
import Header from "@/components/Header.vue";
import Letter from "@/components/Letter.vue";
import Scroll from "@/components/Scroll.vue";

export default {
  components: {
    Letter,
    Scroll,
    Header,
  },
};
</script>

<style></style>
