<template>
  <div class="home">
   <Hero />
   <CoinBanner/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import CoinBanner from '@/components/CoinBanner.vue'
export default {
  name: 'Home',
    components: {
    Hero,
    CoinBanner,
  }
}
</script>
