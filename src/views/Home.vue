<template>
  <Letter />
  <About />
  <Expertise />
  <Production />
  <Product />
</template>

<script>
import Letter from "@/components/Letter.vue";
import About from "@/components/About.vue";
import Expertise from "@/components/Expertise.vue";
import Production from "@/components/Production.vue";
import Product from "@/components/Product.vue";

export default {
  components: {
    Letter,
    About,
    Expertise,
    Production,
    Product
  },
};
</script>

<style></style>
