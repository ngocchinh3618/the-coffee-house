<template>
  <div class="z-10 mt-20 bg-c-orange2 w-full text-center m-auto pb-7">
    <VueSlickCarousel v-bind="settings">
      <div class="!flex justify-center px-7 pt-7" v-for="(i,idx) in imgCarousel">
        <img :src="i.src" alt="">
      </div>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'VCarousel',
    components: { VueSlickCarousel },
    data () {
      return {
        settings: {
          arrows: false,
          dots: true,
          autoplay: true,
          autoplaySpeed: 5000,
        },
        imgCarousel:[
          {
            src: "https://minio.thecoffeehouse.com/image/admin/1656113424_banner-web.jpg"
          },
          {
            src: "https://minio.thecoffeehouse.com/image/admin/1654013136_banner-web-2.jpg"
          },
          {
            src: "https://minio.thecoffeehouse.com/image/admin/1654013040_banner-web.jpg"
          },
          {
            src: "https://minio.thecoffeehouse.com/image/admin/1654013393_banner-web.jpg"
          },
          {
            src: "https://minio.thecoffeehouse.com/image/admin/1655998010_1200x480.jpg"
          }
        ]
      }
    }
  }
</script> 
