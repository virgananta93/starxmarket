<template>
  <b-container fluid>
    <b-navbar toggleable="lg" id="nav" type="dark" class="fixed-top navbar">
      <b-navbar-toggle target="nav-collapse" class="ml-auto">
        <template v-slot:default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-compact-up" variant="dark"></b-icon>
          <b-icon v-else icon="list" variant="dark"></b-icon>
        </template>
      </b-navbar-toggle>
      
      <!-- Left aligned nav items -->
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Exchange</b-nav-item>
          <b-nav-item to="/">Product</b-nav-item>
          <b-nav-item to="/">Service</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Login</b-nav-item>
          <b-button class="register-btn align-middle" pill variant="warning" to="/">Register</b-button>
          <b-nav-item to="/">Support</b-nav-item>

          <!-- Language items -->
          <b-nav-item-dropdown right caret>
            <template v-slot:button-content>
              <img
                src="https://ik.imagekit.io/virgananta/tr:w-30,h-30,lo-true/StarWork/small_asset/language_icon_i6fdx21ChR.png"
              />
              <span class="sr-only">Language</span>
            </template>
            <b-dropdown-item href="#">ENG</b-dropdown-item>
            <b-dropdown-item href="#">ID</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
export default {
  name: "Navbar",
    mounted() {
      this.$nextTick(function(){
        window.addEventListener("scroll", function(){
          var navbar = document.getElementById("nav")
          var nav_classes = navbar.classList
          if(document.documentElement.scrollTop >= 150) {
            if (nav_classes.contains("shrink") === false) {
              nav_classes.toggle("shrink");
            }
          }
          else {
            if (nav_classes.contains("shrink") === true) {
              nav_classes.toggle("shrink");
            }
          }
        })
      })
    },
};
</script>

<style lang="scss" scoped>
.nav-collapse .navbar-nav {
    text-align: right;
}
.navbar.shrink{
  background: #0d0d31;
    -webkit-transition: all .25s ease-in-out;
    -moz-transition: all .25s ease-in-out;
    -ms-transition: all .25s ease-in-out;
    -o-transition: all .25s ease-in-out;
    transition: all .25s ease-in-out;
}
.navbar-nav {
    align-items: center;

    li {
    padding: 0 50px;

    a {
        color: #e2ac2f !important;
    }
}
}

.navbar-toggler {
    background-color: #ddc282 !important;
}

@media all and (max-width: 768px) {
    .navbar-nav>li {
        width: 50%;
        margin: 0 0 0 auto;
    }
}
</style>