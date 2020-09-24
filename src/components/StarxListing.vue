<template>
  <div>
    <b-table
      ref="selectableTable"
      selectable
      :items="items"
      :fields="fields"
      @row-selected="onRowSelected"
      responsive="sm"
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
    <p>
      Selected Rows:<br />
      {{ favorite }}
    </p>
  </div>
</template>

<script>
export default {
  name: "StarxListing",
  data() {
    return {
      fields: ["favorite", "pair", "last_price", '24h_high'],
      items: [
        { isActive: false, pair: 21, last_price: "Larsen", '24h_high': "Shaw" },
        { isActive: false, pair: 89, last_price: "Geneva", '24h_high': "Wilson" },
        { isActive: true, pair: 38, last_price: "Jami", '24h_high': "Carney" },
      ],
      favorite: [],
    };
  },
  methods: {
    onRowSelected(items) {
      this.favorite = items;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/css/style.scss";

.bi-star-fill {
  color: $primary-starx-color;
}

.table > tbody > .table-active, .table > tbody > .table-active > th, .table > tbody > .table-active > td{
    background-color: red !important;
}
</style>