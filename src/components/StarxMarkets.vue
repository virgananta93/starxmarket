<template>
  <b-container fluid class="starxheader">
    <b-container>
      <b-nav fill>
        <b-nav-item active>STARX Markets</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"
            >Search</b-button
          >
        </b-nav-form>
      </b-nav>
    </b-container>
     <b-table striped hover :items="vendors"></b-table>
  </b-container>
</template>

<script>
import axios from "axios";
import VueAxios from "vue-axios";
import Vue from "vue";

Vue.use(VueAxios, axios);

export default {
  name: "StarxMarkets",
  data() {
    return {
      vendors: [],
    };
  },
  mounted() {
    Vue.axios
      .get(
        "https://coingecko.p.rapidapi.com/coins/markets?page=1&per_page=10&order=market_cap_desc&vs_currency=usd",
        {
          headers: {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "coingecko.p.rapidapi.com",
            "x-rapidapi-key":
              "263ef54c74mshaf2469e5f43e457p138478jsne1daf7d36ad0",
            useQueryString: true,
          },
        }
      )
      .then((response) => {
        this.vendors = response.data;
        console.log(response.data);
      });
  },
};
</script>

<style lang="scss" scoped>
.starxheader {
  background-color: rgb(13, 13, 49);
  padding: 10px 0;
}
</style>