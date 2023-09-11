<template>
  <footer>
    <div class="row">
      <div class="elements">
        <div class="logo">
          <a href="">
            <img src="../assets/logo_light.svg" alt="" class="img" />
          </a>
        </div>
        <div class="mobile">
          <div>ZI BUCONIS</div>
          <div>32600 L'ISLE JOURDAIN</div>
          <div>05 62 07 21 44</div>
        </div>
        <div class="links">
          <a class="links-a" href="/en/site-map/">Site map</a>
          <a class="links-a" href="/en/legal-information/">Legal information</a>
          <a class="links-a" href="/en/legal-information/">Cookies</a>
        </div>
        <div class="icons">
          <div class="holder">
            <div class="middle">
              <a
                class="facebook social-sharing"
                href="https://www.facebook.com/groupe.crustac"
                >&nbsp;</a
              >
              <a
                class="linkedin social-sharing"
                href="https://www.linkedin.com/company/9800326"
                >&nbsp;</a
              >
              <a
                class="youtube social-sharing"
                href="https://www.youtube.com/user/GroupeCrustac"
                >&nbsp;</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="made">
      <div class="centered">
        <div class="akbgc">
            <span>
                © 2023 - Website made by A.K. and B.G.C.
            </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  display: block;
  background-color: #023646;
  color: white;
  width: 100%;
  position: relative;
}
.row {
  padding: 3em 0;
}
.elements {
  display: flex;
  width: calc(100% - 10em);
  max-width: 96em;
  box-sizing: border-box;
  margin: 0 auto;
  height: 100%;
}
.logo {
  width: 17.5em;
}
.img {
  height: 2em;
  margin-top: -0.5em;
}
.mobile {
  width: 20em;
  height: 2em;
  margin-top: -0.5em;
  font-size: 81.25%;
  line-height: 1.4615em;
  font-family: "Montserrat";
  font-weight: 500;
  letter-spacing: 0.09em;
}
.links {
  display: block;
  width: 20em;
  font-size: 81.25%;
  line-height: 1.4615em;
  font-family: "Montserrat";
  font-weight: 500;
  letter-spacing: 0.09em;
  height: 2em;
  margin-top: -0.5em;
}
.links-a {
  display: block;
}
.icons {
  position: absolute;
  float: right;
  right: 0;
  top: 0;
  bottom: 0;
  margin-right: 60px;
}
.holder {
  display: table;
  height: 100%;
  width: 100%;
}
.middle {
  vertical-align: middle;
  width: 100%;
  display: table-cell;
}
.social-sharing {
  display: inline-block;
  width: 2em;
  height: 2em;
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
  margin-left: 5.5em;
}
.facebook {
  background-image: url("../assets/icons/facebook.svg");
}
.linkedin {
  background-image: url("../assets/icons/linkedin.svg");
}
.youtube {
  background-image: url("../assets/icons/youtube.svg");
}
.made {
  padding: 0 0 1em 0;
}
.centered {
  display: block;
  width: calc(100% - 10em);
  max-width: 96em;
  box-sizing: border-box;
  margin: 0 auto;
  height: 100%;
}
.akbgc {
  font-size: 81.25%;
  line-height: 1.4615em;
  font-family: "Montserrat";
  font-weight: 500;
  letter-spacing: 0.09em;
  text-align: center;
}
</style>