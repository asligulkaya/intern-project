<template>
  <Letter />
  <About />
  <Expertise />
  <Production />
</template>

<script>
import Letter from "@/components/Letter.vue";
import About from "@/components/About.vue";
import Expertise from "@/components/Expertise.vue";
import Production from "@/components/Production.vue";

export default {
  components: {
    Letter,
    About,
    Expertise,
    Production,
  },
};
</script>

<style></style>
