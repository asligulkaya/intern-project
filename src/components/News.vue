<template>
  <section id="news" class="section">
    <div class="container">
      <div class="middle-holder">
        <div class="middle">
          <div class="title">
            <h4>News</h4>
            <h2>The latest news from Crusta C, fresh in!</h2>
          </div>
          <div class="tiles-container">
            <Pagination current="06" class="pagination" borderColor="#023646" />
            <Carousel :items-to-show="3" :wrap-around="true">
              <Slide v-for="(image, id) in images" :key="id">
                <div class="carousel__item">
                  <a href=""><img :src="require(`../assets/news/${image.url}`)" alt="" /></a>
                </div>
              </Slide>
            </Carousel>
          </div>
          <Scroll text="next" page="#contact" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

import Scroll from "@/components/Scroll.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  components: {
    Carousel,
    Slide,
    Scroll,
    Pagination,
  },
  data() {
    return {
      images: [
        { id: 1, url: "1.png" },
        { id: 2, url: "2.png" },
        { id: 3, url: "3.png" },
        { id: 4, url: "4.png" },
        { id: 5, url: "5.png" },
        { id: 6, url: "6.png" },
        { id: 7, url: "7.png" },
        { id: 8, url: "8.png" },
      ],
    };
  },
};
</script>

<style scoped>
.section {
  height: 100vh;
}

.container {
  display: block;
  width: calc(100% - 10em);
  max-width: 100em;
  box-sizing: border-box;
  margin: 0 auto;
  height: 100%;
}

.middle-holder {
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
  color: #023646;
  font-family: "Zilla Slab", serif;
  padding-left: 20px;
}

h4 {
  font-weight: 400;
  letter-spacing: 0.076em;
}

h2 {
  font-size: 237.5%;
  font-weight: bold;
  letter-spacing: 0.025em;
}

.pagination {
  left: -60px;
  color: #023646;
}

.tiles-container {
  margin: 0 -0.5em 4em -0.5em;
  position: relative;
  display: flex;
  align-items: center;
}

.carousel__item {
  height: 85%;
}

.carousel__item img {
  max-width: 100%;
  max-height: 100%;
}
</style>
