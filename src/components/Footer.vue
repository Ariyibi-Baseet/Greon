<script>
export default {
  name: "FooterSection",
  data() {
    return {};
  },
};
</script>

<template>
  <footer class="pt-4 pb-2 mb-3">
    <div class="container">
      <div class="row">
        <div class="col-md-3 mb-3">
          <h2 class="fs-4 fw-bold">
            <a href="#" class="navbar-brand">GREON</a>
          </h2>
          <p class="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet mollitia
            praesentium nulla omnis iusto aspernatur sit
          </p>
        </div>
        <div class="col-md-3 mb-3 p-0">
          <h2 class="fs-5 ms-2 fw-bold footer-head">Quick Links</h2>
          <ul class="list-group ms-2 mt-3">
            <li class="ms-4 text-white">
              <font-awesome-icon icon="fa-solid fa-angle-right" />&nbsp;
              <!-- <a href="/" class="text-decoration-none text-white">Home</a> -->
              <router-link class="text-decoration-none text-white" to="/"
                >Home</router-link
              >
            </li>
            <li class="ms-4 mt-2 text-white">
              <font-awesome-icon icon="fa-solid fa-angle-right" />&nbsp;
              <router-link class="text-decoration-none text-white" to="/about"
                >About</router-link
              >
              <!-- <a href="/about" class="text-decoration-none text-white">About</a> -->
            </li>
            <li class="ms-4 mt-2 text-white">
              <font-awesome-icon icon="fa-solid fa-angle-right" />&nbsp;
              <router-link class="text-decoration-none text-white" to="/service"
                >Service</router-link
              >
              <!-- <a href="/service" class="text-decoration-none text-white">Service</a> -->
            </li>
            <li class="ms-4 mt-2 text-white">
              <font-awesome-icon icon="fa-solid fa-angle-right" />&nbsp;
              <router-link class="text-decoration-none text-white" to="/breeds"
                >Breeds</router-link
              >
              <!-- <a href="/breeds" class="text-decoration-none text-white">Breeds</a> -->
            </li>
            <li class="ms-4 mt-2 text-white">
              <font-awesome-icon icon="fa-solid fa-angle-right" />&nbsp;
              <router-link class="text-decoration-none text-white" to="/reminder"
                >Reminder</router-link
              >
              <!-- <a href="/calculator" class="text-decoration-none text-white">Calculator</a> -->
            </li>
            <li class="ms-4 mt-2 text-white">
              <font-awesome-icon icon="fa-solid fa-angle-right" />&nbsp;
              <router-link class="text-decoration-none text-white" to="/contact"
                >Contact</router-link
              >
              <!-- <a href="/contact" class="text-decoration-none text-white">Contact</a> -->
            </li>
            <li class="ms-4 mt-2 text-white">
              <font-awesome-icon icon="fa-solid fa-angle-right" />&nbsp;
              <router-link class="text-decoration-none text-white" to="/register"
                >Register</router-link
              >
              <!-- <a href="/register" class="text-decoration-none text-white">Register</a> -->
            </li>
          </ul>
        </div>
        <div class="col-md-6 mb-3 p-0">
          <h2 class="fs-5 ms-2 fw-bold footer-head">Rabbit Top Articles</h2>
          <ul class="list-group ms-2 mt-3">
            <li class="ms-4 text-white">
              <font-awesome-icon icon="fa-solid fa-angle-right" />&nbsp;
              <a href="#" class="text-decoration-none text-white"
                >7 Ways Rabbits are Eco-friendly Pets</a
              >
            </li>
            <li class="ms-4 mt-2 text-white">
              <font-awesome-icon icon="fa-solid fa-angle-right" />&nbsp;
              <a href="#" class="text-decoration-none text-white"
                >Why do Rabbit Eat their bunnies?</a
              >
            </li>
            <li class="ms-4 mt-2 text-white">
              <font-awesome-icon icon="fa-solid fa-angle-right" />&nbsp;
              <a href="#" class="text-decoration-none text-white"
                >Rabbit gestation period</a
              >
            </li>
            <li class="ms-4 mt-2 text-white">
              <font-awesome-icon icon="fa-solid fa-angle-right" />&nbsp;
              <a href="#" class="text-decoration-none text-white"
                >The reason why Rabbit can be used as pet</a
              >
            </li>
            <li class="ms-4 mt-2 text-white">
              <font-awesome-icon icon="fa-solid fa-angle-right" />&nbsp;
              <a href="#" class="text-decoration-none text-white"
                >Can Rabbit sometimes go wild?</a
              >
            </li>
            <li class="ms-4 mt-2 text-white">
              <font-awesome-icon icon="fa-solid fa-angle-right" />&nbsp;
              <a href="#" class="text-decoration-none text-white"
                >Always visit your vet doctor</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-12 mt-5">
        <p class="text-center text-white">
          Created with ❤ By
          <a href="#" class="text-decoration-none text-white">Ariyibi Baseet</a> &copy;
          copyright reserved, 2022
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: var(--phthalo-green);
  border-radius: 20px;
  margin: 10px 10px 0;
  font-family: var(--ff-chivo);
}
.navbar-brand {
  font-variant: small-caps;
  color: #fff;
}
.footer-head {
  color: #fff;
}
</style>
