<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary ftco_navbar ftco-navbar-light"  id="ftco-navbar">
    <div class="container-fluid">
      <NuxtLink to="/" class="p-0"><img width="150" src="/images/logo.png" alt=""></NuxtLink>
      <!-- <a class="navbar-brand" href="/"><img width="150" src="/images/logo.png" alt=""></a> -->

      <a class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        MENU
      </a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link" active-class="active">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/about" class="nav-link" active-class="active">About us</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/distribution" class="nav-link">Distribution</NuxtLink>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Academy</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Portfolio brand
            </a>
            <div class="dropdown-menu">
              <div class="dropright">
                <a class="dropright dropdown-item dropdown-toggle" role="button" data-toggle="dropright"
                  aria-expanded="false">
                  Wines
                </a>

                <div class="sub-dropdown-menu dropright dropdown-menu" id="wine">
                  <NuxtLink class="dropdown-item" to="/portfolio/newworld" >New World</NuxtLink>
                  <NuxtLink class="dropdown-item" to="/portfolio/oldworld" >Old World</NuxtLink>
                </div>

              </div>
              <NuxtLink class="dropdown-item" to="/portfolio/spirit" >Liquor & Spirit</NuxtLink>
              <NuxtLink class="dropdown-item" to="/portfolio/sake" >Sake & Soju</NuxtLink>
            </div>
          </li>
          
          <li class="nav-item">
            <NuxtLink to="/news" class="nav-link">News</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/contact" class="nav-link">Contact us</NuxtLink>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</template>