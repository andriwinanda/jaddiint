<template>
  <div>
    <div id="ftco-loader" :class="`${isLoading ? 'show' : ''} fullscreen`">
      <img width="150" src="/images/logo.png" alt="">
    </div>

    <div class="hero-wrap"
      style="background-image: url('https://res.cloudinary.com/dedwkqlng/image/upload/v1711322208/assets/hero_bg.jpg');"
      data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center">
          <div class="col-md-8 ftco-animate d-flex align-items-end">
            <div class="text w-100">
              <h1 class="mb-4">Good <span>Drink</span> for Good <span>Moments</span>.</h1>
              <p>Encapsulates the essence of cherishing life's finest occasions with the perfect beverage. Whether it's
                a
                crisp glass of champagne to toast to achievements, or a refreshing cocktail enjoyed under the warm glow
                of
                the night, every sip holds the potential to elevate ordinary moments into extraordinary memories.</p>

            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="ftco-no-pb">
      <div class="container">
        <div class="row">
          <div class="col-md-6 wrap-about pl-md-5 ftco-animate py-5">
            <div class="heading-section">
              <span class="subheading">Since 2004</span>
              <h2 class="mb-4">Desire Meets A New Taste</h2>

              <p>Since 2004 the company was one of the few appointed distributors by PT. Sarinah (A State Company which
                monopolized alcohol beverage import) with right to distribute to hotels, restaurants and cafes
                throughout Indonesia.</p>
              <p>
                In 2010 we obtained the license from the government as one of the private companies to import
                wines and spirits to the country. We also expanded our portfolio by adding Japanese Sake, Korean Soju as
                well as fine Scotch whisky.</p>

            </div>

          </div>
          <div class="col-md-6 img img-3 d-flex justify-content-center align-items-center floating"
            style="background-image: url('https://res.cloudinary.com/dedwkqlng/image/upload/v1711322208/assets/home.jpg');">
          </div>
        </div>
      </div>
    </section>


    <!-- DISTRIBUTION -->

    <section class="ftco-section bg-light">
      <div class="container">
        <div class="row justify-content-center mb-3">
          <div class="col-md-7 heading-section text-center ftco-animate">
            <span class="subheading">Our Network</span>
            <h2>Distribution</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <img src="https://res.cloudinary.com/dedwkqlng/image/upload/v1711322208/assets/maps.png" alt=""
              class="img-fluid">
          </div>
          <!-- <div class="col-md-6 img img-3 d-flex justify-content-center align-items-center"
          style="background-image: url(images/maps.png);">
        </div> -->
          <div class="col-md-8 wrap-about pl-md-5 ftco-animate py-5">
            <div class="heading-section">
              <p>Currently PT JADDI INTERNASIONAL works with our subsidiaries to distribute its products throughout
                Indonesia, the companies are as follows:</p>
              <div class="pr">
                <h5 class="mb-1 strong text-primary">1. Jakarta’s greater area, Sulawesi, Kalimantan and Papua.</h5>
              </div>
              <div class="pr">
                <h5 class="mb-1 strong text-primary">2. Bandung (West Java)</h5>

              </div>
              <div class="pr">
                <h5 class="mb-1 strong text-primary">3. Surabaya (East Java)</h5>
              </div>
              <div class="pr">
                <h5 class="mb-1 strong text-primary">4. Bali & Lombok</h5>
              </div>
              <div class="pr">
                <h5 class="mb-1 strong text-primary">5. Pekanbaru (Sumatera) & Palembang</h5>
              </div>
              <div class="pr">
                <h5 class="mb-1 strong text-primary">6. Semarang (Central Java and Yogyakarta)</h5>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>

    <section class="ftco-section" v-if="products.length">
      <div class="container">
        <div class="row justify-content-center pb-5">
          <div class="col-md-7 heading-section text-center ftco-animate">
            <span class="subheading">Our Portfolio</span>
            <h2>Collection of Wine</h2>
          </div>
        </div>


        <swiper class="swiper" :modules="modules" navigation autoplay :slides-per-view="1" :breakpoints="breakPoint">
          <swiper-slide class="slide" v-for="(slide, idx) in products" :key="idx">
            <div class="product ftco-animate bg-white pointer">
              <div class="img d-flex align-items-center justify-content-center"
                :style="{ 'background-image': `url(${slide.imageUrl})` }" @click.prevent="showFootNote(slide)">
              </div>
              <div class="text text-center">
                <span class="category">{{ slide.brandId.name }}</span>
                <h5>{{ slide.name }}</h5>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <div class="row justify-content-center">
          <div class="col-md-3">
            <a @click="$router.push('portfolio/newworld')" class="btn btn-primary d-block">More Collection <span
                class="fa fa-long-arrow-right"></span></a>
          </div>
        </div>
      </div>
    </section>


    <section class="ftco-section bg-light" v-if="news.length">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 heading-section text-center ftco-animate">
            <span class="subheading">News</span>
            <h2>Recent News</h2>
          </div>
        </div>
        <div class="row d-flex">
          <div v-for="item in news" class="col-lg-4 d-flex align-items-stretch ftco-animate">
            <div class="blog-entry bg-white">
              <div class="img">
                <img :src="item.imageUrl" alt="">
              </div>
              <div class="text p-4">
                <div class="meta">
                  <p><span class="fa fa-calendar"></span> {{ formatDate(item.createdAt) }}</p>
                </div>
                <h3 class="heading mb-3">
                  <a @click="$router.push(`/news/${item.idNews}`)">
                    {{ item.name.slice(0, 40) }} {{ item.name.length >= 40 ? '...' : '' }}
                  </a>
                </h3>
                <a @click="$router.push(`news/${item.idNews}`)" class="btn-custom">Continue <span
                    class="fa fa-long-arrow-right"></span></a>
              </div>
            </div>
          </div>
          <!-- <div class="col-lg-4 d-flex align-items-stretch ftco-animate">
          <div class="blog-entry bg-white">
            <img class="block-20" src="./images/image_1.jpg" alt="">
            <div class="text p-4">
              <div class="meta">
                <p><span class="fa fa-calendar"></span> 23 April 2020</p>
              </div>
              <h3 class="heading mb-3"><a href="#">The Recipe from a Winemaker’s Restaurent</a></h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <a href="#" class="btn-custom">Continue <span class="fa fa-long-arrow-right"></span></a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 d-flex align-items-stretch ftco-animate">
          <div class="blog-entry bg-white">
            <img class="block-20" src="./images/image_2.jpg" alt="">
            <div class="text p-4">
              <div class="meta">
                <p><span class="fa fa-calendar"></span> 23 April 2020</p>
              </div>
              <h3 class="heading mb-3"><a href="#">The Recipe from a Winemaker’s Restaurent</a></h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <a href="#" class="btn-custom">Continue <span class="fa fa-long-arrow-right"></span></a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 d-flex align-items-stretch ftco-animate">
          <div class="blog-entry bg-white">
            <img class="block-20" src="./images/image_3.jpg" alt="">
            <div class="text p-4">
              <div class="meta">
                <p><span class="fa fa-calendar"></span> 23 April 2020</p>
              </div>
              <h3 class="heading mb-3"><a href="#">The Recipe from a Winemaker’s Restaurent</a></h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <a href="#" class="btn-custom">Continue <span class="fa fa-long-arrow-right"></span></a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 d-flex align-items-stretch ftco-animate">
          <div class="blog-entry bg-white">
            <img class="block-20" src="./images/image_4.jpg" alt="">
            <div class="text p-4">
              <div class="meta">
                <p><span class="fa fa-calendar"></span> 23 April 2020</p>
              </div>
              <h3 class="heading mb-3"><a href="#">The Recipe from a Winemaker’s Restaurent</a></h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <a href="#" class="btn-custom">Continue <span class="fa fa-long-arrow-right"></span></a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 d-flex align-items-stretch ftco-animate">
          <div class="blog-entry bg-white">
            <img class="block-20" src="./images/image_5.jpg" alt="">
            <div class="text p-4">
              <div class="meta">
                <p><span class="fa fa-calendar"></span> 23 April 2020</p>
              </div>
              <h3 class="heading mb-3"><a href="#">The Recipe from a Winemaker’s Restaurent</a></h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <a href="#" class="btn-custom">Continue <span class="fa fa-long-arrow-right"></span></a>
            </div>
          </div>
        </div> -->
        </div>
      </div>
    </section>


    <div class="container-fluid px-0 py-5 bg-primary">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">

            <h1 class="mb-0 text-white subheading">
              NEWSLETTER
            </h1>
            <p class="m-0 text-white">Subscribe to get promotion</p>
          </div>
          <div class="col-md-6">

            <div class="input-group">
              <input v-model="email" :disabled="isSending" type="text" name="email"
                class="quantity form-control input-number" placeholder="yourmail@email.com">
              <button class="btn btn-secondary" type="button" @click="subscribe()">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- TOAST -->
    <div class="position-fixed top-0 end-0 p-3" style="z-index: 99999">
      <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
        <div :class="`toast-header text-white ${toast.type === 'error' ? 'bg-danger' : 'bg-success'}`">
          <strong class="me-auto text-capitalize ">{{ toast.type }}</strong>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body text-black">
          {{ toast.msg }}
        </div>
      </div>
    </div>

  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
export default defineComponent({
  components: { Swiper, SwiperSlide },
  async setup() {
    const route = useRoute()
    return {
      route,
      modules: [Navigation, Autoplay]
    }
  },
  async created() {
    useSeoMeta({
      title: `Jaddi Internasional`,
      description: "Encapsulates the essence of cherishing life's finest occasions with the perfect beverage."
    })
    await this.getProduct()
    await this.getGetNews()

  },

  data() {
    return {
      selected: null,
      isLoading: false,
      breakPoint: {
        900: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      },
      products: [],
      news: [],
      email: '',
      isSending: false,
      toast: {
        type: '',
        msg: ''
      }
    }
  },
  methods: {
    showFootNote(item: any) {
      this.selected = item
    },
    async getProduct() {
      this.isLoading = true
      const products = await $fetch(`https://pujon.vercel.app/api/product?categoryId=660394557511e8844e43236c`)
      this.products = products.slice(0, 8)
      this.isLoading = false
    },
    async getGetNews() {
      this.isLoading = true
      const news = await $fetch(`https://pujon.vercel.app/api/news`)
      this.news = news.slice(0, 3)
      this.isLoading = false
    },
    async subscribe() {
      this.isSending = true
      const data = new FormData()
      data.append('email', this.email)
      const url = "https://pujon.vercel.app/api/subscriber"
      $fetch(url, {
        method: 'post',
        body: data,
      }).then(res => {
        this.isSending = false
        this.sendEmail()
      }).catch(err => {
        this.isSending = false
        this.toast.type = 'error'
        this.toast.msg = err.data.message
        window.$('#liveToast').toast('show')
      })
    },

    async sendEmail() {
      this.isSending = true
      const data = new FormData()
      data.append('email', this.email)
      const url = "/subscribe-process.php"
      $fetch(url, {
        method: 'post',
        body: data,
      }).then(res => {
        this.isSending = false
        this.email = ''
        this.toast.type = 'success'
        this.toast.msg = 'Request sent!'
        window.$('#liveToast').toast('show')
      }).catch(err => {
        this.isSending = false
      })
    },
    formatDate(time: any) {
      const date = new Date(time);
      // Get year, month, and day part from the date
      const year = date.toLocaleString("default", { year: "numeric" });
      const month = date.toLocaleString("default", { month: "2-digit" });
      const day = date.toLocaleString("default", { day: "2-digit" });

      return `${year}/${month}/${day}`;
    },

  },


})
</script>