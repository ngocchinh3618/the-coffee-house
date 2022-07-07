<template>
  <div v-if="item">
    <div id="id01" class="w3-modal text-sm">
      <div class="w3-modal-content shadow-bsd1 w-96 m-auto rounded-md overflow-auto h-96 bg-c-white1">
      <div class="flex border-b border-[#dee2e6] p-4 items-center">
        <span onclick="document.getElementById('id01').style.display='none'" class="w3-button">&times;</span>
        <p class="m-auto">Thêm món mới</p>
      </div>
      <div class="p-4">
        <div class="flex">
          <div class="w-36">
            <img class="rounded-md" src="https://minio.thecoffeehouse.com/image/admin/1639377904_bac-siu_400x400.jpg" alt="">
          </div>
          <div class="ml-4 w-56">
            <p>{{item.name}}</p>
            <p class="text-zinc-500">{{item.description}}</p>
            <div class="flex items-center justify-between">
              <span>{{item.price}}</span>
              <div class="flex items-center">
                <div>
                  <button class="bg-c-orange3 rounded-full w-9 h-[33px]">
                    <font-awesome-icon class="text-white w-5 h-5 mt-1" icon="fa-solid fa-plus"/>
                  </button>
                </div>
                <span class="mx-4">1</span>
                <div>
                  <button class="bg-c-orange3 rounded-full w-9 h-[33px]">
                    <font-awesome-icon class="text-white w-5 h-5 mt-1" icon="fa-solid fa-minus" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex bg-c-white1 border !border-gray-500 h-11 rounded-md mt-5">
          <span class="mt-[10px] mx-1">
            <font-awesome-icon class="w-10 h-5 text-gray-300" icon="fa-solid fa-file-lines" />
          </span>
          <input class="w-full focus:outline-none rounded-r-md" type="text" placeholder="Ghi chú thêm cho món này">
        </div>
      </div>
      <div class="bg-c-white1 h-10 mt-3">
        <p class="text-c-black2 pt-2 px-4">CHỌN SIZE (BẮT BUỘC)</p>
      </div>
        <div class="flex" v-for="(i,idx) in item.options" :key="idx" >
          <div class="flex my-2">
            <input class="mx-2" type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
            <div>
              <label for="vehicle1">{{i.name}}</label><br>
              <span>{{i.price}}</span>
            </div>
          </div>
        </div>
      <div class="bg-c-white1 h-10 mt-3">
        <p class="text-c-black2 pt-2 px-4">CHỌN topping (TÙY CHỌN)</p>
      </div>
      <div class="divide-y divide-slate-700 px-4">
        <div class="flex justify-between py-2">
          <div>
            <p>Kem Phô Mai Macchiato</p>
            <b>+ 10.000đ</b>
          </div>
          <div class="flex items-center">
            <div>
              <button class="bg-c-orange3 p-2 rounded-full">
                <img class="h-4 w-4" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMiIgdmlld0JveD0iMCAwIDE2IDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIyIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" alt="">
              </button>
            </div>
            <span class="mx-4">1</span>
            <div>
              <button class="bg-c-orange3 p-2 rounded-full">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuODU3MTQgNi44NTcxNFYwSDkuMTQyODZWNi44NTcxNEgxNlY5LjE0Mjg2SDkuMTQyODZWMTZINi44NTcxNFY5LjE0Mjg2SDBWNi44NTcxNEg2Ljg1NzE0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==" alt="">
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-between py-2">
          <div>
            <p>Kem Phô Mai Macchiato</p>
            <b>+ 10.000đ</b>
          </div>
          <div class="flex items-center">
            <div>
              <button class="bg-c-orange3 p-2 rounded-full">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuODU3MTQgNi44NTcxNFYwSDkuMTQyODZWNi44NTcxNEgxNlY5LjE0Mjg2SDkuMTQyODZWMTZINi44NTcxNFY5LjE0Mjg2SDBWNi44NTcxNEg2Ljg1NzE0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==" alt="">
              </button>
            </div>
            <span class="mx-4">1</span>
            <div>
              <button class="bg-c-orange3 p-2 rounded-full">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuODU3MTQgNi44NTcxNFYwSDkuMTQyODZWNi44NTcxNEgxNlY5LjE0Mjg2SDkuMTQyODZWMTZINi44NTcxNFY5LjE0Mjg2SDBWNi44NTcxNEg2Ljg1NzE0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==" alt="">
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-between py-2">
          <div>
            <p>Kem Phô Mai Macchiato</p>
            <b>+ 10.000đ</b>
          </div>
          <div class="flex items-center">
            <div>
              <button class="bg-c-orange3 p-2 rounded-full">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuODU3MTQgNi44NTcxNFYwSDkuMTQyODZWNi44NTcxNEgxNlY5LjE0Mjg2SDkuMTQyODZWMTZINi44NTcxNFY5LjE0Mjg2SDBWNi44NTcxNEg2Ljg1NzE0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==" alt="">
              </button>
            </div>
            <span class="mx-4">1</span>
            <div>
              <button class="bg-c-orange3 p-2 rounded-full">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuODU3MTQgNi44NTcxNFYwSDkuMTQyODZWNi44NTcxNEgxNlY5LjE0Mjg2SDkuMTQyODZWMTZINi44NTcxNFY5LjE0Mjg2SDBWNi44NTcxNEg2Ljg1NzE0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==" alt="">
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-3">
        <button class="w-3/4 h12 bg-c-orange3 rounded-full mb-2 text-c-white1">35.000đ - Thêm vào giỏ hàng</button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalItem',
  props:{
    item:{
      type: Object,
      default: () => ({})
    }
  },
}
</script>

<style>

</style>