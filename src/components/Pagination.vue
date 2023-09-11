<template>
  <div class="pagination">
    <div class="current" :style="{ 'border-bottom': '1px solid ' + borderColor}">{{ current }}</div>
    <div class="total">07</div>
  </div>
</template>

<script>
export default {
  props:{
    current:{
      type: Number,
    },
    borderColor: {
      type: String,
    },
    color:{
      type:String,
    }
  }
};
</script>

<style scoped>
.pagination {
  position: absolute;
  left: 15px;
  font-family: "Montserrat Alternates", sans-serif;
}

.current {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5em;
}

.total {
  font-size: 13px;
  font-weight: 600;
  opacity: 0.5;
  line-height: 1.75em;
}
</style>
