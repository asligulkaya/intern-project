<template>
  <section class="section">
    <div class="flex">
      <div class="half-image">
        <img src="../assets/video-photo.jpg" alt="" />
      </div>
      <div class="half">
        <div class="title">
          <h4>Expertise</h4>
          <h2>Find out more about our expertise</h2>
        </div>
        <Pagination current="03" class="pagination" borderColor="white" />
        <p class="paragraph">
          Our family-run firm boasts decades of experience and an in-depth
          expertise in all the seafood products that we offer our customers.
        </p>
        <Button />
      </div>
    </div>
  </section>
  <Scroll text="next" class="next-btn" />
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
.half-image {
  opacity: 1;
  z-index: 3;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 50%;
}

.section {
  height: 90vh;
}

.half {
  position: relative;
  width: 50%;
  color: #023646;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  letter-spacing: 0.076em;
  font-family: "Zilla Slab", serif;
  padding: 0 10em;
}

.paragraph {
  font-family: "Montserrat", sans-serif;
  font-size: 100%;
  font-weight: 500;
  margin-top: 1.5em;
  line-height: 20px;
}
h2 {
  font-size: 237.5%;
  line-height: 40px;
}

h4 {
  font-weight: 400;
}

.pagination {
  left: -750px;
  z-index: 4;
  color: white;
}

.next-btn {
  margin-bottom: 52.5px;
  background-color: white;
}

</style>
