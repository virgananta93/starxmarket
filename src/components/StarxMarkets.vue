<template>
  <div class="starlisting">
    <TabNav
      :tabs="['STARX Markets', 'USDT Markets', 'Favorites']"
      :selected="selected"
      @selected="setSelected"
    >
      <Tab :isSelected="selected === 'STARX Markets'">
        <b-container class="star-listing-data">
          <StarxListing />
        </b-container>
      </Tab>
      <Tab :isSelected="selected === 'USDT Markets'">
        <b-container>
          <b-table striped hover :items="vendors"></b-table>
        </b-container>
      </Tab>
      <Tab :isSelected="selected === 'Favorites'">
      </Tab>
    </TabNav>
  </div>
</template>

<script>
import axios from "axios";
import VueAxios from "vue-axios";
import TabNav from "@/components/TabNav.vue";
import Tab from "@/components/Tab.vue";
import StarxListing from "@/components/StarxListing.vue";
import Vue from "vue";

Vue.use(VueAxios, axios);

export default {
  name: "StarxMarkets",
  components: {
    TabNav,
    Tab,
    StarxListing,
  },
  data() {
    return {
      selected: "STARX Markets",
      vendors: [],
    };
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
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
.star-listing-data{
  margin-top: 50px;
}

</style>