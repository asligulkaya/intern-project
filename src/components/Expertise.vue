<template>
  <section id="expertise" class="section">
    <div class="flex">
      <div class="half-image" @click="addActive">
        <img src="../assets/video-photo.jpg" alt="" />
        <div class="svg-play">
          <img class="svg-play-img" src="../assets/play.svg" alt="Play" />
        </div>
      </div>
      <div
        class="youtube-player-overlay"
        :class="{ active: isActive }"
        @click="removeActive"
      >
        <div class="youtube-player-popup">
          <iframe
            src="https://www.youtube.com/embed/0fU1cZ9Bl0I"
            title="Découvrez Crusta C en vidéo !"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="half">
        <div class="title">
          <h4 data-aos="fade-left" data-aos-duration="1000">Expertise</h4>
          <h2
            data-aos="fade-left"
            data-aos-delay="350"
            data-aos-duration="1000"
          >
            Find out more about our expertise
          </h2>
        </div>
        <Pagination current="03" class="pagination" borderColor="white" />
        <p
          class="paragraph"
          data-aos="fade-left"
          data-aos-delay="450"
          data-aos-duration="1000"
        >
          Our family-run firm boasts decades of experience and an in-depth
          expertise in all the seafood products that we offer our customers.
        </p>
        <Button
          data-aos="fade-left"
          data-aos-delay="650"
          data-aos-duration="1000"
        />
      </div>
    </div>
  </section>
  <Scroll
    text="next"
    class="next-btn"
    page="#production"
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
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    addActive() {
      this.isActive = true;
    },
    removeActive() {
      this.isActive = false;
    },
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
  display: flex;
  align-items: center;
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

.svg-play {
  position: absolute;
  left: 25%;
  transform: translate(-50%, -50%);
  z-index: 2;
  margin-top: 130px;
}

.svg-play-img {
  width: 75px;
  height: auto;
}

.svg-play-img:hover {
  width: 85px;
  transition: 0.4s;
}

.youtube-player-overlay {
  position: fixed;
  inset: 0;
  backdrop-filter: blur(5px);
  opacity: 0;
  pointer-events: none;
  z-index: 999;
  transition: all 400ms ease;
}

.youtube-player-overlay.active {
  opacity: 1;
  pointer-events: auto;
}

.youtube-player-popup {
  position: fixed;
  width: 80%;
  left: 50%;
  transform: translate(-50%, -100%);
  transition: all 1.5s ease;
}

.youtube-player-overlay.active .youtube-player-popup {
  transform: translate(-50%, 0);
}

.youtube-player-popup iframe {
  width: 100%;
  aspect-ratio: 16/9;
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
