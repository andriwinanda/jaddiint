<template>
  <div>
    <div id="ftco-loader" :class="`${isLoading ? 'show' : ''}`"><svg class="circular" width="48px" height="48px">
        <circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
        <circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10"
          stroke="#DB9975" />
      </svg>
    </div>

    <section class="ftco-section bg-light">
      <div class="container">
        <div class="heading-section text-left ftco-animate">
          <span class="subheading">Our Portfolio</span>
          <h2>{{ category ? category.description : '-' }}</h2>

        </div>
        <hr>

        <div class="row">
          <div class="col-md-12">
            <div class="row mb-4">
              <div class="product-navigation pb-4">

                <!-- COUNTRY -->
                <div class="country mb-4" v-if="country.options.length">
                  <swiper class="swiper" :modules="modules" navigation :slides-per-view="1" :breakpoints="breakPoint">
                    <swiper-slide class="slide" v-for="(slide, idx) in country.options" :key="idx">
                      <p @click.prevent="countrySelected(slide)"
                        :class="`text-center nav-link text-uppercase ${country.value.idCountry === slide.idCountry ? 'text-primary' : ''} pointer m-0`">
                        {{ slide.name }}
                      </p>
                    </swiper-slide>
                  </swiper>

                </div>


                <!-- BRAND -->
                <div class="brand" v-if="brand.options.length">

                  <swiper class="swiper" :modules="modules" navigation :slides-per-view="1" :breakpoints="breakPoint">
                    <swiper-slide class="slide" v-for="(slide, idx) in brand.options" :key="idx">
                      <p @click.prevent="brandSelected(slide)"
                        :class="`text-center ${brand.value.idBrand === slide.idBrand ? 'text-primary' : ''} pointer m-0`">
                        {{ slide.name }}
                      </p>
                    </swiper-slide>
                  </swiper>

                </div>
              </div>
            </div>

            <swiper class="swiper" :modules="modules" navigation :slides-per-view="1" :breakpoints="breakPoint">
              <swiper-slide class="slide" v-for="(slide, idx) in products" :key="idx">
                <div class="product ftco-animate bg-white pointer">
                  <div class="img d-flex align-items-center justify-content-center" role="button"
                    href="#exampleModalToggle" data-bs-toggle="modal"
                    :style="{ 'background-image': `url(${slide.imageUrl})` }" @click.prevent="showFootNote(slide)">
                  </div>
                  <div class="text text-center">
                    <span class="category">{{ slide.brandId.name }}</span>
                    <h5>{{ slide.name }}</h5>
                  </div>
                </div>

              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </section>

    <div class="modal fade" ref="footnote" id="exampleModalToggle" aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalToggleLabel">{{ selected ? selected.name : '' }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            {{ selected ? selected.description : '' }}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
          </div>
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
    const footnote = ref(null)
    const route = useRoute()
    let category = ''
    const type = await $fetch(`https://pujon.vercel.app/api/category?name=${route.params.type}`)
    if (type.length) category = type[0]
    return {
      footnote,
      category,
      route,
      modules: [Navigation, Autoplay]
    }
  },
  created() {
    if (this.category) {
      useSeoMeta({
        title: `${this.category.description} | Jaddi Internasional`,
        description: "Encapsulates the essence of cherishing life's finest occasions with the perfect beverage."
      })
    }
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
      country: {
        value: '',
        options: [],

      },
      brand: {
        value: '',
        options: [],
      },
      products: []
    }
  },
  methods: {
    showFootNote(item: any) {
      this.selected = item
    },
    countrySelected(item) {
      if (this.country.value.idCountry !== item.idCountry) this.products = []
      this.brand.value = ""
      this.country.value = item
      this.getBrand()
    },
    brandSelected(item) {
      if (this.brand.value.idBrand !== item.idBrand) this.products = []
      this.brand.value = item
      this.getProduct()
    },
    async getCountry() {
      this.isLoading = true
      this.country.options = await $fetch(`https://pujon.vercel.app/api/country?categoryId=${this.category.idCategory}`)
      this.isLoading = false

    },
    async getBrand() {
      this.isLoading = true
      this.brand.options = await $fetch(`https://pujon.vercel.app/api/brand?${this.category.name !== 'newworld' && this.category.name !== 'oldworld' ? ('categoryId=' + this.category.idCategory) : ('countryId=' + this.country.value.idCountry)}`)
      this.isLoading = false
    },
    async getProduct() {
      this.isLoading = true
      this.products = await $fetch(`https://pujon.vercel.app/api/product?brandId=${this.brand.value.idBrand}`)
      this.isLoading = false
    },

  },
  async mounted() {
    if (this.category.name === 'newworld' || this.category.name === 'oldworld') this.getCountry()
    else this.getBrand()
  }


})
</script>