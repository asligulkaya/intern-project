<template>
  <section id="production" class="section">
    <div class="flex">
      <div class="half">
        <div class="title">
          <h4 data-aos="fade-left" data-aos-duration="1000">Expertise</h4>
          <h2
            data-aos="fade-left"
            data-aos-delay="350"
            data-aos-duration="1000"
          >
            Find out more about our production sites
          </h2>
        </div>
        <Pagination current="04" borderColor="#023646" />
        <p
          class="paragraph"
          data-aos="fade-left"
          data-aos-delay="450"
          data-aos-duration="1000"
        >
          We have four strategically-located, highly-efficient production sites
          in France which are ideally-sited to cater to the wider European
          market.
        </p>
        <Button
          data-aos="fade-left"
          data-aos-delay="650"
          data-aos-duration="1000"
        />
      </div>
      <div class="half-image">
        <img src="../assets/sites.jpg" alt="" />
      </div>
    </div>
  </section>
  <Scroll
    text="next"
    class="next-btn"
    page="#product"
  />
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

.next-btn {
  margin-bottom: 52.5px;
  background-color: white;
}
</style>
