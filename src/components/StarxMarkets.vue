<template>
  <div class="starlisting">
    <TabNav
      :tabs="['STARX Markets', 'USDT Markets', 'Favorites']"
      :selected="selected"
      @selected="setSelected"
    >
      <Tab
        :isSelected="selected === 'STARX Markets'"
        v-b-tooltip.hover
        title="This is virtual array list data"
      >
        <b-container class="star-listing-data">
          <StarxListing />
        </b-container>
      </Tab>

      <Tab :isSelected="selected === 'USDT Markets'">
        <b-container
          v-b-tooltip.hover
          title="This data is coming from COIN GECKO API NODE.JS AXIOS"
        >
          <b-table small justified :items="vendors" class="row-name" responsive>
          </b-table>
        </b-container>
      </Tab>

      <Tab
        :isSelected="selected === 'Favorites'"
        v-b-tooltip.hover
        title="This data is coming from COIN GECKO API NODE.JS AXIOS But with selected fields"
      >
        <b-table-simple responsive striped>
          <b-thead>
            <b-tr>
              <b-th v-for="field in fields_vendors" :key="field.id">
                {{ field }}
              </b-th>
            </b-tr>
          </b-thead>

          <b-tbody>
            <b-tr class="row-name" v-for="item in vendors" v-bind:key="item.id">
              <!-- image -->
              <b-td>
                <img
                  class="vendor-icon"
                  v-bind:src="item.image"
                  :alt="item.name"
                  v-b-tooltip.hover
                  v-bind:title="item.name"
                />
              </b-td>
              <!-- name -->
              <b-td>{{ item.name }}</b-td>
              <b-td>{{ item.current_price }}</b-td>
              <b-td>{{ item.market_cap_rank }}</b-td>
              <b-td>{{ item.high_24h }}</b-td>
              <b-td>{{ item.low_24h }}</b-td>
              <b-td>{{ item.price_change_24h }}</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
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
      fields_vendors: [
        "logo",
        "name",
        "current price",
        "market cap rank",
        "high 24h",
        "low 24h",
        "price change 24h",
      ],
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
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
    onRowSelected(vendors) {
      this.favorite = vendors;
    },
  },
};
</script>

<style lang="scss" scoped>
.star-listing-data {
  margin-top: 50px;
}

.vendor-icon {
  max-width: 35px;
  margin: 0 auto;
}
.b-table-sticky-header,
.table-responsive,
[class*="table-responsive-"] {
  margin-bottom: 1rem;
  margin-top: 5rem;
}
@media all and (max-width: 767px) {
  .star-listing-data {
    margin-top: 0px;
  }

}
</style>