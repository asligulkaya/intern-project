<template>
  <a href="" class="button">
    <span>{{ text }}</span>
  </a>
</template>

<script>
export default {
  props:{
    text:{
      type:String,
      default:"find out more"
    }
  }
};
</script>

<style scoped>
.button {
  position: relative;
  display: inline-block;
  height: 2.75em;
  margin-top: 2.5em;
  padding: 0 2em;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 1.375em;
  color: #023646;
  border: 3px solid #023646;
  background-color: white;
}
.button:hover {
  background-color: #023646;
  color: white;
  transition: 0.2s;
}

span {
  font-weight: 600;
  font-size: 86%;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  line-height: 2.75em;
}
</style>