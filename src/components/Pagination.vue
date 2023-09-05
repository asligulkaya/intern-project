<template>
  <div class="pagination">
    <div class="current">01</div>
    <div class="total">07</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.pagination {
  position: absolute;
  left: 15px;
}

.current {
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #023646;
  line-height: 1.5em;
}

.total {
  font-size: 13px;
  font-weight: 600;
  opacity: 0.5;
  line-height: 1.75em;
}
</style>
