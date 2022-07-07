<template>
  <div>
    <div class="grid grid-cols-2 container px-24 shadow-bsd1  mt-44 border m-auto">
      <div class="border p-6">
        <img class="rounded-md" src="https://minio.thecoffeehouse.com/image/admin/1639377926_bacsiunong.jpg" alt="">
      </div>
      <div class="border p-6">
        <p class="font-semibold text-3xl">Bạc Sỉu Nóng</p>
        <div class="flex justify-between items-center">
          <p>price</p>
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
        <div class="flex bg-c-white1 border !border-gray-500 h-11 rounded-md mt-5">
          <span class="w-5 h-4 m-3">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxOCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3IDIwSDFDMC43MzQ3ODQgMjAgMC40ODA0MyAxOS44OTQ2IDAuMjkyODkzIDE5LjcwNzFDMC4xMDUzNTcgMTkuNTE5NiAwIDE5LjI2NTIgMCAxOVYxQzAgMC43MzQ3ODQgMC4xMDUzNTcgMC40ODA0MyAwLjI5Mjg5MyAwLjI5Mjg5M0MwLjQ4MDQzIDAuMTA1MzU3IDAuNzM0Nzg0IDAgMSAwSDE3QzE3LjI2NTIgMCAxNy41MTk2IDAuMTA1MzU3IDE3LjcwNzEgMC4yOTI4OTNDMTcuODk0NiAwLjQ4MDQzIDE4IDAuNzM0Nzg0IDE4IDFWMTlDMTggMTkuMjY1MiAxNy44OTQ2IDE5LjUxOTYgMTcuNzA3MSAxOS43MDcxQzE3LjUxOTYgMTkuODk0NiAxNy4yNjUyIDIwIDE3IDIwWk01IDVWN0gxM1Y1SDVaTTUgOVYxMUgxM1Y5SDVaTTUgMTNWMTVIMTBWMTNINVoiIGZpbGw9IiNFNEU0RTQiLz4KPC9zdmc+Cg==" alt="">
          </span>
          <input class="w-full focus:outline-none rounded-r-md" type="text" placeholder="Ghi chú thêm cho món này">
        </div>
        <div class="rounded-md border mt-4">
          <div class="bg-c-white1 h-10 rounded-t-md">
            <p class="text-c-black2 pt-2 px-4">CHỌN SIZE (BẮT BUỘC)</p>
          </div>
          <div class="flex">
            <div class="flex my-2">
              <input class="mx-2" type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
              <div>
                <label for="vehicle1">Lớn</label><br>
                <span>price</span>
              </div>
            </div>
            <div class="flex my-2">
              <input class="mx-2" type="checkbox" id="vehicle2" name="vehicle2" value="Bike">
              <div>
                <label for="vehicle2">Vừa</label><br>
                <span>price</span>
              </div>
            </div>
            <div class="flex my-2">
              <input class="mx-2" type="checkbox" id="vehicle3" name="vehicle3" value="Bike">
              <div>
                <label for="vehicle3">Nhỏ</label><br>
                <span>price</span>
              </div>
            </div>
          </div>
          <div class="bg-c-white1 h-10 mt-3">
            <p class="text-c-black2 pt-2 px-4">CHỌN topping (TÙY CHỌN)</p>
          </div>
          <div class="divide-y divide-slate-700 px-4">
            <div class="flex justify-around py-2">
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
          </div>
        </div>
        <button class="mt-4 w-full h12 bg-c-orange3 rounded-full mb-2 text-c-white1">35.000đ - Thêm vào giỏ hàng</button>
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