<template>
  <div class="mt-20 text-white text-sm">
    <div class="bg-footer bg-no-repeat bg-center bg-cover py-20">
       <div class="container grid grid-cols-5 m-auto justify-between px-2">
        <div>
          <img src="https://order.thecoffeehouse.com/_nuxt/img/logo-footer.72c86fc.png" alt="thecoffeehouse">
        </div>
        <div class="col-span-4 grid md:grid-cols-4 sm:grid-cols-2 px-2">
          <div class="leading-6" v-for="(i,idx) in dataFooter" :key="idx">
            <div class="border-b-1 border-gray-700 py-3 sm:w-4/5">
              <input type="checkbox" :id="`touch${idx}`"> 
              <label for="touch" class="touchLabel">
                <font-awesome-icon class="icon-minus" icon="fa fa-minus"/>
                <font-awesome-icon class="icon-plus" icon="fa fa-plus"/>
                <span class="ml-2 font-bold">{{i.header}}</span>
              </label>
              <ul class="slide !list-disc pl-11">
                <li class="csp" @click="$router.push('/product')" v-for="(e,idx) in i.headerContent" :key="idx">
                  {{e.item}}</li>
              </ul>
            </div> 
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black py-3">
      <div class="container m-auto flex justify-between items-center">
        <div>
          <p>Copyright © 2021 The Coffee House. All rights reserved.</p>
        </div>
        <div>
          <a href="http://online.gov.vn/Home/WebDetails/48042">
            <img src="https://order.thecoffeehouse.com/_nuxt/img/active.4cba64f.png" alt="WebDetails">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      dataFooter: [
        {
          header: "Thông tin website",
          headerContent:[
            {
              item: "Trang chủ",
              url: "/"
            },
            {
              item: "Đặt hàng",
              url: "/product"
            },
            {
              item: "Tin tức",
              url: "/blogs"
            },
            {
              item: "Tuyển dụng",
              url: "/td"
            },
            {
              item: "Khuyến mãi",
              url: "/"
            },
          ]
        },
        {
          header: "Điều khoản sử dụng",
          headerContent:[
            {
              item: "Quy chế website",
              url: "/"
            },
            {
              item: "Quy chế website",
              url: "/product"
            }
          ]
        },
        {
          header: "Hotline",
          headerContent:[
            {
              item: "Đặt hàng 1800 6936 (07:00-20:30)",
              url: "/"
            },
            {
              item: "Hỗ trợ 028.71.087.088 (07:00-21:00)",
              url: "/product"
            }
          ]
        },
        {
          header: "Liên hệ",
          headerContent:[
            {
              item: "Trang chủ",
              url: "/"
            },
            {
              item: "Head Office 2: Floor 3 & 4 The Hub Building - 195/10E Dien Bien Phu, Ward 15, Binh Thanh District, Ho Chi Minh, Vietnam.",
              url: "/product"
            },
            {
              item: "+842871 078 079",
              url: "/blogs"
            },
            {
              item: "hi@thecoffeehouse.vn",
              url: "/td"
            }
          ]
        }
      ]
    }
  }
  
}
</script>

<style lang="css">
.slide {
  height:0px;
  overflow: hidden;
  transition: height .4s ease;
}

[id^="touch"] {
  position: absolute;
  opacity: 0;
  height: 18px;
} 
.icon-minus{
  display: none;
}
.icon-plus{
  display: inline-block;
}


[id^="touch"]:checked ~ .slide {
  height: 100px;
  /* max-height: 100%; */
}
[id^="touch"]:checked ~ .touchLabel .icon-minus {
  display: inline-block;
}
[id^="touch"]:checked ~ .touchLabel .icon-plus {
  display: none;
}
</style>