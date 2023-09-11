<template>
  <section class="section">
    <div class="container">
      <div class="middle-holder">
        <div class="middle">
          <div class="title">
            <h4>News</h4>
            <h2>The latest news from Crusta C, fresh in!</h2>
          </div>
          <div class="tiles-container">
            <carousel>
              <slide> Slide 1 Content </slide>
              <slide> Slide 2 Content </slide>
            </carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

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
.tiles-container {
  margin: 2em -0.5em 0 -0.5em;
  position: relative;
}
</style>