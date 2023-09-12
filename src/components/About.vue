<template>
  <section class="section">
    <div class="container">
      <Pagination current="02" class="pagination" borderColor="#023646"/>
      <div class="circle">
        <div class="little-circle"></div>
        <img class="group-green" src="../assets/group-green.svg" alt="" />
      </div>
      <div class="half">
        <div class="title">
          <h4>Corporate identity</h4>
          <h2>
            Leading the way in our field
            <br />
            since 1993
            <br />
          </h2>
        </div>
        <p class="paragraph">
          We are the top supplier of cooked, refrigerated prawns to the French
          market and as such, we are constantly in the process of improving our
          product offering to cement our position as the go-to player on the
          seafood products scene.
        </p>
        <p class="paragraph">
          We’ve succeeded in doing this by maintaining a steady course over the
          last 27 years towards our end destination – a shared taste for
          innovation!
        </p>
        <Button />
      </div>
    </div>
  </section>
  <Scroll text="next" class="next-btn" />
</template>

<script>
import Pagination from "./Pagination.vue";
import Button from "./Button.vue";
import Scroll from "./Scroll.vue";

export default {
  components: {
    Pagination,
    Button,
    Scroll,
  },
};
</script>

<style scoped>
.half {
  position: relative;
  float: left;
}

.pagination {
  top: 150vh;
}
.circle {
  opacity: 1;
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 53%;
  margin-top: -18.5em;
  margin-left: -18.5em;
  display: inline-block;
  top: 155vh;
  width: 30em;
  height: 30em;
  background-image: url("../assets/waves.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 50%;
  display: flex;
  align-items: center;
}
.little-circle {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20em;
  height: 20em;
  margin-top: -10em;
  margin-left: -10em;
  background-color: white;
  border-radius: 50%;
}
.section {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 90vh; /* 90dı */
  z-index: -1;
  max-width: 70em;
}
.container {
  color: #023646;
  padding-top: 10em;
  padding-right: 8em;
  margin: 0 auto;
  width: 50%;
  box-sizing: border-box;
  letter-spacing: 0.076em;
  font-family: "Zilla Slab", serif;
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

.group-green {
  z-index: 1;
  position: relative;
  left: 450px;
  width: 35%;
}

.next-btn {
  margin-bottom: 52.5px;
  background-color: white;
}
</style>
