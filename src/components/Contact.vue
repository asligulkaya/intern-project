<template>
  <section class="section">
    <div class="container">
    <Pagination current="07" class="pagination" borderColor="#023646"/>
      <div class="half">
        <div class="half-top">
          <div class="title">
            <h4>Contact</h4>
            <h2>Have you any questions ? Or perhaps a business need ?</h2>
          </div>
        </div>
        <div class="half-bottom">
          <p class="paragraph">
            If you would like to contact us, feel free to get in touch here.
          </p>
        </div>
      </div>
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
              d="M373.189 95.1774C255.553 -46.0038 94.6382 -13.7498 1 95.1774L63.437 141.184C136.188 65.7308 242.5 58.5385 308.725 141.184C352.151 216.802 352.548 259.197 308.725 334.814C246.438 412.269 142.75 421.423 63.437 334.814L1 384.822C125.233 514.533 265.176 502.229 373.189 380.021C434.022 289.812 439.787 202.652 373.189 95.1774Z"
              stroke="black"
            />
          </clipPath>
        </svg>
        <video class="svg-video" autoplay loop muted>
          <source src="../assets/waves.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Button class="btn" text="contact us" />
      </div>
    </div>
  </section>
</template>

<script>
import Button from "./Button.vue";
import Pagination from "./Pagination.vue";
export default {
  components: {
    Button,
    Pagination
  },
};
</script>

<style scoped>
.section {
  height: 100vh;
  z-index: -1;
  background: linear-gradient(to bottom, white 50%, #eaf3f7 50%);
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh; /* 80vh aslı 85vh berhan*/
  padding-top: 60px;
  font-family: "Zilla Slab", serif;
}

.svg-container {
  position: relative;
  overflow: hidden;
  opacity: 1;
  transform: rotateZ(180deg);
}

.svg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: url(#clip-path);
  transform: rotateX(180deg);
}
.btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-40%, -150%) rotate(180deg);
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border: 3px solid #e20953;
}
.btn:hover {
  background-color: #e20953;
  color: white;
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
.half {
  position: absolute;
  display: flex;
  flex-direction: column;
  float: left;
  width: 50%;
  box-sizing: border-box;
  padding-right: 15em;
  z-index: 9999;
  height: 100%;
  left: 100px;
  padding-left: 100px;
  color: #023646;
}
.half-top {
  height: 50%;
  display: flex;
  align-items: flex-end;
  margin-bottom: 1em;
  width: 54%;
}
.half-bottom {
  height: 50%;
  width: 60%;
}
.pagination{
    color:#023646;
}
</style>