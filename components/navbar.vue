<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary ftco_navbar ftco-navbar-light"  id="ftco-navbar">
    <div class="container-fluid">
      <!-- <NuxtLink tag="a" @click.prevent="gotoPage('/')'"class="p-0"><img width="150" src="/images/logo.png" alt=""></NuxtLink> -->
      <a class="navbar-brand" href="/"><img width="150" src="/images/logo.png" alt=""></a>

      <a class="navbar-toggler" type="button" @click.prevent="isCollapse = !isCollapse">
        MENU
      </a>
      <div :class="`collapse navbar-collapse ${isCollapse? 'show' :''}`" id="navbarNavAltMarkup">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <NuxtLink @click.prevent="gotoPage('/')" :class="`nav-link ${$route.name === 'index'? 'active': ''}`" active-class="active">Home</NuxtLink>
            <!-- <a href="/" :class="`nav-link ${$route.name === 'index'? 'active': ''}`">Home</a> -->

          </li>
          <li class="nav-item">
            <NuxtLink @click.prevent="gotoPage('/about')" :class="`nav-link ${$route.name === 'about'? 'active': ''}`" active-class="active">About us</NuxtLink>
            <!-- <a href="/about" :class="`nav-link ${$route.name === 'about'? 'active': ''}`">About us</a> -->
          </li>
          <li class="nav-item">
            <NuxtLink @click.prevent="gotoPage('/distribution')" :class="`nav-link ${$route.name === 'distribution'? 'active': ''}`" active-class="active">Distribution</NuxtLink>
            <!-- <a href="/distribution" :class="`nav-link ${$route.name === 'ditribution'? 'active': ''}`">Distribution</a> -->
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Academy</a>
          </li>
          <li class="nav-item dropdown">
            <a :class="`nav-link dropdown-toggle ${$route.name === 'portfolio-type'? 'active': ''}`" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Portfolio brand
            </a>
            <div class="dropdown-menu">
              <div class="dropright">
                <a class="dropright dropdown-item dropdown-toggle" role="button" data-bs-toggle="dropright"
                  aria-expanded="false">
                  Wines
                </a>

                <div class="sub-dropdown-menu dropright dropdown-menu" id="wine">
                  <!-- <a href="/portfolio/newworld" class="dropdown-item">New World</a>
                  <a href="/portfolio/oldworld" class="dropdown-item">Old World</a> -->
                  <NuxtLink tag="a" class="dropdown-item"  @click.prevent="gotoPage('/portfolio/newworld')" >New World</NuxtLink>
                  <NuxtLink tag="a" class="dropdown-item"  @click.prevent="gotoPage('/portfolio/oldworld')" >Old World</NuxtLink>
                </div>

              </div>
              <!-- <a href="/portfolio/spirit" class="dropdown-item">Liquor & Spirit</a>
              <a href="/portfolio/sake" class="dropdown-item">Sake & Soju</a> -->

              <NuxtLink tag="a" class="dropdown-item"  @click.prevent="gotoPage('/portfolio/spirit')" >Liquor & Spirit</NuxtLink>
              <NuxtLink tag="a" class="dropdown-item"  @click.prevent="gotoPage('/portfolio/sake')" >Sake & Soju</NuxtLink>
            </div>
          </li>
          
          <li class="nav-item">
            <NuxtLink tag="a" @click.prevent="gotoPage('/news')" :class="`nav-link ${$route.name === 'news'? 'active': ''}`" active-class="active">News</NuxtLink>
            <!-- <a href="/news" :class="`nav-link ${$route.name === 'news' || $route.name === 'news-id'? 'active': ''}`">News</a> -->
          </li>
          <li class="nav-item">
            <NuxtLink tag="a" @click.prevent="gotoPage('/contact')" :class="`nav-link ${$route.name === 'contact'? 'active': ''}`" active-class="active">Contact us</NuxtLink>
            <!-- <a href="/contact" :class="`nav-link ${$route.name === 'contact'? 'active': ''}`">Contact us</a> -->
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
export default {
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    gotoPage(route: any) {
      this.$router.push(route)
      this.isCollapse = false
    }
  }
}
</script>