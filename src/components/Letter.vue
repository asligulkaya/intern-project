<template>
  <section class="section">
    <Header/>
    <div class="letter-container">
      <Pagination current="01"/>
      <div class="svg-container">
        <svg
          width="422"
          height="478"
          viewBox="0 0 422 478"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <clipPath id="clip-path">
            <path
              d="M48.8108 95.1774C166.447 -46.0038 327.362 -13.7498 421 95.1774L358.563 141.184C285.812 65.7308 179.5 58.5385 113.275 141.184C69.8493 216.802 69.4524 259.197 113.275 334.814C175.562 412.269 279.25 421.423 358.563 334.814L421 384.822C296.767 514.533 156.824 502.229 48.8108 380.021C-12.0215 289.812 -17.7872 202.652 48.8108 95.1774Z"
              stroke="black"
            />
          </clipPath>
        </svg>
        <video class="svg-video" autoplay loop muted>
          <source src="../assets/ocean.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <Scroll text="scroll"/>
  </section>
</template>

<script>
import Pagination from "./Pagination.vue";
import Header from "./Header.vue"
import Scroll from "./Scroll.vue";

export default {
  mounted() {
    setTimeout(() => {
      const svgContainer = document.querySelector(".svg-container");
      const pgnAnimation = document.querySelector(".pagination");
      svgContainer.style.opacity = "1";
      svgContainer.style.transition ="0.6s"
      pgnAnimation.style.opacity = "1";
    }, 1500);
  },
  components: {
    Pagination,
    Scroll,
    Header
  },
};
</script>

<style scoped>
@keyframes fade-in {
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}

.section {
  background-image: url("../assets/sea.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;
  z-index: -1;
  font-family: "Montserrat Alternates", sans-serif;
}
.letter-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh; /* 80vh aslı 85vh berhan*/
  padding-top: 60px;
}

.svg-container {
  position: relative;
  overflow: hidden;
  opacity: 0;
}

.svg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: url(#clip-path);
}
.pagination {
  opacity: 0;
}
</style>
