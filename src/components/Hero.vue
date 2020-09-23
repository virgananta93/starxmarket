<!-- HERO SECTION -->
<template>
  <div class="hero-image">
       <b-carousel controls
      indicators
      background="#ababab"
      img-width="1920"
      img-height="650">
       <b-carousel-slide 
        v-for="(item,i) in items"
      :key="i"
      :img-src="item.src">
        <h1>Hello world!</h1>
      </b-carousel-slide>
       </b-carousel>
  </div>
</template>

<script>
export default {
    name: "Hero",
    data () {
      return {
        items: [
          {
            src: 'https://ik.imagekit.io/virgananta/StarWork/pexels-photo-843700_kCSpaOBUk.jpeg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
};
</script>

<style>

</style>