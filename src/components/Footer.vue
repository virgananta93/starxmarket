<template>
  <b-container fluid class="star-footer">
    <footer class="container py-5 footer">
      <div class="row">
        <div class="col-lg col-5 col-md">
          <h5>Features</h5>
          <ul class="list-unstyled text-small">
            <li><b-link class="text-muted" href="#">About</b-link></li>
            <li><b-link class="text-muted" href="#">Terms</b-link></li>
            <li><b-link class="text-muted" href="#">Team feature</b-link></li>
            <li>
              <b-link class="text-muted" href="#">Stuff for developers</b-link>
            </li>
            <li><b-link class="text-muted" href="#">Another one</b-link></li>
            <li><b-link class="text-muted" href="#">Last time</b-link></li>
          </ul>
        </div>
        <div class="col-lg col-5 col-md">
          <h5>Resources</h5>
          <ul class="list-unstyled text-small">
            <li><b-link class="text-muted" href="#">Resource</b-link></li>
            <li><b-link class="text-muted" href="#">Resource name</b-link></li>
            <li>
              <b-link class="text-muted" href="#">Another resource</b-link>
            </li>
            <li><b-link class="text-muted" href="#">Final resource</b-link></li>
          </ul>
        </div>
        <div class="col-lg col-5 col-md">
          <h5>Resources</h5>
          <ul class="list-unstyled text-small">
            <li><b-link class="text-muted" href="#">Business</b-link></li>
            <li><b-link class="text-muted" href="#">Education</b-link></li>
            <li><b-link class="text-muted" href="#">Government</b-link></li>
            <li><b-link class="text-muted" href="#">Gaming</b-link></li>
          </ul>
        </div>
        <div class="col-lg col-5 col-md">
          <h5>About</h5>
          <ul class="list-unstyled text-small">
            <li><b-link class="text-muted" href="#">Team</b-link></li>
            <li><b-link class="text-muted" href="#">Locations</b-link></li>
            <li><b-link class="text-muted" href="#">Privacy</b-link></li>
            <li><b-link class="text-muted" href="#">Terms</b-link></li>
          </ul>
        </div>
      </div>
      <div class="socialmediafooter">
        <ul class="social-network social-circle">
          <li>
            <a href="#" class="icoFacebook" title="Facebook"
              ><i class="fa fa-facebook"></i
            ></a>
          </li>
           <li>
            <a href="#" class="icoTwitter" title="Twitter"
              ><i class="fa fa-twitter"></i
            ></a>
          </li>
          <li>
            <a href="#" class="icoLinkedin" title="Linkedin"
              ><i class="fa fa-linkedin"></i
            ></a>
          </li>
        </ul>
      </div>
      <hr class="my-3 shine"/>
      <div class="row">
        <div class="col-md-12 copy">
          <p class="text-center">
            &copy; Copyright 2020 - Starmex.com. All rights reserved. made with VUE.JS by <b-link href="http://i-am-virga.web.app/" target="_blank">Virgananta</b-link>
          </p>
        </div>
      </div>
    </footer>
  </b-container>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import "./src/assets/css/style.scss";

h5 {
  color: $primary-starx-color;
}
a {
  color: rgba(207, 207, 207, 0.863) !important;
}
.star-footer {
  background: #0d0d31;
}
/* footer social icons */
.copy {
  font-size: 16px;
  padding: 10px;
  color: #fff;
}

.footer-middle {
  padding-top: 2em;
  color: #fff;
}

/*SOCİAL İCONS*/

/* footer social icons */

ul.social-network {
  list-style: none;
  display: inline;
  margin-left: 0 !important;
  padding: 0;
}

ul.social-network li {
  display: inline;
  margin: 0 5px;
}

.social-network a.icoFacebook:hover {
  background-color: #3b5998;
}

.social-network a.icoLinkedin:hover {
  background-color: #007bb7;
}
.social-network a.icoTwitter:hover {
  background-color: #1ba9f0;
}
.social-network a.icoFacebook:hover i,
.social-network a.icoTwitter:hover i,
.social-network a.icoLinkedin:hover i {
  color: #fff;
  font-size: 35px;
}

.social-network a.socialIcon:hover,
.socialHoverClass {
  color: #44bcdd;
}

.social-circle li a {
  display: inline-block;
  position: relative;
  margin: 0 auto 0 auto;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  text-align: center;
    width: 40px;
    height: 40px;
    font-size: 25px;
}

.social-circle li i {
  margin: 0;
  line-height: 30px;
  text-align: center;
}

.social-circle li a:hover i,
.triggeredHover {
  -moz-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  -ms--transform: rotate(360deg);
  transform: rotate(360deg);
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  -ms-transition: all 0.2s;
  transition: all 0.2s;
}

.socialmediafooter {
    display: flex;
    align-items: center;
    justify-content: center;
}

.social-circle i {
  color: $primary-starx-color;
  -webkit-transition: all 0.8s;
  -moz-transition: all 0.8s;
  -o-transition: all 0.8s;
  -ms-transition: all 0.8s;
  transition: all 0.8s;
}

.social-network a {
  background-color: transparent;
}
.shine {
  height: 2px;
  width: 60%;
  background-image: radial-gradient(
    farthest-side at 50% -50%,
    hsla(0, 16%, 96%, 0.5),
    hsla(0, 7%, 92%, 0));
  position: relative; 
}

.shine::before {
  height: 1px;
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  background-image: linear-gradient(
    90deg,
    hsla(0, 0%, 0%, 0),
    hsla(0, 0%, 0%, 0.75) 50%,
    hsla(0, 0%, 0%, 0));
}
</style>