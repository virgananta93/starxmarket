<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer
  },
  
};
</script>

<style lang="scss">
@import "./src/assets/css/style.scss";

 .table.b-table > tbody > .table-active, .table.b-table > tbody > .table-active > th, .table.b-table > tbody > .table-active > td{
   background-color:transparent !important;
 }

 .star-listing .table tr:nth-of-type(odd) td:nth-of-type(6) {
    color: red;
}
 .star-listing .table tr:nth-of-type(even) td:nth-of-type(6) {
    color: green;
}
th {
    color: $primary-starx-color !important;
}

@media all and (max-width:767px){
  .fixed-top{
    background: #0d0d31;
}
}
</style>