<template>
  <div class="ftco-footer">
    <div class="container">
      <div class="row mb-5">
        <div class="col-sm-12 col-md">
          <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2 logo"><a href="#">PT. JADDI <span>INTERNASIONAL</span></a></h2>
            <p>Wine & Spirit Importir</p>
            <ul class="ftco-footer-social list-unstyled mt-2">
              <li class="ftco-animate"><a target="_blank" href="https://www.instagram.com/jaddi.internasional/"><span class="fa fa-instagram"></span></a></li>
            </ul>
          </div>
        </div>
        <div class="col-sm-12 col-md">
          <div class="ftco-footer-widget mb-4 ml-md-4">
            <h2 class="ftco-heading-2">Information</h2>
            <ul class="list-unstyled">
              <li><a @click="$router.push('/about')"><span class="fa fa-chevron-right mr-2"></span>About us</a></li>
              <li><a @click="$router.push('/distribution')"><span
                    class="fa fa-chevron-right mr-2"></span>Distribution</a></li>
              <li><a @click="$router.push('/contact')"><span class="fa fa-chevron-right mr-2"></span>Contact us</a></li>
            </ul>
          </div>
        </div>
        <div class="col-sm-12 col-md">
          <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2">Have a Questions?</h2>
            <div class="block-23 mb-3">
              <ul>
                <li><span class="icon fa fa-map marker"></span><span class="text">The Habibie Center, 2nd Floor Jl.
                    Kemang Selatan No. 98 Jakarta 12560 – Indonesia</span></li>
                <li><a href="#"><span class="icon fa fa-phone"></span><span class="text">(+62) 21 780 1060</span></a>
                </li>
                <!-- <li>
                  <a href="#"><span class="icon fa fa-envelope pr-4"></span><span
                      class="text">info@yourdomain.com</span></a>
                </li> -->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid px-0 py-5 bg-secondary">
      <div class="container">
        <div class="row">
          <div class="col-md-12">

            <p class="mb-0 text-white">
              Copyright &copy; 2024 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>