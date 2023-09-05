<template>
  <header class="absolute">
    <div class="languages">
      <div class="active"><a href="#">FR</a></div>
      <div>|</div>
      <div class="passive"><a href="#">EN</a></div>
    </div>
  </header>
</template>
<script>
export default {};
</script>

<style scoped>
.languages {
  display: flex;
  padding-top: 20px;
  padding-left: 10px;
  font-size: 11px;
  font-family: "Montserrat", sans-serif !important;
}

.active {
  font-weight: 600;
  line-height: 1.5em;
  padding: 0px 5px;
}

.passive {
  font-weight: 600;
  opacity: 0.5;
  line-height: 1.5em;
  padding: 0px 5px;
}
</style>
