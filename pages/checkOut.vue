<template>
  <div>
    <div class="mt-28">
      <VTitle
        :data-share-title="{
          icon: 'fa fa-file',
          title: 'Xác nhận đơn hàng',
          iconSearch: 'fa fa-file'
        }"
      />
    </div>
    <div class="grid grid-cols-2 container m-auto px-24">
      <div class="p-4">
        <div>
          <p class="font-semibold pb-1">Giao hàng</p>
        </div>
        <div class="flex mt-3">
          <div class="w-1/3">
            <img class="w-20" src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png" alt="">
          </div>
          <div class="ml-4">
            <p class="font-semibold"> address </p>
            <p class="line-clamp-2 overflow-y-hidden"> discription Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, eaque laborum molestiae quis tempore esse officia est harum magnam quia, facere velit quae obcaecati doloremque. Quo qui quisquam expedita officiis. </p>
          </div>
        </div>
        <div class="mt-4">
          <input class="w-full border focus:outline-none py-2 px-3" type="text" placeholder="tên người nhận">
        </div>
        <div class="mt-4">
          <input class="w-full border focus:outline-none py-2 px-3" type="text" placeholder="Số điện thoại">
        </div>
        <div class="mt-4">
          <input class="w-full border focus:outline-none py-2 px-3" type="text" placeholder="Thêm hướng dẫn giao hàng">
        </div>
      </div>
      <div class="ml-10 shadow-bsd1 rounded-md p-4 relative">
        <div class="flex justify-between">
          <p class="font-semibold">Các món đã chọn</p>
          <Nuxt-link class="p-2 rounded-full border" to="/product">Thêm món</Nuxt-link>
        </div>
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            <font-awesome-icon icon="fa fa-pen"
            class="text-c-orange6"/>
            <div class="ml-3">
              <p>Ten</p>
              <p>Size</p>
              <p>Xoa</p>
            </div>
          </div>
          <div>
            <p>Price</p>
          </div>
        </div>
        <div class="flex justify-between items-center p-3 bg-c-orange3 absolute w-full left-0 bottom-0 rounded-b-md">
          <div class="text-c-white1">
            <p>Thành tiền</p>
            <p>2</p>
          </div>
          <div>
            <button class="text-c-orange4 bg-c-white1 rounded-full p-2">Đặt hàng</button>
          </div>
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