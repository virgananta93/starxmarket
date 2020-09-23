<template>
<b-container fluid class="starxheader">
      <b-container>
    <b-nav fill>
    <b-nav-item active>STARX Markets</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
  </b-nav>
  </b-container>
</b-container>

  
</template>

<script>
export default {
    name: "StarxMarkets",
};
</script>

<style lang="scss" scoped>
    .starxheader{
        background-color:rgb(13, 13, 49);
        padding: 10px 0;
    }
</style>