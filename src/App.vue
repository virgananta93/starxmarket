<template>
  <div id="app">
    <Navbar />
    <router-view />
    <div class="container">
      
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";


export default {
  components: {
    Navbar,
  },
  
};
</script>

<style lang="scss">
 .table.b-table > tbody > .table-active, .table.b-table > tbody > .table-active > th, .table.b-table > tbody > .table-active > td{
   background-color:transparent !important;
 }

 .star-listing .table tr:nth-of-type(odd) td:nth-of-type(6) {
    color: red;
}
 .star-listing .table tr:nth-of-type(even) td:nth-of-type(6) {
    color: green;
}
</style>