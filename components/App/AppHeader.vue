<template>
  <div class="h-20 bg-c-orange1 flex items-center fixed top-0 right-0 left-0 mb-10 z-20">
    <div class="flex container mx-auto items-center text-white text-sm justify-between">
      <div class="w-44 mr-12 md:block hidden">
        <img src="https://order.thecoffeehouse.com/_nuxt/img/logo.174bdfd.svg" alt="logo">
      </div>
      <div>
        <div class="flex bg-c-orange2 rounded-full mr-8 p-2 items-center md:w-64">
          <div class="w-10">
            <img src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png" alt="drive">
          </div>
          <div class="pl-2 flex-1">
            <h5>
              Giao hang
            </h5>
            <p>
              tai: {{}}
            </p>
          </div>
          <div class="w-2">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDEzIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02LjUgNC40NTQ4N0wxMS4xNjY5IDBMMTIuNSAxLjI3MjU2TDYuNSA3TDAuNSAxLjI3MjU2TDEuODMzMTIgMEw2LjUgNC40NTQ4N1oiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4K" alt="vertor">
          </div>
        </div>
      </div>
      <div class="font-semibold md:block hidden">
        <nuxt-link class="ml-10" to="/product">Đặt hàng</nuxt-link>
        <nuxt-link class="ml-10" to="/news">Tin tức</nuxt-link>
        <nuxt-link class="ml-10" to="/checkOut">Cửa hàng</nuxt-link>
        <nuxt-link class="ml-10" to="/promotion">Khuyến mãi</nuxt-link>
        <a class="ml-10" href="https://hr.thecoffeehouse.com/">Tuyển dụng</a>
      </div>
      <div class="font-semibold md:hidden flex items-center justify-between text-c-orange1 bg-white fixed bottom-0 left-0 right-0 bsd1 h-16 shadow-bsd1 px-4 py-3">
        <nuxt-link class="text-center" to="/product">
          <font-awesome-icon icon="fa-solid fa-house" class="text-xl"/>
          <p>Trang chủ</p>
        </nuxt-link>
        <nuxt-link class="text-center" to="/news">
          <font-awesome-icon icon="fa-solid fa-mug-saucer" class="text-xl" />
          <p>Đặt hàng</p>
        </nuxt-link>
        <nuxt-link class="text-center" to="/store">
          <font-awesome-icon icon="fa-solid fa-newspaper" class="text-xl" />
          <p>Tin tức</p>
        </nuxt-link>
        <nuxt-link class="text-center" to="/promotion">
          <font-awesome-icon icon="fa-solid fa-store" class="text-xl" />
          <p>Cửa hàng</p>
        </nuxt-link>
      </div>
      <div class="ml-auto flex items-center">
        <div class="w-10">
          <img src="https://order.thecoffeehouse.com/_nuxt/img/Login.70dc3d8.png" alt="login">
        </div>
        <div class="w-18 mt-2">
          <img src="https://order.thecoffeehouse.com/_nuxt/img/Carticon.373916c.png" alt="cart">
        </div>
      </div>
    </div>  
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>