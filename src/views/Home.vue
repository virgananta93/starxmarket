<template>
  <div class="home">
   <Hero />
   <CoinBanner/>
   <StarxMarkets/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import CoinBanner from '@/components/CoinBanner.vue'
import StarxMarkets from '@/components/StarxMarkets.vue'
export default {
  name: 'Home',
    components: {
    Hero,
    CoinBanner,
    StarxMarkets,
  }
}
</script>
