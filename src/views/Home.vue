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
          <b-col>
            <b-link to="/"
              ><b-button pill variant="outline-warning"
                >Register Now</b-button
              ></b-link
            >
          </b-col>
          <b-col>
            <b-link to="/"
              ><b-button pill variant="outline-warning"
                >Exchange</b-button
              ></b-link
            >
          </b-col>
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
  padding: 6em 0;
  background: #191b2b;
  .starmex-title {
    font-weight: bold;
    font-size: 4em;
  }
  .starmex-subtitle {
    color: #fff;
    font-weight: 300;
  }
  .button-join {
    display: flex;
    width: 50%;
    margin: 0 auto;
    margin-top: 40px;
    text-align: center;
    .col .btn {
      width: 250px;
      padding: 16px;
    }
  }
}

@media all and (max-width: 767px) {
  .why-starmex {
    .highlight-icon {
      font-size: 15px;
    }
    .highlight-service .my-5{
      padding: 2rem 0;
      margin: 0!important;
    }
    .highlight-service{
      padding: 20px 0;
    }
    .icon-column{
      border: 0;
    }
    .icon-text,.icon-title{
      text-align:center;
      margin-top: 15px;
    }
    .highlight-content.col-7{
      max-width: 100% !important;
      flex: auto;
    }
  }
  .join-starmex {
    padding: 40px 0;
    .starmex-title {
      font-size: 3em;
    }
    .starmex-subtitle {
      font-size: 1.3em;
      line-height: 30px;
      text-align: justify;
      text-align-last: center;
    }
    .button-join {
      width: 100%;
      display: block;
      padding-top: 20px;
      .col:first-of-type {
        margin-bottom: 15px;
      }
    }
  }
}
</style>