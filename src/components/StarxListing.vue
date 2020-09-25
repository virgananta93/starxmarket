<template>
  <div class="star-listing">
    <b-table
      ref="selectableTable"
      selectable
      :items="items"
      :fields="fields"
      :filter="filter"
      @filtered="onFiltered"
      @row-selected="onRowSelected"
      responsive="sm"
      class="row-name"
    >
    
      <template v-slot:cell(favorite)="{ rowSelected }">
        <template v-if="rowSelected">
         
          <span aria-hidden="true"><b-icon icon="star-fill"></b-icon></span>

          <span class="sr-only">Favorite</span>
        </template>
        <template v-else>
          <span aria-hidden="true"><b-icon icon="star"></b-icon></span>
          <span class="sr-only">Not selected</span>
        </template>
      </template>
    </b-table>
    
     

    <b-row class="mb-3"> 
        <b-col v-for="item in favorite" v-bind:key="item.id">
           <p>You favorited <br>{{ item.pair }} with last price  {{ item.last_price }}</p>
           <b-toast id="fav-toast" v-bind:title="item.pair" auto-hide>
      Hello, world! This is a toast message.
    </b-toast>
        </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "StarxListing",
  data() {
    return {
      fields: [
        "favorite",
        "pair",
        "last_price",
        "24h_high",
        "24h_low",
        "24h_change",
        "24h_volume",
      ],
      items: [
        {
          isActive: false,
          pair: "BTC / STARX",
          last_price: "2131 / 1241",
          "24h_high": "3.600",
          "24h_low": "3.600",
          "24h_change": "+3.90%",
          "24h_volume": "77,123.07",
        },
        {
          isActive: false,
          pair: "LTC / STARX",
          last_price: "21413 / 3451",
          "24h_high": "0.00056",
          "24h_low": "0.3143",
          "24h_change": "-8.89%",
          "24h_volume": "77,123.07",
        },
        {
          isActive: false,
          pair: "ETH / STARX",
          last_price: "21413 / 3451",
          "24h_high": "0.00056",
          "24h_low": "0.3143",
          "24h_change": "+3.90%",
          "24h_volume": "77,123.07",
        },
        {
          isActive: false,
          pair: "DASH / STARX",
          last_price: "3142 / 12412",
          "24h_high": "0.55311",
          "24h_low": "0.312",
          "24h_change": "-8.90%",
          "24h_volume": "77,123.07",
        },
        {
          isActive: false,
          pair: "THETER / STARX",
          last_price: "2131 / 1241",
          "24h_high": "3.600",
          "24h_low": "3.600",
          "24h_change": "+3.90%",
          "24h_volume": "77,123.07",
        },
        {
          isActive: false,
          pair: "EOS / STARX",
          last_price: "21413 / 3451",
          "24h_high": "0.00056",
          "24h_low": "0.3143",
          "24h_change": "-8.89%",
          "24h_volume": "77,123.07",
        },
        {
          isActive: false,
          pair: "XRP / STARX",
          last_price: "3142 / 12412",
          "24h_high": "0.55311",
          "24h_low": "0.312",
          "24h_change": "+3.90%",
          "24h_volume": "77,123.07",
        },
        {
          isActive: false,
          pair: "NEO / STARX",
          last_price: "2131 / 1241",
          "24h_high": "3.600",
          "24h_low": "3.600",
          "24h_change": "-6.90%",
          "24h_volume": "77,123.07",
        },
        {
          isActive: false,
          pair: "TRX / STARX",
          last_price: "21413 / 3451",
          "24h_high": "0.00056",
          "24h_low": "0.3143",
          "24h_change": "+3.90%",
          "24h_volume": "77,123.07",
        },
        {
          isActive: false,
          pair: "BTT / STARX",
          last_price: "3142 / 12412",
          "24h_high": "0.55311",
          "24h_low": "0.312",
          "24h_change": "-7.90%",
          "24h_volume": "77,123.07",
        },
      ],
      favorite: [],
    };
  },
  methods: {
    onRowSelected(items) {
      this.favorite = items;
       this.$bvToast.show('fav-toast');
    },
    setFavorited(data) {
      this.favorite = data;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/css/style.scss";

.bi-star,
.bi-star-fill {
  color: $primary-starx-color;
}
</style>