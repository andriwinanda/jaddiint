<template>
  <div>
    <section class="ftco-section bg-light">
      <div class="container">
        <div class="heading-section text-left ftco-animate">
          <h2>HEADLINE
            <span class="text-primary">NEWS</span>
          </h2>
        </div>
        <hr>
        <div class="ftco-section pb-0 pt-4" v-if="headline">
          <div class="container">
            <div class="row d-flex d-grid gap-4">
              <div class="col-lg-9 blog-entry bg-white d-flex row m-0 p-0">
                <div class="col-lg-4 col-sm-12 block-23 p-0 img"
                  :style="{ 'background-image': `url(${headline.imageUrl})` }">
                </div>
                <div class="col-lg-8 text p-4">
                  <div class="meta">
                    <p class="m-0"><span class="fa fa-calendar"></span> {{ formatDate(headline.createdAt) }}</p>
                  </div>
                  <h3 class="heading mb-3"><a @click="$router.push(`/news/${headline.idNews}`)">{{ headline.name.slice(0, 150) }} {{ headline.name.length >= 150
          ? '...' : '' }}</a></h3>
                  <a @click="$router.push(`/news/${headline.idNews}`)" class="btn-custom">Continue <span class="fa fa-long-arrow-right"></span></a>
                </div>
              </div>
              <div class="col bg-white p-4">
                <h5 class="font-12 strong">SUBSCRIBE TO THE NEWSLETTER</h5>
                <p>Join our Newsletter to find out everything that happens.</p>
                <div class="d-grid">
                  <button class="btn btn-primary" role="button" href="#exampleModalToggle"
                    data-bs-toggle="modal">SUBSCRIBE</button>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>

    <section class="ftco-section bg-light">
      <div class="container">
        <div class="heading-section text-left ftco-animate">
          <h5>RECENT
            <span class="text-primary">NEWS</span>
          </h5>
        </div>
        <hr>
        <div class="row d-flex">
          <div v-for="item in news" :key="item.idNews" class="col-lg-6 d-flex align-items-stretch ftco-animate">
            <div class="blog-entry bg-white d-flex row m-2">
              <div class="col-lg-4 col-sm-12 block-23 p-0 img" :style="{ 'background-image': `url(${item.imageUrl})` }">
              </div>
              <div class="col-lg-8 text p-4">
                <div class="meta">
                  <p class="m-0"><span class="fa fa-calendar"></span> {{ formatDate(item.createdAt) }}</p>
                </div>
                <h3 class="heading mb-3">
                  <a @click="$router.push(`/news/${item.idNews}`)">
                    {{ item.name.slice(0, 40) }} {{ item.name.length >= 40 ? '...' : '' }}
                  </a>
                </h3>
                <a @click="$router.push(`/news/${item.idNews}`)" class="btn-custom">Continue <span class="fa fa-long-arrow-right"></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->

    <div class="modal fade" ref="footnote" id="exampleModalToggle" aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- <div class="modal-header">
            <h5 class="modal-title" id="exampleModalToggleLabel">Hahaha</h5>
          </div> -->
          <div class="d-flex justify-content-end pt-4 pe-4">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

          </div>
          <div class="modal-body pt-0 px-4 pb-4">
            <h2 class="strong">Subscribe to Our Newsletter</h2>
            <p>JOIN OUR NEWSLETTER TO FIND OUT ABOUT EVERYTHING THAT HAPPENS</p>
            <div class="input-group pb-4">
              <input v-model="email" type="text" name="email" class="quantity form-control input-number"
                placeholder="yourmail@email.com">
            </div>

            <div class="d-flex justify-content-end">
              <button class="btn btn-primary" @click="subscribe()">SUBSCRIBE</button>

            </div>
          </div>
          <!-- <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
          </div> -->
        </div>
      </div>
    </div>

  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  async setup() {
    let headline = {}
    const news = await $fetch(`https://pujon.vercel.app/api/news`)
    if (news.length) headline = news[0]
    return {
      headline,
      news
    }
  },
  data() {
    return {
      isSending: false,
      email: ''
    }
  },

  created() {
    useSeoMeta({
      title: 'News | Jaddi Internasional',
      description: "Wine & Spirit Importir"
    })
  },

  methods: {
    formatDate(time: any) {
      const date = new Date(time);
      // Get year, month, and day part from the date
      const year = date.toLocaleString("default", { year: "numeric" });
      const month = date.toLocaleString("default", { month: "2-digit" });
      const day = date.toLocaleString("default", { day: "2-digit" });

      return `${year}/${month}/${day}`;
    },
    subscribe() {
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
        alert('Done!')
        console.log(res)
      }).catch(err => {
        this.isSending = false
        alert('Error!')
        console.log(err)
      })
    }
  }

})
</script>
<style scoped>
.news-body {
  width: 100%;
  white-space: nowrap;
  text-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}
</style>