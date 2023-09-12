<template>
  <header class="absolute header grid grid-cols-2">
    <div class="languages">
      <div class="active"><a href="#">FR</a></div>
      <div>|</div>
      <div class="passive"><a href="#">EN</a></div>
    </div>
    <a href="" class="">
      <img src="../assets/logo.svg" alt="" />
    </a>
  </header>
  <div class="menu-btn">
    <img src="../assets/menu.png" alt="" />
  </div>
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      const header = document.querySelector(".header");
      header.style.opacity = "1";
    }, 1000);
  },
};
</script>

<style scoped>
.header {
  opacity: 0;
  z-index: 75;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 2em;
}

.menu-btn {
  display: flex;
  justify-content: flex-end;
  padding-top: 2.1em;
  padding-right: 25px;
  position: fixed;
  z-index: 4;
  right: 0;
}

.languages {
  display: flex;
  padding-top: 20px;
  padding-left: 10px;
  font-size: 11px;
  font-family: "Montserrat", sans-serif !important;
  position: absolute;
  left: 0;
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
