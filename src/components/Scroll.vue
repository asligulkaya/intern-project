<template>
  <a :href="page" class="scroll-btn">
    <span>{{ text }}</span>
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    page: {
      type: String,
    }
  },
};
</script>

<style>
.scroll-btn {
  display: flex;
  justify-content: center;
  text-decoration: none;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 600;
  color: #023646;
  opacity: 1;
}
</style>
