<!-- HERO SECTION -->
<template>
  <div class="hero-image">
    <b-carousel controls indicators background="#ababab" img-width="1920" img-height="650">
      <b-carousel-slide v-for="(item,i) in items" :key="i" :img-src="item.src">
        <div class="hero-tagline">
          <h1>
            <strong>{{ item.tagline_strong }}</strong>
            <small>{{ item.tagline_small}}</small>
          </h1>
          <b-button class="hero-register-btn" to="/">{{ item.button}}</b-button>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      items: [
        {
          src:
            "https://ik.imagekit.io/virgananta/tr:w-1920,h-700,f-jpg,pr-true/StarWork/pexels-photo-843700_kCSpaOBUk.jpeg",
          tagline_strong: "The Future Standard of Cryptocurrency Exchange",
          tagline_small: "Your one stop exchange trusted exchange service",
          button: "Register Now",
        },
        {
          src:
            "https://ik.imagekit.io/virgananta/tr:w-1920,h-700,f-jpg,pr-true/StarWork/photo-1590283603385-17ffb3a7f29f_6PUBfPBOn.jpg",
            tagline_strong: "Trustworthy Service",
          tagline_small: "Your one stop exchange trusted exchange service",
          button: "Register Now",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import './src/assets/css/style.scss';

.hero-tagline {
    position: absolute;
    bottom: 15rem;
    width: 60%;
    text-align: left;

  strong {
    display: block;
     font-size: 1.5em;
     color: #ffb915;
  }

  .hero-register-btn{
      font-size: 1.5em;
      background: none;
      border-color: #ffb915 !important;
      padding: 10px 20px;
      vertical-align: middle;
      margin-top: 20px;
    &:hover{
        background-color: $primary-starx-color;
      }
  }
}
</style>