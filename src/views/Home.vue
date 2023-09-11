<template>
  <Letter />
  <About />
  <Expertise />
  <Production />
  <Product />
  <!-- <News /> -->
  <Contact />
</template>

<script>
import Letter from "@/components/Letter.vue";
import About from "@/components/About.vue";
import Expertise from "@/components/Expertise.vue";
import Production from "@/components/Production.vue";
import Product from "@/components/Product.vue";
import News from "@/components/News.vue"
import Contact from "@/components/Contact.vue"

export default {
  components: {
    Letter,
    About,
    Expertise,
    Production,
    Product,
    News,
    Contact
  },
};
</script>

<style></style>
