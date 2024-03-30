<template>
  <div>

    <section class="ftco-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 ftco-animate">
            <h2 class="heading mb-3 strong">
              {{ news.name }}
            </h2>
            <p><span class="fa fa-calendar"></span> {{ formatDate(news.createdAt) }}</p>

            <p>
              <img class="w-100" :src="news.imageUrl" alt="">
            </p>
            <p v-html="news.description"></p>

          </div>

          <div class="col-lg-4 sidebar pl-lg-5 ftco-animate">

            <div class="sidebar-box ftco-animate">
              <h3 class="">Recent <span class="text-primary">News</span></h3>
              <hr />
              <div v-for="item in recentNews" class="block-21 mb-4 d-flex">
                <a class="blog-img mr-4" :style="{ 'background-image': `url(${item.imageUrl})` }"></a>
                <div class="text">
                  <h3 class="heading m-0">
                    <a @click="$router.push(`/news/${item.idNews}`)">
                      {{ item.name.slice(0, 40) }}{{ item.name.length >= 40 ? '...' : '' }}
                    </a>
                  </h3>
                  <div class="meta">
                    <div><span class="fa fa-calendar"></span> {{formatDate(item.createdAt)}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section> <!-- .section -->

  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  async setup() {
    const route = useRoute()
    const news = await $fetch(`https://pujon.vercel.app/api/news/${route.params.id}`)
    const allNews = await $fetch(`https://pujon.vercel.app/api/news`)
    const recentNews = allNews.length >= 4 ? allNews.slice(0, 4) : allNews
    return {
      news,
      recentNews
    }
  },
  created() {
    if (this.news) {
      useSeoMeta({
        title: `${this.news.name} | Jaddi Internasional`
      })
    }
  },
  methods: {
    formatDate(time: any) {
      const date = new Date(time);
      // Get year, month, and day part from the date
      const year = date.toLocaleString("default", { year: "numeric" });
      const month = date.toLocaleString("default", { month: "2-digit" });
      const day = date.toLocaleString("default", { day: "2-digit" });

      return `${year}/${month}/${day}`;
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