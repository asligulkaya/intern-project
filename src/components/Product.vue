<template>
  <section class="section">
    <div class="container">
      <div class="middle-container">
        <div class="middle">
          <div class="title">
            <h4>Our product ranges</h4>
            <h2>Our three product ranges</h2>
          </div>
          <div class="tiles-container">
            <Pagination current="05" borderColor="white" class="pagination" />
            <div class="slick-list">
              <div class="product">
                <img src="../assets/product1.png" alt="" />
                <div class="g-label" id="product1">Prestige</div>
              </div>
              <div class="product">
                <img src="../assets/product2.png" alt="" />
                <div class="g-label" id="product2">Marinated</div>
              </div>
              <div class="product">
                <img src="../assets/product3.png" alt="" />
                <div class="g-label" id="product3">Tradition</div>
              </div>
            </div>
          </div>
          <div class="btn-div">
            <Button class="more-btn" />
            <Scroll text="next" class="next-btn" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "@/components/Button.vue";
import Scroll from "@/components/Scroll.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  components: {
    Button,
    Scroll,
    Pagination,
  },
};
</script>

<style scoped>
.section {
  height: 100vh;
  background-color: #023646;
}

.container {
  display: block;
  width: calc(100% - 10em);
  max-width: 100em;
  box-sizing: border-box;
  margin: 0 auto;
  height: 100%;
}

.middle-container {
  display: table;
  height: 100%;
  width: 100%;
}

.middle {
  vertical-align: middle;
  width: 100%;
  display: table-cell;
}

.title {
  font-family: "Zilla Slab", serif;
  color: white;
}

h2 {
  font-size: 237.5%;
  line-height: 40px;
}

h4 {
  font-weight: 400;
}

.pagination {
  color: white;
  margin-top: 150px;
}

.g-label {
  font-size: 100%;
  display: inline-block;
  font-family: "Montserrat";
  font-weight: 600;
  letter-spacing: 0.1875em;
  text-transform: uppercase;
  width: 10em;
  padding: 0.5em 0;
  text-align: center;
  color: white;
}

.slick-list {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
}

.product {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}

#product1 {
  background-color: #ae9861;
}

#product2 {
  background-color: #dd5700;
}

#product3 {
  background-color: #e20953;
}

.more-btn {
  color: white;
  border: 3px solid #e20953;
  background-color: #023646;
  margin-bottom: 40px;
}

.more-btn:hover {
  background-color: #e20953;
  color: #023646;
  transition: 0.2s;
}

.btn-div {
  text-align: center;
}

.next-btn {
  color: white;
}
</style>
