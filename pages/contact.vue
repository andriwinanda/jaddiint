<template>
  <div>
    <section class="hero-wrap hero-wrap-2" style="background-image: url('https://res.cloudinary.com/dedwkqlng/image/upload/v1711322208/assets/hero_bg.jpg');"
      data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-center">
          <div class="col-md-9 ftco-animate mb-5 text-center">
            <p class="breadcrumbs mb-0"><span class="mr-2">
                <a href="/">Home <i class="fa fa-chevron-right"></i></a>
              </span> <span>Contact Us <i class="fa fa-chevron-right"></i></span>
            </p>
            <h2 class="mb-0 bread">Contact Us</h2>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="wrapper px-md-4">

              <div class="block-23 mb-3">
                <ul>
                  <li>
                    <span class="icon text-dark fa fa-map marker"></span>
                    <span class="text-dark">The Habibie Center, 2nd Floor Jl. Kemang Selatan No. 98 Jakarta 12560 –
                      Indonesia</span>
                  </li>
                  <li>
                    <a href="#" class="mb-0">
                      <span class="icon text-dark fa fa-phone"></span>
                      <span class="text-dark">(+62) 21 780 1060</span>
                    </a>
                  </li>
                  <!-- <li>
                    <a href="#">
                      <span class="icon text-dark fa fa-envelope pr-4"></span>
                      <span class="text-dark">info@yourdomain.com</span>
                    </a>
                  </li> -->
                </ul>
              </div>




              <div class="row no-gutters">
                <div class="col-md-7">
                  <div class="contact-wrap w-100 p-md-5 p-4">
                    <h3 class="mb-4">Contact Us</h3>
                    <!-- <form method="POST" id="contactForm" name="contactForm" class="contactForm"> -->
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="label" for="name">Full Name</label>
                          <input v-model="name" type="text" class="form-control" name="name" id="name"
                            placeholder="Name">
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="label" for="email">Email Address</label>
                          <input v-model="email" type="email" class="form-control" name="email" id="email"
                            placeholder="Email">
                        </div>
                      </div>
                      <!-- <div class="col-md-12">
                        <div class="form-group">
                          <label class="label" for="subject">Subject</label>
                          <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject">
                        </div>
                      </div> -->
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="label" for="#">Message</label>
                          <textarea v-model="message" name="message" class="form-control" id="message" cols="30"
                            rows="4" placeholder="Message"></textarea>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="d-flex">
                          <button class="btn btn-primary" @click="submit()">Send Message</button>
                        </div>
                      </div>
                    </div>
                    <!-- </form> -->
                  </div>
                </div>
                <div class="col-md-5 order-md-first d-flex align-items-stretch">
                  <!-- <div id="map" class="map"></div> -->
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15863.701605479066!2d106.8160832!3d-6.2735396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1898bc01211%3A0x6cd923f9276694b5!2sPT.%20Jaddi%20Internasional!5e0!3m2!1sen!2sid!4v1710091276926!5m2!1sen!2sid"
                    width="600" height="600" style="border:0;" allowfullscreen="false" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Contact Us | Jaddi Internasional'
})
let isLoading = ref(false)
let status = ref('')
let name = ref('')
let email = ref('')
let message = ref('')

const submit = async () => {
  isLoading = true
  const data = new FormData()
  data.append('name', name.value)
  data.append('email', email.value)
  data.append('message', message.value)
  const url = "/contactform-process.php"
  $fetch(url, {
    method: 'post',
    body: data,
  }).then(res => {
    isLoading = false
    status = 'sumbitted'
    name = ''
    email = ''
    message = ''
    alert('Done!')
    console.log(res)
  }).catch(err => {
    isLoading = false
    status = 'error'
    alert('Error!')

    console.log(err)
  })
}


</script>
