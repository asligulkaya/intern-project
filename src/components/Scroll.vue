<template>
  <a href="#" class="scroll-btn">
    <span>{{text}}</span>
  </a>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      const scrollBtn = document.querySelector(".scroll-btn");
      scrollBtn.style.opacity = "1";
    
    }, 2000);
},
  props:{
    text:{
      type:String
    }
  }
}

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
