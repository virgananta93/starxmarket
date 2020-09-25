<template>
  <div class="home">
    <Hero />
    <CoinBanner />
    <StarxMarkets />
    <!-- WHY STARMEX -->
    <div class="why-starmex">
      <b-container>
        <h2 class="starmex-title">Why Starmex Exchange?</h2>
        <hr class="divider my-4" />

        <!-- HIGHLIHTS -->
        <div class="highlight-service">
          <b-row class="my-5">
            <b-col>
              <b-row class="higlight-item">
                <b-col class="icon-column">
                  <div class="highlight-icon">
                    <span class="fa-stack fa-3x">
                      <i class="fa fa-circle-thin fa-stack-2x"></i>
                      <i class="fa fa-shield fa-stack-1x"></i>
                    </span>
                  </div>
                </b-col>
                <b-col cols="7" class="highlight-content">
                  <h3 class="icon-title" variant="warning">Secure</h3>
                  <p class="icon-text">
                    Starmex platform is convenience to use even for the first
                    time user.
                  </p>
                </b-col>
              </b-row>
            </b-col>
            <b-col>
              <b-row class="higlight-item">
                <b-col class="icon-column">
                  <div class="highlight-icon">
                    <span class="fa-stack fa-3x">
                      <i class="fa fa-circle-thin fa-stack-2x"></i>
                      <i class="fa fa-twitter fa-stack-1x"></i>
                    </span>
                  </div>
                </b-col>
                <b-col cols="7" class="highlight-content">
                  <h3 class="icon-title" variant="warning">Professional</h3>
                  <p class="icon-text">
                    Starmex platform is convenience to use even for the first
                    time user.
                  </p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <!-- section 2 -->
          <b-row class="my-5">
            <b-col>
              <b-row class="higlight-item">
                <b-col class="icon-column">
                  <div class="highlight-icon">
                    <span class="fa-stack fa-3x">
                      <i class="fa fa-circle-thin fa-stack-2x"></i>
                      <i class="fa fa-thumbs-up fa-stack-1x"></i>
                    </span>
                  </div>
                </b-col>
                <b-col cols="7" class="highlight-content">
                  <h3 class="icon-title" variant="warning">Convenience</h3>
                  <p class="icon-text">
                    Starmex platform is convenience to use even for the first
                    time user.
                  </p>
                </b-col>
              </b-row>
            </b-col>
            <b-col>
              <b-row class="higlight-item">
                <b-col class="icon-column">
                  <div class="highlight-icon">
                    <span class="fa-stack fa-3x">
                      <i class="fa fa-circle-thin fa-stack-2x"></i>
                      <i class="fa fa-globe fa-stack-1x"></i>
                    </span>
                  </div>
                </b-col>
                <b-col cols="7" class="highlight-content">
                  <h3 class="icon-title" variant="warning">Global</h3>
                  <p class="icon-text">
                    Starmex platform is convenience to use even for the first
                    time user.
                  </p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
    <!-- END -->
    <!-- JOIN STARMEX NOW -->
    <div class="join-starmex">
      <b-container>
        <h2 class="starmex-title">Join Starmex now!</h2>
        <h4 class="starmex-subtitle mt-3">
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Duis mollis, est non commodo luctus.
        </h4>
        <div class="button-join">
            <b-button variant="outline-warning">Button</b-button>
              <b-button variant="outline-warning">Button</b-button>

        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import CoinBanner from "@/components/CoinBanner.vue";
import StarxMarkets from "@/components/StarxMarkets.vue";
export default {
  name: "Home",
  components: {
    Hero,
    CoinBanner,
    StarxMarkets,
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/css/style.scss";

.starmex-title {
  color: $primary-starx-color;
  text-align: center;
  font-size: 3em;
}
.why-starmex {
  padding: 40px 0;
  background: #0d0d31;
  .divider {
    width: 130px;
    margin: 0 auto;
    border-top: 1px solid $primary-starx-color;
    padding-bottom: 50px;
  }

  .icon-title {
    color: $primary-starx-color;
    text-align: left;
  }
  .icon-text {
    text-align: left;
    color: #fff;
  }
  .highlight-service {
    margin: 0 auto;
    text-align: center;
    .my-5 {
      padding: 5rem 0;
    }
  }
  .higlight-item {
    display: inline-flex;
    align-items: center;
  }
  .highlight-icon {
    color: $primary-starx-color;
    font-size: 30px;
    text-align: center;
    vertical-align: middle;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  .icon-column {
    margin: 0 auto;
    vertical-align: middle;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 2px solid $primary-starx-color;
  }
}
.join-starmex {
  padding: 40px 0;
  background: #282a41;
  .starmex-title {
    font-weight: bold;
    font-size: 4em;
  }
  .starmex-subtitle {
    color: white;
    font-weight: 300;
}
}
</style>