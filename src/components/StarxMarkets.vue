<template>
  <b-container fluid>
    <b-tabs content-class="mt-3" justified>
     <b-tab active>
      <template v-slot:title>
       <p>STARX Markets</p>
      </template>
      <p class="p-3">STARX Markets</p>
    </b-tab>

    <b-tab>
      <template v-slot:title>
        <b-spinner type="border" small></b-spinner> Tab 2
      </template>
      <p class="p-3">Tab contents 2</p>
    </b-tab>
    </b-tabs>
  </b-container>
</template>

<script>
export default {
    name: "StarxMarkets",
};
</script>

<style>
</style>