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
            <li><b-link class="text-muted" href="#">Stuff for developers</b-link></li>
            <li><b-link class="text-muted" href="#">Another one</b-link></li>
            <li><b-link class="text-muted" href="#">Last time</b-link></li>
          </ul>
        </div>
        <div class="col-lg col-5 col-md">
          <h5>Resources</h5>
          <ul class="list-unstyled text-small">
            <li><b-link class="text-muted" href="#">Resource</b-link></li>
            <li><b-link class="text-muted" href="#">Resource name</b-link></li>
            <li><b-link class="text-muted" href="#">Another resource</b-link></li>
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
    </footer>
  </b-container>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss" scoped>
@import './src/assets/css/style.scss';

    h5{
        color: $primary-starx-color;
    }
    a{
        color:rgba(207, 207, 207, 0.863) !important;
    }
    .star-footer{
        background: #0d0d31;
    }
</style>